// const express = require('express');
// Ändern zu ES Module:
import express from 'express';

const app = express();
// const port = 3000;
app.get('/', (req, res) => res.send('Hallo von der Node.js API!'));
app.listen(3000, () => console.log(`Server läuft auf Port ${port}`));