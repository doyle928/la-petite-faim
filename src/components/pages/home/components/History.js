import React from "react";
import "./History.css";
import historyImage from "../../../../styles/images/body/history/history-1.jpg";

function History() {
  return (
    <div className="history-container">
      <div className="history-text">
        <h2>NOTRE HISTOIRE</h2>
        <span></span>
        <h3>Plus qu’une Boulangerie</h3>
        <p>
          La Petite Faim, c’est avant tout une histoire de goût et… d’amour !
        </p>
        <p>
          Toute petite, dans le Poitou, Alice confectionnait des gâteaux pour sa
          famille, et, en Lorraine, au petit matin, Sacha aimait suivre son
          papa, voir le boulanger enfourner le pain avant d’aller sur les
          brocantes.
        </p>
        <p>
          Elle a obtenu un DUT Techniques de commercialisation, et lui un CAP
          pâtisserie.
          <br />
          Ils se sont rencontrés en 2016, à Rouen, à l’INBP (Institut national
          de Boulangerie-Pâtisserie).
        </p>
        <p>
          Brevet de maîtrise pâtisserie en poche, pour Sacha, et CAP pâtisserie
          pour Alice, ils sont, ensemble, montés à Paris où ils ont perfectionné
          leur art : Sacha chez Pierre Hermé puis au Georges V et Alice chez
          Ladurée.
        </p>
        <p>
          Riches de leur seule passion, ils reprennent en 2017, à Blois, une
          boulangerie de quartier, le Théâtre du pain, où ils connaissent un
          réel succès grâce à leurs fameux macarons notamment.
        </p>
        <p>
          Mais il fallait qu’ils partagent avec leurs clients, outre le goût des
          bonnes choses, des moments de confort et de convivialité ; et c’est
          ainsi qu’est née l’idée de faire de chaque magasin un salon de thé,
          chic et chaleureux.
        </p>
        <p>C’est en 2019 que ce concept prend corps.</p>
        <p>
          La boutique, accueillante comme une maison de famille, propose ainsi
          une large gamme de gourmandises salées et sucrées : ficelles apéro,
          fougasses, baguettes de Tradition, desserts chocolat, etc.
        </p>
        <p>
          Ouverte 6 jours sur 7, la boulangerie devient un incontournable dans
          la journée de chacun, que ce soit pour un petit-déjeuner gourmand, un
          déjeuner sur le pouce ou un goûter en famille.
        </p>
      </div>
      <div className="history-image">
        <img src={historyImage} />
      </div>
    </div>
  );
}

export default History;
