# Используем образ Maven для сборки
FROM maven:latest AS build
WORKDIR /app
COPY . .
RUN mvn clean package

# Используем образ OpenJDK для выполнения
FROM openjdk:11-jre-slim
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]