import { useState } from "react";

const Products = [
    {
        id: 1,
        image: "laptop (1).jpg",
        brand: "Asus",
        name: "Laptop Asus Vivobook 14 X1404ZA-NK386W",
        price: 8000000,
        description: "Intel Core i3-1215U, UHD Graphics, RAM 8GB DDR4, SSD 512GB, 14 Inch IPS FHD 60Hz, Win 11",
    },
    {
        id: "Lap002",
        image: "laptop (2).jpg",
        brand: "Asus",
        name: "Laptop Asus Vivobook 14 X1404ZA-NK389W",
        price: 25000000,
        description: "Intel Core i7-1255U, Iris Xe Graphics, RAM 16GB DDR4, SSD 512GB, 14 Inch IPS FHD 60Hz, Win 11",
    },
    {
        id: "Lap003",
        image: "laptop (3).jpg",
        brand: "Asus",
        name: "Laptop Asus Vivobook 15 X1504VA-NJ069W",
        price: 10000000,
        description: "Intel Core i3-1315U, UHD Graphics, Ram 8GB DDR4, SSD 512GB, 15.6 Inch IPS FHD 60Hz, Win 11",
    },
    {
        id: "Lap004",
        image: "laptop (4).jpg",
        brand: "Asus",
        name: "Laptop ASUS ExpertBook B1 B1402CVA-NK0104W",
        price: 45000000,
        description: "i3-1315U, UHD Graphics, RAM 8GB DDR4, SSD 256GB, 14 Inch TN FHD 60Hz, Win 11",
    },
    {
        id: "Lap05",
        image: "laptop (5).jpg",
        brand: "Dell",
        name: "Laptop Gaming DELL TUF Gaming A15",
        price: 31000000,
        description: "Ryzen 7 7435HS, RTX 3050 4GB, RAM 16GB DDR5, SSD 512GB, 15.6 Inch IPS FHD 144Hz, Win 11",
    },

    {
        id: "Lap006",
        image: "laptop (6).jpg",
        brand: "Samsung",
        name: "Samsung Galaxy Book Pro",
        price: 26000000,
        description: "Intel Core i7-1165G7, Iris Xe Graphics, RAM 16GB LPDDR4x, SSD 512GB, 15.6 Inch AMOLED FHD, Win 11",
    },
    {
        id: "Lap007",
        image: "laptop (7).jpg",
        brand: "Microsoft",
        name: "Surface Laptop 5",
        price: 18999000,
        description: "Intel Core i5-1235U, Iris Xe Graphics, RAM 8GB LPDDR5, SSD 256GB, 13.5 Inch PixelSense 60Hz Touch, Win 11",
    },
    {
        id: "Lap008",
        image: "laptop (8).jpg",
        brand: "Lenovo",
        name: "Lenovo Legion 5 Pro",
        price: 34990000,
        description: "AMD Ryzen 7 6800H, RTX 3060 6GB, RAM 16GB DDR5, SSD 512GB, 16 Inch IPS WQXGA 165Hz, Win 11",
    },
    {
        id: "Lap009",
        image: "laptop (9).jpg",
        brand: "Dell",
        name: "Dell XPS 15 9520",
        price: 42990000,
        description: "Intel Core i7-12700H, RTX 3050 Ti 4GB, RAM 16GB DDR5, SSD 512GB, 15.6 Inch OLED 3.5K Touch, Win 11",
    },
    {
        id: "Lap010",
        image: "laptop (10).jpg",
        brand: "ASUS",
        name: "ASUS TUF Gaming A17",
        price: 31990000,
        description: "AMD Ryzen 7 7735HS, RTX 4060 8GB, RAM 16GB DDR5, SSD 512GB, 17.3 Inch IPS FHD 144Hz, Win 11",
    },
    {
        id: "Lap011",
        image: "laptop (11).jpg",
        brand: "Apple",
        name: "MacBook Air M2 13 inch",
        price: 28990000,
        description: "Apple M2, RAM 8GB, SSD 256GB, 13.3 Inch Retina, macOS",
    },
    {
        id: "Lap012",
        image: "laptop (12).jpg",
        brand: "Apple",
        name: "MacBook Pro M3 16 inch",
        price: 72990000,
        description: "Apple M3 Pro, RAM 16GB, SSD 512GB, 16.2 Inch Liquid Retina XDR, macOS",
    },
    {
        id: "Lap013",
        image: "laptop (13).jpg",
        brand: "HP",
        name: "HP Spectre x360 14",
        price: 35990000,
        description: "Intel Core i7-13700H, RAM 16GB LPDDR5, SSD 1TB, 14 Inch OLED 3K Touch, Win 11",
    },
    {
        id: "Lap014",
        image: "laptop (14).jpg",
        brand: "Acer",
        name: "Acer Predator Helios 300",
        price: 37990000,
        description: "Intel Core i7-12700H, RTX 3060 6GB, RAM 16GB DDR5, SSD 512GB, 15.6 Inch IPS QHD 165Hz, Win 11",
    },
    {
        id: "Lap015",
        image: "laptop (15).jpg",
        brand: "MSI",
        name: "MSI Stealth 15M",
        price: 42990000,
        description: "Intel Core i9-12900H, RTX 3070 Ti 8GB, RAM 32GB DDR5, SSD 1TB, 15.6 Inch IPS QHD 165Hz, Win 11",
    },
    {
        id: "Lap016",
        image: "laptop (16).jpg",
        brand: "Razer",
        name: "Razer Blade 14",
        price: 65990000,
        description: "AMD Ryzen 9 6900HX, RTX 3080 Ti 16GB, RAM 32GB DDR5, SSD 1TB, 14 Inch IPS QHD 165Hz, Win 11",
    },
    {
        id: "Lap017",
        image: "laptop (17).jpg",
        brand: "LG",
        name: "LG Gram 17 2023",
        price: 37990000,
        description: "Intel Core i7-1360P, Iris Xe Graphics, RAM 16GB LPDDR5, SSD 512GB, 17 Inch IPS WQXGA, Win 11",
    },
    {
        id: "Lap018",
        image: "laptop (18).jpg",
        brand: "Lenovo",
        name: "Lenovo ThinkPad X1 Carbon Gen 11",
        price: 48990000,
        description: "Intel Core i7-1370P, Iris Xe Graphics, RAM 32GB LPDDR5, SSD 1TB, 14 Inch IPS 2.8K, Win 11",
    },
    {
        id: "Lap019",
        image: "laptop (19).jpg",
        brand: "Samsung",
        name: "Samsung Galaxy Book3 Ultra",
        price: 53990000,
        description: "Intel Core i9-13900H, RTX 4070 8GB, RAM 32GB LPDDR5, SSD 1TB, 16 Inch AMOLED 3K, Win 11",
    },
    {
        id: "Lap020",
        image: "laptop (20).jpg",
        brand: "Microsoft",
        name: "Surface Laptop Studio 2",
        price: 72990000,
        description: "Intel Core i9-13950HX, RTX 4060 8GB, RAM 32GB LPDDR5, SSD 1TB, 14.4 Inch PixelSense 120Hz Touch, Win 11",
    },
];

