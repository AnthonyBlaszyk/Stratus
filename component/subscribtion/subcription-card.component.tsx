import React from "react";
import Image from "next/image";

export const SubscriptionCardComponent = (
  descriptionText: JSX.Element,
  contenuText: JSX.Element,
  cardTitle: string,
  price: number
) => {
  const [cardContent, setCardContent] = React.useState("Description");

  function getStarterText(): JSX.Element {
    if (cardContent === "Description") {
      return descriptionText;
    } else {
      return contenuText;
    }
  }

  return (
    <>
      <div className="bg-purple flex">
        <div className="starterContent">
          <div className="starterHeader flex">
            <h2 className="subscribtion-card-title">{cardTitle}</h2>
            <button onClick={() => setCardContent("Description")}>
              {cardContent === "Description" ? (
                <>
                <p className="underline">Description</p>
                <span className="underlineSpan"></span>
                </>
              ) : (
                <>
                <p className="underline">Description</p>
                <span className="underlineSpanNone"></span>
                </>
              )}
            </button>
            <button onClick={() => setCardContent("Contenu")}>
              {cardContent === "Contenu" ? (
                <>
                <p className="underline">Contenu</p>
                <span className="underlineSpan"></span>
                </>
              ) : (
                <>
                <p className="underline">Contenu</p>
                <span className="underlineSpanNone"></span>
                </>
              )}
            </button>
          </div>

          <div className="starterText">{getStarterText()}</div>
          <span className="underlineSpan"></span>
          <div className="footer-card-button-group flex">
            <button className="footer-card-button">{price} euros <span className="ttc">TTC</span></button>
            <button className="footer-card-button">Je veux ce pack</button>
          </div>
        </div>
        <div>
          <Image
            src="/img/random01.jpg"
            alt="Landscape picture"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
};