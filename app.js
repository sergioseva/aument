const { process_shopify } = require('./data-providers/shopify');
const { process_woocomerce } = require('./data-providers/woocomerce');
const { calculate_stats } = require('./processor/stats-calculator');

//repository where our data providers processors will store the data
let people = new Map();

//gather the information from external systems
process_woocomerce(people)

process_shopify(people)

//process the data as we want
calculate_stats(people)
