#!/bin/bash

# Запускаем сервер Node.js в фоновом режиме
node src/app/server.js &



# Сообщаем о запуске сервера
echo "HTTP server started on port 8080"

# Ожидаем завершения серверного процесса (не обязательно)
wait $(jobs -p)

# Или используем tail для "зависания" контейнера
# tail -f /dev/null