export default function Laptop() {
    const [products, setProducts] = useState(Products);
    const [editingProduct, setEditingProduct] = useState(null);

    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
            setProducts(products.filter((product) => product.id !== id));
        }
    };

    const handleEditClick = (product) => {
        setEditingProduct(product);
    };

    const handleUpdateProduct = (event) => {
        event.preventDefault();
        setProducts(
            products.map((p) => (p.id === editingProduct.id ? editingProduct : p))
        );
        setEditingProduct(null);
    };

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
                                transition: "transform 0.3s ease",
                                padding: "10px",
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: "100%", height: "140px", objectFit: "cover" }}
                            />
                            <h3 style={{ fontSize: "14px", margin: "5px 0" }}>{product.name}</h3>
                            <p style={{ fontSize: "12px", color: "#555" }}>{product.description}</p>
                            <h4 style={{ color: "green", margin: "10px 0" }}>{product.price}</h4>
                            <button onClick={() => handleEditClick(product)}>Update</button>
                            <button onClick={() => handleDelete(product.id)} style={{ marginLeft: "5px", background: "red", color: "white" }}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
            {editingProduct && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: "white",
                        padding: "20px",
                        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
                        zIndex: 1000,
                    }}
                >
                    <h3>Chỉnh sửa sản phẩm</h3>
                    <form onSubmit={handleUpdateProduct}>
                        <input
                            type="text"
                            value={editingProduct.name}
                            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                            style={{ width: "100%", marginBottom: "10px" }}
                        />
                        <input
                            type="text"
                            value={editingProduct.price}
                            onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                            style={{ width: "100%", marginBottom: "10px" }}
                        />
                        <textarea
                            value={editingProduct.description}
                            onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                            style={{ width: "100%", marginBottom: "10px" }}
                        />
                        <button type="submit">Lưu</button>
                        <button onClick={() => setEditingProduct(null)} style={{ marginLeft: "10px" }}>Hủy</button>
                    </form>
                </div>
            )}
        </div>
    );
}

