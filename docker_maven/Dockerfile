# Используем официальный образ Maven
FROM maven:3.8.6-openjdk-11-slim AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файл pom.xml и скачиваем зависимости
COPY docker_maven/pom.xml .

# Копируем весь исходный код проекта
COPY docker_maven/src/ /app/src/

# Собираем проект с помощью Maven
RUN mvn clean install

# Устанавливаем образ для запуска (например, JAR-файл)
FROM openjdk:11-jre-slim

# Копируем собранный JAR-файл из стадии сборки
COPY --from=build /app/target/docker_maven-1.0-SNAPSHOT.jar /app/docker_maven.jar

# Открываем порт
EXPOSE 8080

# Запускаем приложение
CMD ["java", "-jar", "/app/docker_maven.jar"]
