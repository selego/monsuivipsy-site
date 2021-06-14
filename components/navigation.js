export default function Navigation() {
  return (
    <nav className="container flex items-center justify-between py-4">
      <div>
        <a className="flex-center" href="/">
          <img className="w-10 mr-3" src="/images/logo.png" alt="" />
          <span className="text-base font-bold lg:text-lg text-denim-800">
            Mon suivi psy
          </span>
        </a>
      </div>
      <div className="items-center justify-center hidden space-x-10 lg:flex">
        <a
          className="text-sm font-bold text-gray-600 transition-all hover:text-denim-800"
          href="/"
        >
          Accueil
        </a>
        <a
          className="text-sm font-bold text-gray-600 transition-all hover:text-denim-800"
          href="#how-it-works"
        >
          Comment ca marche
        </a>
        <a
          className="text-sm font-bold text-gray-600 transition-all hover:text-denim-800"
          href="mailto:monsuivipsy@fabrique.social.gouv.fr"
        >
          Nous contacter
        </a>
      </div>
    </nav>
  );
}
