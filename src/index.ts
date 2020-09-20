import express from "express"
import groceryRoutes from './routes/grocery';

const app = express();
const port = 8080;

app.use(express.json());

app.use("/groceries", groceryRoutes);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});