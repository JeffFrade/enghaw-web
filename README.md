# EngHaw WEB
Interface para web para consumir a API sobre Engenheiros do Hawaii / Pouca Vogal / Humberto Gessinger.

---
## Configuração do Ambiente
A configuração do ambiente é feita via `docker` utilizando `docker-compose`.

O `docker` possui os seguintes containers:

- `enghaw-web-node` => Container do Node na versão `12` 

Para executar todos os containers, utilizar `docker-compose up -d`

---
## Configuração da Aplicação:
- Executar o comand `npm install`
- Copiar `.env.example` para `.env`

---
## Servindo a Aplicação
Caso não tenha alterado a variável `NODE_NG_PORT` no `.env`, basta acessar `http://localhost:4200` que será levado a interface web
