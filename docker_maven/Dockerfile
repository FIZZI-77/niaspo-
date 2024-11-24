# Используем официальный образ Maven с OpenJDK 17
FROM maven:latest AS build

# Копируем pom.xml и все исходники
COPY pom.xml /app/
COPY src /app/src/

# Переходим в директорию /app и выполняем сборку проекта
WORKDIR /app
RUN mvn clean install

# Извлекаем JAR файл и копируем его в новый контейнер
FROM openjdk:17-jdk-slim
COPY --from=build /app/target/docker_maven-1.0-SNAPSHOT.jar /app/docker_maven.jar

ENTRYPOINT ["java", "-jar", "/app/docker_maven.jar"]
