const {Shopify} = require('./ecommercesData');
const {Woocommerce} = require('./ecommercesData');
const { Client } = require('./model/client');

let total={
    total_billing:0,
    people: Array(),
};
let people = new Map();

Woocommerce.forEach(v => {
    let client_stats=people.get(v.customer.email);
    v.products.forEach(p => {    
        if (client_stats) {
                client_stats.quantity_orders+=p.quantity
                client_stats.sum_orders+=Number(p.money)*p.quantity
        } else {
            client_stats = new Client(v.customer.email,v.customer.name,Number(p.money)*p.quantity,p.quantity)
        }
    })
    people.set(v.customer.email,client_stats)
} )

Shopify.forEach(v => {
    let client_stats=people.get(v.customer.email);
    v.products.forEach(p => {    
        if (client_stats) {
                client_stats.quantity_orders+=p.quantity
                client_stats.sum_orders+=Number(p.price)*p.quantity
        } else {
            client_stats = new Client(v.customer.email,v.customer.name,Number(p.price)*p.quantity,p.quantity)
        }
    })
    people.set(v.customer.email,client_stats)
} )

total.people=Array.from(people.values()).map(c=>{
    total.total_billing+=c.sum_orders
    return client_data = {
                name:c.name,
                email:c.email,
                avg_ticket:c.sum_orders/c.quantity_orders,
                quantity_orders:c.quantity_orders
    }
}) 

console.log(total)

