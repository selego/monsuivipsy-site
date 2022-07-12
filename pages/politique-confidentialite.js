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
          Politique de confidentialité
        </h3>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <Title title="Traitement des données à caractère personnel" />
            <Content>
              <p>
                Le présent site MonSuiviPsy est à l'initiative de la Direction
                Générale de la Santé au sein de la Fabrique numérique des
                ministères sociaux.
              </p>
            </Content>
          </div>

          <div>
            <Title title="Finalité" />
            <Content>
              <p>
                Le site « MonSuiviPsy » vise à présenter l'application «
                MonSuiviPsy » et son fonctionnement.
              </p>
            </Content>
          </div>

          <div>
            <Title title="Données à caractère personnel traitées" />
            <Content>
              <p>Sont traitées les données suivantes :</p>
              <br />
              <ul className="list-disc list-inside">
                <li>
                  Données de connexion (et notamment, les identifiants de
                  connexion, nature des opérations, date et heure de
                  l'opération)
                </li>
                <li>Cookies.</li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Base juridique du traitement de données" />
            <Content>
              <p>
                Les données traitées à l'occasion de ces traitements ont
                plusieurs fondements juridiques :
              </p>
              <br />
              <ul className="list-disc list-inside">
                <li>
                  L'obligation légale à laquelle est soumise le responsable de
                  traitements au sens de l'article 6-c du RGPD ;
                </li>
              </ul>
              <br />
              <strong>Ces fondements sont précisés ci-dessous :</strong>
              <br />
              <p>
                a. <strong>Données de connexion</strong>
              </p>
              <br />
              <p>
                Ce traitement est nécessaire au respect d'une obligation légale
                à laquelle le responsable de traitement est soumis au sens de
                l'article 6-c du Règlement (UE) 2016/679 du Parlement européen
                et du Conseil du 27 avril 2016 relatif à la protection des
                personnes physiques à l'égard du traitement des données à
                caractère personnel et à la libre circulation de ces données.
              </p>
              <br />
              <p>
                L'obligation légale est posée par la loi LCEN n° 2004-575 du 21
                juin 2004 pour la confiance dans l'économie numérique et par les
                articles 1 et 3 du décret n°2011-219 du 25 février 2011.
              </p>
              <br />
              <p>
                b. <strong>Cookies</strong>
              </p>
              <br />
              <p>
                En application de l'article 5(3) de la directive 2002/58/CE
                modifiée concernant le traitement des données à caractère
                personnel et la protection de la vie privée dans le secteur des
                communications électroniques, transposée à l'article 82 de la
                loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux
                fichiers et aux libertés, les traceurs ou cookies suivent deux
                régimes distincts.
              </p>
              <br />
              <p>
                Les cookies strictement nécessaires au service ou ayant pour
                finalité exclusive de faciliter la communication par voie
                électronique sont dispensés de consentement préalable au titre
                de l'article 82 de la loi n°78-17 du 6 janvier 1978.
              </p>
              <br />
              <p>
                Les cookies n'étant pas strictement nécessaires au service ou
                n'ayant pas pour finalité exclusive de faciliter la
                communication par voie électronique doivent être consenti par
                l'utilisateur.
              </p>
              <br />
              <p>
                Ce consentement de la personne concernée pour une ou plusieurs
                finalités spécifiques constitue une base légale au sens du RGPD
                et doit être entendu au sens de l'article 6-a du Règlement (UE)
                2016/679 du Parlement européen et du Conseil du 27 avril 2016
                relatif à la protection des personnes physiques à l'égard du
                traitement des données à caractère personnel et à la libre
                circulation de ces données.
              </p>
            </Content>
          </div>

          <div>
            <Title title="Durée de conservation" />
            <Content>
              <p>Les données à caractère personnel sont conservées :</p>
              <br />
              <ul className="list-disc list-inside">
                <li>
                  Données de connexion : 12 mois (article 3 du Décret n°
                  2011-219 du 25 février 2011).
                </li>
                <li>
                  Cookies : 13 mois maximum, ou jusqu'au retrait du consentement
                  de la personne.
                </li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Droit des personnes concernées" />
            <Content>
              <p>
                Vous disposez des droits suivants concernant vos données à
                caractère personnel :
              </p>
              <br />
              <ul className="list-disc list-inside">
                <li>Droit d'information et droit d'accès des données ;</li>
                <li>
                  Droit de rectification et le cas échéant de suppression des
                  données.
                </li>
              </ul>
              <br />
              <p>
                Pour les exercer, faites-nous parvenir une demande en précisant
                la date et l'heure précise de la requête - ces éléments sont
                indispensables pour nous permettre de retrouver votre recherche
                :
              </p>
              <br />
              <ul className="list-disc list-inside">
                <li>
                  par voie électronique à l'adresse suivante :{" "}
                  <a
                    className="text-denim-700"
                    href="mailto:monsuivipsy@fabrique.social.gouv.fr"
                  >
                    monsuivipsy@fabrique.social.gouv.fr
                  </a>
                </li>
                <li>
                  par voie postale : Fabrique numérique des ministères sociaux
                </li>
              </ul>
              <br />
              <ul className="list-inside">
                <li>Ministère des solidarités et de la santé</li>
                <li>39-43 Quai André Citroën</li>
                <li>75015 PARIS</li>
              </ul>
              <br />
              <p>
                En raison de l'obligation de sécurité et de confidentialité dans
                le traitement des données à caractère personnel qui incombe au
                responsable de traitement, votre demande ne sera traitée que si
                vous apportez la preuve de votre identité.
              </p>
              <br />
              <p>
                Pour vous aider dans votre démarche, vous trouverez ici{" "}
                <a
                  className="text-denim-700"
                  href="https://www.cnil.fr/fr/modele/courrier/exercer-son-droit-dacces"
                >
                  https://www.cnil.fr/fr/modele/courrier/exercer-son-droit-dacces
                </a>{" "}
                , un modèle de courrier élaboré par la Cnil.
              </p>
              <br />
              <p>
                Nous nous engageons à ne jamais céder ces informations à des
                tiers.
              </p>
              <br />
              <strong>Délais de réponse</strong>
              <br />
              <p>
                Le responsable de traitement s'engage à répondre dans un délai
                raisonnable qui ne saurait dépasser 1 mois à compter de la
                réception de votre demande.
              </p>
              <br />
              <strong>Destinataires des données</strong>
              <br />
              <p>
                Le responsable de traitement s'engage à ce que les données à
                caractères personnels soient traitées par les seules personnes
                autorisées.
              </p>
              <br />
              <strong>Sous-traitants</strong>
              <br />
              <p>
                Certaines des données sont envoyées à des sous-traitants pour
                réaliser certaines missions. Le responsable de traitement s'est
                assuré de la mise en œuvre par ses sous-traitants de garanties
                adéquates et du respect de conditions strictes de
                confidentialité, d'usage et de protection des données.
              </p>
              <br />
              <table className="mx-auto border border-collapse table-auto border-denim-900">
                <thead>
                  <tr>
                    <th className="p-3 border border-denim-900">Partenaire</th>
                    <th className="p-3 border border-denim-900">
                      Pays destinataire
                    </th>
                    <th className="p-3 border border-denim-900">
                      Traitement réalisé
                    </th>
                    <th className="p-3 border border-denim-900">Garanties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-denim-900">
                      Microsoft Azure
                    </td>
                    <td className="p-3 border border-denim-900">France</td>
                    <td className="p-3 border border-denim-900">
                      Hébergement du site
                    </td>
                    <td className="p-3 border border-denim-900">
                      <a
                        className="text-denim-700"
                        href="https://privacy.microsoft.com/fr-fr/privacystatement"
                      >
                        https://privacy.microsoft.com/fr-fr/privacystatement
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <strong>Sécurité et confidentialité des données</strong>
              <br />
              <p>
                Le responsable de traitements ne conserve pas de données à
                caractère personnel sur le réseau. Elles sont conservées sur la
                machine locale de l'utilisateur. Dès lors il en a la maîtrise,
                et est le seul à même d'en garantir la sécurité et
                confidentialité.
              </p>
            </Content>
          </div>

          <div>
            <Title title="Utilisation de témoins de connexion (« cookies »)" />
            <Content>
              <p>
                Un cookie est un fichier déposé sur votre terminal lors de la
                visite d'un site. Il a pour but de collecter des informations
                relatives à votre navigation et de vous adresser des services
                adaptés à votre terminal (ordinateur, mobile ou tablette).
              </p>
              <br />
              <p>
                Nous collectons donc des données par l'intermédiaire de
                dispositifs appelés "cookies" permettant d'établir des mesures
                statistiques.
              </p>
              <br />
              <p>
                Le site dépose des cookies de mesure d'audience (nombre de
                visites, pages consultées), respectant les conditions
                d'exemption du consentement de l'internaute définies par la
                recommandation « Cookies » de la Commission nationale
                informatique et libertés (CNIL). Cela signifie, notamment, que
                ces cookies ne servent qu'à la production de statistiques
                anonymes et ne permettent pas de suivre la navigation de
                l'internaute sur d'autres sites. Le site dépose également des
                cookies de navigation, aux fins strictement techniques, qui ne
                sont pas conservés. La consultation du site n'est pas affectée
                lorsque les utilisateurs utilisent des navigateurs désactivant
                les cookies.
              </p>
              <br />
              <p>
                <strong>Nous utilisons pour cela Matomo</strong>, un outil de
                mesure d'audience web libre, paramétré pour être en conformité
                avec la recommandation « Cookies » de la CNIL. Cela signifie que
                votre adresse IP, par exemple, est anonymisée avant d'être
                enregistrée. Il est donc impossible d'associer vos visites sur
                ce site à votre personne.
              </p>
              <br />
              <p>Il convient d'indiquer que :</p>
              <br />
              <ul className="list-disc list-inside">
                <li>
                  Les données collectées ne sont pas recoupées avec d'autres
                  traitements.
                </li>
                <li>
                  Les cookies ne permettent pas de suivre la navigation de
                  l'internaute sur d'autres sites.
                </li>
              </ul>
              <br />
              <p>
                Vous pouvez vous opposer au suivi de votre navigation sur ce
                site web. Cela protégera votre vie privée, mais empêchera
                également le propriétaire d'apprendre de vos actions et de créer
                une meilleure expérience pour vous et les autres utilisateurs.
              </p>
              <br />
              <label htmlFor="check">
                <input type="checkbox" id="check" checked />{" "}
                <span className="font-bold text-denim-700">
                  Vous n'êtes pas exclu(e). Décochez cette case pour être
                  exclu(e).
                </span>
              </label>
              <br />
              <br />
              <p>
                À tout moment, vous pouvez refuser l'utilisation des cookies et
                désactiver le dépôt sur votre ordinateur en utilisant la
                fonction dédiée de votre navigateur (fonction disponible
                notamment sur Microsoft Internet Explorer 11, Google Chrome,
                Mozilla Firefox, Apple Safari et Opera).
              </p>
              <br />
              <p>
                Pour aller plus loin, vous pouvez consulter les fiches proposées
                par la Commission Nationale de l'Informatique et des Libertés
                (CNIL) :
              </p>
              <br />
              <a
                className="text-denim-700"
                href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi"
              >
                Cookies & traceurs : que dit la loi ?
              </a>
              <br />
              <a
                className="text-denim-700"
                href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser"
              >
                Cookies : les outils pour les maîtriser
              </a>
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
