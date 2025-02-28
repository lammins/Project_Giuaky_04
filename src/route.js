import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { useState } from "react";
import Products from "./products";

function Home() {
    return (
        <div>
            <h2>Trang chủ</h2>
            <ul>
                <li><Link to="/products">Hiển thị danh sách sản phẩm</Link></li>
                <li><Link to="/search">Tìm kiếm sản phẩm theo tên</Link></li>
                <li><Link to="/filter">Lọc sản phẩm theo danh mục</Link></li>
                <li><Link to="/add">Thêm sản phẩm mới</Link></li>
                <li><Link to="/update">Cập nhật thông tin sản phẩm</Link></li>
                <li><Link to="/delete">Xóa sản phẩm khỏi danh sách</Link></li>
            </ul>
        </div>
    );
}

function ProductList({ showSearch = false, showFilter = false }) {
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
        <div>
            <h2>Danh sách sản phẩm</h2>
            <Link to="/">Home</Link>
            {showSearch && (
                <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                />
            )}
            {showFilter && (
                <div style={{ marginBottom: '20px' }}>
                    <select>
                        <option>Lọc theo tên</option>
                    </select>
                    <select>
                        <option>Lọc theo hãng</option>
                    </select>
                </div>
            )}
            {editingProduct && (
                <EditProduct
                    product={editingProduct}
                    onUpdate={handleUpdateProduct}
                    onCancel={() => setEditingProduct(null)}
                />
            )}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px' }}>
                {products.map((product) => (
                    <div key={product.id} >
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price} VND</p>
                        <div>
                            <Link to={`/detail/${product.id}`}>Detail</Link>
                            <button onClick={() => setEditingProduct(product)}>Update</button>
                            <button onClick={() => handleDelete(product.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ProductDetail() {
    const { id } = useParams();
    const product = Products.find((p) => p.id.toString() === id);

    if (!product) {
        return <h2>Sản phẩm không tồn tại</h2>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <h4>{product.price} VND</h4>
            <Link to="/products">Quay lại</Link>
        </div>
    );
}

function AddProductForm() {
    return (
        <div>
            <h2>Thêm sản phẩm mới</h2>
            <form>
                <p><input type="text" placeholder="Tên sản phẩm" /></p>
                <p><input type="text" placeholder="Hãng sản xuất" /></p>
                <p><input type="number" placeholder="Giá" /></p>
                <p><textarea placeholder="Mô tả"></textarea></p>
                <p><input type="file" accept="image/*" /></p>
                <p><button>Thêm sản phẩm</button></p>
            </form>
        </div>
    );
}

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

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/detail/:id" element={<ProductDetail />} />
                <Route path="/search" element={<ProductList showSearch={true} />} />
                <Route path="/filter" element={<ProductList showFilter={true} />} />
                <Route path="/add" element={<AddProductForm />} />
                <Route path="/update" element={<ProductList />} />
                <Route path="/delete" element={<ProductList />} />
            </Routes>
        </Router>
    );
}
