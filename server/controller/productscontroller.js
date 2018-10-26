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
        }
