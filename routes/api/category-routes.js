const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    // find one category by its `id` value
    const categories = await Category.findAll({
      
    });
    res.json(categories);

    // be sure to include its associated Products
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // find one category by its `id` value
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.json(category);

    // be sure to include its associated Products
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  console.log("post category route")
  try{
  Category.create({
    category_name: req.body.category_name
  })
  .then(function(category){
    console.log("category", category)
    res.json(category)
  })
  } catch (err) {
    console.log("error", error)
    res.status(400).json(err)
  }
});

router.put("/:id", async (req, res) => {
  console.log("put request")
   // update a category by its `id` 
   try{
    const catData = await Category.update(
    {category_name: req.body.category_name},
    {
      where: {id: req.params.id}
    }
  );
  res.status(200).json(catData);
   } catch (err) {
    res.status(400).json(err)
   }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try{
    Category.destroy({
      where: {
        id: req.params.id
      }

    })
  } catch (err) {
    res.status(400).json(err)
  }
});

module.exports = router;
