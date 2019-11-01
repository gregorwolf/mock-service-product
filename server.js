const express = require('express')
const cds = require('@sap/cds')

const { PORT=3000 } = process.env
const app = express()

cds.serve('all').in(app)

app.listen (PORT, ()=> console.info(`server listening on http://localhost:${PORT}`))

// Seed with sample data
cds.deploy('srv').to('sqlite::memory:',{primary:true}) .then (async db => {

	const { SEPMRA_C_PD_Product: Product } = db.entities('SEPMRA_PROD_MAN')

	console.log('Adding sample data...')
	const product = db.run (INSERT.into (Product+'') .entries (
		{
			Product: '1003764',
			Price: '28238',
			Name: 'Dietmar-Hopp-Allee',
			ActiveProduct: true
		}
	))

  await Promise.all ([product])

}) .catch (console.error)
