function calculate_stats(people_map) {
    let total={
        total_billing:0,
        people: Array(),
    };

    total.people=Array.from(people_map.values()).map(c=>{
        total.total_billing+=c.sum_orders
        return client_data = {
                    name:c.name,
                    email:c.email,
                    avg_ticket:c.sum_orders/c.quantity_orders,
                    quantity_orders:c.quantity_orders
        }
    }) 
    
    console.log(total)
}

module.exports = {calculate_stats}