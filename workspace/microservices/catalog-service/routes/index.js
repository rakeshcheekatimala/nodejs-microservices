const express = require("express");
const router = express.Router();

const CatalogService = require('./../lib/CatalogService')

router.get("/items", async(req,res)=>{
  try {
    const items =  await CatalogService.getAll();
    return res.json(items)
  }
  catch(error) {
    console.log(error);
    return res.status(500).json({
      error:'Internal server error'
    })
  }
})

router.get("/items/:id", async(req,res)=>{
  try {
    const item =  await CatalogService.getOne(req.params.id);
    if(!item) {
      return res.status(404).json({error:'Item not found '});
    }
    return res.json(item)
  }
  catch(error) {
    console.log(error);
    return res.status(500).json({
      error:'Internal server error'
    })
  }
})


router.post("/items", async(req,res)=>{
  try {
    const newItem =  await CatalogService.create(req.body);
    return res.json(newItem)
  }
  catch(error) {
    console.log(error);
    return res.status(500).json({
      error:'Internal server error'
    })
  }
})

router.put("/items/:id", async(req,res)=>{
  try {
    const updatedItem =  await CatalogService.update(req.params.id,req.body);
    if(!updatedItem) {
      return res.status(404).json({error:'Item not found '});
    }
    return res.json(updatedItem)
  }
  catch(error) {
    console.log(error);
    return res.status(500).json({
      error:'Internal server error'
    })
  }
})

router.delete("/items/:id", async(req,res)=>{
  try {
    const deletedItem =  await CatalogService.remove(req.params.id,req.body);
    if(deletedItem.deletedCount===0) {
      return res.status(404).json({error:'Item not found '});
    }
    return res.status(204).send()
  }
  catch(error) {
    console.log(error);
    return res.status(500).json({
      error:'Internal server error'
    })
  }
})


module.exports = router;
