using SEPMRA_PROD_MAN as PROD_API from './external/csn/SEPMRA_PROD_MAN';

service SEPMRA_PROD_MAN @(path: '/sap/opu/odata/sap/SEPMRA_PROD_MAN') {
	@cds.persistence.skip:false
	@cds.persistence.table
	entity SEPMRA_C_PD_Product as projection on PROD_API.SEPMRA_C_PD_ProductType;
}
