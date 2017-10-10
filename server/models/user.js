/**
 * Created by Administrator on 2017/9/28.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    "userId": String,
    "userName": String,
    "orderList": Array,
    "cartList": [{
        "productId": String,
        "productName": String,
        "salePrice": Number,
        "productImage": String,
        "productUrl": String,
        "productNum": Number,
        "checked": String
    }],
    "addressList": [{
        "addressId": String,
        "userName": String,
        "streetName": String,
        "postCode": Number,
        "tel": Number,
        "isDefault": Boolean
    }]
})
module.exports = mongoose.model('user', userSchema);
