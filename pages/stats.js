import React from "react";
import Footer from "components/footer";
import Navigation from "components/navigation";

const Stats = () => {
  return (
    <div
      className="bg-right-top bg-no-repeat"
      style={{ backgroundImage: `url("images/other/hero-bg.svg")` }}
    >      
      <Navigation />
      <div>
        <iframe
          src="https://matomo-metabase-monsuivipsy.fabrique.social.gouv.fr/public/dashboard/56aa504a-d770-4185-b08a-faa6eb2427d5"
          frameBorder="0"
          title="MonPsy Santé, statistiques"
          width="90%"
          height="600"
          style={{ display: "block", margin: "0 auto", padding: "2rem 0" }}
          allowTransparency
        />
      </div>
      <Footer />
    </div>
  );
};

export default Stats;
