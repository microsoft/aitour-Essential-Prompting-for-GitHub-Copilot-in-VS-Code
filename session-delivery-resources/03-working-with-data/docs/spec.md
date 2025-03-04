# The Tailwind Store

This is an ecommerce store that will deliver both digital and physical goods. To that end, we need to track:

 - `products` with a sku, name, price, description, and type (digital, hardware, kitchenware, clothing, etc).
 - `inventory` that tracks products and their stock levels as well as location. For digital products, this should indicate download URL.
 - `orders` with a unique, random `number`, `total` in pennies, `date`, `status`, `transaction_id` if it's checked out.
 - `customers` with unique email, name, lifetime value

## Stack

This will be a web application and also an API, using the following:

 - Express.js for the server
 - EJS for the view engine
 - Tailwind CSS for styling
 - Best practices for logging and monitoring
 - Stripe for payment processing
 - Use SQLite for development database, PostgreSQL for production. 
 - Use Sequelize for the ORM

## Services

All logic will happen in service classes which live in the `/lib` directory.

TBD