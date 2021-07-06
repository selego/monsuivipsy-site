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
      <div className="items-center justify-center hidden space-x-6 lg:flex">
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
        <a
          href={patient ? "/pro" : "/"}
          className="px-4 py-2 text-sm font-bold text-white transition-all rounded-full bg-turqoise-500 hover:bg-turqoise-600"
        >
          {patient ? "Pour les professionels" : "Pour les usagers"}
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
