import React from 'react';
import Product from './Product/Product';

const products = [
    {id: 1, name: "HDMI Kabel", description: "Version 2.1, 1m", price: "4€", image: "https://klikglodok.com/komputer/wp-content/uploads/2012/08/hdmi-kabel-1024x768.jpg"},
    {id: 2, name: "HDMI Kabel", description: "Version 2.1, 2m", price: "8€", image: "https://klikglodok.com/komputer/wp-content/uploads/2012/08/hdmi-kabel-1024x768.jpg"},
    {id: 3, name: "AUX Kabel", description: "Vergoldete Enden, 2m", price: "10€", image: "https://www.mobileworld.at/images/product_images/info_images/AUX%20Kabel%20Audio%20Male%20Male%20stecker%20Handyshop%20Linz.jpg"},
    {id: 4, name: "SATA Kabel", description: "0,2m", price: "0.6€", image: "https://www.lindy.co.uk/images/0-2m-sata-cable-latching-p3778-1695_zoom.jpg"},
    {id: 5, name: "USB-C Kabel", description: "USB 3.1 A auf C, 1,5m", price: "1.5€", image: "https://www.123elektronikk.no/billeder/usb-c-kabel-0-25m-sort-deltaco-usbc-1150-big.jpg"},
    {id: 6, name: "USB Verlängerungskabel", description: "USB Male auf Female, 2m", price: "6€", image: "https://www.headset.net/wp-content/uploads/usb-verlaengerungskabel1.jpg"},
    {id: 7, name: "Displayport Kabel", description: "Version 1.3, 2m", price: "5€", image: "https://images-na.ssl-images-amazon.com/images/I/41lEvRo24JL._SY300_QL70_.jpg"},
    {id: 8, name: "Kaltgeräte Kabel", description: "2m", price: "1€", image: "https://shop.sommercable.com/out/pictures/master/product/1/a_13676_otsi1.jpg"},
    {id: 9, name: "Thunderbolt-Hub ", description: "HDMI, SD-Karte, LAN, 4x USB-A, 1x USB-C", price: "35€", image: "https://i.ebayimg.com/images/i/253491864000-0-1/s-l1000.jpg"},
    {id: 10, name: "SD Kartenlesegerät", description: "CF / SD / TF Ports, USB 3.0", price: "15€", image: "https://cdn.shopify.com/s/files/1/0056/9537/3423/products/SD_Card_Reader_WEme_1_1200x1200.jpg?v=1551868787"},
];

const Products = () => {
    return (
        <div>
            {products.map((product) =>(
                <Product product = {product}/>
            ))}      
        </div>
    )
};

export default Products;