const { process_shopify } = require('./data-providers/shopify');
const { process_woocomerce } = require('./data-providers/woocomerce');
const { calculate_stats } = require('./processor/stats-calculator');


let people = new Map();

process_woocomerce(people)

process_shopify(people)

calculate_stats(people)

