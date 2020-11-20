import React from "react";
import Image from "next/image";

export function Header() {
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
