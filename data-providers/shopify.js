const {Shopify} = require('../ecommercesData');
const { Client } = require('../model/client');

function process_shopify(people_map) {
    Shopify.forEach(v => {
        let client_stats=people_map.get(v.customer.email); 
            if (client_stats) {
                    client_stats.quantity_orders++
                    client_stats.sum_orders+=Number(v.price)
            } else {
                client_stats = new Client(v.customer.email,v.customer.name,Number(v.price),1)
            }
        people_map.set(v.customer.email,client_stats)
    } )
    return people_map
}

module.exports = {process_shopify}