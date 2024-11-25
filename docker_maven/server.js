const http = require('http');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/run') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString(); // Преобразуем данные в строку
    });

    req.on('end', () => {
      const command = `mvn ${body.trim()}`;
      console.log(`Executing: ${command}`);

      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Stderr: ${stderr}`);
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(stdout);  // Отправляем результат работы команды
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(8080, '0.0.0.0', () => {  // Указываем 0.0.0.0 для прослушивания всех интерфейсов
  console.log('Server running on port 8080');
});

