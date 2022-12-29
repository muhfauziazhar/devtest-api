const ReportProduct = require("../models/reportProduct");

exports.getReportProduct = (req, res) => {
    ReportProduct.getReportProduct((error, reportProduct) => {
        if (error) throw error;

        res.status(200).json(reportProduct);
    });
};
