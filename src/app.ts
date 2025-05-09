import express from "express";
import routes from "./routes/index";
import swaggerDocs from "./utils/swagger";

const port: number = 3000;
const app = express();

app.use(express.json());

app.listen(port, async () => {
  console.log(`App is running at http://localhost:${port}`);

  routes(app);

  swaggerDocs(app, port);
});