const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const stripe = require("stripe")("sk_test_51Qb24qA5LhuPj8pKC8mlcXqDraAQiKnPBN6OQcaKTqUUQw8oRZvMX7Sk8rHOHWfgOxVByltoEDp77SGLAkoVJmnm00nWuv0qLy");

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', 
}));

app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  console.log(products);

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100, 
    },
    quantity: product.quantity || 1,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
