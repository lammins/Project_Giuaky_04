import React from "react";

const products = [
  {
    image: "https://bizweb.dktcdn.net/thumb/grande/100/329/122/products/laptop-asus-vivobook-14-x1404za-nk386w-00.jpg?v=1738947938400",
    brand: "Asus",
    name: "Laptop Asus Vivobook 14 X1404ZA-NK386W",
    price: "9.490.000 ₫",
    description: "Intel Core i3-1215U, UHD Graphics, RAM 8GB DDR4, SSD 512GB, 14 Inch IPS FHD 60Hz, Win 11",
  },
  {
    image: "./public/images/Vivobook1.jpg",
    brand: "Asus",
    name: "Laptop Asus Vivobook 14 X1404ZA-NK389W", 
    price: "15.790.000 ₫",
    description: "Intel Core i7-1255U, Iris Xe Graphics, RAM 16GB DDR4, SSD 512GB, 14 Inch IPS FHD 60Hz, Win 11",
  },
  {
    image: "https://bizweb.dktcdn.net/100/329/122/products/laptop-asus-vivobook-15-x1504va-nj069w.jpg?v=1734109481490",
    brand: "Asus",
    name: "Laptop Asus Vivobook 15 X1504VA-NJ069W",
    price: "10.290.000 ₫",
    description: "Intel Core i3-1315U, UHD Graphics, Ram 8GB DDR4, SSD 512GB, 15.6 Inch IPS FHD 60Hz, Win 11",
  },
  {
    image: "https://bizweb.dktcdn.net/thumb/grande/100/329/122/products/laptop-asus-expertbook-b1-b1402cva-nk0104w-01.jpg?v=1726031495900",
    brand: "Asus",
    name: "Laptop ASUS ExpertBook B1 B1402CVA-NK0104W",
    price: "10.690.000 ₫",
    description: "i3-1315U, UHD Graphics, RAM 8GB DDR4, SSD 256GB, 14 Inch TN FHD 60Hz, Win 11",
  },
  {
    image: "https://bizweb.dktcdn.net/thumb/grande/100/329/122/products/laptop-gaming-asus-tuf-gaming-a15-fa506ncr-hn047w-10.jpg?v=1731580048390",
    brand: "Dell",
    name: "Laptop Gaming ASUS TUF Gaming A15 ",
    price: "18.990.000 ₫",
    description: "Ryzen 7 7435HS, RTX 3050 4GB, RAM 16GB DDR5, SSD 512GB, 15.6 Inch IPS FHD 144Hz, Win 11",
  },
  {
    image: "https://bizweb.dktcdn.net/thumb/grande/100/329/122/products/laptop-gaming-asus-tuf-gaming-a15-fa506ncr-hn047w-10.jpg?v=1731580048390",
    brand: "Dell",
    name: "Laptop Gaming ASUS TUF Gaming A15 ",
    price: "18.990.000 ₫",
    description: "Ryzen 7 7435HS, RTX 3050 4GB, RAM 16GB DDR5, SSD 512GB, 15.6 Inch IPS FHD 144Hz, Win 11",
  },
  {
    image: "https://bizweb.dktcdn.net/thumb/grande/100/329/122/products/laptop-gaming-asus-tuf-gaming-a15-fa506ncr-hn047w-10.jpg?v=1731580048390",
    brand: "Dell",
    name: "Laptop Gaming ASUS TUF Gaming A15 ",
    price: "18.990.000 ₫",
    description: "Ryzen 7 7435HS, RTX 3050 4GB, RAM 16GB DDR5, SSD 512GB, 15.6 Inch IPS FHD 144Hz, Win 11",
  },
  {
    image: "https://bizweb.dktcdn.net/thumb/grande/100/329/122/products/laptop-gaming-asus-tuf-gaming-a15-fa506ncr-hn047w-10.jpg?v=1731580048390",
    brand: "Dell",
    name: "Laptop Gaming ASUS TUF Gaming A15 ",
    price: "18.990.000 ₫",
    description: "Ryzen 7 7435HS, RTX 3050 4GB, RAM 16GB DDR5, SSD 512GB, 15.6 Inch IPS FHD 144Hz, Win 11",
  },
  {
    image: "https://bizweb.dktcdn.net/thumb/grande/100/329/122/products/laptop-gaming-asus-tuf-gaming-a15-fa506ncr-hn047w-10.jpg?v=1731580048390",
    brand: "Dell",
    name: "Laptop Gaming ASUS TUF Gaming A15 ",
    price: "18.990.000 ₫",
    description: "Ryzen 7 7435HS, RTX 3050 4GB, RAM 16GB DDR5, SSD 512GB, 15.6 Inch IPS FHD 144Hz, Win 11",
  },
  {
    image: "https://bizweb.dktcdn.net/thumb/grande/100/329/122/products/laptop-gaming-asus-tuf-gaming-a15-fa506ncr-hn047w-10.jpg?v=1731580048390",
    brand: "Dell",
    name: "Laptop Gaming ASUS TUF Gaming A15 ",
    price: "18.990.000 ₫",
    description: "Ryzen 7 7435HS, RTX 3050 4GB, RAM 16GB DDR5, SSD 512GB, 15.6 Inch IPS FHD 144Hz, Win 11",
  },
];

export default function Laptop() {
  return (
    <div>
      <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                width: "220px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                textAlign: "center",
                background: "#fff",
                position: "relative",
                transition: "transform 0.3s ease"
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "140px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease"
                }}
              />
              <div style={{ padding: "10px" }}>
                <h3 style={{ fontSize: "14px", margin: "5px 0" }}>{product.name}</h3>
                <p style={{ fontSize: "12px", color: "#555" }}>{product.description}</p>
                <h4 style={{ color: "green", margin: "10px 0" }}>{product.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
