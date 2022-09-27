import express from "express";
import env from "dotenv";
var cors = require("cors");

env.config();

const app = express();
app.use(cors());

// PORT
const PORT = process.env.PORT || 8080;

/** Parse the body - middleware */
app.use(express.json());

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    next();
});

app.listen(process.env.PORT, () => console.log("listening on port ", process.env.PORT));
