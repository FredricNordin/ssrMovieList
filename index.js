import express from "express";
import fs from "fs/promises";
const server = express();


server.get('/', async (request, response) => {
  const fileRender = await fs.readFile('./src/index.html');
  response.type('html');
  response.send(fileRender);
});

server.listen(5080);
console.log('SERVER IS UP AND RUNNING ON PORT 5080')