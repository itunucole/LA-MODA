'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  import _express from 'express';
  
  var _express2 = _interopRequireDefault(_express);
  
  import _productsController from '../controllers/productsController';
  
  var _productsController2 = _interopRequireDefault(_productsController);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Router = _express2.default.Router();
  // const ProductsController = require('../controllers/productsController');
  // const express = require('express');
  
  
  //add a product 
  Router.post('/products', _productsController2.default.addProduct);
  
  //Fetch all products 
  Router.get('/products', _productsController2.default.fetchAllProducts);
  
  //Fetch a Single product
  Router.get('/products/:id', _productsController2.default.findProduct);
  
  //Update a Single product
  Router.put('/products/:id', _productsController2.default.UpdateProduct);
  
  //Delete a Single product
  Router.delete('/products/:id', _productsController2.default.deleteProduct);
  
  const _default = Router;
export { _default as default };
  