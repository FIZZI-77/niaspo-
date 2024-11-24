# Используем официальный образ Maven с OpenJDK
FROM maven:latest AS build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем POM и исходники в контейнер
COPY pom.xml .
COPY src ./src

# Выполняем сборку Maven для проверки зависимостей и компиляции
RUN mvn clean install

# Команда по умолчанию для запуска приложения
CMD ["mvn", "spring-boot:run"]
