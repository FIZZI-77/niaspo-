FROM maven:3.9.5-eclipse-temurin-17

# Установка Node.js и NPM
RUN apt-get update && apt-get install -y nodejs npm && rm -rf /var/lib/apt/lists/*

# Указываем рабочую директорию
WORKDIR /usr/src/app

# Копируем настройки Maven, сервер и entrypoint скрипт
COPY docker_maven/settings.xml /root/.m2/settings.xml
COPY docker_maven/server.js /usr/src/app/
COPY docker_maven/entrypoint.sh /usr/local/bin/

# Делаем скрипт entrypoint исполнимым
RUN chmod +x /usr/local/bin/entrypoint.sh

# Открываем порт 8080
EXPOSE 8080

# Указываем точку входа
ENTRYPOINT ["entrypoint.sh"]
