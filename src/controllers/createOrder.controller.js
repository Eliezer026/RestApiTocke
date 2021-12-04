export const createOrder = (req, res) => {
  const { cart } = req.body;

  res.send("ok");
  console.log(cart);
};

export const cancelOrder = (req, res) => {
  const { _id } = req.params;

  console.log(_id);

  res.send("delete correctament");
};

export const getOrders = (req, res) => {
  const data = [
    {
      _id: "1",
      orderID: "010102",
      items: {
        _id: "1",
        category: "pan",
        description: "fgfdgffdgfgd",
        images:
          "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg",
        name: "papas pollo 1",
        price: 210,
        readyTime: 30,
        unit: 1,
      },
      totalAmount: "210",
      orderDate: new Date(),
      paidThrough: "dasd",
      paymentResponse: "zcxc",
      orderStatus: "completed",
    },
    {
      _id: "2",
      orderID: "010103",
      items: {
        _id: "2",
        category: "pan",
        description: "fgfdgffdgfgd",
        images:
          "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg",
        name: "papas pollo 1",
        price: 290,
        readyTime: 30,
        unit: 1,
      },
      totalAmount: "220",
      orderDate: new Date(),
      paidThrough: "dasd",
      paymentResponse: "zcxc",
      orderStatus: "warning",
    },
    {
      _id: "3",
      orderID: "010104",
      items: {
        _id: "3",
        category: "pann",
        description: "aasdsaedfsz",
        images:
          "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg",
        name: "papas pollo 1",
        price: 390,
        readyTime: 30,
        unit: 3,
      },
      totalAmount: "1170",
      orderDate: new Date(),
      paidThrough: "dasd",
      paymentResponse: "zcxc",
      orderStatus: "cancelled",
    },
  ];

  res.json(data);
};
