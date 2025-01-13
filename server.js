import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Determina la directory corrente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve i file statici dalla cartella dist
app.use(express.static(path.join(__dirname, 'dist')));

// Gestisci tutte le route con index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Porta dinamica per Heroku
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
