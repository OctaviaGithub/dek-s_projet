const sqlite3 = require('sqlite3').verbose();


const initializeDatabase = () => {
    const db = new sqlite3.Database('./mydb.sqlite3');


    db.serialize(() => {
        db.run('DROP TABLE IF EXISTS renault');
        db.run('CREATE TABLE IF NOT EXISTS renault (id INTEGER PRIMARY KEY, name TEXT, description TEXT , url_img TEXT)');

        
        const stmt = db.prepare('INSERT OR IGNORE INTO renault (name, description, url_img) VALUES (?, ?, ?)');
        stmt.run('Renault Twingo Zen', 'Une petite renault Twingo Zen pour le plaisir des étudiants !','https://www.etsgalharret.fr/public/img/big/IMG4353minJPG_5ec7fdd27774d.JPG');
        stmt.run('Renault Twingo Caen', 'La petite voiture adaptée pour tout le monde dans la ville !','https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/368/SP/FR/RENAULT-TWINGO-2745828_1.JPG');
        stmt.run('Renault Zoé', 'La voiture 100% écologique et électrique !','https://images.caradisiac.com/logos/3/3/6/7/253367/S7-fiabilite-de-la-renault-zoe-la-maxi-fiche-occasion-de-caradisiac-175383.jpg');
        stmt.finalize();
    });


    return db;
};


module.exports = initializeDatabase;

