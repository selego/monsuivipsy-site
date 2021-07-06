import fetchJson from "lib/fetchJson";

export async function subscribe(email, listId) {
  try {
    await fetchJson("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, listIds: [listId] }),
    });

  } catch (error) {
    console.error("An unexpected error happened:", error);
  }
}