const express = require('express');
const app = express();
const { sequelize } = require('./models');
const usuarioRoutes = require('./routes/rotasUsuario');
const produtoRoutes = require('./routes/rotasProduto');
const categoriasRoutes = require('./routes/rotasCategoria');

app.use(express.json());

app.use('/users', usuarioRoutes);
app.use('/produtos', produtoRoutes);
app.use('/categorias', categoriasRoutes);

sequelize.sync().then(() => { app.listen(8000, () => { console.log('\nAPI running in http://localhost:8000'); }); });
