#!/bin/bash

# Запускаем сервер в фоне
node /usr/src/app/server.js &

# Даем серверу немного времени на запуск
sleep 2

# Проверяем, работает ли сервер, и если да, продолжаем
if curl --silent --fail http://localhost:8080 > /dev/null; then
  echo "HTTP server started successfully on port 8080"
else
  echo "Server failed to start" >&2
  exit 1
fi

# Чтобы контейнер не завершался, оставляем его работать
tail -f /dev/null
