const sales = [
    {product: "Laptop", quantity: 4, unitPrice: 1200, category: "Electronics"},
    {product: "Chair", quantity: 10, unitPrice: 150, category: "Furniture"},
    {product: "Book", quantity: 50, unitPrice: 20, category: "Books"},
    {product: "Smartphone", quantity: 6, unitPrice: 800, category: "Electronics"},
    {product: "Desk", quantity: 3, unitPrice: 300, category: "Furniture"},
    {product: "Headphones", quantity: 15, unitPrice: 100, category: "Electronics"},
];

function calculateTotalRevenue(sales) {
    return sales
        .filter(item => item.category === "Electronics")
        .map(item => item.quantity * item.unitPrice)
        .reduce((total, amount) => total + amount, 0);
}

console.log(calculateTotalRevenue(sales));  // affiche 11100
