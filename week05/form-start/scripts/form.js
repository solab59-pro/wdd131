const products = [
    { id: "infinix", name: "Infinix Hot 50 Pro max", averagerating: 4.5 },
    { id: "tecno", name: "Tecno Camon 40 Pro", averagerating: 4.7 },
    { id: "iphone", name: "Iphone 16 Pro max", averagerating: 3.5 },
    { id: "nokia", name: "Nokia Magic max", averagerating: 3.9 },
    { id: "redmi", name: "Xiaomi Redmi Note 15 Pro", averagerating: 4.9 },
    { id: "samsung", name: "Samsung Galaxy S25 Ultra", averagerating: 5.0 },
];

// Populate the product options
const productSelect = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// current year
const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

// last modified date
const lastModifiedPara = document.getElementById('lastModified');
lastModifiedPara.textContent = `Last updated: ${document.lastModified}`;