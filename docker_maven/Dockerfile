FROM maven:latest

RUN apt-get update && apt-get install -y nodejs npm && rm -rf /var/lib/apt/lists/*
WORKDIR /usr/src/app
COPY docker_maven/settings.xml /root/.m2/settings.xml
COPY docker_maven/server.js /usr/src/app/
COPY docker_maven/entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh
EXPOSE 8080

ENTRYPOINT ["entrypoint.sh"]
