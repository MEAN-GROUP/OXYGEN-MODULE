const express = require('express');
const app = express();
const cors=require('cors');
const path = require('path');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const oxygenBll = require('./BLL/oxygen');

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

// Swagger set up
const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Oxygen Module",
        version: "1.0.0",
        description:
          "A detail description of Oxygen cylinder",
        contact: {
          name: "Arati Muduli",
          email: "arati@gmail.com"
        }
      },
      servers: [
        {
          url: "http://localhost:3006"
        }
      ]
    },
    apis: ["app.js", `${__dirname}/BLL/oxygen.js` ]
  };
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve);
app.get("/api-docs", swaggerUI.setup(specs, { explorer: true }) );


app.use('/oxygen', oxygenBll);




app.listen(3006);