FROM openjdk:24-jdk-slim

WORKDIR /app

COPY gradlew ./
COPY gradle/ ./gradle/
COPY build.gradle ./
COPY settings.gradle ./

RUN chmod +x ./gradlew

COPY src/ ./src/

RUN ./gradlew build -x test

# Expose port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "build/libs/demo-0.0.1-SNAPSHOT.jar"]