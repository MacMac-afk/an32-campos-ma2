/*This system tracks inventory for Triple May Motorcycle Parts, 
calculates total inventory value, updates product quantities,
and identifies the most expensive item. It also adds a new product 
and recalculates the total value, displaying all details using console.log(). */

const storeName = 'Triple May Motorcycle Parts';
const storeLocation = 'Bayanan Muntinlupa City';
const storeCapacity =300;

const products = [
	{
	name: "Clutch Cable",
	price: 150,
	quantity: 20	

	}, 
	{
	name: "Bearing",
	price: 70,
	quantity: 30

	},
	{
	name: "Knuckle Bearing",
	price: 250,
	quantity: 40

	},
	{
	name: "Oil Seal",
	price: 85,
	quantity: 40

	},
	{
	name: "Flasher Relay",
	price: 220,
	quantity: 60	

	}
];

// Initialize total inventory value
let totalInventoryValue = 0;

// Loop through the products array to calculate total inventory value
for (let product of products) {
    totalInventoryValue += product.price * product.quantity; // Summing up the total value of each product
}

// Updating the quantity of Clutch Cable after receiving a new shipment
products[0].quantity += 10; // Updating the quantity of Clutch Cable

// Finding the most expensive product in the inventory
let mostExpensiveProduct = products[0].name; // Initialize with the first product
let highestPrice = products[0].price; // Initialize with the first product price

// Loop through products to find the most expensive one
for (let product of products) {
    if (product.price > highestPrice) {
        highestPrice = product.price; // Update the highest price found
        mostExpensiveProduct = product.name; // Update the name of the most expensive product
    }
}

// Display the results
console.log("Store Name:", storeName); // Display store name
console.log("Store Location:", storeLocation); // Display store location
console.log("Total Number of Products in Store:", products.length); // Display total number of products
console.log("Total Value of Inventory: ", totalInventoryValue); // Display total value of inventory
console.log("Updated Quantity of Clutch Cable:", products[0].quantity); // Display updated quantity of Clutch Cable
console.log("Most Expensive Product:", mostExpensiveProduct); // Display the name of the most expensive product

// Stretch Goal: Adding an additional product
products.push({
    name: "Brake Shoe",
    price: 250,
    quantity: 50
});

// Total inventory value after adding the new product
totalInventoryValue = 0; // Reset total inventory value
for (let product of products) {
    totalInventoryValue += product.price * product.quantity; // Recalculate total value
}

// Display updated total value of inventory
console.log("Updated Total Value of Inventory: ", totalInventoryValue); // Display updated total value