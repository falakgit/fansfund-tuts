/**
 * @license Apache-2.0
 * @copyright 2024 codewithsadee
 */
 
'use strict';


/**
 * custom modules
 */
const paymentApi = require('../api/payment.api.js');
const contributeService = require('../services/contribute_service');


const checkout = async (req, res) =>{
try {
  console.log("req.body:", req.body);
console.log("amount:", req.body.amount);


const {amount } =  req.body ;

const invoice = await paymentApi.createInvoice(amount);

  const data = {
     ...req.body,
     order_id: invoice.result.order_id,
     payment_status: invoice.result.status
  }  
    
    await contributeService.storeData(data);
    
    console.log(invoice);

    res.json(invoice)

} catch (error) {
  console.error(error);
  res.status(500).json({ error: "Internal Server Error" });



} 

};
module.exports = {
    checkout,

};