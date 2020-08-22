var oProducts = require("./data/Products.json");

module.exports = db => {
  const { SEPMRA_C_PD_Product: Product } = db.entities(
    'PROD_API'
  )
  console.log("Insert  " + oProducts.length + " products")
  return cds.run ([
    INSERT.into(Product).entries(oProducts),
  ])
}