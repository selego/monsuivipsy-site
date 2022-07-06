import Footer from "components/footer";
import Navigation from "components/navigation";

export default () => {
  return (
    <div
      className="bg-right-top bg-no-repeat"
      style={{ backgroundImage: `url("images/other/hero-bg.svg")` }}
    >
      <Navigation />

      <div className="container py-14">
        <h3 className="mb-6 text-2xl font-bold text-center lg:text-4xl text-denim-800 lg:mb-10">
          Mentions légales
        </h3>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <Title title="Éditeur du site" />
            <Content>
              <p>
                L’application Ma Tête et Moi est éditée par la Direction Générale
                de la Santé au sein de la Fabrique numérique des Ministères
                sociaux située :
              </p>
              <br />
              <ul>
                <li>Tour Mirabeau</li>
                <li>39-43 Quai André Citroën</li>
                <li>75015 PARIS</li>
                <li>Tél. : 01 40 56 60 00</li>
              </ul>
              <br />
              <strong>Directeur de la publication</strong>
              <p>Monsieur Jérôme SALOMON, Directeur général de la Santé</p>
            </Content>
          </div>

          <div>
            <Title title="Hébergement du site" />
            <Content>
              <p>
                Cette application est hébergée par Microsoft Azure France
                (région France centre) :
              </p>
              <br />
              <ul>
                <li>Microsoft France</li>
                <li>37 Quai du Président Roosevelt</li>
                <li>92130 ISSY-LES-MOULINEAUX</li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Accessibilité" />
            <Content>
              <p>
                La conformité aux normes d’accessibilité numérique est un
                objectif ultérieur mais nous tâchons de rendre cette application
                accessible à toutes et à tous.
              </p>
            </Content>
          </div>

          <div>
            <Title title="Signaler un dysfonctionnement" />
            <Content>
              <p>
                Si vous rencontrez un défaut d’accessibilité vous empêchant
                d’accéder à un contenu ou une fonctionnalité du site, merci de
                nous en faire part. Si vous n’obtenez pas de réponse rapide de
                notre part, vous êtes en droit de faire parvenir vos doléances
                ou une demande de saisine au Défenseur des droits.
              </p>
            </Content>
          </div>

          <div>
            <Title title="En savoir plus" />
            <Content>
              <p>
                Pour en savoir plus sur la politique d’accessibilité numérique
                de l’État :
                http://references.modernisation.gouv.fr/accessibilite-numerique
              </p>
            </Content>
          </div>

          <div>
            <Title title="Sécurité" />
            <Content>
              <p>
                L’application est protégée par un certificat électronique,
                matérialisé pour la grande majorité des navigateurs par un
                cadenas. Cette protection participe à la confidentialité des
                échanges. En aucun cas les services associés à au site ne seront
                à l’origine d’envoi de courriels pour demander la saisie
                d’informations personnelles.
              </p>
            </Content>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const Title = ({ title }) => (
  <h5 className="mb-2 text-xl font-semibold md:text-2xl lg:text-3xl text-denim-700">
    {title}
  </h5>
);

const Content = ({ children }) => (
  <div className="text-sm text-black">{children}</div>
);
