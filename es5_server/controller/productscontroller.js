'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchAllProducts = fetchAllProducts;
exports.addProduct = addProduct;
var products = {};
var product_id = 1;
//products will be an array of product objects

function fetchAllProducts(req, res) {
    res.json(products);
}
function addProduct(req, res) {
    req.body.id = product_id;
    var productId = product_id++;
    products[productId] = req.body;
    res.json({ data: products, status: 'success' }, 200);
}