const products =[]

//Products will be an array of Products objects


class ProductsController{


    //Get all Products


static getAllProducts (req,res){

        return res.status(200)

        .json({

            status: 'Success',

            products,

        });

    }



    //Add a Products to the products hash 

    static addProduct (req,res) {

        let product = {
                 id : productId,

        name : req.body.name,

        price : req.body.price,

        item : req.body.item,
};

        const productId = products.length + 1;

        products.push(product);

        res.status(200).json({

            message: 'New Product successfully added!',

             status: 'Success',

              product: products[productId - 1],

            });

            req.checkBody("product.name", "Product name must be a text").isAlpha().notEmpty();

            req.checkBody("product.price", "Product name must be a text").isNumber().notEmpty(); 

            req.checkBody("product.item", "Product name must be a text").notEmpty(); 

            

                let errors = req.validationErrors();

                if (errors) {

                    res.send(errors);

                    return;

                } else {

                    //...

                }

    }

    

   

    //Find a Sale Record from the sales hash using the saleId

    static getProduct(req,res){


        let productId = req.params.id; 

        if(products[productId -1]){

            return res.status(200).json(products[productId - 1]);

        }


        return res.status(404).json({

            message:` There is no product with the id of ${productId}`,

            error:true

        })

    }


    static UpdateProduct(req,res){

        const productId = req.params.id; 

        if( products[productId -1 ]){

            const newProoductDetails = {

                id: productId,

                name: req.body.name,

                price: req.body.price,

                item: req.body.item,

            };

            products[productId - 1] = newProoductDetails;

            return res.status(200)

            .json({

                status: 'Success',

               updatedAProduct: products[productId - 1]

            });

        }


        return res.status(404).json({

            message:` There is no product with the id of ${productId}`,

            error:true

        })

    }


    static deleteProduct(req,res){


        let productId = req.params.id; 

        if( products[productId - 1]){

            products.splice(productId - 1, 1);

            return res.status(200).json({

                status: 'Success',

               message: `product with the id of ${productId} deleted successfully`

            });

        }


        return res.status(404).json({

            message:` There is no product with the id of ${productId}`,

            error:true

        })

    }


}


export default ProductsController;
