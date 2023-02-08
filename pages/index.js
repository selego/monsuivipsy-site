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
        <div className="container flex pt-20">
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-bold text-center md:text-left lg:text-2xl text-turqoise-500">
              Mon&nbsp;Suivi&nbsp;Psy change de nom et devient
            </h3>
            <h1 className="mb-2 text-3xl font-extrabold text-center md:text-left lg:text-6xl text-turqoise-500">
              Jardin&nbsp;Mental
            </h1>
            <p className="mb-10 text-lg leading-normal text-center text-black md:text-left lg:leading-9 lg:text-2xl text-denim-800">
              Mieux connaître mon état psychique pour un meilleur accompagnement
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
                subtitle="En quelques minutes par jour, je remplis mon questionnaire personnalisé"
              />
            </div>
          </div>
          <div className="items-center justify-center hidden w-7/12 lg:flex">
            <img src="images/other/hero.png" alt="" />
          </div>
        </div>
        <div className="container flex space-x-4 my-4">
          <img className="h-16" src="images/logo_fab.png" alt="" />
          <img className="h-16" src="images/logo_ars.jpeg" alt="" />
          <img className="h-16" src="images/logo_barth.jpeg" alt="" />
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
              Le contexte actuel des troubles psychiques
            </h3>
            <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-3">
              <div className="p-8 bg-white rounded-2xl h-max">
                <h6 className="mb-2 text-lg font-bold text-denim-800">
                  Les troubles psychiques sont fréquents{" "}
                </h6>
                <p className="text-sm text-black">
                  Les troubles psychiques sont bien plus fréquents qu’on ne
                  l’imagine. Selon l'OMS, 1 personne sur 5 souffrira d'une
                  maladie mentale au cours de sa vie. En France, par exemple, 12
                  millions de personnes sont actuellement concernées.
                </p>
              </div>
              <div className="p-8 bg-white rounded-2xl h-max">
                <h6 className="mb-2 text-lg font-bold text-denim-800">
                  Les troubles psychiques peuvent être à l’origine de handicap
                </h6>
                <p className="text-sm text-black">
                  Les troubles psychiques sont actuellement au 2ème rang des
                  causes mondiales de handicap, selon l’OMS, et 5 des 10
                  maladies les plus invalidantes sont des troubles psychiques.
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
              Jardin Mental, ça sert à quoi ?
            </h3>
            <p className="text-base text-black">
              Jardin Mental participe à l’amélioration des suivis psychiatriques
              ou psychologiques, et donc aux soins au sens large.
              <br />
              <br />
              Il m’aide à mieux me connaître, à comprendre ce qui influe sur ma
              santé mentale, et donc à mieux gérer mon trouble.
              <br />
              <br />
              Jardin Mental facilite le dialogue avec tous les professionnels de
              santé impliqués dans mon parcours de soins. Ils peuvent mieux se
              représenter ma situation et donc mieux adapter les soins.
            </p>
          </div>
          <div className="w-full space-y-6 lg:w-6/12">
            <Checklist2 content="Jardin Mental me permet de suivre quotidiennement tous les indicateurs pertinents qui me permettent d’évaluer mon état de santé de mentale et son évolution." />
            <Checklist2 content="Je peux suivre mes prises de traitement et, comme dans un journal intime, je peux noter tous les évènements importants de ma journée afin de mieux identifier ce qui influe sur mon état de santé mentale." />
            <Checklist2 content="Je peux me fixer des objectifs à réaliser et utiliser les colonnes de Beck en format numérique pour faciliter mon suivi psychothérapeutique." />
            <Checklist2 content="Les informations que je donne au professionnel lors des consultations sont précises et fidèles, même lorsqu’il s’agit de parler de ce qu’il s’est passé plusieurs semaines auparavant. Il peut donc adapter mon suivi au mieux et au plus vite." />
          </div>
        </div>

        <div className="container p-8 lg:p-20 rounded-2xl bg-gray-50">
          <h3 className="mb-2 text-2xl font-bold text-center lg:text-4xl text-denim-800">
            Jardin Mental, à qui ça s’adresse ?
          </h3>
          <p className="mb-10 text-base text-center text-black">
            À tout le monde
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex items-center p-6 bg-white rounded-2xl">
              <div className="flex-none w-16 h-16 mr-6 rounded-full flex-center">
                <img src="images/icon/smiley_vert.png" alt="" />
              </div>
              <p className="text-base text-black">
                Aux personnes qui sont suivies par un professionnel de santé
              </p>
            </div>
            <div className="flex items-center p-6 bg-white rounded-2xl">
              <div className="flex-none w-16 h-16 mr-6 rounded-full flex-center">
                <img src="images/icon/smiley_vert_pomme.png" alt="" />
              </div>
              <p className="text-base text-black">
                À toute personne qui s’interroge sur son état de santé mentale
                et qui souhaite apprendre à mieux se connaître en s’observant
                quotidiennement
              </p>
            </div>
          </div>
        </div>

        <div className="container py-20 lg:py-40">
          <div className="w-full mx-auto lg:w-8/12">
            <h3 className="mb-2 text-2xl font-bold text-center lg:text-4xl text-denim-800">
              Jardin Mental, quel est le principe ?
            </h3>
            <p className="text-xl py-4 text-center text-black">
              Je crée un questionnaire quotidien personnalisé qui me permet de
              suivre mon état de santé mentale et son évolution
            </p>
            <p className="text-xl py-4 text-center text-black">
              Je note mes prises médicamenteuses et tous les évènements
              importants de ma journée, afin de mieux comprendre ce qui influe
              sur mon état de santé mentale
            </p>
            <p className="text-xl py-4 text-center text-black">
              Je me fixe des objectifs et je peux utiliser les colonnes de Beck
              pour faciliter mes exercices de psychothérapie
            </p>
            <p className="text-xl py-4 text-center text-black">
              Je visualise en un coup d’œil toutes mes données grâce à des
              outils d’analyses simples
            </p>
            <p className="text-xl py-4 text-center text-black">
              Si je le souhaite, j’envoie un récapitulatif de mes données au
              professionnel de santé qui me suit
            </p>
          </div>
        </div>

        <div className="bg-gray-50 py-20 lg:pt-30 lg:pb-52">
          <div className="container ">
            <h3 className="mb-6 text-2xl font-bold lg:mb-20 lg:text-4xl text-denim-800">
              Jardin Mental, comment ça fonctionne ?
            </h3>

            <Tabs
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            />
          </div>
          <div className="container bg-gray-50 w-full md:w-3/4 py-10">
            <div className="grid grid-cols-1 gap-8 lg:gap-8 lg:grid-cols-2">
              <div className="p-12 bg-white rounded-2xl w-full md:w-3/4">
                <h6 className="mb-2 text-lg font-bold text-denim-800">
                  Télécharger la notice et nos conseils d’utilisation{" "}
                </h6>
                <div className="flex justify-center shadow-lg">
                  <a
                    className="shadow-lg"
                    href="Notice Jardin Mental.pdf"
                    download
                  >
                    <img
                      className="h-60"
                      src="images/other/preview.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="p-12 bg-white  rounded-2xl space-y-6 w-full md:w-3/4">
                <h6 className="mb-2 text-lg font-bold text-denim-800">
                  Contacter l’équipe de Jardin Mental pour :
                </h6>
                <div>
                  <ul className="text-sm list-disc list-inside space-y-4">
                    <li>
                      Poser vos questions sur l’application et son utilisation
                    </li>
                    <li>Demander une amélioration</li>
                    <li>Signaler un bug</li>
                    <li>Tester les futures fonctionnalités</li>
                  </ul>
                </div>
                <div>
                  <a
                    className="text-base font-bold break-all md:text-lg text-turqoise-500"
                    href="mailto:jardinmental@fabrique.social.gouv.fr"
                  >
                    jardinmental@fabrique.social.gouv.fr
                  </a>
                </div>
              </div>
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
            question="Je télécharge l’application Jardin Mental"
          />
          <Tab number={2} question="Je choisis les indicateurs à suivre" />
          <Tab number={3} question="Je me fixe des objectifs" />
          <Tab
            number={4}
            question="Je sélectionne les traitements médicamenteux à suivre"
          />
          <Tab number={5} question="Je paramètre un rappel quotidien" />
          <Tab
            number={6}
            question="Je remplis mon questionnaire quotidien personnalisé"
          />
          <Tab
            number={7}
            question="Je visualise mon état et son évolution grâce aux outils d’analyse"
          />
          <Tab
            number={8}
            question="J’utilise les colonnes de Beck" // J’accède aux courbes d’évolution des symptômes suivis"
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
        Je télécharge l’application Jardin Mental
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
        Je choisis les indicateurs à suivre
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          Les indicateurs peuvent être des ressentis, des pensées, des symptômes
          ou encore des comportements
        </li>
        <li>
          Pour m’aider dans ce choix, des exemples courants me sont proposés au
          démarrage de l’application
        </li>
        <li>
          Je pourrai modifier ma liste d’indicateurs à suivre quand je le veux
          dans les paramètres de l’application. J’y trouverai d’autres exemples
          et je pourrai aussi créer mes propres indicateurs
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-yellow-50">
        <h6 className="text-sm font-bold text-yellow-700">Besoin d’aide ?</h6>
        <p className="text-sm text-yellow-700">
          Si je ne sais pas quel indicateur suivre ou ajouter, j’en parle au
          professionnel qui me suit.
        </p>
      </div>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-base font-bold text-denim-800">Astuces : </h6>
        <ul className="text-sm list-disc list-inside text-denim-800">
          <li>
            Il est normal de ne pas savoir exactement lesquels choisir au début.
            Vous pourrez faire évoluer vos indicateurs (en supprimer ou en
            ajouter) au fur et à mesure que vous apprendrez à vous connaître.
            Avec le temps, vous ﬁnirez par trouver les plus pertinents.{" "}
          </li>
          <li>
            Dans tous les cas, ne sélectionnez pas trop d’indicateurs aﬁn de ne
            pas alourdir votre questionnaire.
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
        Je me fixe des objectifs
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          Fixez-vous des objectifs qui vous aideront à aller mieux ! Ces
          objectifs peuvent être de natures variées : des activités, des tâches
          quotidiennes, des gestes “santé”, un rappel pour votre traitement ou
          encore des exercices de psychothérapie.
        </li>
        <li>
          Pour m’aider dans ce choix, des exemples me sont proposés au démarrage
          de l’application
        </li>
        <li>
          Je pourrai modifier mes objectifs quand je le veux dans les paramètres
          de l’application. J’y trouverai d’autres exemples et je pourrai aussi
          créer les miens
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-yellow-50 ">
        <h6 className="text-sm font-bold text-yellow-700">Besoin d'aide ?</h6>
        <p className="text-sm list-disc list-inside text-yellow-700">
          Je peux demander à mon professionnel de santé de m’aider à définir des
          objectifs
        </p>
      </div>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-base font-bold text-denim-800 ">Astuces :</h6>
        <ul className="text-sm text-denim-800 list-disc list-inside">
          <li>
            Certains objectifs sont difficilement réalisables tous les jours. Je
            limite mon nombre d’objectifs et je paramètre la récurrence de
            chacun de mes objectifs pour commencer en douceur.
          </li>
          <li>Je pense à programmer un rappel pour chacun de mes objectifs</li>
          <li>
            Je n’hésite pas à utiliser cette fonctionnalité pour ne plus oublier
            de prendre mon traitement (c’est un objectif aussi ☺ )
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

