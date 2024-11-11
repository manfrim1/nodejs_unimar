const { Order } = require('../models');

exports.createOrder = async (req, res) => {
  try {
    const { ProductId, quantity } = req.body;

    const newOrder = await Order.create({
      ProductId,
      quantity,
      data: new Date()
    });
  
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating order' });
  }
};

exports.listOrders = async (req, res) => {
  try {
    const Orders = await Order.findAll();

    if (Orders.length === 0) {
      return res.sendStatus(204);
    }
  
    res.status(200).json(Orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error listing orders' });
  }
};
