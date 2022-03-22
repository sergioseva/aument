const {Shopify} = require('../ecommercesData');
const { collect_data } = require('./collect_data');

function geShopifyAmount(record){
    return Number(record.price)
}

function process_shopify(people_map) {
    collect_data(Shopify,geShopifyAmount,people_map)
}

module.exports = {process_shopify}