const odatav2proxy = require("@sap/cds-odata-v2-adapter-proxy")
const express = require("express")
const cds = require("@sap/cds")

const { PORT=3000 } = process.env
const app = express()

cds.serve("all").in(app)

app.use(odatav2proxy({ port: PORT }))

app.listen (PORT, ()=> console.info(`server listening on http:\/\/localhost:${PORT}`))

// Seed with sample data
cds.deploy('srv').to('sqlite::memory:',{primary:true}) .then (async db => {

	const { SEPMRA_C_PD_Product: Product } = db.entities('SEPMRA_PROD_MAN')

	console.log('Adding sample data...')
	const product = db.run (INSERT.into (Product+'') .entries (
		{
			Product: '123',
			Price: '14.30',
			Name: 'Transp.Tofflemire Matrizen Nr.5936',
			ActiveProduct: true
		},
		{
			Product: '190993',
			Price: '31.50',
			Name: 'Vita Modelling FLUID 250ml',
			ActiveProduct: true
		}
	))

  await Promise.all ([product])

}) .catch (console.error)
