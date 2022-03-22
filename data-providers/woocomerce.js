const {Woocommerce} = require('../ecommercesData');
const { Client } = require('../model/client');

function process_woocomerce(people_map) {
    Woocommerce.forEach(v => {
        let client_stats=people_map.get(v.customer.email); 
        if (client_stats) {
                client_stats.quantity_orders++
                client_stats.sum_orders+=Number(v.money)
        } else {
            client_stats = new Client(v.customer.email,v.customer.name,Number(v.money),1)
        }
    people_map.set(v.customer.email,client_stats)
        people_map.set(v.customer.email,client_stats)
    } )
}

module.exports = {process_woocomerce}