import Carousel from "../../components/Carousel";
import CardHome from "../../components/CardHome";
import Atelier from "../../assets/img/atelier.jpg";

const HomePage = () => {
  return (
    <div className="h-auto w-full pb-36">
      <Carousel />
      <CardHome />
      <section className="w-full flex flex-col items-center">
        <article className="max-w-[850px] flex items-center gap-4 ">
          <img src={Atelier} alt="Atelier" className="w-1/2 h-auto rounded-sm
          *" />
          <p className="text-left">
            Bienvenue sur votre espace de confiance pour la réparation de smartphones, tablettes, consoles de jeux et accessoires !
            <br/> Avec notre expertise, redonnez vie à vos appareils préférés sans compromis sur la qualité ni le prix.
            <br/> Nous savons à quel point votre technologie est essentielle au quotidien, c’est pourquoi nous proposons des réparations rapides et soignées, réalisées par des experts passionnés, quel que soit le modèle ou la marque.
            <br/>En quelques clics, consultez nos tarifs transparents et obtenez un devis personnalisé, adapté à vos besoins spécifiques.
            <br/>Vous recherchez également des appareils et accessoires d’occasion? Parcourez nos annonces mises à jour sur Le Bon Coin, directement accessibles depuis notre site pour dénicher des produits au meilleur rapport qualité-prix.
            <br/>Faites le choix de la qualité, de la fiabilité et de la réactivité : laissez-nous vous accompagner pour retrouver des appareils comme neufs.
          </p>
        </article>
      </section>
    </div>
  );
};

export default HomePage;
