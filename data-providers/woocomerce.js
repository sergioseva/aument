const {Woocommerce} = require('../ecommercesData');
const { Client } = require('../model/client');
const { collect_data } = require('./collect_data');

function getWoocomerceAmount(record){
    return Number(record.money)
}

function process_woocomerce(people_map) {
    collect_data(Woocommerce,getWoocomerceAmount,people_map)
}

module.exports = {process_woocomerce}