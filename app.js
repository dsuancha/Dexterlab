//app

const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const pool = new Pool({
    user: 'dexterlab',
    password: 'dexterlab',
    host: 'localhost',
    database: 'Dexter',
    port: 5432,
});

app.use(bodyParser.json());

pool.connect().then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.error('Failed to connect to database:', err);
});


//app.get('/cientifico/:age', async (req, res) => {
  //  const ageToSearch = parseInt(req.params.age);
    //try {
      //  const query = {
        //    text: 'SELECT * FROM "Cientificos" WHERE "Age" = $1 LIMIT 1',
          //  values: [ageToSearch],
       // };
        //const result = await pool.query(query);
        //res.json(result.rows);
   // } catch (error) {
     //   console.error('Error querying the database:', error);
       // res.status(500).send('Internal server error');
   // }
//});

app.post('/create', async (req, res) => {
    const { Namesof, Age, Gender, Occupation, Special_Ability } = req.body;

    if (!Namesof || !Age || !Gender || !Occupation || !Special_Ability) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    try {
        const query = {
            text: 'INSERT INTO Cientificos (Namesof, Age, Gender, Occupation, Special_Ability) VALUES ($1, $2, $3, $4, $5)',
            values: [Namesof, Age, Gender, Occupation, Special_Ability],
        };
        const result = await pool.query(query);
        res.json({ success: true, message: 'Datos del departamento de acceso insertados correctamente' });
    } catch (error) {
        console.error('Error al insertar datos en la tabla de departamentos', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});