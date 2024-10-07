// Import EventEmitter class
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define the order system as an object
const orderSystem = {
    placeOrder: (orderId) => {
        console.log(`Order ${orderId} placed.`);
        // Emit an event when an order is placed
        eventEmitter.emit('orderPlaced', orderId);
    },
    
    processPayment: (orderId) => {
        console.log(`Processing payment for order ${orderId}...`);
        // Emit an event when payment is processed
        setTimeout(() => {
            eventEmitter.emit('paymentProcessed', orderId);
        }, 1000);
    },
    
    shipOrder: (orderId) => {
        console.log(`Shipping order ${orderId}...`);
        // Emit an event when the order is shipped
        setTimeout(() => {
            eventEmitter.emit('orderShipped', orderId);
        }, 2000);
    }
};

// Event listeners for various stages in the order process
eventEmitter.on('orderPlaced', (orderId) => {
    console.log(`Event: Order ${orderId} placed successfully.`);
    orderSystem.processPayment(orderId);
});

eventEmitter.on('paymentProcessed', (orderId) => {
    console.log(`Event: Payment for order ${orderId} processed.`);
    orderSystem.shipOrder(orderId);
});

eventEmitter.on('orderShipped', (orderId) => {
    console.log(`Event: Order ${orderId} shipped to customer.`);
});

// Simulate an order placement
const orderId = 12345;
orderSystem.placeOrder(orderId);
 v