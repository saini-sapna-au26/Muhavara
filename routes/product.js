const Product = require("../model/Product");
const router = require("express").Router();


//CREATE

router.post("/createproduct", async (req, res) => {


    try {
        const newProduct = new Product({
            "title": req.body.title,
            "desc": req.body.desc,
            "img": req.body.img,
            "categories": req.body.categories,
            "size": req.body.size,
            "color": req.body.color,
            "price": req.body.price
        });

        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }



});

//UPDATE
router.put("/update/:id",async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, {
            $set: req.body,
        }, { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id",async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCTS
router.get("/products", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

//find product on category basis and filter
router.put("/products/:cat", async (req, res) => {
    try {
        const product = await Product.find();
        console.log(req.params.cat)
        const lowerCase = req.params.cat.toLowerCase();
        let filteredData = product.filter((el) => {
            
            //return the item which contains the user input
        
                return el.categories.toLowerCase().includes(lowerCase)
        })
        console.log(filteredData)
        res.status(200).json(filteredData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;