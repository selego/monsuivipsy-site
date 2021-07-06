//https://my.sendinblue.com/lists/add-attributes

const { SENDINBLUEKEY } = require("../next.config.js")

const api = async (path, options = {}) => {
  if (!SENDINBLUEKEY) {
    console.log("NO SENDINBLUE KEY");
    console.log(options);
    return console.log("Mail was not sent.");
  }

  const res = await fetch(`https://api.sendinblue.com/v3${path}`, {
    ...options,
    headers: { "api-key": SENDINBLUEKEY, "Content-Type": "application/json", ...(options.headers || {}) },
  });
  // if (!res.ok) throw res;
  const contentType = res.headers.raw()["content-type"];
  if (contentType && contentType.length && contentType[0].includes("application/json")) return await res.json();
  return await res.text();
};

// https://developers.sendinblue.com/reference#sendtransacemail
export async function sendEmail(htmlContent, subject, sender, emailTo = [], attachment, params) {
  const body = { to: emailTo.map((email) => ({ email })), sender, htmlContent, subject };
  if (params) body.params = params;
  if (attachment) body.attachment = attachment;
  return await api("/smtp/email", { method: "POST", body: JSON.stringify(body) });
}

// https://developers.sendinblue.com/reference#sendtransacemail
async function sendTemplate(id, { params, emailTo, attachment } = {}) {
  const body = { to: emailTo.map((email) => ({ email })), templateId: id };

  if (params) body.params = params;
  if (attachment) body.attachment = attachment;
  return await api("/smtp/email", { method: "POST", body: JSON.stringify(body) });
}

/**
 * https://api.sendinblue.com/v3/contacts
 * @param email {string}
 * @param attributes {object}
 * @param emailBlacklisted {boolean}
 * @param smsBlacklisted {boolean}
 * @param listIds {integer[]}
 * @param updateEnabled {boolean}
 * @param smtpBlacklistSender {string[]}
 * @returns {Promise<void>}
 */
export async function createContact(email, attributes, listIds) {
  const body = { email, attributes, listIds };
  return await api("/contacts", { method: "POST", body: JSON.stringify(body) });
}

/**
 * https://developers.sendinblue.com/reference#deletecontact
 * @param id {string|number} Email (urlencoded) OR ID of the contact
 * @returns {Promise<void>}
 */
async function deleteContact(id) {
  const identifier = typeof id === "string" ? encodeURIComponent(id) : id;
  return await api(`/contacts/${identifier}`, { method: "DELETE" });
}

/**
 * https://developers.sendinblue.com/reference#updatecontact
 * @param id {string|number} Email (urlencoded) OR ID of the contact
 * @param attributes {object}
 * @returns {Promise<void>}
 */
async function updateContact(id, attributes, listIds) {
  const identifier = typeof id === "string" ? encodeURIComponent(id) : id;
  const body = { attributes };
  if (listIds) body.listIds = listIds
  const res = await api(`/contacts/${identifier}`, { method: "PUT", body: JSON.stringify(body) });
  if (!res) return true;
  return false;
}

async function sync(obj, listIds, transform) {
  // if (process.env.NODE_ENV !== "production") return;

  try {
    if (!obj.email) return console.log("EMAIL MISSING ", obj);

    let attributes = {};
    var fields = Object.keys(obj._doc);
    for (var i = 0; i < fields.length; i++) {
      const key = fields[i];
      if (obj[fields[i]] instanceof Date) {
        attributes[key.toUpperCase()] = obj[key].toISOString().slice(0, 10); // convert to date
      } else {
        attributes[key.toUpperCase()] = obj[key];
      }
    }

    attributes.TYPE = obj.collection.collectionName.toUpperCase(); // Add type

    delete attributes.EMAIL;
    delete attributes.PASSWORD;
    delete attributes.__V;
    delete attributes._ID;

    if (transform) attributes = transform(attributes);

    const ok = await updateContact(obj.email, attributes);
    if (!ok) await createContact(obj.email, attributes, listIds);
  } catch (e) {
    console.log("error", e);
  }
}

async function unsync(obj) {
  try {
    await deleteContact(obj.email);
  } catch (e) {
    console.log("Can't delete in sendinblue", obj.email);
  }
}