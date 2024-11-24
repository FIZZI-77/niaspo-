# Используем официальный образ Maven
FROM maven:3.9.5-eclipse-temurin-17

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем `pom.xml` и исходный код в контейнер
COPY pom.xml /app
COPY src /app/src

# Выполняем сборку Maven
RUN mvn clean install

# Указываем команду по умолчанию (если требуется)
CMD ["mvn", "spring-boot:run"]
