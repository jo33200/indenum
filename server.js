// server.js
import express from 'express';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 3000;

// Utiliser Helmet pour sécuriser les en-têtes HTTP
app.use(helmet());

// Configurer les en-têtes CSP
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", 'https://cdnjs.cloudflare.com', 'https://fonts.googleapis.com'],
        imgSrc: ["'self'", 'data:','https://maps.googleapis.com', 'https://www.leboncoin.fr'],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // Remplace aussi ceci
      },
    })
  );

// Middleware pour gérer les requêtes statiques
app.use(express.static('dist')); // Change 'dist' par le dossier de build de Vite

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
