const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try{
    const tags = await Tag.findAll()
    res.json(tags)
  }catch (err){
    console.error(err);
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try{
    const tag = await Tag.findByPk(req.params.id, {
      include: [{model:Product }],
    });
    res.json(tag)
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  try{
    Tag.create({
      tag_name: req.body.tag_name
    })
    .then(function(tag){
      console.log("tag", tag)
      res.json
    })
  } catch (err) {
    res.status(400).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
