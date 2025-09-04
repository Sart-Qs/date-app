# Build and run in production mode
docker-compose up --build

# Build and run in development mode
docker-compose -f docker-compose.dev.yaml up --build

# Run in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f