const sales =[]

//Products will be an array of sales objects


class salesController{


    //Get all sales


static getAllProducts (req,res){

        return res.status(200)

        .json({

            status: 'Success',

            products,

        });

    }




//Add a Sale Record to the sales hash

static addSale (req,res) {

    let sale = {
      id : saleId,

    name : req.body.name,

    price : req.body.price,

    item : req.body.item,
};

    const saleId = sales.length + 1;

    sales.push(sale);

    res.status(200).json({

        message: 'New Sales record successfully Created!',

         status: 'Success',

          sale: sales[saleId - 1],

        });

}

//Find a Sale Record from the sales hash using the saleId

  static getSale(req,res){


    let saleId = req.params.id; 

    if(sales[saleId -1]){

        return res.status(200).json(sales[saleId - 1]);

    }


    return res.status(404).json({

        message:` There is no sale record with the id of ${saleId}`,

        error:true

    })

}





}


export default SalesController;