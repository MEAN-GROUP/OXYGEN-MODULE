var mongo = require('mongodb');

var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";
var dataBaseName = "oxygenModule";

exports.addFilledOxyCylinders = data => {
    return new Promise( (resolve, reject) => {
        mongoClient.connect(url, function (err, server) {
            if (err) reject(err);
            var dbo = server.db(dataBaseName)
            var date = new Date();
            data.dateTime = date;
            data.status = 'filledCylinder';
            dbo.collection("cylinderDetail").insertOne(data, (err, res) => {
                if (err) reject(err);

                dbo.collection("cylinderMaster").find({ cylinderType: data.cylinderType, oxygenSupplierId: data.oxygenSupplierId }).toArray( (err, result) => {
                    if (err) reject(err);
                    let previousFilledCyQuantity = result[0] == undefined ? 0 : result[0].filledCylinder;
                    let masterUpdateData = {
                        filledCylinder: parseInt(previousFilledCyQuantity) + parseInt(data.quantity)
                    }    
                    let myquery = { cylinderType: data.cylinderType, oxygenSupplierId: data.oxygenSupplierId };
                    dbo.collection("cylinderMaster").updateOne(myquery, { $set: masterUpdateData }, { upsert: true }, (err, res) => {
                        if (err) reject(err);
                        let response = {
                            success: 1,
                            message: "Filled cylinders successfully added to stock."
                        }
                        resolve(response);
                        server.close();
                    });
                });
            });
        });
    })
}
exports.addMiscellaneousDelivery = data => {
    return new Promise( (resolve, reject) => {
        mongoClient.connect(url, (err, server)=> {
            if (err) reject(err);
            var dbo = server.db(dataBaseName)
            var date = new Date();
            data.dateTime = date;
            data.status = 'Miscellaneous Delivery';
            dbo.collection("cylinderMaster").find({ cylinderType: data.cylinderType, oxygenSupplierId: data.oxygenSupplierId }).toArray((err, result)=> {
                console.log(result)
                console.log({ cylinderType: data.cylinderType, oxygenSupplierId: data.oxygenSupplierId })
                if (err) reject(err);
                let previousFilledCyQuantity;
                if(result[0] == undefined || (result[0].filledCylinder < data.quantity)) {
                    reject("Cylinder is not more available in stock according to your requirement.")
                    return
                } else {
                    previousFilledCyQuantity = result[0].filledCylinder;
                };
                let myquery = { cylinderType: data.cylinderType,oxygenSupplierId:data.oxygenSupplierId };
                let masterUpdateData = {
                    filledCylinder: parseInt(previousFilledCyQuantity) - parseInt(data.quantity)
                }
                dbo.collection("cylinderMaster").updateOne(myquery, { $set: masterUpdateData }, { upsert: true }, (err, res) => {
                    if (err) reject(err);
                    dbo.collection("cylinderDetail").insertOne(data,  (err, res) => {
                        if (err) reject(err);
                        let response = {
                            success: 1,
                            message: "Miscellaneous cylinder detail successfully added."
                        }
                        resolve(response);
                        server.close();
                    });
                });
            });
        });
    })
}
exports.addBlankOxyCylinders = data => {
    return new Promise( (resolve, reject) => {
        mongoClient.connect(url, function (err, server) {
            if (err) reject(err);
            var dbo = server.db(dataBaseName)
            var date = new Date();
            data.dateTime = date;
            data.status = 'blankedCylinder';
            dbo.collection("cylinderDetail").insertOne(data, (err, res) => {
                if (err) reject(err);
    
                dbo.collection("cylinderMaster").find({ cylinderType: data.cylinderType }).toArray((err, result) => {
                    if (err) reject(err);
                    let previousBlankedCyQuantity = result[0].blankedCylinder;
    
                    let myquery = { cylinderType: data.cylinderType };
                    let masterUpdateData = {
                        blankedCylinder: parseInt(previousBlankedCyQuantity) + parseInt(data.quantity)
                    }
                    dbo.collection("cylinderMaster").updateOne(myquery, { $set: masterUpdateData }, (err, res) => {
                        if (err) reject(err);
                        let response = {
                            message: "Empty cylinders successfully added to stock."
                        }
                        resolve(response);
                        server.close();
                    });
                });
            });
        });
    })
}
exports.getOxyCyStockList = oxygenSupplierId => {
    return new Promise( (resolve, reject) => {
        mongoClient.connect(url,(err, server)=>{
            if (err) reject(err);
            var dbo = server.db(dataBaseName);
            dbo.collection("cylinderMaster").find({oxygenSupplierId:oxygenSupplierId }).toArray((err, result)=> {
                if (err) reject(err);
                var result = JSON.stringify(result);
                resolve(result);
                server.close();
            });
        });
    })
}
console.log(new Date())
exports.getOrderList = () => {
    return new Promise( (resolve, reject) => {
        mongoClient.connect(url,(err, server)=> {
            if (err) reject(err);
            var dbo = server.db(dataBaseName);
            dbo.collection("oxygenOrders").find({ status: "orderPlaced" }).toArray((err, result)=> {
                if (err) reject(err);
                // var results = JSON.stringify(result);
                resolve(result);
                server.close();
            });
        });
    })
}
exports.getOrderDetail = () => {
    return new Promise( (resolve, reject) => {
        mongoClient.connect(url,(err, server)=> {
            if (err) reject(err)
            var dbo = server.db(dataBaseName);
            dbo.collection("oxygenOrders").find({ status: "delivered" },(err, result)=> {
                if (err) reject(err);
                //var results = JSON.stringify(result);
                resolve(result);
                server.close();
            });
        });
    })
}
exports.getAvailableCylinders = () => {
    return new Promise( (resolve, reject) => {
        mongoClient.connect(url,(err, server) => {
            if (err) reject(err);
    
            var dbo = server.db(dataBaseName);
    
            dbo.collection("cylinderMaster").aggregate({ "status": "filledCylinder" }, {
                $group: {
                    _id: "cylinderType",
                    count: { $sum: 1 }
                }, function(err, result) {
    
                    if (err) reject(err);
                    var results = JSON.stringify(result);
                    resolve(results);
                    server.close();
                }
            });
    
        });
    })
}

