const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 8000;
let serveur = http.createServer((requete, reponse) => {
    console.log(requete.url);
    if(requete.url === '/') {
        let fileName = path.join(__dirname, 'pagesWeb', 'index.html');
        affichePageWeb(fileName, reponse);
    } else if (requete.url) {
        let fileName = path.join(__dirname, 'pagesWeb', requete.url);
        affichePageWeb(fileName, reponse);
    }
});

serveur.listen(PORT, () => console.log('Le service est démarré sur le port = ', PORT));

function affichePageWeb(fileName, reponse) {
    console.log('dans fonction affichePageWeb fileName=', fileName);
    fs.readFile( fileName, 'utf-8', (err, contenu) => {
        if (err) throw err;
        reponse.write(contenu, 'utf-8');
        reponse.end();
    });
}