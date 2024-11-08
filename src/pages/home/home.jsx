import Carousel from "../../components/Carousel";
import CardHome from "../../components/CardHome";
import Atelier from "../../assets/img/atelier.jpg";
import Proximite from "../../assets/img/proximite.jpg";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center">
      <section className="w-full flex justify-center items-center">
        <Carousel /> 
      </section>
      <section className="w-full flex justify-center items-center py-20">
       <CardHome />
      </section>
      <section className="flex w-full flex-col items-center py-20 gap-10  bg-gray-100">
      <h2 className="text-xl font-bold">Notre Atelier</h2>
        <article className="flex max-w-[850px] items-center gap-10">
          <img
            src={Atelier}
            alt="Atelier"
            className="h-auto w-1/2 rounded-3xl"
          />
          <p className="text-left text-lg">
            Bienvenue sur votre <strong>espace de confiance</strong> pour la réparation 
            de <strong>smartphones</strong>, <strong>tablettes</strong>, <strong>consoles de jeux</strong> et <strong>accessoires</strong> !
            <br /> Avec notre expertise, redonnez vie à vos appareils 
            préférés <strong>sans compromis</strong> sur la qualité ni le prix.
            <br /> Nous savons à quel point votre technologie est essentielle au
            quotidien, c’est pourquoi nous proposons des <strong>réparations rapides</strong> 
            et <strong>soignées</strong>, réalisées par des experts passionnés, quel que soit 
            le <strong>modèle</strong> ou la <strong>marque</strong>.
            <br />
            En quelques clics, consultez{" "}
              <Link to="/tarifs" className="text-blue-500 underline">
                nos tarifs
              </Link>{" "}
              transparents et obtenez un{" "}
              <Link to="/devis" className="text-blue-500 underline">
                devis personnalisé
              </Link>{" "}
            , adapté à vos besoins spécifiques.
          </p>
          </article>
          <article>
            <p> Vous recherchez également des appareils et accessoires d’occasion?
            Parcourez nos annonces mises à jour sur Le Bon Coin, directement
            accessibles depuis notre site pour dénicher des produits au meilleur
            rapport qualité-prix.
            <br />
            Faites le choix de la qualité, de la fiabilité et de la réactivité :
            laissez-nous vous accompagner pour retrouver des appareils comme
            neufs.</p>
          </article>
        
      </section>
      <section className="flex w-full flex-col items-center py-20 gap-10">
        <h2 className="text-xl font-bold">Service de proximité : Prise en charge et livraison à domicile</h2>
        <article className="flex max-w-[850px] items-center gap-10 text-left">
          <div className="flex flex-col gap-10">
            <p>
              Pour faciliter la réparation de vos appareils, nous proposons <strong>un service de proximité</strong> :<br/> notre équipe vient directement à <strong>votre domicile</strong> pour récupérer votre matériel endommagé, puis vous le <strong>ramène</strong> une fois la réparation effectuée.<br/> <strong>Plus besoin de vous déplacer</strong> !<br/> Nous couvrons un large périmètre pour vous offrir un service simple et rapide.
            </p>
            <p>
            Cliquez ici pour consulter la liste des communes desservies
            </p>
            <p>
              prendre rendez-vous dès aujourd’hui.
            </p>
          </div>
          <img
          src={Proximite} 
          alt="image d'un coursier à vélo"
          className="* h-auto w-1/2 rounded-t-full"
          />
        </article>
      </section>
    </div>
  );
};

export default HomePage;
