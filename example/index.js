import { Router, WebApp } from "../mod.js";

const app = new WebApp();
const router = new Router();

router.get("/", (_eq, res) => {
  res.reply = "Hello, JavaScript!";
});

app.set(router);
app.listen(8080);