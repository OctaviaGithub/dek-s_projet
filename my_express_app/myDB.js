const sqlite3 = require('sqlite3').verbose();


const initializeDatabase = () => {
    const db = new sqlite3.Database('./mydb.sqlite3');


    db.serialize(() => {
        db.run('DROP TABLE IF EXISTS renault');
        db.run('DROP TABLE IF EXISTS peugeot');
        db.run('DROP TABLE IF EXISTS utilisateur');
        db.run('CREATE TABLE IF NOT EXISTS utilisateur (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT)');
        db.run('CREATE TABLE IF NOT EXISTS renault (id INTEGER PRIMARY KEY, name TEXT, description TEXT , url_img TEXT, price INTEGER)');
        db.run('CREATE TABLE IF NOT EXISTS peugeot (id INTEGER PRIMARY KEY, name TEXT, description TEXT , url_img TEXT, price INTEGER)');

        const stmt = db.prepare('INSERT OR IGNORE INTO renault (name, description, url_img,price) VALUES (?, ?, ?,?)');
        stmt.run('Renault Twingo Zen', 'Une petite renault Twingo Zen pour le plaisir des étudiants !', 'https://www.etsgalharret.fr/public/img/big/IMG4353minJPG_5ec7fdd27774d.JPG', '2499');
        stmt.run('Renault Twingo Caen', 'La petite voiture adaptée pour tout le monde dans la ville !', 'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/368/SP/FR/RENAULT-TWINGO-2745828_1.JPG', '1599');
        stmt.run('Renault Zoé', 'La voiture 100% écologique et électrique !', 'https://images.caradisiac.com/logos/3/3/6/7/253367/S7-fiabilite-de-la-renault-zoe-la-maxi-fiche-occasion-de-caradisiac-175383.jpg', '1200');
        stmt.finalize();

        // Ajoutez des exemples d'utilisateurs à la table utilisateur
        const ut = db.prepare('INSERT OR IGNORE INTO utilisateur (username, password) VALUES (?, ?)');
        ut.run('utilisateur1', 'motdepasse1'); // Remplacez ces valeurs par celles de votre choix
        ut.run('utilisateur2', 'motdepasse2'); // Remplacez ces valeurs par celles de votre choix
        ut.finalize();

        const decl = db.prepare('INSERT OR IGNORE INTO peugeot (name, description, url_img,price) VALUES (?,?,?,?)');
        decl.run('Peugeot 406', 'Une 406 parfaite pour les longs trajets', 'https://www.ouestfrance-auto.com/p/yahooto/dvu2yb_346450_1_fc51d2b6619c68449d9b3fe9db10cecf117c87ff.jpg', '1599');
        decl.run('Peugeot 406 Coupé', 'Une peugepot 406 supérieur et très confortable', 'https://www.kuttler-kiefferautos.fr/573/1/occasion-peugeot-406-coupe-v6-pack-1998.jpg', '1200');
        decl.run('Peugeot 206', 'Meilleure voiture pour les débutants sortant du permis !', 'https://images.caradisiac.com/images/2/0/6/7/172067/S0-la-peugeot-206-en-occasion-les-meilleures-et-les-pires-versions-572179.jpg', '2499');
    });


    return db;
};


module.exports = initializeDatabase;