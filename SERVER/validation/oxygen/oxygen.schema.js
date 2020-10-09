const { Joi } = require('express-validation')

const schema = {
    addFilledOxyCylinders: Joi.object({
        cylinderType: Joi.string().required(),
        quantity: Joi.number().required(),
        oxygenSupplierId: Joi.string().required()
    }),
    addBlankOxyCylinders: Joi.object({
        cylinderType: Joi.string().required(),
        quantity: Joi.number().required() 
    }),    
    addMiscellaneousDelivery : Joi.object({
        cylinderType:  Joi.string().required(),   
        quantity: Joi.number().required(),
        name :Joi.string().required(),
         referenceNo : Joi.string().required(),
         address : Joi.string().required(),
         oxygenSupplierId: Joi.string().required()
 }),
    getOxyCyStockList : Joi.object({
          cylinderType : Joi.string().required()
    }),

    // getOrderList :Joi.object({
    //     status :  Joi.string().required()

    // }),

    getOrderDetail : Joi.object({
        orderNo :  Joi.string().required()
    }),


    exchangeRequest:Joi.object({
        detail:Joi.object({
            cylinderType: Joi.string().required(),
            quantity: Joi.number().required(),
            remark:Joi.string().required()
        
    }),

    cylinderExchange: Joi.object({
        cylinderType :Joi.string().required()
    }),

    deliverboydetail : Joi.object({
        deliverboyName:  Joi.string().required(),   
        dateOfBirth :Joi.date().required(),
        gender : Joi.string().required(),
        licenceNo : Joi.string().required(),
        address : Joi.string().required(),
        mobileNo : Joi.number().required(),
        fathername : Joi.string().required(),
        email : Joi.string().required()
 }),

 addDeliverOrder : Joi.object({
    patientName:  Joi.string().required(), 
    Id :  Joi.string().required()

 }),

   deliverstaffDelete : Joi.object({
        Id : Joi.string().required()
    }),
    })
}

module.exports = schema;
