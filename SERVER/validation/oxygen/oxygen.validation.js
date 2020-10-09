const { addFilledOxyCylinders } = require('./oxygen.schema');
const { addBlankOxyCylinders }= require('./oxygen.schema');
const { getOxyCyStockList } = require('./oxygen.schema');
const { getOrderList } =  require('./oxygen.schema');
const { getOrderDetail } = require('./oxygen.schema');
const { addMiscellaneousDelivery }= require('./oxygen.schema');
const { exchangeRequest } = require('./oxygen.schema');
const { cylinderExchange } = require('./oxygen.schema');
const {  deliverboydetail } = require('./oxygen.schema');
const {  deliverstaffDelete } = require('./oxygen.schema');
const { addDeliverOrder } = require('./oxygen.schema');

module.exports = {
    addFilledOxyCylindersValidation : async (req, res, next) => {
        try{
            const value = addFilledOxyCylinders.validate(req.body);
            if (value.error) throw value.error;
            next();
        } catch(e) {
            res.status(401).json({
                success: 0,
                message: `Parameter validation error. ${e}`
            })
        }
    },
    addBlankOxyCylindersValidation: async (req, res, next) => {
        try{
            const value = addBlankOxyCylinders.validate(req.body);
            if (value.error) throw value.error;
            next();
        } catch(e) {
            res.status(401).json({
                success: 0,
                message: `Parameter validation error. ${e}`
            })
        }
    },
    getOxyCyStockListValidation : async (req, res, next) => {
        try{
            const value = getOxyCyStockList.validate(req.params);
            if (value.error) throw value.error;
            next();
        } catch(e) {
            res.status(401).json({
                success: 0,
                message: `Parameter validation error. ${e}`
            })
        }
    },




    // getOrderListValidation : async (req, res, next) => {
    //     const value = await getOrderList.validate(req.params);
    //     if(value.error){
    //         res.json({
    //             success: 0,
    //             message: value.error.details[0].message
    //         })
    //     } else {
    //         next();
    //     }
    // },

    getOrderDetailValidation : async (req, res, next) => {
        const value = await   getOrderDetail.validate(req.params);
        if(value.error){
            res.json({
                success: 0,
                message: value.error.details[0].message
            });
        } else {
            next();
        }
    },

    addMiscellaneousDeliveryValidation: async (req, res, next) => {
        const value = await   addMiscellaneousDelivery.validate(req.body);
        if(value.error){
            res.json({
                success: 0,
                message: value.error.details[0].message
            });
        } else {
            next();
        }
    },


    exchangeRequestValidation: async (req, res, next) => {
        const value = await    exchangeRequest.validate(req.body);
        if(value.error){
            res.json({
                success: 0,
                message: value.error.details[0].message
            });
        } else {
            next();
        }
    },


      cylinderExchangeValidation: async (req, res, next) => {
        const value = await cylinderExchange.validate(req.body);
        if(value.error){
            res.json({
                success: 0,
                message: value.error.details[0].message
            });
        } else {
            next();
        }
    },


     deliverboydetailValidation: async (req, res, next) => {
         console.log("validation")
         console.log(req.body)
        const value = await deliverboydetail.validate(req.body);
        if(value.error){
            res.json({
                success: 0,
                message: value.error.details[0].message
            });
        } else {
            next();
        }
    },

   deliverstaffDeleteValidation: async (req, res, next) => {
        const value = await deliverstaffDelete.validate(req.params);
        if(value.error){
            res.json({
                success: 0,
                message: value.error.details[0].message
            });
        } else {
            next();
        }
    },

    addDeliverOrderValidation: async (req, res, next) => {
        const value = await    addDeliverOrder.validate(req.body);
        if(value.error){
            res.json({
                success: 0,
                message: value.error.details[0].message
            });
        } else {
            next();
        }
    }


}


