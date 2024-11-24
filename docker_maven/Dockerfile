FROM maven:latest

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

COPY docker_maven/settings.xml /root/.m2/settings.xml
COPY docker_maven/server.js /usr/src/app/
COPY . /app

COPY docker_maven/entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh
EXPOSE 8080

ENTRYPOINT ["entrypoint.sh"]
