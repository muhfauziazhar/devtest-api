const connection = require("../config/db");

module.exports = {
    getReportProduct: (callback) => {
        const query = `
      SELECT product_name, area_name, SUM(compliance)/COUNT(*) * 100 as compliance_percentage
      FROM report_product
      INNER JOIN product, store, store_area
      WHERE report_product.product_id = product.product_id
      AND report_product.store_id = store.store_id
      AND store.area_id = store_area.area_id
      GROUP BY product_name, area_name
    `;

        connection.query(query, (error, results) => {
            if (error) throw error;

            callback(null, results);
        });
    },
};
