const {Woocommerce} = require('../ecommercesData');
const { Client } = require('../model/client');

function collect_data(collection, get_amount, people_map) {
    collection.forEach(v => {
        let client_stats=people_map.get(v.customer.email); 
        if (client_stats) {
                client_stats.quantity_orders++
                client_stats.sum_orders+=get_amount(v)
        } else {
            client_stats = new Client(v.customer.email,v.customer.name,get_amount(v),1)
        }
    people_map.set(v.customer.email,client_stats)
        people_map.set(v.customer.email,client_stats)
    } )
}

module.exports = {collect_data}