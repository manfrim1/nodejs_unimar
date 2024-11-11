const express = require('express');
const app = express();
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const categorieRoutes = require('./routes/categorieRoutes');

app.use(express.json());

app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/categorie', categorieRoutes);

sequelize.sync().then(() => { app.listen(8000, () => { console.log('\nAPI running in http://localhost:8000'); }); });