const QuestionFour = ({ imageName }) => (
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
          Si je ne trouve pas mon traitement, je peux l'ajouter grâce au champ
          libre « Ajouter »
        </li>
        <li>
          Je peux quotidiennement renseigner le dosage des médicaments
          traitements médicamenteux que j'ai pris à la fin de mon questionnaire
          quotidien personnalisé
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-base font-bold text-denim-800">Astuces : </h6>
        <ul className="text-sm list-disc list-inside text-denim-800">
          <li>
            Grâce à la barre de recherche, je peux trouver mon traitement dans
            la liste déroulante grâce à son nom commercial ou au nom de sa
            molécule{" "}
          </li>
          <li>
            Je peux ajouter tous les traitements que je souhaite suivre, et pas
            seulement mon traitement de fond pour mon trouble psychique (mes «
            si besoin », mes antalgiques, ou encore ma pilule contraceptive,
            etc…)
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

const QuestionFive = ({ imageName }) => (
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
        <h6 className="text-base font-bold text-denim-800">Astuces :</h6>
        <p className="text-sm list-disc list-inside text-denim-800">
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

const QuestionSix = ({ imageName }) => (
  <div className="grid grid-cols-8 col-span-1 lg:col-span-2 lg:pl-10">
    <div className="col-span-8 md:col-span-5 lg:col-span-6">
      <h5 className="mb-4 text-xl font-bold text-denim-800">
        Je remplis mon questionnaire quotidien personnalisé
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          Je renseigne le niveau ou la survenue de chacun de mes indicateurs,
          grâce à des emojis, une jauge ou un simple « oui/non »
        </li>
        <li>
          Je note mes prises médicamenteuses quotidiennes si cela me concerne et
          si je le souhaite
        </li>
        <li>
          J’ajoute des informations complémentaires sur mes indicateurs ou sur
          un événement de ma journée, si je le juge important, dans la note
          générale à la fin de mon questionnaire quotidien personnalisé
        </li>
        <li>
          Je visualise mes objectifs du jour et je renseigne si je les ai
          réalisés ou non. Je peux donner des précisions pour chacun d’entre
          eux.
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-base font-bold text-denim-800">Astuces : </h6>
        <ul className="text-sm list-disc list-inside text-denim-800">
          <li>
            Si je n’aime pas la manière dont un indicateur est évalué (par
            exemple avec une jauge), je peux créer mon propre indicateur et
            choisir si je veux l’évaluer avec des emojis, une jauge ou un «
            oui/non ».{" "}
          </li>
          <li>
            Je peux remplir mon questionnaire en plusieurs fois, au fur et à
            mesure de la journée, en cliquant sur Valider pour sauvegarder mes
            modifications.
          </li>
          <li>
            Je ne peux faire qu’un questionnaire par jour, mais si je souhaite
            suivre en détail l’évolution d’un indicateur sur la journée (par
            exemple mon humeur), je peux avoir les indicateurs « humeur matinale
            », « humeur mi-journée » et « humeur soir » pour être plus précis.
          </li>
          <li>
            JSi je n’ai pas eu le temps de renseigner tous les jours mon
            questionnaire, je peux aussi remplir ceux des 6 jours précédents. Je
            ne peux pas aller au-delà, car les informations rentrées seraient
            alors moins fiables.
          </li>
        </ul>
      </div>
    </div>
    <div className="relative hidden col-span-2 col-start-7 md:block lg:pl-8">
      <img
        className="relative lg:absolute w-60"
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
        Je visualise mon état et son évolution grâce aux outils d’analyse
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          Les frises me permettent de voir mon évolution et de faire des
          corrélation entre mes indicateurs et mes prises de traitement
        </li>
        <li>
          Les courbes me permettent de suivre mon évolution et d’accéder
          rapidement aux détails de la journée qui m’intéresse en cliquant sur
          le point correspondant
        </li>
        <li>
          Les statistiques me donnent un bilan de mes indicateurs, du taux de
          réussite de mes objectifs et des informations sur mes prises de
          traitement
        </li>
        <li>
          L’outil « déclencheurs » m’aide à retrouver mes notes personnelles et
          à comprendre ce qui influe sur mon état de santé mentale
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-base font-bold text-denim-800">Astuces :</h6>
        <ul className="text-sm list-disc list-inside text-denim-800">
          <li>
            Je peux utiliser les outils d’analyse (frises, statistiques et
            déclencheurs) sur la période de mon choix.{" "}
          </li>
          <li>
            Je peux utiliser des filtres sur les frises (pour ne voir que le
            négatif ou que le positif) pour mieux visualiser ce qui m’intéresse.
          </li>
          <li>
            Je peux obtenir les informations de toute une journée en cliquant
            sur 1 des points de la courbe d’évolution. Je visualise en un coup
            d’œil ma journée sans repasser par le journal des symptômes suivis.
          </li>
        </ul>
      </div>
    </div>
    <div className="relative hidden col-span-2 col-start-7 md:block lg:pl-8">
      <img
        className="relative lg:absolute w-60"
        src={`images/question/${imageName}.gif`}
        loop="true"
        alt=""
      />
    </div>
  </div>
);

const QuestionEight = ({ imageName }) => (
  <div className="grid grid-cols-8 col-span-1 lg:col-span-2 lg:pl-10">
    <div className="col-span-8 md:col-span-5 lg:col-span-6">
      <h5 className="mb-4 text-xl font-bold text-denim-800">
        J'utilise les colonnes de Beck
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          Les colonnes de Beck sont un outil de gestion des émotions, des
          comportements et pensées inadaptées
        </li>
        <li>
          Vous trouverez dans Jardin Mental une version numérique de cet outil,
          qui comporte les étapes suivantes : situation, émotion(s), pensée(s),
          comportement(s) et restructuration
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-yellow-50">
        <h6 className="text-base font-bold text-yellow-700">Bon à savoir :</h6>
        <p className="text-sm text-yellow-700">
          Les colonnes de Beck sont classiquement utilisées en psychothérapie.
          C’est un exercice qui peut être réalisé seul(e), mais qui peut
          nécessiter des explications afin d’être correctement utilisé.
          N’hésitez pas à en parler à un professionnel de santé pour être
          accompagné(e).
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
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-base font-bold text-denim-800">Astuces :</h6>
        <ul className="text-sm list-disc list-inside text-denim-800">
          <li>
            L’envoi est anonyme au nom de Jardin Mental, n’oubliez pas de
            prévenir le professionnel qui vous suit que vous lui adressez le
            mail.
          </li>
          <li>
            Pour plus de simplicité, vous pouvez identifier votre envoi en
            précisant un nom qui apparaîtra dans l’objet du mail que le
            professionnel de santé va recevoir.
          </li>
          <li>
            Vous pouvez aussi choisir de ne pas envoyer un récapitulatif de vos
            données ☺ et simplement d’en discuter avec votre professionnel de
            santé lors de la consultation, en utilisant votre téléphone comme
            support lors de l’entretien avec lui.
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
