import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function index() {
  return (
    <React.Fragment>
      <Head>
        <title>Some title</title>
      </Head>
      <AppNav />
      <Header />
      <br />
      <br />
      <Pourquoi />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </React.Fragment>
  );
}

function AppNav() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div>
          <a href="#page-top" alt="Retour à l'accueil">
            <Image
              src="/img/logo-MSP.png"
              width={100}
              height={68}
              alt="Logo MonSuiviPsy"
            />
          </a>
        </div>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="#pourquoi">Pourquoi mon suivi psy?</Nav.Link>
            <Nav.Link href="#features">Comment cela fonctionne</Nav.Link>
            <Nav.Link href="#who">Qui sommes-nous?</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Header() {
  return (
    <header style={{ height: 700, overflow: "hidden" }}>
      <video
        id="video1"
        preload="true"
        autoPlay
        muted
        playsInline
        loop
        style={{
          background: "white",
          filter: "grayscale(30%)",
          height: "auto",
          width: "100%",
        }}
      >
        <source src="/home-background.mp4" type="video/mp4" />
      </video>
      <div style={{ position: "absolute", top: 150, width: "100%" }}>
        <div className="container h-100">
          <div className="row h-100">
            <div
              className="col-lg-8 my-auto"
              style={{
                background: "rgb(66,66,66,0.5)",
                borderRadius: 10,
                padding: "2em",
              }}
            >
              <div style={{ color: "white" }}>
                <h1 className="mb-5">
                  <b>MON SUIVI PSY</b>
                </h1>
                <h3>
                  Mieux connaître mes symptômes pour un meilleur accompagnement
                  par mon médecin
                </h3>
                <br />
                <br />
                <div>
                  <a href="#">
                    <img width={200} src="/img/app-store-badge.svg" alt="" />
                  </a>
                  <a href="#">
                    <img width={200} src="/img/google-play-badge.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-auto">
              <Image
                src="/img/demo-screen-1.png"
                className="img-fluid"
                alt=""
                width={300}
                height={580}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Pourquoi() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Pourquoi mon suivi psy?</h2>
          <p className="text-muted">
            Les troubles psychiatriques affectent 1 personne sur 5 chaque année
            (donnée OMS). Trouver le bon traitement peut prendre plusieurs
            années. Pendant ce temps-là, les symptômes évoluent et peuvent
            devenir chroniques. L’état clinique peut s’aggraver et le traitement
            devenir moins efficace.
          </p>
          <p>
            Plus les informations concernant mes symptômes sont proches de la
            réalité, de ce que je vis, plus mon médecin sera en mesure de me
            prescrire le bon traitement et adapter au mieux mon suivi.
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-12 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary" />
                    <h3>Service gratuit anonyme</h3>
                    <p className="text-muted">
                      Le services est totalement gratuit, anonyme et sans
                      création de compte
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary" />
                    <h3>Sécurité des données</h3>
                    <p className="text-muted">
                      La personne reste propriétaire de ses données et ne les
                      partage avec son praticien que s’il le souhaite
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Unlimited Features, Unlimited Fun</h2>
          <p className="text-muted">
            Check out what you can do with this app theme!
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img
                      src="/img/demo-screen-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="button" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary" />
                    <h3>Device Mockups</h3>
                    <p className="text-muted">
                      Ready to use HTML/CSS device mockups, no Photoshop
                      required!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary" />
                    <h3>Flexible Use</h3>
                    <p className="text-muted">
                      Put an image, video, animation, or anything else in the
                      screen!
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary" />
                    <h3>Free to Use</h3>
                    <p className="text-muted">
                      As always, this theme is free to download and use for any
                      purpose!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary" />
                    <h3>Open Source</h3>
                    <p className="text-muted">
                      Since this theme is MIT licensed, you can use it
                      commercially!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            Stop waiting.
            <br />
            Start building.
          </h2>
          <a
            href="#contact"
            className="btn btn-outline btn-xl js-scroll-trigger"
          >
            Let&pos;s Get Started!
          </a>
        </div>
      </div>
      <div className="overlay" />
    </section>
  );
}

function Section4() {
  return (
    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          We
          <i className="fas fa-heart" />
          new friends!
        </h2>
        <ul className="list-inline list-social">
          <li className="list-inline-item social-twitter">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="list-inline-item social-facebook">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="list-inline-item social-google-plus">
            <a href="#">
              <i className="fab fa-google-plus-g" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; Your Website 2020. All Rights Reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
