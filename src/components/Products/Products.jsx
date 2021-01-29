import React from 'react';

const products = [
    {id: 1, name: "HDMI Kabel", description: "Version 2.1, 1m", price: "4€"},
    {id: 2, name: "HDMI Kabel", description: "Version 2.1, 2m", price: "8€"},
    {id: 3, name: "AUX Kabel", description: "Vergoldete Enden, 2m", price: "10€"},
    {id: 4, name: "SATA Kabel", description: "0,2m", price: "0.6€"},
    {id: 5, name: "USB Kabel", description: "USB 3.1 Kabel, 1,5m", price: "1.5€"},
    {id: 6, name: "USB Verlängerungskabel", description: "USB Male auf Female, 2m", price: "6€"},
    {id: 7, name: "Displayport Kabel", description: "Version 1.3, 2m", price: "5€"},
    {id: 8, name: "Kaltgeräte Kabel", description: "2m", price: "1€"},
    {id: 9, name: "Thunderbolt-Hub ", description: "2x DP, 4x USB-A, 1x USB-C", price: "45€"},
    {id: 10, name: "SD Kartenlesegerät", description: "Mikro und normale SD-Karten", price: "15€"},
];

const Products = () => {
    <div>
        {products.map((product) =>(
            <Product product = {product}/>
        )};
        
    </div>
}

export default Products;