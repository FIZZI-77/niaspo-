const express = require('express');
const app = express();

// Получаем порт из переменной окружения, заданной на Render
const port = process.env.PORT || 8080;  // Если переменная окружения не установлена, используем порт 8080

// Маршрут для главной страницы
app.get('/', (req, res) => {
  res.send('<h1>Сайт запущен</h1><p>Ваше приложение успешно работает на платформе Render.</p>');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
