const {Shopify} = require('../ecommercesData');
const { Client } = require('../model/client');

function process_shopify(people_map) {
    Shopify.forEach(v => {
        let client_stats=people_map.get(v.customer.email);
        v.products.forEach(p => {    
            if (client_stats) {
                    client_stats.quantity_orders+=p.quantity
                    client_stats.sum_orders+=Number(p.price)*p.quantity
            } else {
                client_stats = new Client(v.customer.email,v.customer.name,Number(p.price)*p.quantity,p.quantity)
            }
        })
        people_map.set(v.customer.email,client_stats)
    } )
    return people_map
}

module.exports = {process_shopify}