//api8 /cylinderExchange
exports.cylinderExchange = (cylinderType, data) => {
    return new Promise( (resolve, reject) => {
        mongoClient.connect(url, (err, server) => {
            if (err) reject(err);
            var dbo = server.db(dataBaseName)
            var date = new Date();
            data.dateTime = date;
            data.status = 'defectCylinder';
            dbo.collection("cylinderMaster").find({ cylinderType: cylinderType.cylinderType ,oxygenSupplierId:data.oxygenSupplierId }).toArray((err, result)=> {
                if (err) reject(err);
                let previousLeakageQuantity = result[0].defectCylinder;
                let previousQuantity = result[0][data.defectDetectedFrom];
                let myquery = { cylinderType: data.cylinderType,oxygenSupplierId:data.oxygenSupplierId  };
                let masterUpdateData = {
                    defectCylinder: parseInt(previousLeakageQuantity) + parseInt(data.quantity),
                    [data.defectDetectedFrom]: parseInt(previousQuantity) - parseInt(data.quantity)
                }
                dbo.collection("cylinderMaster").updateOne(myquery, { $set: masterUpdateData },(err, res)=> {
                    if (err) reject(err);
                    let response = {
                        message: " successfully."
                    }
                    resolve(response);
                    server.close();
                });
            });
        });
    })
}
exports.deliverboyDetail = data => {
    return new Promise( (resolve, reject) => {
        mongoClient.connect(url, (err, server)=> {
            if (err) reject(err);
            var dbo = server.db(dataBaseName)
            dbo.collection("deliverboyDetails").find().sort({ "deliveryStaffId": -1 }).toArray( (err, result)=> {
                if (err) reject(err);
                let newId;
                if (result.length == 0) {
                    newEmpId = `1`;
                } else {
                    newId = `${+result[0].deliveryStaffId + 1}`;
                }
                data.deliveryStaffId = newId;
                dbo.collection("deliverboyDetails").insertOne(data, (err, res) => {
                    if (err) reject(err);
    
                    let response = {
                        deliveryStaffId: newId,
                        success: 1,
                        message: "Delivery staff details successfully added to stock."
                    }
                    resolve(response);
                    server.close();
                });
            });
        })
    })
}
exports.deliverboyDetailUpdate = (staffIdObj, data) => {
    return new Promise( (resolve, reject) => {
        mongoClient.connect(url,(err, server) => {
            if (err) reject(err);
            var dbo = server.db(dataBaseName)
            data.updateOn = new Date();
            dbo.collection("deliverboyDetails").updateOne(staffIdObj,{ $set: data },(err, res) => {
                if (err) reject(err);
                let response = {
                    success: res.result.n
                }
                response.message = res.result.n === 0 ? "No match found." : "Staff detail successfully updated."
                resolve(response);
                server.close();
            });
        })
    })
}
exports.getExchangeRequestList = () => {
    return new Promise( (resolve, reject) => {
        mongoClient.connect(url,(err, server) => {
            if (err) reject(err);
            var dbo = server.db(dataBaseName);
            let condition = { oxygenexRequest: true };
            dbo.collection("oxygenOrders").find(condition).toArray((err, result)=> {
                if (err) reject(err);
                console.log(result)
                resolve(result);
            });
        });
    })
}

exports.getdeliverystaffList = oxygenSupplierId => {
    return new Promise( (resolve, reject) => {
        mongoClient.connect(url,(err, server) => {
            if (err) reject(err);
            var dbo = server.db(dataBaseName);
            dbo.collection("deliverboyDetails").find({oxygenSupplierId:oxygenSupplierId}).toArray((err, result)=> {
                if (err) reject(err);
                var result = JSON.stringify(result);
                resolve(result);
                server.close();
            });
        });
    })
}

//API 12/deliverstaffDelete  
exports.deliverstaffDelete= (Id) => {
    return new Promise( (resolve, reject) => {
        mongoClient.connect(url,(err,server) => {
            if (err) reject(err);
            var dbo = server.db(dataBaseName);
            console.log({ deliveryStaffId: Id })

            dbo.collection("deliverboyDetails").deleteOne({ deliveryStaffId: Id }, (err, result) => {
                if (err) reject(err);
                let response = {
                    success: 1,
                    message: "Delivery staff details successfully removed."
                }
                resolve(response);
                server.close();
            });
        });
    })
}

//API 13/addDeliverOrder
exports.addDeliverOrder= data => {
    return new Promise( (resolve, reject) => {
        mongoClient.connect(url,(err,server) => {
            if (err) reject(err);
            var dbo = server.db(dataBaseName);
            var date = new Date();
            data.dateTime = date;
            let Id=data.Id;
            dbo.collection("deliverboyDetails").findOne({ Id:+Id },(err, result) => {
                if (err) reject(err);
                // data.deliveryboyName=result.deliveryboyName;
                data.status="Assigned";
                dbo.collection("deliverOrder").insertOne(data,(err, res) => {
                    if (err) reject(err);
                    let response ={
                        message:"Successful"
                    }
                    resolve(res);
                    server.close();
                
                });
            });
        
        });
    })
}
