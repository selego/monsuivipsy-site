import { useState } from "react";

import Navigation from "components/navigation";
import Footer from "components/footer";
import Video from "components/video";

const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.monsuivipsy&hl=fr";
const IOS_URL = "https://apps.apple.com/us/app/mon-suivi-psy/id1540061393";

export default function Index() {
  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <div className="font-karla">
      <header
        className="bg-right-top bg-no-repeat"
        style={{ backgroundImage: `url("images/other/hero-bg.svg")` }}
      >
        <Navigation />
        <div className="container flex pt-20 pb-32">
          <div className="w-full lg:w-1/2">
            <h1 className="mb-2 text-3xl font-bold text-center md:text-left lg:text-6xl text-denim-800">
              Mon Suivi Psy change de nom et devient Ma Tête et Moi
            </h1>
            <p className="mb-10 text-lg leading-normal text-center text-black md:text-left lg:leading-9 lg:text-2xl">
              Mieux connaître mes symptômes pour un meilleur accompagnement
            </p>
            <div className="flex justify-center mb-10 space-x-3 md:justify-start md:space-x-6">
              <a
                href={ANDROID_URL}
                onClick={() =>
                  window.lumiere("sendEvent", "home", "click_android")
                }
              >
                <img
                  className="h-10 md:h-14"
                  src="images/other/google-play-fr.png"
                  alt=""
                />
              </a>
              <a
                href={IOS_URL}
                onClick={() =>
                  window.lumiere("sendEvent", "home", "click_apple")
                }
              >
                <img
                  className="h-10 md:h-14"
                  src="images/other/app-store-fr.png"
                  alt=""
                />
              </a>
            </div>
            <div className="flex flex-col space-y-6">
              <Checklist
                title="Service gratuit et anonyme, sans création de compte"
                subtitle="Bon à savoir : Si vous souhaitez supprimer toutes vos données d'un coup, il vous suffit de désinstaller l'application."
              />
              <Checklist
                title="Sécurité des données"
                subtitle="Je reste propriétaire des données saisies, je les partage uniquement si je le souhaite"
              />
              <Checklist
                title="Simple, rapide et intuitive"
                subtitle="En quelques secondes par jour, je remplis mon questionnaire personnalisé"
              />
            </div>
          </div>
          <div className="items-center justify-center hidden w-1/2 lg:flex">
            <img src="images/other/hero.png" alt="" />
          </div>
        </div>
      </header>
      <main>
        <div className="bg-gray-50">
          <div className="container w-full md:w-1/2 py-10">
            <div className="items-center justify-center w-full shadow-lg">
              <Video src="/videos/presentationMSP.mp4" />
            </div>
          </div>
          <div className="container py-20">
            <h3 className="mb-8 text-2xl font-bold text-center lg:text-4xl text-denim-800 lg:mb-14">
              Le contexte actuel des troubles psychiatriques
            </h3>
            <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-3">
              <div className="p-8 bg-white rounded-2xl h-max">
                <h6 className="mb-2 text-lg font-bold text-denim-800">
                  Les troubles psychiatriques sont fréquents{" "}
                </h6>
                <p className="text-sm text-black">
                  Les troubles psychiatriques sont bien plus fréquents qu’on ne
                  l’imagine. Selon l'OMS 1 personne sur 5 souffrira d'une
                  maladie mentale au cours de sa vie. En France, par exemple, 12
                  millions de personnes sont actuellement concernées.
                </p>
              </div>
              <div className="p-8 bg-white rounded-2xl h-max">
                <h6 className="mb-2 text-lg font-bold text-denim-800">
                  Les maladies mentales peuvent être à l’origine de handicap
                </h6>
                <p className="text-sm text-black">
                  Les maladies mentales sont actuellement au 2ème rang des
                  causes mondiales de handicap, selon l’OMS, et 5 des 10
                  maladies les plus invalidantes sont des maladies mentales.
                </p>
              </div>
              <div className="p-8 bg-white rounded-2xl h-max">
                <h6 className="mb-2 text-lg font-bold text-denim-800">
                  Le retard d’accès aux soins et le retard au diagnostic sont
                  encore trop souvent la règle
                </h6>
                <p className="text-sm text-black">
                  Les retards d’accès aux soins et à un diagnostic sont encore
                  trop fréquents, découlant en partie de la très forte
                  stigmatisation de ces troubles, et sont un des enjeux majeurs
                  actuels.
                  <br />
                  <br />
                  L’accès et la mise en place de soins adaptés peut donc prendre
                  plusieurs années. Pendant ce temps, les symptômes évoluent et
                  peuvent devenir chroniques. L’état clinique peut s’aggraver.
                  Cette situation peut tous nous concerner.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container flex flex-col justify-between py-16 lg:py-24 lg:flex-row"
          id="how-it-works"
        >
          <div className="w-full py-4 lg:py-16 mb-6 lg:mb-0 lg:w-5/12">
            <h3 className="mb-2 text-2xl font-bold leading-normal lg:text-4xl text-denim-800">
              Mon Suivi Psy, ça sert à quoi ?
            </h3>
            <p className="text-base text-black">
              Mon Suivi Psy souhaite participer à améliorer les suivis
              psychiatriques ou psychologiques et donc les soins au sens large.
              <br />
              <br />
              Il m’aide à mieux comprendre ce qui m’arrive : il permet au
              professionnel qui me suit de mieux se représenter ma situation et
              donc d’adapter les soins.
              <br />
              <br />
              Mon Suivi Psy facilite le dialogue avec les professionnels de
              santé.
            </p>
          </div>
          <div className="w-full space-y-6 lg:w-6/12">
            <Checklist2 content="Mon Suivi Psy me permet de suivre quotidiennement mes symptômes et mes prises de traitement, sur de longues périodes si je le désire." />
            <Checklist2 content="Les colonnes de Beck en format digital facilitent mon suivi psychothérapique." />
            <Checklist2 content="Les informations que je donne au professionnel lors des consultations sont donc au plus près de ce que je vis, même lorsqu’il s’agit de parler de ce qu’il s’est passé plusieurs semaines auparavant." />
            <Checklist2 content="Plus les informations me concernant sont fidèles, plus le professionnel peut adapter mon suivi, au mieux et au plus vite." />
          </div>
        </div>

        <div className="container p-8 lg:p-20 rounded-2xl bg-gray-50">
          <h3 className="mb-2 text-2xl font-bold text-center lg:text-4xl text-denim-800">
            Mon Suivi Psy, à qui ça s’adresse ?
          </h3>
          <p className="mb-10 text-base text-center text-black">
            Mon Suivi Psy s’adresse à tout le monde
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex items-center p-6 bg-white rounded-2xl">
              <div
                className="flex-none w-16 h-16 mr-6 rounded-full flex-center"
                style={{ background: "#E2FA80", border: "1px solid #C3F009" }}
              >
                <img
                  className="opacity-60"
                  src="images/icon/happy.svg"
                  alt=""
                />
              </div>
              <p className="text-base text-black">
                A toute personne qui s’interroge sur son état de santé et qui
                souhaite apprendre à mieux se connaître en observant
                quotidiennement ses ressentis
              </p>
            </div>
            <div className="flex items-center p-6 bg-white rounded-2xl">
              <div
                className="flex-none w-16 h-16 mr-6 rounded-full flex-center"
                style={{ background: "#F0F277", border: "1px solid #DDDF45" }}
              >
                <img
                  className="opacity-60"
                  src="images/icon/smile.svg"
                  alt=""
                />
              </div>
              <p className="text-base text-black">
                Aux personnes qui sont suivies par un professionnel de santé
              </p>
            </div>
          </div>
        </div>

        <div className="container py-20 lg:py-40">
          <div className="w-full mx-auto lg:w-8/12">
            <h3 className="mb-2 text-2xl font-bold text-center lg:text-4xl text-denim-800">
              Mon Suivi Psy, quel est le principe ?
            </h3>
            <p className="text-xl py-4 text-center text-black">
              Je suis l’évolution de mes symptômes et de mes prises
              médicamenteuses en remplissant quotidiennement un questionnaire
              personnalisé
            </p>
            <p className="text-xl text-center text-black">
              J'effectue facilement mes exercices de psychothérapie en utilisant
              les colonnes de Beck
            </p>
          </div>
        </div>

        <div className="bg-gray-50 py-20 lg:pt-30 lg:pb-52">
          <div className="container ">
            <h3 className="mb-6 text-2xl font-bold lg:mb-20 lg:text-4xl text-denim-800">
              Mon Suivi Psy, comment ça fonctionne ?
            </h3>

            <Tabs
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            />
          </div>
          <div className="container w-full md:w-1/2 py-10">
            <div className="items-center justify-center w-full shadow-lg">
              <Video src="/videos/presentationBeck.mp4" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const Checklist = ({ title, subtitle }) => (
  <div className="flex">
    <div className="pt-1 mr-2">
      <img src="images/icon/check-turqoise-500.svg" alt="" />
    </div>
    <div>
      <h6 className="text-base font-bold text-denim-800">{title}</h6>
      <p className="text-sm text-black">{subtitle}</p>
    </div>
  </div>
);

const Checklist2 = ({ content }) => (
  <div className="p-4 rounded-lg flex-center bg-turqoise-0">
    <img
      className="mr-3"
      src="images/icon/check-circle-turqoise-500.svg"
      alt=""
    />
    <p className="text-base text-black">{content}</p>
  </div>
);

const Questionlist = ({ number, question }) => {
  return (
    <div className="flex items-center px-4 py-3 bg-white rounded-md">
      <div className="flex-none w-5 h-5 mr-2 bg-gray-100 rounded-full flex-center">
        <span className="text-xs text-denim-800">{number}</span>
      </div>
      <p className="text-sm text-denim-800">{question}</p>
    </div>
  );
};

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
          <Tab number={6} question="J’utilise les colonnes de Beck" />
          <Tab number={7} question="J’accède au journal" />
          <Tab
            number={8}
            question="J’accède aux courbes d’évolution des symptômes suivis"
          />
          <Tab
            number={9}
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
        {questionNumber === 9 && <QuestionNine imageName="nine" />}
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
        Vous pouvez télécharger l'application ici
      </p>
      <div className="flex justify-center space-x-3 md:justify-start md:space-x-6">
        <a href={ANDROID_URL}>
          <img
            className="h-10 lg:h-14"
            src="images/other/google-play-fr.png"
            alt=""
          />
        </a>
        <a href={IOS_URL}>
          <img
            className="h-10 lg:h-14"
            src="images/other/app-store-fr.png"
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
          Pour m’aider dans ce choix, 5 symptômes sont déjà pré-remplis (humeur,
          anxiété, pensées parasites, sensations étranges et sommeil).
        </li>
        <ul className="ml-6 list-disc list-inside">
          <li>Je peux les garder ou les décocher</li>
          <li>
            J’ai accès à une définition pour chacun des 5 symptômes pré-remplis
            en permanence
          </li>
        </ul>
        <li>
          Je peux ajouter autant de symptômes à suivre que je le veux en les
          renseignant dans le champ libre (capture d’écran)
        </li>
        <li>
          Je peux modifier ma liste de symptômes à suivre quand je le veux
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-yellow-50">
        <h6 className="text-sm font-bold text-yellow-700">Besoin d’aide ?</h6>
        <p className="text-xs text-yellow-700">
          Si je ne sais pas quel symptôme suivre ou ajouter, j’en parle au
          professionnel qui me suit.
        </p>
      </div>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-sm font-bold text-denim-800">Astuces : </h6>
        <ul className="text-xs list-disc list-inside text-denim-800">
          <li>
            Chacun des 5 symptômes pré-remplis peut être divisé en d’autres
            symptômes plus précis. Par exemple, humeur peut être divisé en
            "tristesse" ou "irritabilité". Anxiété peut comprendre "attaque de
            panique", "anxiété anticipatrice", "anxiété diffuse", "peurs
            spécifiques", etc{" "}
          </li>
          <li>
            Donc, au fur et à mesure, n’hésitez pas à être le plus spécifique
            possible pour être au plus près de vos ressentis !
          </li>
          <li>
            Je peux aussi suivre les effets indésirables des traitement
            médicamenteux que je prends{" "}
          </li>
          <li>
            Je peux même suivre des symptômes plus diversifiés comme des
            douleurs ou des sensations physiques
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

const QuestionThree = ({ imageName }) => (
  <div className="grid grid-cols-8 col-span-1 lg:col-span-2 lg:pl-10">
    <div className="col-span-8 md:col-span-5 lg:col-span-6">
      <h5 className="mb-4 text-xl font-bold text-denim-800">
        Je sélectionne les traitements médicamenteux à suivre
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          Je peux choisir les traitements médicamenteux que je prends dans un
          menu déroulant
        </li>
        <li>
          Si je ne trouve pas mon traitement, je peux l'ajouter grâce à un
          champs libre
        </li>
        <li>
          Je peux quotidiennement renseigner le dosage des médicaments
          traitements médicamenteux que j'ai pris à la fin de mon questionnaire
          quotidien personnalisé
        </li>
      </ul>
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
          Je le programme à l’heure où je suis le plus disponible ou à l’heure
          qui me paraît la plus adaptée pour faire un point sur ma journée
          (plutôt en soirée donc)
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
        Je remplis mon questionnaire quotidien personnalisé
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
      <div className="p-3 mb-3 rounded-md bg-yellow-50">
        <h6 className="text-sm font-bold text-yellow-700">Bon à savoir : </h6>
        <p className="text-xs list-disc list-inside text-yellow-700">
          Chaque fois que vous remplissez le questionnaire personnalisé, les
          symptômes suivis se voient attribuer une note allant de 1 à 5.
        </p>
        <ul className="text-xs list-disc list-inside text-yellow-700">
          <li>
            Dans tous les cas, la note 1 correspond à la note la plus basse que
            l’on peut obtenir et la note 5 à la note la plus haute.{" "}
          </li>
          <li>
            Si vous avez un score de 1 à « anxiété » ou à « humeur » par
            exemple, cela se traduira par l’émoticon rouge le moins content dans
            le journal des symptômes suivis, si vous avez la note de 5, cela se
            traduira dans le journal par l’émoticon vert le plus content.
          </li>
          <li>
            C’est ainsi pour chaque symptôme qu’ils soient pré-remplis ou
            ajoutés.
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
        J'utilise les colonnes de Beck
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          Pour activer la fonctionnalité "Colonnes de Beck" (cette
          fonctionnalité n'est pas activée par défaut), je clique dans le menu
          en haut à gauche, je sélectionne l'item "Colonnes de Beck" et j'appuie
          sur le bouton "Activer". Je reviens en suite sur le journal
        </li>
        <li>
          Je peux ensuite remplir les Colonnes de Beck : Je peux ensuite remplir
          les Colonnes de Beck : Je peux ensuite remplir les Colonnes de Beck :
          <ul className="px-4 text-sm mb-2 text-black list-none list-inside">
            <li className="inline-flex">
              * J'appuie sur le bouton
              <img
                className="w-5 h-5 ml-2"
                src={`images/other/add.png`}
                alt=""
              />
            </li>
            <li>* Je choisis l'icône "Colonnes de Beck"</li>
            <li>* Et c'est parti !</li>
          </ul>
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-sm font-bold text-denim-800">Astuces :</h6>
        <p className="text-xs list-disc list-inside text-denim-800">
          Je peux intégrer ou modifier les traitements pris et la note
          quotidienne directement dans le journal, sans repasser par le
          questionnaire quotidien personnalisé
        </p>
      </div>
      <div className="p-3 mb-3 rounded-md bg-yellow-50">
        <h6 className="text-sm font-bold text-yellow-700">Bon à savoir :</h6>
        <p className="text-xs text-yellow-700">
          Je ne peux ni modifier le questionnaire personnalisé quotidien ni la
          note, au-delà de la veille. En effet, le principe de Mon Suivi Psy est
          de rester le plus proche possible du quotidien et au-delà de quelques
          jours, l’exercice est moins fiable !
        </p>
      </div>
    </div>
    <div className="relative hidden col-span-2 col-start-7 md:block lg:pl-8">
      <img
        className="relative lg:absolute w-40"
        src={`images/question/${imageName}.gif`}
        loop="true"
        alt=""
      />
    </div>
  </div>
);

const QuestionSeven = ({ imageName }) => (
  <div className="grid grid-cols-8 col-span-1 lg:col-span-2 lg:pl-10">
    <div className="col-span-8 md:col-span-5 lg:col-span-6">
      <h5 className="mb-4 text-xl font-bold text-denim-800">
        J’accède au journal
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          Je peux faire dérouler le journal des symptômes suivis. Ils sont tous
          listés, jour après jour.
        </li>
        <li>
          Je retrouve aussi :
          <ul className="px-4 text-sm mb-2 text-black list-none list-inside">
            <li>* les traitements médicamenteux pris</li>
            <li>* les notes</li>
            <li>* la synthèse de mes saisies sur les colonnes de Beck</li>
          </ul>
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-sm font-bold text-denim-800">Astuces :</h6>
        <p className="text-xs list-disc list-inside text-denim-800">
          Je peux intégrer ou modifier les traitements pris, la note
          quotidienne, ainsi que les informations saisies dans les colonnes de
          Beck directement dans le journal
        </p>
      </div>
      <div className="p-3 mb-3 rounded-md bg-yellow-50">
        <h6 className="text-sm font-bold text-yellow-700">Bon à savoir :</h6>
        <ul className="text-xs text-yellow-700 list-disc list-inside">
          <li>
            Je ne peux ni modifier le questionnaire personnalisé quotidien, ni
            la note, ni les traitements pris, au-delà de la veille. En effet, le
            principe de Mon Suivi Psy est de rester le plus proche possible du
            quotidien et au-delà de quelques jours, l’exercice est moins fiable
            !
          </li>
          <li>
            Je peux en revanche modifier ou compléter les informations saisies
            dans les colonnes de Beck à tout moment, y compris au delà de 2
            jours
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
          Je peux obtenir les informations de toute une journée en cliquant sur
          1 des points de la courbe d’évolution. Je visualise en un coup d’œil
          ma journée sans repasser par le journal des symptômes suivis.
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

const QuestionNine = ({ imageName }) => (
  <div className="grid grid-cols-8 col-span-1 lg:col-span-2 lg:pl-10">
    <div className="col-span-8 md:col-span-5 lg:col-span-6">
      <h5 className="mb-4 text-xl font-bold text-denim-800">
        J’envoie le récapitulatif des informations recueillies par mail
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          Au professionnel qui me suit, si je le souhaite et quand je le
          souhaite
        </li>
        <li>A moi-même pour conserver les informations</li>
        <li>
          Le mail adressé contient :
          <ul className="px-4 list-inside list-none">
            <li>* un histogramme mensuel des symptômes suivis</li>
            <li>* le récapitulatif de mes notes sur le dernier mois</li>
            <li>
              * la synthèse de chacune des informations saisies dans les
              colonnes de Beck
            </li>
          </ul>
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-yellow-50">
        <h6 className="text-sm font-bold text-yellow-700">Bon à savoir : </h6>
        <ul className="text-xs list-disc list-inside text-yellow-700">
          <li>
            L’envoi est anonyme au nom de Mon Suivi Psy, n’oubliez pas de
            prévenir le professionnel qui vous suit que vous lui adressez le
            mail
          </li>
          <li>
            Pour rappel, chaque symptôme suivi se voit attribuer un chiffre
            allant de 1 à 5 lorsque le questionnaire personnalisé est rempli.{" "}
          </li>
          <li>
            Le système de chiffrage fonctionne de la manière suivante :<br />
            La chiffre 1 est le plus petit chiffre que l'on peut avoir. Il
            correspond à l'intensité et/ou la fréquence de symptômes la plus
            importante possible.
            <br />
            Le chiffre 5 est le plus grand chiffre que l'on peut avoir. Il
            correspond à l'intensité et/ou la fréquence de symptôme la plus
            basse possible (symptôme absent).
            <br />
            Les chiffres 2,3 ou 4 correspondent à des intensités et /ou
            fréquence de symptômes de moins en moins importantes.
            <br />
            Il en découle donc que plus le chiffre sur l'histogramme est élevé,
            plus la courbe est en haut et moins le symptôme est présent, et ce,
            pour tous les symptômes, qu'ils soient pré-remplis ou ajouter.
          </li>
          <li>
            Sur l’histogramme mensuel adressé par mail, cette note est visible
            pour chaque symptôme à chaque fois que le questionnaire personnalisé
            a été rempli. Il peut donc y avoir 30 notes par symptôme suivi si le
            questionnaire a été rempli tous les jours du mois.
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
