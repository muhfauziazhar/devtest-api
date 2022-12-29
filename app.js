const express = require("express");
const app = express();
const port = 3000;
const reportProduct = require("./routes/reportProduct");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/report-product", reportProduct);

app.listen(port, () => {
    console.log(`Devtest API listening on port ${port}`);
});
