const express = require('express');



const setupRoutes = (app, db) => {
    app.get('/renaults', (req, res) => {
        db.all('SELECT * FROM renault', [], (err, rows) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(rows);
            }
        });
    });
    app.get('/api/message', (_req, res) => {
        res.json({ message: 'https://images.ctfassets.net/uaddx06iwzdz/1sfLB4IrdwYgUAZBoT3phQ/5cde5764f2813e686f5fc54980099161/bmw-x4-l-02.jpg' });
      });
      const items = [
        { id: 1, name: 'Peugeot Focus' },
        { id: 2, name: 'Porshe 911' },
      ];
    app.get('/api/items', (_req, res) => {
        res.json(items);
    });

    app.get('/peugeot', (_req,res)=>{
        db.all('SELECT * FROM peugeot', [], (err,rows) =>{
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(rows);
            }
        })
    })

};


module.exports = setupRoutes;