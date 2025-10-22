// const express = require("express");
// const redis = require("redis");
import express from "express";
import redis from "redis";

const app = express();
const port = 8080;

const client = redis.createClient({ url: "redis://redis:6379" });
client.on("error", (err) => console.log("Redis Client Error\n", err));
await client.connect();

await client.set("visits", 0);

app.get("/", async (req, res) => {
  const visits = (await client.get("visits")) || "0";
  res.send(`
      <h1>Anzahl der Besuche: ${visits}</h1>
      <p>Lade die Seite neu, um den Zähler zu erhöhen.</p>
    `);
  await client.set("visits", parseInt(visits) + 1);
});
app.listen(port, () => {
  console.log(`Besucherzähler-App lauscht auf Port ${port}!`);
});
