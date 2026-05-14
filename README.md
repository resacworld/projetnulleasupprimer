# Node.js + React (Vite)

Stack : Express backend + React/Vite frontend, conteneurisé avec Docker.

## Développement local

```bash
# Backend
cd backend && npm install && npm run dev

# Frontend (dans un autre terminal)
cd frontend && npm install && npm run dev
```

Frontend : http://localhost:5173  
Backend : http://localhost:3000

## Docker Compose

```bash
docker compose up --build
```

Application accessible sur http://localhost:80

## Déploiement Coolify

1. Connecter le repo Git dans Coolify
2. Sélectionner **Docker Compose** comme type de déploiement
3. Coolify détecte automatiquement le `docker-compose.yml` à la racine
4. Lancer le déploiement
