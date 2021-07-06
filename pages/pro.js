import { useState } from "react";
import Navigation from "components/navigation";

import Footer from "components/footer";

import { subscribe } from "../utils";


const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.monsuivipsy&hl=fr";
const IOS_URL = "https://apps.apple.com/us/app/mon-suivi-psy/id1540061393";

const Index = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [email, setEmail] = useState("");

  async function submit(e) {
    e.preventDefault();
    await subscribe(email, 58);
    setEmail("");
  }

  return (
    <div className="font-karla">
      <header
        className="overflow-hidden bg-right-top bg-no-repeat bg-denim-800"
        style={{ backgroundImage: `url("images/other/hero2-bg.svg")` }}
      >
        <Navigation patient={false} />

        <div className="container flex pt-20 pb-32">
          <div className="w-full lg:w-1/2">
            <h1 className="mb-2 text-3xl font-bold text-center text-white md:text-left lg:text-6xl">
              Mon Suivi Psy
            </h1>
            <p className="mb-6 text-2xl font-semibold text-center text-denim-200 md:text-left lg:text-2xl">
              Une application à proposer à vos patients pour voir l’évolution de
              leurs symptômes en un coup d’oeil
            </p>
            <br />
            <p className="mb-6 text-xl text-center text-denim-200 md:text-left lg:text-xl">
            Des idées pour améliorer l'outil ? Déposez votre email et rejoignez notre communauté
            </p>
            <div className="mb-10">
              <form className="flex items-center w-full max-w-md p-1 bg-white rounded-full" onSubmit={submit}>
                <input
                  className="flex-1 pl-4 pr-2 text-sm font-medium text-gray-800 placeholder-black placeholder-opacity-40 focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="Entrer votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="flex-none px-5 py-2 text-sm font-bold text-white transition-all rounded-full focus:outline-none bg-turqoise-500 hover:bg-turqoise-600">
                 Recevoir des informations
                </button>
              </form>
            </div>
            <div className="flex flex-col space-y-6">
              <Checklist
                title="Auto-observation simple et rapide pour le patient via l’application"
                subtitle="En quelques secondes par jour, le patient remplit le questionnaire personnalisé que vous avez élaboré ensemble pour suivre son quotidien. Un rappel paramétré améliore son assiduité."
              />
              <Checklist
                title="Visualisation instantanée de l’évolution des symptômes sur les 30 derniers jours, avec notes et prises de médicaments"
                subtitle="A chaque consultation, regardez et analysez ensemble les résultats sous forme de graphiques. Vous adaptez votre suivi au plus près des symptômes ressentis."
              />
              <Checklist
                title="Application gratuite et anonyme, sans création de compte "
                subtitle="Le patient reste propriétaire et maître des données saisies. Il peut vous montrer les résultats sur son smartphone ou vous les envoyer par mail s’il le souhaite."
              />
            </div>
          </div>
          <div className="items-center justify-center hidden w-1/2 lg:flex">
            <img src="images/other/hero2.png" alt="" />
          </div>
        </div>
      </header>

      <main>
        <div className=" bg-gray-50">
          <div className="container py-20">
            <div className="w-full mx-auto mb-6 md:w-8/12 lg:mb-10">
              <h3 className="mb-2 text-2xl font-bold text-center lg:text-4xl text-denim-800">
                Pour quels professionnels de santé ?
              </h3>
              <p className="text-base text-center text-black">
                Mon Suivi Psy a été pensé à destination des psychiatres et des
                psychologues pour faciliter le dialogue avec leurs patients.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:gap-10 lg:grid-cols-2">
              <QuestionCard
                title="Pour les psychiatres"
                content="Il permet de suivre l’évolution des symptômes, ainsi qu’observer les effets bénéfiques ou indésirables des traitements médicamenteux. Cela contribue à trouver plus rapidement le traitement adapté au patient."
                icon="medicine.svg"
              />
              <QuestionCard
                title="Pour les psychologues"
                content="il donne une base d’informations fidèles à la réalité quotidienne vécue par le patient, même lorsqu’il s’agit de parler de ce qu’il s’est passé plusieurs semaines auparavant. L’outil intègre notamment les colonnes de Beck et est particulièrement utile dans le cadre des thérapies cognitivo-comportementales."
                icon="chat-plus.svg"
              />
            </div>
          </div>
        </div>

        <div
          className="container flex flex-col justify-between py-16 lg:items-center lg:py-24 lg:flex-row"
          id="how-it-works"
        >
          <div className="w-full mb-6 lg:mb-0 lg:w-5/12">
            <h3 className="mb-2 text-2xl font-bold leading-normal lg:text-4xl text-denim-800">
              Comment utiliser Mon Suivi Psy avec les personnes que je suis ?
            </h3>
            <p className="text-base text-black">
              Après avoir téléchargé préalablement l’application vous-même afin
              de la prendre en main, vous pouvez proposer à vos patients de la
              télécharger en expliquant en quoi cela peut améliorer votre
              accompagnement.
            </p>
          </div>
          <div className="w-full space-y-6 lg:w-6/12">
            <Numlist
              number="1"
              content="Expliquez en consultation à votre patient le but et le fonctionnement de Mon Suivi Psy"
            />
            <Numlist
              number="2"
              content="Le patient peut, s’il le souhaite, télécharger l’application sur son smartphone durant la consultation et vous pouvez choisir ensemble les symptômes à suivre, noter les éventuels traitements médicamenteux pris."
            />
            <Numlist
              number="3"
              content="Le patient choisit l’heure à laquelle il aura un rappel quotidien. Tous les jours, il note ses symptômes et ses remarques dans l’application."
            />
            <Numlist
              number="4"
              content="Lors des consultations suivantes, vous pouvez proposer à votre patient d’observer ensemble le journal et les courbes d’évolution des symptômes suivis soit directement sur son smartphone, soit sur le mail qu’il vous aura adressé s’il le souhaite."
            />
          </div>
        </div>

        <div className="bg-gray-50">
          <div className="container py-20 lg:pt-30 lg:pb-52">
            <h3 className="mb-6 text-2xl font-bold lg:mb-20 lg:text-4xl text-denim-800">
              Mon Suivi Psy, comment ca fonctionne ?
            </h3>

            <Tabs
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            />
          </div>
        </div>

        <div className="container py-20 lg:py-40">
          <div className="w-full mx-auto lg:w-8/12">
            <h3 className="mb-2 text-2xl font-bold text-center lg:text-4xl text-denim-800">
              Qui a créé Mon Suivi Psy ?
            </h3>
            <p className="text-xl text-center text-black">
              Mon Suivi Psy est une application créée par le Docteur Lya Perdon
              suite à un appel à innovateurs lancé par l’ARS - Ile de France. Le
              service est porté par la Fabrique Numérique, incubateur des
              ministères sociaux.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const Checklist = ({ title, subtitle }) => (
  <div className="flex">
    <div className="flex-none pt-1 mr-2">
      <img src="images/icon/check-turqoise-500.svg" alt="" />
    </div>
    <div>
      <h6 className="text-base font-bold text-white">{title}</h6>
      <p className="text-sm text-denim-200">{subtitle}</p>
    </div>
  </div>
);

const Numlist = ({ number, content }) => (
  <div className="justify-start p-4 rounded-lg flex-center bg-turqoise-0">
    <div className="relative flex items-center justify-center flex-none w-5 h-5 mr-3 border rounded-full border-turqoise-500">
      <span className="absolute text-xs font-bold text-turqoise-500">
        {number}
      </span>
    </div>
    <p className="text-base text-black">{content}</p>
  </div>
);

const QuestionCard = ({ title, content, icon }) => (
  <div className="flex p-4 bg-white lg:py-6 lg:pl-8 lg:pr-6 rounded-2xl">
    <div className="flex items-center justify-center flex-none w-10 h-10 mr-4 rounded-full md:w-16 md:h-16 md:mr-6 bg-turqoise-100">
      <img className="w-4 md:w-7" src={`images/icon/${icon}`} alt={title} />
    </div>
    <div>
      <h6 className="text-base font-bold md:mb-2 md:text-xl text-denim-800">
        {title}
      </h6>
      <p className="text-sm text-black md:text-base">{content}</p>
    </div>
  </div>
);

const Tabs = ({ questionNumber, setQuestionNumber }) => {
  const Tab = ({ number, question }) => {
    return (
      <div
        className={`flex items-center cursor-pointer px-4 py-3 rounded-md ${
          number === questionNumber ? "bg-turqoise-100" : "bg-white"
        }`}
        onClick={() => setQuestionNumber(number)}
      >
        <div
          className={`flex-none w-5 h-5 mr-2 rounded-full flex-center ${
            number === questionNumber ? "bg-turqoise-500" : "bg-gray-100"
          }`}
        >
          <span
            className={`text-xs ${
              number === questionNumber ? "text-white" : "text-denim-800"
            }`}
          >
            {number}
          </span>
        </div>
        <p
          className={`text-sm ${
            number === questionNumber ? "text-turqoise-800" : "text-denim-800"
          }`}
        >
          {question}
        </p>
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col col-span-1 mb-8 space-y-2 lg:mb-0">
          <Tab
            number={1}
            question="Je télécharge l’application Mon Suivi Psy"
          />
          <Tab number={2} question="Je choisis les symptômes à suivre" />
          <Tab
            number={3}
            question="Je sélectionne les traitements médicamenteux à suivre"
          />
          <Tab number={4} question="Je paramètre un rappel quotidien" />
          <Tab
            number={5}
            question="Je remplis mon questionnaire quotidien personnalisé"
          />
          <Tab number={6} question="J’accède au journal des symptômes suivis" />
          <Tab
            number={7}
            question="J’accède aux courbes d’évolution des symptômes suivis"
          />
          <Tab
            number={8}
            question="J’envoie le récapitulatif des informations recueillies par mail"
          />
        </div>

        {questionNumber === 1 && <QuestionOne imageName="one" />}
        {questionNumber === 2 && <QuestionTwo imageName="two" />}
        {questionNumber === 3 && <QuestionThree imageName="three" />}
        {questionNumber === 4 && <QuestionFour imageName="four" />}
        {questionNumber === 5 && <QuestionFive imageName="five" />}
        {questionNumber === 6 && <QuestionSix imageName="six" />}
        {questionNumber === 7 && <QuestionSeven imageName="seven" />}
        {questionNumber === 8 && <QuestionEight imageName="eight" />}
      </div>
    </>
  );
};

const QuestionOne = ({ imageName }) => (
  <div className="grid grid-cols-8 col-span-1 lg:col-span-2 lg:pl-10">
    <div className="col-span-8 md:col-span-5 lg:col-span-6">
      <h5 className="mb-4 text-xl font-bold text-denim-800">
        Je télécharge l’application Mon Suivi Psy
      </h5>
      <p className="mb-6 text-sm text-black">
        Vous pouvez télécharger l'application ici ou en cherchant “Mon Suivi
        Psy” sur Google Play ou l’App Store.
      </p>
      <div className="flex justify-center space-x-3 md:justify-start md:space-x-6">
        <a href={ANDROID_URL}>
          <img
            className="h-10 lg:h-14"
            src="images/other/google-play.png"
            alt=""
          />
        </a>
        <a href={IOS_URL}>
          <img
            className="h-10 lg:h-14"
            src="images/other/app-store.png"
            alt=""
          />
        </a>
      </div>
    </div>
    <div className="relative hidden col-span-2 col-start-7 md:block lg:pl-8">
      <img
        className="relative lg:absolute w-60"
        src={`images/question/${imageName}.png`}
        alt=""
      />
    </div>
  </div>
);

const QuestionTwo = ({ imageName }) => (
  <div className="grid grid-cols-8 col-span-1 lg:col-span-2 lg:pl-10">
    <div className="col-span-8 md:col-span-5 lg:col-span-6">
      <h5 className="mb-4 text-xl font-bold text-denim-800">
        Je choisis les symptômes à suivre
      </h5>

      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          Pour aider dans ce choix, 5 symptômes sont déjà pré-remplis (humeur,
          anxiété, pensées parasites, sensations étranges et sommeil).
        </li>
        <li>
          Ils peuvent être gardés ou décochés s’il ne concernent pas le patient
        </li>
        <li>
          Le patient a accès à une définition pour chacun des 5 symptômes
          pré-remplis en permanence
        </li>
        <li>
          Il est possible d’ajouter autant de symptômes à suivre que souhaité en
          les renseignant dans le champ libre
        </li>
        <li>
          Il est possible de modifier à tous moments la liste des symptômes à
          suivre
        </li>
      </ul>

      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-sm font-bold text-denim-800">Astuces : </h6>
        <ol className="text-xs list-decimal list-inside text-denim-800">
          <li>
            Chacun des 5 symptômes pré-remplis peut être divisé en d’autres
            symptômes plus précis.{" "}
          </li>
          <li>
            Par exemple, humeur peut être divisé en "tristesse" ou
            "irritabilité". Anxiété peut comprendre "attaque de panique",
            "anxiété anticipatrice", "anxiété diffuse", "peurs spécifiques",
            etc.{" "}
          </li>
          <li>
            Donc n’hésitez pas à être le plus spécifique possible pour être au
            plus près des ressentis en décochant le symptômes pré-remplis (ici
            Humeur ou Anxiété) et en remplissant le champ libre (avec
            “Irritabilité” ou “Tristesse” ou “Anxiété diffuse” ou “Attaque de
            panique” …)
          </li>
          <li>
            Il est aussi possible de suivre les effets indésirables des
            traitements médicamenteux en remplissant le champ libre (par exemple
            en inscrivant “Fatigue”, “Douleurs Musculaires”, “Perte de libido …)
          </li>
          <li>
            Il est aussi possible de suivre des symptômes plus diversifiés comme
            des douleurs (en inscrivant dans le champ libre “Maux de tête”,
            “Douleurs abdominales” ou des sensations physiques “Vertiges”,
            “Palpitations” par exemple)
          </li>
        </ol>
      </div>
    </div>
    <div className="relative hidden col-span-2 col-start-7 md:block lg:pl-8">
      <img
        className="relative lg:absolute w-60"
        src={`images/question/${imageName}.png`}
        alt=""
      />
    </div>
  </div>
);

const QuestionThree = ({ imageName }) => (
  <div className="grid grid-cols-8 col-span-1 lg:col-span-2 lg:pl-10">
    <div className="col-span-8 md:col-span-5 lg:col-span-6">
      <h5 className="mb-4 text-xl font-bold text-denim-800">
        Sélectionner les traitements médicamenteux à suivre
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          On peut choisir les traitements médicamenteux pris et leurs dosages
          quotidiens dans un menu déroulant.
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-yellow-50">
        <h6 className="text-sm font-bold text-yellow-700">Nouveauté :</h6>
        <p className="text-xs text-yellow-700 list-disc list-inside">
          La traitement médicamenteux n’apparaît pas dans la liste proposée ?
          Vous pouvez dorénavant ajouter n’importe quel médicament et son dosage
          dans un champ libre.
        </p>
      </div>
    </div>
    <div className="relative hidden col-span-2 col-start-7 md:block lg:pl-8">
      <img
        className="relative lg:absolute w-60"
        src={`images/question/${imageName}.png`}
        alt=""
      />
    </div>
  </div>
);

const QuestionFour = ({ imageName }) => (
  <div className="grid grid-cols-8 col-span-1 lg:col-span-2 lg:pl-10">
    <div className="col-span-8 md:col-span-5 lg:col-span-6">
      <h5 className="mb-4 text-xl font-bold text-denim-800">
        Je paramètre un rappel quotidien
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          Pour ne pas oublier de remplir le questionnaire personnalisé quotidien
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-sm font-bold text-denim-800">Astuces :</h6>
        <p className="text-xs list-disc list-inside text-denim-800">
          Programmez à l’heure où la personne est la plus disponible ou à
          l’heure qui paraît la plus adaptée pour faire un point sur la journée
          (plutôt en soirée donc habituellement)
        </p>
      </div>
    </div>
    <div className="relative hidden col-span-2 col-start-7 md:block lg:pl-8">
      <img
        className="relative lg:absolute w-60"
        src={`images/question/${imageName}.png`}
        alt=""
      />
    </div>
  </div>
);

const QuestionFive = ({ imageName }) => (
  <div className="grid grid-cols-8 col-span-1 lg:col-span-2 lg:pl-10">
    <div className="col-span-8 md:col-span-5 lg:col-span-6">
      <h5 className="mb-4 text-xl font-bold text-denim-800">
        Remplir le questionnaire quotidien personnalisé
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          Tous les jours, je réponds aux questions concernant chacun des
          symptômes suivis
        </li>
        <li>
          Je note mes prises médicamenteuses quotidiennes si cela me concerne et
          si je le souhaite
        </li>
        <li>
          J’ajoute des informations complémentaires sur mes symptômes ou sur un
          événement de ma journée, si je le juge important, dans la note à la
          fin de mon questionnaire quotidien personnalisé
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-sm font-bold text-denim-800">Astuces : </h6>
        <p className="text-xs text-denim-800">
          Chaque fois que le questionnaire personnalisé est rempli, les
          symptômes suivis se voient attribuer un chiffre allant de 1 à 5 dans
          l’application. Chaque chiffre correspond au petit emoticon que vous
          voyez dans le journal.
        </p>
        <ul className="text-xs list-disc list-inside text-denim-800">
          <li>
            Dans tous les cas, le chiffre 1 correspond au chiffre le plus bas
            que l’on peut obtenir et le chiffre 5 au chiffre le plus haut.
          </li>
          <li>
            Si vous avez un chiffre 1 à « anxiété » ou à « humeur » par exemple,
            cela se traduira par l’émoticon rouge le moins content dans le
            journal des symptômes suivis, si vous avez le chiffre 5, cela se
            traduira dans le journal par l’émoticon vert le plus content.
          </li>
          <li>
            Le système de cotation est le même pour chaque symptôme, qu’il soit
            pré-rempli ou ajouté.{" "}
          </li>
        </ul>
      </div>
    </div>
    <div className="relative hidden col-span-2 col-start-7 md:block lg:pl-8">
      <img
        className="relative lg:absolute w-60"
        src={`images/question/${imageName}.png`}
        alt=""
      />
    </div>
  </div>
);

const QuestionSix = ({ imageName }) => (
  <div className="grid grid-cols-8 col-span-1 lg:col-span-2 lg:pl-10">
    <div className="col-span-8 md:col-span-5 lg:col-span-6">
      <h5 className="mb-4 text-xl font-bold text-denim-800">
        J’accède au journal des symptômes suivis
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          On peut faire dérouler le journal des symptômes suivis. Ils sont tous
          listés, jour après jour, avec l’emoticon correspondant associé.
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-sm font-bold text-denim-800">Astuces :</h6>
        <p className="text-xs list-disc list-inside text-denim-800">
          On peut intégrer ou modifier les traitements pris et la note
          quotidienne directement dans le journal, sans repasser par le
          questionnaire quotidien personnalisé
        </p>
      </div>
      <div className="p-3 mb-3 rounded-md bg-yellow-50">
        <h6 className="text-sm font-bold text-yellow-700">Bon à savoir :</h6>
        <p className="text-xs text-yellow-700">
          On ne peut ni modifier le questionnaire personnalisé quotidien ni la
          note, au-delà de la veille. En effet, le principe de Mon Suivi Psy est
          de rester le plus proche possible du quotidien et, au-delà de quelques
          jours, l’exercice est moins fiable !
        </p>
      </div>
    </div>
    <div className="relative hidden col-span-2 col-start-7 md:block lg:pl-8">
      <img
        className="relative lg:absolute w-60"
        src={`images/question/${imageName}.png`}
        alt=""
      />
    </div>
  </div>
);

const QuestionSeven = ({ imageName }) => (
  <div className="grid grid-cols-8 col-span-1 lg:col-span-2 lg:pl-10">
    <div className="col-span-8 md:col-span-5 lg:col-span-6">
      <h5 className="mb-4 text-xl font-bold text-denim-800">
        J’accède aux courbes d’évolution des symptômes suivis
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          J’ai accès à des courbes d’évolution hebdomadaire des symptômes que je
          suis, directement sur mon écran de téléphone, au sein de l’application
        </li>
      </ul>

      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-sm font-bold text-denim-800">Astuces :</h6>
        <p className="text-xs list-disc list-inside text-denim-800">
          On peut obtenir les informations de toute une journée en cliquant sur
          1 des points de la courbe d’évolution. On visualise ainsi en un coup
          d’œil toutes les informations de la journée concernée, sans repasser
          par le journal des symptômes suivis.
        </p>
      </div>

      <div className="p-3 mb-3 rounded-md bg-yellow-50">
        <h6 className="text-sm font-bold text-yellow-700">Bon à savoir :</h6>
        <p className="text-xs text-yellow-700 list-disc list-inside">
          Pour chaque symptôme suivi, vous avez accès à une courbe d’évolution.
        </p>
        <ul className="text-xs text-yellow-700 list-disc list-inside">
          <li>
            Pour tous les symptômes, plus la courbe est ascendante (monte), plus
            l’état s’améliore et plus la courbe est descendante (descend), plus
            l’état s’aggrave.
          </li>
          <li>
            Pour tous les symptômes, les points situés en bas représentent une
            intensité forte et/ou une fréquence élevée du symptôme
          </li>
          <li>
            Pour tous les symptômes, le point situé le plus bas signifie une
            note de 1 attribuée lorsque le questionnaire a été rempli. Ce point
            est donc rouge et correspond à l’émoticône le moins content
          </li>
          <li>
            Pour tous les symptômes, les points situés tout en haut des courbes
            représentent une intensité et une fréquence faible ou absente du
            symptôme
          </li>
          <li>
            Pour tous les symptômes, le point situé le plus haut signifie une
            note de 5 attribuée lorsque le questionnaire a été rempli. Ce point
            est donc vert et correspond à l’émoticône le plus content
          </li>
          <li>
            Pour tous les symptômes, les points situés entre ces 2 extrêmes
            signifient qu’une note de 2,3 ou 4 a été attribuée lorsque le
            questionnaire a été rempli. Ces points sont donc oranges ou verts
            claires et correspondent aux emoticônes suivants :
          </li>
        </ul>
      </div>
    </div>
    <div className="relative hidden col-span-2 col-start-7 md:block lg:pl-8">
      <img
        className="relative lg:absolute w-60"
        src={`images/question/${imageName}.png`}
        alt=""
      />
    </div>
  </div>
);

const QuestionEight = ({ imageName }) => (
  <div className="grid grid-cols-8 col-span-1 lg:col-span-2 lg:pl-10">
    <div className="col-span-8 md:col-span-5 lg:col-span-6">
      <h5 className="mb-4 text-xl font-bold text-denim-800">
        Envoyer le récapitulatif des informations recueillies par mail.
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          Le patient peut vous envoyer ses informations, s’il le souhaite et
          quand il le souhaite.{" "}
        </li>
        <li>
          Le patient peut s’envoyer à lui-même les informations pour les
          conserver.{" "}
        </li>
        <li>
          Le mail adressé contient un histogramme mensuel des symptômes suivis,
          avec pour chaque jour un chiffre attribué par symptôme (chiffre allant
          de 1 à 5) en fonction des réponses au questionnaire quotidien
          personnalisé
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-yellow-50">
        <h6 className="text-sm font-bold text-yellow-700">Bon à savoir : </h6>
        <ul className="text-xs text-yellow-700 list-disc list-inside">
          <li>
            L’envoi est anonyme au nom de Mon Suivi Psy, n’oubliez pas de
            prévenir le professionnel qui vous suit que vous lui adressez le
            mail
          </li>
          <li>
            Pour rappel, chaque symptôme suivi se voit attribuer un chiffre
            allant de 1 à 5 lorsque le questionnaire personnalisé est rempli.{" "}
          </li>
          <li>Le système de chiffrage fonctionne de la manière suivante :</li>
          <ul className="pl-8 list-disc">
            <li>
              La chiffre 1 est le plus petit chiffre que l'on peut avoir. Il
              correspond à l'intensité et/ou la fréquence de symptômes la plus
              importante possible.
            </li>
            <li>
              Le chiffre 5 est le plus grand chiffre que l'on peut avoir. Il
              correspond à l'intensité et/ou la fréquence de symptôme la plus
              basse possible (symptôme absent).
            </li>
            <li>
              Les chiffres 2,3 ou 4 correspondent à des intensités et /ou
              fréquence de symptômes de moins en moins importantes.
            </li>
            <li>
              Il en découle donc que plus le chiffre sur l'histogramme est
              élevé, plus la courbe est en haut et moins le symptôme est
              présent, et ce, pour tous les symptômes, qu'ils soient pré-remplis
              ou ajoutés.
            </li>
          </ul>
          <li>
            Sur l’histogramme mensuel adressé par mail, cette note est visible
            pour chaque symptôme à chaque fois que le questionnaire personnalisé
            a été rempli. Il peut donc y avoir 30 notes par symptôme suivi si le
            questionnaire a été rempli tous les jours du mois.
          </li>
          L’envoi est anonyme au nom de Mon Suivi Psy, il faut être prévenu en
          amont pour faire le lien entre le mail et la personne qui l’a envoyé.
        </ul>
      </div>
    </div>
    <div className="relative hidden col-span-2 col-start-7 md:block lg:pl-8">
      <img
        className="relative lg:absolute w-60"
        src={`images/question/${imageName}.png`}
        alt=""
      />
    </div>
  </div>
);

export default Index;
