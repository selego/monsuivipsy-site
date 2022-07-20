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
          Conditions générales
        </h3>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <Title title="Présentation" />
            <Content>
              <p>
                Jardin Mental est un service de suivi de votre état de santé mentale, grâce à un questionnaire quotidien
                dans lequel vous pouvez évaluer les indicateurs pertinents de votre état de santé mentale.
                Ces indicateurs peuvent être des symptômes, ressentis, ou encore des comportements.
                Vous pouvez aussi renseigner vos prises de traitements quotidiennes. 
              </p>
              <br />
              <p>
                Le code du logiciel est libre, et peut donc être vérifié et
                amélioré par toutes et tous.
              </p>
            </Content>
          </div>

          <div>
            <Title title="Vocabulaire" />
            <Content>
              <ul className="list-disc list-inside">
                <li>« Nous » se réfère à l’éditeur de Jardin Mental.</li>
                <li>« Vous » se réfère à un·e usager de Jardin Mental.</li>
                <li>
                  « Partenaires » se réfère aux organismes responsables
                  d’attribuer les aides calculées par Jardin Mental.
                </li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Absence de garantie" />
            <Content>
              <p>
                Les résultats fournis par ce service ont une valeur informative
                et ne représentent en aucun cas un diagnostic médical. Nous ne
                garantissons pas l’exactitude du contenu des sites externes vers
                lesquels nous redirigeons la navigation. Ces sites ne sont pas
                non plus régis par les mêmes conditions d’utilisation, notamment
                en ce qui concerne leur traitement des données à caractère
                personnel. Nous mettons Jardin Mental à disposition sans
                garantie sur sa disponibilité, en « best effort ». Cela signifie
                que d’éventuelles indisponibilités n’ouvriront pas droit à
                compensation financière.
              </p>
            </Content>
          </div>

          <div>
            <Title title="Vos données" />
            <Content>
              <p>
                Jardin Mental ne vous demande ni ne stocke d’information
                nominative telle que nom, prénoms ou adresse. Pour autant,
                lorsque vous que vous demanderez à être contacté, vous nous
                transmettrez des coordonnées nécessaires à la prise de contact
                par nos services. Ces coordonnées sont des données personnelles
                et nous en avons donc déclaré le traitement auprès de la CNIL.
                Nous conservons ces données pendant deux ans à compter de la
                première saisie pour analyser les usages, mesurer l’impact et la
                diffusion territoriale de Jardin Mental, et améliorer le
                service. Vous avez un droit d’accès, de rectification et de
                suppression de vos données. Pour l’exercer, envoyez-nous un
                courriel à l’adresse à compléter en précisant les coordonnées
                transmises. Comme nous n’enregistrons pas d’éléments nominatifs,
                seuls ces éléments peuvent nous permettre de retrouver votre
                utilisation.
              </p>
              <br />
              <p>
                Nous nous engageons à ne jamais exploiter les informations que
                vous nous transmettrez dans un but commercial ou publicitaire.
                De manière générale, Jardin Mental n’accepte aucune forme de
                publicité autre que celle que constitue la présentation des
                aides des partenaires. Nous collectons également des données
                anonymes d’audience, indépendamment des suivis de consommation
                effectués. Cela nous permet par exemple de déterminer la durée
                d’un suivi et les pages à améliorer en priorité. Nous nous
                engageons à prendre toutes les mesures nécessaires pour garantir
                la sécurité et la confidentialité des informations que vous nous
                fournissez. Les situations enregistrées sont enregistrées dans
                un centre de données sécurisé. Seules nos équipes techniques et
                celles de nos partenaires peuvent y accéder.
              </p>
            </Content>
          </div>

          <div>
            <Title title="Évolutions" />
            <Content>
              <p>
                Nous pouvons faire évoluer Jardin Mental sans information
                préalable. Nous ajoutons régulièrement des aides, améliorons
                l’interface et modifions des formulations sur la base de vos
                retours et des évolutions règlementaires. Nous pouvons suspendre
                l’accès à Jardin Mental sans information préalable, notamment
                pour des raisons de maintenance. Nous mettons l’application à
                jour plusieurs fois par semaine. L’indisponibilité ne dépasse
                généralement pas une dizaine de secondes. Nous pouvons amender
                ces conditions d’utilisation. En cas de changement significatif,
                une notification s’affichera lors de l’accès à Jardin Mental au
                moins 30 jours avant l’entrée en vigueur des nouvelles
                conditions. Tout l’historique de ces conditions est librement
                accessible.
              </p>
            </Content>
          </div>

          <div>
            <Title title="Utilisation" />
            <Content>
              <p>
                Jardin Mental est en téléchargement libre sur les plateformes
                Apple App Store et Google Play. Son utilisation est gratuite et
                facultative. Si vous effectuez un suivi de votre état de santé mentale. Comme indiqué dans
                l’article L. 112-9 du code des relations entre le public et
                l’administration. L’utilisation de Jardin Mental requiert une
                connexion internet et un smartphone récent. Nous nous réservons
                le droit de bloquer, sans information préalable ni compensation
                financière, les usages mettant en péril l’utilisation du
                logiciel par d’autres usagers. Cela nous permet d’anticiper
                d’éventuelles attaques par déni de service.
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
