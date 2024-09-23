import Carousel from '../../components/Carousel';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Bienvenue sur notre site</h1>
      <Carousel />
      {/* Autres contenus de la page d'accueil */}
    </div>
  );
};

export default HomePage;