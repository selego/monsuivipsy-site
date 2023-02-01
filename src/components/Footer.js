import React from "react";
import Link from "next/link";

const LightLink = ({ href, children }) => (
  <Link href={href} passHref>
    <a
      href={href}
      style={{
        color: "white",
        fontSize: "0.8em",
      }}
    >
      {children}
    </a>
  </Link>
);

const Separator = () => (
  <span style={{ color: "white", marginRight: 5 }}>|</span>
);

export function Footer() {
  return (
    <footer
      style={{
        marginTop: 150,
        background: "var(--primary)",
        color: "white",
      }}
    >
      <div className="container text-center">
        <p>
          <a style={{ color: "white" }} href="https://fabrique.social.gouv.fr">
            La Fabrique Numérique des Ministères Sociaux
          </a>
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <LightLink href="/mentions-legales">mentions légales</LightLink>
          </li>
          <Separator />
          <li className="list-inline-item">
            <LightLink href="/politique-confidentialite">
              politique de confidentialité
            </LightLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
