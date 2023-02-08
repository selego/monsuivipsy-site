import { useState } from "react";
import Navigation from "components/navigation";

import Footer from "components/footer";
import Video from "components/video";

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
            <h1 className="mb-2 text-3xl font-extrabold text-center text-white md:text-left lg:text-6xl">
              Jardin Mental
            </h1>
            <p className="mb-6 text-2xl font-semibold text-center text-denim-200 md:text-left lg:text-2xl">
              Une application à proposer à vos usagers, pour vous faciliter le suivi et l’éducation thérapeutique
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
                  alt="google-play-logo"
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
                  alt="app-store-logo"
                />
              </a>
            </div>
            <div className="flex flex-col space-y-6">
              <Checklist
                title="Un journal d’auto-observation personnalisable et complet pour l’usager, simple et rapide au quotidien."
                subtitle="En quelques minutes par jour, l’usager remplit le questionnaire personnalisé que vous avez élaboré ensemble pour suivre son quotidien (indicateurs, évènements, prises de traitements, …)."
              />
              <Checklist
                title="Une aide pour la psychothérapie"
                subtitle="Avec vos usagers, fixez des objectifs quotidiens à réaliser (tâches quotidiennes, exercices de psychothérapie simples, observance du traitement, …). Retrouvez aussi une version numérique des colonnes de Beck."
              />
              <Checklist
                title="Visualisation instantanée de l’état de santé mentale de l’usager et de son évolution"
                subtitle="Recevez par mail un récapitulatif des données des 30 derniers jours et/ou, lors de la consultation, regardez et analysez ensemble les résultats grâce aux outils de l’application. Vous adaptez votre suivi au plus près du vécu de l’usager."
              />
              <Checklist
                title="Application gratuite et anonyme, sans création de compte"
                subtitle="L’usager reste propriétaire et maître des données saisies. Il peut vous montrer les résultats sur son smartphone ou vous les envoyer par mail s’il le souhaite."
              />
            </div>
            <br />
            <p className="mb-6 text-xl text-center text-denim-200 md:text-left lg:text-xl">
            Vous souhaitez être au courant des prochaines évolutions et actualités de Jardin Mental ? 
            Laissez-nous votre email et rejoignez notre communauté

            </p>
            <div className="mb-10">
              <form
                className="flex items-center w-full max-w-md p-1 bg-white rounded-full"
                onSubmit={submit}
              >
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
                  Valider
                </button>
              </form>
            </div>
          </div>
          <div className="justify-center hidden w-1/2 lg:flex">
            <img src="images/other/hero2.png" alt="" />
          </div>
        </div>
      </header>
      <main>
        <div className=" bg-gray-50">
          <div className="container w-full md:w-1/2 py-10">
            <div className="items-center justify-center w-full shadow-lg">
              <Video src="/videos/presentationMSP.mp4" />
            </div>
          </div>
          <div className="container  py-20">
            <div className="w-full mx-auto mb-6 md:w-8/12 lg:mb-10">
              <h3 className="mb-2 text-2xl font-bold text-center lg:text-4xl text-denim-800">
                Pour quels professionnels de santé ?
              </h3>
              <p className="text-base text-center text-black">
                Jardin Mental est aujourd’hui utilisé par tous les professionnels de santé 
                impliqués dans le parcours de soin de l’usager, aussi bien en libéral qu’en 
                établissement de santé : psychiatres, psychologues, infirmiers(ères), pair-aidants, coachs, éducateurs 
                spécialisés, etc...
              </p>
            </div>
            <div class="absolute hidden lg:block">
                <svg height="500" width="400" style={{fill:"white"}}>
                    <polygon points="280,160, 380,100, 380, 140" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 pt-10 pb-20">
              <div className="justify-self-center items-center flex">
                <img className="h-44" src="images/icon/bulles_icon.png" alt=""/>
              </div>
              <div className="grid italic grid-cols-1 col-span-2 lg:gap-5 lg:grid-cols-3 justify-self-center">
                <div className="p-4 flex items-center bg-white rounded-2xl">
                    <p className="text-sm text-center text-black">
                      “Cela m'a permis d'identifier les passages d'une phase dépressive à maniaque, 
                      et de diagnostiquer un trouble bipolaire”
                    </p>
                </div>
                <div className="p-4 bg-white flex items-center rounded-2xl ">
                    <p className="text-sm text-center text-black">
                      “La patiente m’a dit qu’elle allait très bien. Mais en regardant le niveau d’anxiété, 
                      je me suis rendu compte qu’il était toujours élevé. J’ai donc pu adapter le traitement avec 
                      cette information“
                    </p>
                </div>
                <div className="p-4 bg-white flex items-center  rounded-2xl">
                    <p className="text-sm text-center text-black">
                      "C’est un moyen pour le patient d’accroître sa motivation entre deux séances et d’être plus autonome 
                      dans la prise en charge de sa maladie“
                    </p>
                </div>
                <div className="p-4 bg-white flex items-center rounded-2xl  ">
                    <p className="text-sm text-center text-black">
                      “Plus besoin de fiches ou de carnet pour faire les exercices que je donne comme les colonnes de Beck, 
                      les 3 choses positives de la journée ou le journal de la gratitude que je mets en objectifs“
                    </p>
                </div>
                <div className="p-4 bg-white flex items-center rounded-2xl  ">
                    <p className="text-sm text-center text-black">
                      “Grâce à l’envoi données, j’ai pu anticiper une crise suicidaire chez un patient“
                    </p>
                </div>
                <div className="p-4 bg-white flex items-center rounded-2xl  ">
                    <p className="text-sm text-center text-black">
                      “Tous les jours, en quelques minutes, le patient va recenser des informations précieuses au niveau 
                      cognitif et émotionnel, ce qui va lui permettre de mieux prendre conscience de sa pathologie“
                    </p>
                </div>
              </div>
            </div>
            <div className="p-8 lg:pl-8">
              <div className="flex items-center flex-wrap lg:flex-nowrap gap-12 justify-around">
                <div className="w-60">
                  <a href="https://www.psyway.fr/jardin-mental-une-appli-daide-a-la-prise-de-conscience-des-troubles/">
                    <img className="" src="images/icon/logo_psyway.png" alt=""/>
                  </a>
                  
                </div>
                <div>
                  <a href="https://www.santementale.fr/2022/06/mon-suivi-psy-lappli-en-support-de-la-therapie/"> 
                    <img className="" src="images/icon/logo_santementale.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="https://www.lemonde.fr/sciences/article/2022/10/11/un-journal-de-bord-numerique-pour-evaluer-sa-sante-mentale_6145320_1650684.html">
                    <img className="w-72" src="images/icon/logo_lemonde.png" alt=""/>
                  </a>
                </div>
              </div>
              <div className="flex pt-4 items-center gap-12 lg:flex-nowrap flex-wrap">
                <div>
                  <a href="https://www.concourspluripro.fr/parcours-de-soin/e-sante/appli-mon-suivi-psy-3000-patients-et-3000-professionnels-de-sante-lont">
                    <img className="" src="images/icon/logo_pluripro.png" alt=""/>
                  </a>
                </div>
              <div className="flex justify-center h-60 w-60 items-center">
                  <a className="" href="https://www.youtube.com/watch?v=WfvxoP7M6Ww&ab_channel=LaPsychiatrieduSoleil">
                    <img src="images/icon/logo_psysoleil.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="https://loptimisme.com/mon-suivi-psy-app-innovante-trouble-psy/">
                    <img className="" src="images/icon/logo_optimisme.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="https://www.essentiel-sante-magazine.fr/sante/acces-aux-soins/mon-suivi-psy-appli-sante-psychologique">
                    <img className="" src="images/icon/logo_essentielmental.png" alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container flex flex-col justify-between py-16 lg:items-center lg:py-24 lg:flex-row"
          id="how-it-works"
        >
          <div className="w-full mb-6 lg:mb-0 lg:w-5/12">
            <h3 className="mb-2 text-2xl font-bold leading-normal lg:text-4xl text-denim-800">
              Comment utiliser Jardin&nbsp;Mental avec les personnes que je suis
              ?
            </h3>
            <p className="text-base text-black">
              Après avoir téléchargé préalablement l’application vous-même afin
              de la prendre en main, vous pouvez proposer à vos usagers de la
              télécharger en expliquant en quoi cela peut améliorer votre
              accompagnement.
            </p>
          </div>
          <div className="w-full space-y-6 lg:w-6/12">
            <div className="justify-start p-4 rounded-lg flex-center bg-turqoise-0">
              <div className="relative flex items-center justify-center flex-none w-5 h-5 mr-3 border rounded-full border-turqoise-500">
                <span className="absolute text-sm font-bold text-turqoise-500">
                  1
                </span>
              </div>
              <div>
                <p className="text-base text-black">
                  Expliquez en consultation à votre patient le but et le fonctionnement de Jardin Mental. 
                </p>
                <p className="text-base text-black">
                Pour vous aider à présenter l'application, nous avons créé des documents explicatifs à télécharger :{" "}
                </p>
                <ul className="list-inside list-disc">
                  <li className="text-base text-black">
                   <span className="inline-flex items-center" style={{display:'inline-flexß'}}>


                  Un flyer usagers :{" "}
                    <a
                      className="ml-1 text-lg"
                      href="Flyer_usager_Jardin_Mental.pdf"
                      download
                      >
                      <img src="images/icon/download.png" alt="" style={{width:"1em"}}/>
                    </a>
                        </span>
                      
                  </li>
                  <li className="text-base text-black">
                  <span className="inline-flex items-center" style={{display:'inline-flexß'}}>
                    Une notice :{" "}
                    <a
                      className="ml-2 text-lg"
                      href="Notice Jardin Mental.pdf"
                      download
                    >
                      <img src="images/icon/download.png" alt="" style={{width:"1em"}}/>
                    </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="justify-start p-4 rounded-lg flex-center bg-turqoise-0">
              <div className="relative flex items-center justify-center flex-none w-5 h-5 mr-3 border rounded-full border-turqoise-500">
                <span className="absolute text-sm font-bold text-turqoise-500">
                  2
                </span>
              </div>
              <div>
                <p className="text-base text-black">
                 Le patient peut, s’il le souhaite, télécharger l’application sur son smartphone durant la consultation. Choisissez ensemble les indicateurs et les objectifs à suivre (un accompagnement peut être nécessaire s’il faut en créer des personnalisés). Proposez une récurrence adaptée pour les objectifs. Sélectionnez ou créez les éventuels traitements médicamenteux à suivre. N’hésitez pas à expliquer le principe des colonnes de Beck si l’exercice se révèle intéressant pour l’usager. 
                </p>
                <p className="text-base text-black font-bold">
                Expliquer et co-construire le questionnaire est le meilleur moyen d’obtenir des résultats intéressants avec Jardin Mental.
                </p>
              </div>
            </div>
            <Numlist
              number="3"
              content="Lors des consultations suivantes, vous pouvez observer ou discuter ensemble des informations renseignées par l’usager dans Jardin Mental, soit directement sur son smartphone, soit via le mail récapitulatif qu’il peut vous adresser.
              "
            />
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
          <div className="bg-gray-50 p-12 flex justify-center flex-wrap gap-8">
            <div className="p-12 bg-white rounded-2xl">
                <h6 className="mb-2 text-lg font-bold text-denim-800 text-center">
                Notice{" "}
                </h6>
                <div className="flex justify-center shadow-xl">
                <a href="Notice Jardin Mental.pdf" download>
                <img   
                  className="h-40"ß
                  src="images/other/preview.png"
                  alt=""
                />
                </a>
                </div>
            </div>
            <div className="p-12 bg-white rounded-2xl">
                <h6 className="mb-2 text-lg font-bold text-denim-800 text-center">
                Flyer usager {" "}
                </h6>
                <div className="flex justify-center shadow-xl">
                <a href="Flyer_usager_Jardin_Mental.pdf" download>
                <img   
                  className="h-20"
                  src="images/other/flyerUsager2.png"
                  alt=""
                  //style={{transform:"rotate(-90deg)"}}
                />
                <img   
                  className="h-20"
                  src="images/other/flyerUsager.png"
                  alt=""
                  //style={{transform:"rotate(-90deg)"}}
                />
                </a>
                </div>
            </div>
            <div className="p-12 bg-white rounded-2xl">
                <h6 className="mb-2 text-center text-lg font-bold text-denim-800">
                Affiche {" "}
                </h6>
                <div className="flex justify-center shadow-xl">
                <a href="Affiche_Jardin_Mental.pdf" download>
                <img   
                  className="h-40"ß
                  src="images/other/affiche.png"
                  alt=""
                />
                </a>
                </div>
            </div>
            <div className="p-12 bg-white rounded-2xl space-y-6">
                <h6 className="mb-2 text-lg font-bold text-denim-800 text-center">
                  Contacter l’équipe de Jardin Mental pour :
                </h6>
                <div>
                  <ul className="text-sm list-disc list-inside space-y-4">
                    <li>
                      Recevoir des flyers, affiches, cartes ou stickers Jardin Mental par la poste                    
                      </li>
                    <li>
                      Demander une amélioration
                    </li>
                  </ul>
                </div>
                <div>
                <a
                    href="mailto:jardinmental@fabrique.social.gouv.fr "
                    className="flex-center px-4 py-2 text-xs text-white transition-all rounded-md bg-turqoise-500 hover:bg-turqoise-600 lg:text-sm"
                  > jardinmental@fabrique.social.gouv.fr </a>
                </div>
              </div>
          </div>
        </div>

        <div className="container py-20 lg:py-40">
          <div className="w-full mx-auto lg:w-8/12 space-y-8">
            <h3 className="mb-2 text-2xl font-bold text-center lg:text-4xl text-denim-800">
              Qui a créé Jardin Mental ?
            </h3>
            <p className="text-xl text-center text-black">
              Jardin Mental est une application initialement créée par le docteur Lya Pedron, psychiatre à l’EPSM Barthélemy Durand. Depuis, l’application est développée en continu à la Fabrique Numérique des ministères sociaux selon un mode participatif, avec des usagers et des professionnels de la santé mentale, toutes professions confondues.
            </p>
            <p className="text-xl text-center text-black">
              Jardin Mental est une start-up d'État à but non lucratif, qui n’est pas régie par des intérêts privés et qui ne dispose que de financements publics. Pour son lancement, le projet a remporté un appel à innovateurs lancé par l’ARS Île-de-France, puis a bénéficié d’un financement de la direction interministérielle du numérique (DINUM). Depuis, son développement est financé par l’ARS Île-de-France.
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
      <span className="absolute text-sm font-bold text-turqoise-500">
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
            className={`text-sm ${
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
          Les indicateurs peuvent être des ressentis, des pensées, des symptômes ou encore des comportements
        </li>
        <li>
          Pour m’aider dans ce choix, des exemples courants me sont proposés au démarrage de l’application
        </li>
        <li>
          Je pourrai modifier ma liste d’indicateurs à suivre quand je le veux dans les paramètres de l’application. 
          J’y trouverai d’autres exemples et je pourrai aussi créer mes propres indicateurs
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
        <h6 className="text-sm font-bold text-denim-800">Astuces : </h6>
        <ul className="text-sm list-disc list-inside text-denim-800">
          <li>
            Il est normal de ne pas savoir exactement lesquels choisir au début. 
            Vous pourrez faire évoluer vos indicateurs (en supprimer ou en ajouter) au fur et à mesure que 
            vous apprendrez à vous connaître. Avec le temps, vous ﬁnirez par trouver les plus pertinents.{" "}
          </li>
          <li>
            Dans tous les cas, ne sélectionnez pas trop d’indicateurs aﬁn de ne pas alourdir votre questionnaire.
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
          Fixez-vous des objectifs qui vous aideront à aller mieux ! Ces objectifs peuvent être de natures variées : 
          des activités, des tâches quotidiennes, des gestes “santé”, 
          un rappel pour votre traitement ou encore des exercices de psychothérapie.
        </li>
        <li>
          Pour m’aider dans ce choix, des exemples me sont proposés au démarrage de l’application
        </li>
        <li>
          Je pourrai modifier mes objectifs 
          quand je le veux dans les paramètres de l’application. J’y trouverai d’autres exemples et je pourrai aussi créer les miens
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-yellow-50 ">
        <h6 className="text-sm font-bold text-yellow-700">Besoin d'aide ?</h6>
        <p className="text-sm list-disc list-inside text-yellow-700">
        Je peux demander à mon professionnel de santé de m’aider à définir des objectifs
        </p>
      </div>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-sm font-bold text-denim-800 ">Bon à savoir :</h6>
        <ul className="text-sm text-denim-800 list-disc list-inside">
          <li>
          Certains objectifs sont difficilement réalisables tous les jours. Je limite mon nombre d’objectifs et 
          je paramètre la récurrence de chacun de mes objectifs pour commencer en douceur.
          </li>
          <li>
            Je pense à programmer un rappel pour chacun de mes objectifs
          </li>
          <li>
            Je n’hésite pas à utiliser cette fonctionnalité pour ne plus oublier de prendre mon traitement 
            (c’est un objectif aussi ☺ )
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
          Si je ne trouve pas mon traitement, je peux l'ajouter grâce au champ libre « Ajouter »
        </li>
        <li>
          Je peux quotidiennement renseigner le dosage des médicaments
          traitements médicamenteux que j'ai pris à la fin de mon questionnaire
          quotidien personnalisé
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-sm font-bold text-denim-800">Astuces : </h6>
        <ul className="text-sm list-disc list-inside text-denim-800">
          <li>
            Grâce à la barre de recherche, je peux trouver mon traitement dans la liste 
            déroulante grâce à son nom commercial ou au nom de sa molécule{" "}
          </li>
          <li>
          Je peux ajouter tous les traitements que je souhaite suivre, et pas seulement mon traitement de 
          fond pour mon trouble psychique (mes « si besoin », mes antalgiques, ou encore ma pilule contraceptive, etc…)
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
        <h6 className="text-sm font-bold text-denim-800">Astuces :</h6>
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
          Je note mes prises médicamenteuses quotidiennes si cela me concerne et si je le souhaite
        </li>
        <li>
          J’ajoute des informations complémentaires sur mes indicateurs ou sur un événement de ma journée, si 
          je le juge important, dans la note générale à la fin de mon questionnaire quotidien personnalisé
        </li>
        <li>
          Je visualise mes objectifs du jour et je renseigne si 
          je les ai réalisés ou non. Je peux donner des précisions pour chacun d’entre eux.
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-sm font-bold text-denim-800">Astuces : </h6>
        <ul className="text-sm list-disc list-inside text-denim-800">
          <li>
          Si je n’aime pas la manière dont un indicateur est évalué (par exemple avec une jauge), 
          je peux créer mon propre indicateur et choisir si je veux l’évaluer avec des emojis, une jauge ou un « oui/non ».{" "}
          </li>
          <li>
          Je peux remplir mon questionnaire en plusieurs fois, au fur et à mesure de la journée, 
          en cliquant sur Valider pour sauvegarder mes modifications.
          </li>
          <li>
            Je ne peux faire qu’un questionnaire par jour, mais si je souhaite suivre en détail l’évolution 
            d’un indicateur sur la journée (par exemple mon humeur), je peux avoir les indicateurs « humeur matinale », 
            « humeur mi-journée » et « humeur soir » pour être plus précis.
          </li>
          <li>
            JSi je n’ai pas eu le temps de renseigner tous les jours mon questionnaire, 
            je peux aussi remplir ceux des 6 jours précédents. Je ne peux pas aller au-delà, car les informations 
            rentrées seraient alors moins fiables.
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
        Les frises me permettent de voir mon évolution et de faire des corrélation entre mes indicateurs 
        et mes prises de traitement
        </li>
        <li>
        Les courbes me permettent de suivre mon évolution et d’accéder rapidement aux détails de la journée qui 
        m’intéresse en cliquant sur le point correspondant

        </li>
        <li>
          Les statistiques me donnent un bilan de mes indicateurs, du taux de réussite de mes objectifs et des informations 
          sur mes prises de traitement
        </li>
        <li>
          L’outil « déclencheurs » m’aide à retrouver mes notes personnelles et à comprendre ce 
          qui influe sur mon état de santé mentale 
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-denim-100">
        <h6 className="text-sm font-bold text-denim-800">Astuces :</h6>
        <ul className="text-sm list-disc list-inside text-denim-800">
          <li>
            Je peux utiliser les outils d’analyse (frises, statistiques et déclencheurs) sur la période de mon choix.{" "}
          </li>
          <li>
            Je peux utiliser des filtres sur les frises (pour ne voir que le négatif ou que le positif) 
            pour mieux visualiser ce qui m’intéresse.
          </li> 
          <li>
            Je peux obtenir les informations de toute une journée en cliquant sur 1 des points de la courbe d’évolution. 
            Je visualise en un coup d’œil ma journée sans repasser par le journal des symptômes suivis.
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

const QuestionEight= ({ imageName }) => (
  <div className="grid grid-cols-8 col-span-1 lg:col-span-2 lg:pl-10">
    <div className="col-span-8 md:col-span-5 lg:col-span-6">
      <h5 className="mb-4 text-xl font-bold text-denim-800">
        J'utilise les colonnes de Beck
      </h5>
      <ul className="mb-3 text-sm text-black list-disc list-inside">
        <li>
          Les colonnes de Beck sont un outil de gestion des émotions, des comportements et pensées inadaptées
        </li>
        <li>
          Vous trouverez dans Jardin Mental une version numérique de cet outil, qui comporte les étapes suivantes :
          situation, émotion(s), pensée(s), comportement(s) et restructuration
        </li>
      </ul>
      <div className="p-3 mb-3 rounded-md bg-yellow-50">
        <h6 className="text-sm font-bold text-yellow-700">Bon à savoir :</h6>
        <p className="text-sm text-yellow-700">
          Les colonnes de Beck sont classiquement utilisées en psychothérapie. C’est un exercice qui peut être réalisé seul(e), 
          mais qui peut nécessiter des explications afin d’être correctement utilisé. N’hésitez pas à en parler à un professionnel
          de santé pour être accompagné(e).
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
        <h6 className="text-sm font-bold text-denim-800">Astuces :</h6>
        <ul className="text-sm list-disc list-inside text-denim-800">
          <li>
            L’envoi est anonyme au nom de Jardin Mental, 
            n’oubliez pas de prévenir le professionnel qui vous suit que vous lui adressez le mail.
          </li>
          <li>
            Pour plus de simplicité, vous pouvez identifier votre envoi en précisant un nom qui apparaîtra dans 
            l’objet du mail que le professionnel de santé va recevoir.
          </li> 
          <li>
            Vous pouvez aussi choisir de ne pas envoyer un récapitulatif de vos données ☺ et simplement d’en 
            discuter avec votre professionnel de santé lors de la consultation, en utilisant votre téléphone comme 
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

export default Index;