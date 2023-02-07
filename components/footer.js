export default function Footer() {
  return (
    <footer className="container flex flex-col justify-between py-10 lg:py-20 lg:items-center lg:flex-row">
      <div className="mb-8 lg:mb-0">
        <div className="container flex space-x-4 mb-2">
          <a className="inline-block mb-4 mr-5 lg:mb-10" href="">
            <img className="w-10 h-10" src="images/logo.png" alt="" />
          </a>
          <a
            className="inline-block mb-4 mr-5 lg:mb-10"
            href="https://solidarites-sante.gouv.fr/"
          >
            <img className="h-10" src="images/logo_fab.png" alt="" />
          </a>
          <a
            className="inline-block mb-4 mr-5 lg:mb-10"
            href="https://www.ars.sante.fr/"
          >
            <img className="h-10" src="images/logo_ars.jpeg" alt="" />
          </a>
          <a
            className="inline-block mb-4 mr-5 lg:mb-10"
            href="http://www.eps-etampes.fr/en/accueil/"
          >
            <img className="h-10" src="images/logo_barth.jpeg" alt="" />
          </a>
        </div>
        <p className="mb-1 text-xs text-black opacity-70">
          Créé par le dr Lya Pedron, financé par l'ARS et la DINUM,
          <br />
          porté par la Fabrique, incubateur des ministères sociaux.
        </p>
        <p className="mb-1 text-xs text-black opacity-70">
          Copyright © 2023 Jardin Mental.
        </p>
        <div className="flex space-x-3">
          <a
            className="text-xs font-semibold text-black opacity-70"
            href="/mentions-legales"
          >
            Mentions légales
          </a>
          <a
            className="text-xs font-semibold text-black opacity-70"
            href="/politique-confidentialite"
          >
            Politique de confidentialité
          </a>
          <a
            className="text-xs font-semibold text-black opacity-70"
            href="/stats"
          >
            Statistiques
          </a>
          <a className="text-xs font-semibold text-black opacity-70" href="#">
            Accessibilité : non conforme
          </a>
        </div>
      </div>

      <div>
        <p className="mb-2 text-base font-bold text-denim-800">
          La Fabrique Numérique des Ministères sociaux
        </p>
        <p className="mb-2 text-base text-black">
          Tour Mirabeau
          <br />
          39-43 Quai André Citroën
          <br />
          75015 PARIS
        </p>
        <a
          className="text-base font-bold break-all md:text-lg text-turqoise-500"
          href="mailto:jardinmental@fabrique.social.gouv.fr"
        >
          jardinmental@fabrique.social.gouv.fr
        </a>
      </div>
    </footer>
  );
}
