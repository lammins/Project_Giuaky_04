import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Products from "./products";

function EditProduct({ product, onUpdate, onCancel }) {
    const [editedProduct, setEditedProduct] = useState(product);

    const handleUpdate = (event) => {
        event.preventDefault();
        onUpdate(editedProduct);
    };

    return (
        <div style={{ position: "fixed", top: "20%", left: "30%" }}>
            <h3>Chỉnh sửa sản phẩm</h3>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    value={editedProduct.name}
                    onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
                    style={{ width: "100%", marginBottom: "10px" }}
                />
                <input
                    type="text"
                    value={editedProduct.price}
                    onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
                    style={{ width: "100%", marginBottom: "10px" }}
                />
                <textarea
                    value={editedProduct.description}
                    onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
                    style={{ width: "100%", marginBottom: "10px" }}
                />
                <button type="submit">Lưu</button>
                <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>Hủy</button>
            </form>
        </div>
    );
}

function DeleteProductButton({ productId, onDelete }) {
    return (
        <button onClick={() => onDelete(productId)}>Delete</button>
    );
}

function ProductDetail() {
    const location = useLocation();
    const product = location.state?.product;

    if (!product) return <h2>Không tìm thấy sản phẩm!</h2>;

    return (
        <div>
            <h2>Thông tin chi tiết sản phẩm</h2>
            <img src={product.image} alt={product.name} />
            <p><strong>Tên sản phẩm:</strong> {product.name}</p>
            <p><strong>Giá:</strong> {product.price}</p>
            <p><strong>Mô tả:</strong> {product.description}</p>
            <Link to="/">
                <button>Quay lại</button>
            </Link>
        </div>
    );
}

function LaptopList({ products, onDelete, onEdit }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map((product) => (
                <div
                    key={product.id}
                    style={{
                        width: "220px",
                        border: "1px solid #ddd",
                        textAlign: "center",
                        padding: "10px",
                        margin: "10px",
                    }}
                >
                    <img src={product.image} alt={product.name} style={{ width: "100%", height: "auto" }} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <h4>{product.price}</h4>
                    <button onClick={() => onEdit(product)}>Update</button>
                    <DeleteProductButton productId={product.id} onDelete={onDelete} />
                    <Link to="/product-detail" state={{ product }}>
                        <button>Detail</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default function Laptop() {
    const [products, setProducts] = useState(Products);
    const [editingProduct, setEditingProduct] = useState(null);

    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
            setProducts(products.filter((product) => product.id !== id));
        }
    };

    const handleUpdateProduct = (updatedProduct) => {
        setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
        setEditingProduct(null);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <LaptopList
                                products={products}
                                onDelete={handleDelete}
                                onEdit={setEditingProduct}
                            />
                            {editingProduct && (
                                <EditProduct
                                    product={editingProduct}
                                    onUpdate={handleUpdateProduct}
                                    onCancel={() => setEditingProduct(null)}
                                />
                            )}
                        </>
                    }
                />
                <Route path="/product-detail" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
}