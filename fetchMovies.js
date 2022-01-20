import fetch from "node-fetch";

export default async function fetchMovies() {
  const url = "https://lernia-kino-cms.herokuapp.com/api/movies";
  const res = await fetch(url);
  const payload = await res.json();

  for (let i = 0; i < payload.data.length; i++) {
    console.log(payload.data[i].id + " " + payload.data[i].attributes.title);
  }
  return payload.data;
}
