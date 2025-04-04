import React from "react";
import Bloc from "../composants/Bloc";
import Bouton from "../composants/Bouton";
import Ligne from "../composants/Ligne";
import Icons from "../constantes/Icone";

export default function Contact() {
  return (
    <div id="contact" className="mh-15">
      <p className="texte-5 texte-couleur-bleu-petrole ta-mil td-souligne">
        Contact
      </p>
      <Ligne className={"jc-mil mh-10"}>
        <Bloc type={"myn"} nombre={7}>
          <p className="texte-4">
            Cliquez sur le bouton ci-dessous pour me contacter directement sur
            WhatsApp.
          </p>
          <br />
          <center>
            <Bouton type={"succes"}>
              <a
                href="https://wa.me/24177181090?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services."
                style={{ textDecoration: "none", color: "white" }}
              >
                contactez moi sur whatsapp
              </a>
            </Bouton>
          </center>
        </Bloc>
        <Bloc type={"myn"} nombre={4} mobile={11} className={"col ai-mil"}>
          <Icons.Avatar height={300} width={300} className="image" />
        </Bloc>
      </Ligne>
    </div>
  );
}
