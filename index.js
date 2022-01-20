import express, { response } from "express";
import fs from "fs/promises";
import fetchMovies from "./fetchMovies.js";

const server = express();

server.get("/", async (request, response) => {
  const siteRender = await fs.readFile("./src/index.html");
  response.type("html");
  response.send(siteRender);
  const movies = await fetchMovies();
});

server.listen(5080);
console.log("SERVER IS UP AND RUNNING ON PORT 5080");
