# Используем официальный образ Maven как базовый
FROM maven:latest

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы проекта в контейнер
COPY . /app

# Собираем проект
RUN mvn clean install

# Указываем команду для запуска
CMD ["mvn", "spring-boot:run"]
