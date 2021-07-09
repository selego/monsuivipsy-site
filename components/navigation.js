export default function Navigation({ patient = true }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div>
        <a className="flex-center" href="/">
          <img className="w-10 mr-3" src="/images/logo.png" alt="" />
          <span className="text-base font-bold text-white lg:text-lg">
            Mon suivi psy
          </span>
        </a>
      </div>
      <div className="items-center justify-center space-x-6 lg:flex">
        <div className="hidden lg:flex space-x-6">
        <Link name="Accueil" target="/" patient={patient} />
        <Link
          name="Comment ça marche"
          target="#how-it-works"
          patient={patient}
        />
        <Link
          name="Nous contacter"
          target="mailto:monsuivipsy@fabrique.social.gouv.fr"
          patient={patient}
        />
        </div>
        <a
          href={patient ? "/pro" : "/"}
          className="px-4 py-2 text-xs font-bold text-white transition-all rounded-full bg-turqoise-500 hover:bg-turqoise-600 lg:text-sm"
        >
          {patient ? "Pour les professionnels" : "Pour les patients"}
        </a>
      </div>

    </nav>
  );
}

const Link = ({ name, target, patient }) => (
  <a
    className={`text-sm font-bold transition-all ${
      patient
        ? "text-gray-600 hover:text-denim-800"
        : "text-white opacity-40 hover:opacity-100"
    }`}
    href={target}
  >
    {name}
  </a>
);
