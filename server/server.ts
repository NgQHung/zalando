import express from "express";
import env from "dotenv";
import helmet from "helmet";
import bodyParser from "body-parser";
var cors = require("cors");

// PORT
const PORT = process.env.PORT || 8080;

env.config();

const app = express();
app.use(cors());
app.use(helmet());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

/** Parse the body - middleware */
app.use(express.json());
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    next();
});

// routes
app.get("/", (req, res) => {
    res.json("hello world");
});

app.listen(process.env.PORT, () => console.log("listening on port ", process.env.PORT));
