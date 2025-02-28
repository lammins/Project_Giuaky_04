import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

const students = [
    { id: 1, name: 'Nguyễn Xuân Anh', age: 21, gender: 'Nam', gpa: 3.5, email: 'xuananh@example.com' },
    { id: 2, name: 'Nguyễn Thị Bình', age: 22, gender: 'Nữ', gpa: 3.7, email: 'thibinh@example.com' },
    { id: 3, name: 'Trần Văn Cường', age: 23, gender: 'Nam', gpa: 3.2, email: 'vancuong@example.com' },
    { id: 4, name: 'Trần Thị Dung', age: 24, gender: 'Nữ', gpa: 3.8, email: 'thidung@example.com' },
    { id: 5, name: 'Lê Văn Dũng', age: 25, gender: 'Nam', gpa: 3.0, email: 'vandung@example.com' },
    { id: 6, name: 'Lê Thị Hà', age: 26, gender: 'Nữ', gpa: 3.9, email: 'thiha@example.com' },
    { id: 7, name: 'Phạm Văn Hải', age: 27, gender: 'Nam', gpa: 2.8, email: 'vanhai@example.com' },
    { id: 8, name: 'Phạm Thị Hòa', age: 28, gender: 'Nữ', gpa: 3.6, email: 'thihoa@example.com' },
    { id: 9, name: 'Đinh Văn Hùng', age: 29, gender: 'Nam', gpa: 3.1, email: 'vanhung@example.com' },
    { id: 10, name: 'Đinh Thị Hương', age: 30, gender: 'Nữ', gpa: 3.4, email: 'thihuong@example.com' },
];

function StudentsList() {
    return (
        <> 
            <h1>Danh sách sinh viên</h1>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.name} - {student.age} tuổi 
                        <Link 
                            to="/student-detail"
                            state={{ student }} 
                        >
                            <button>Detail</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

function StudentDetail() {
    const location = useLocation();
    const student = location.state?.student; 

    if (!student) return <h2>Không tìm thấy sinh viên!</h2>;

    return (
        <div>
            <h2>Thông tin chi tiết</h2>
            <p><strong>Họ và tên:</strong> {student.name}</p>
            <p><strong>Tuổi:</strong> {student.age}</p>
            <p><strong>Giới tính:</strong> {student.gender}</p>
            <p><strong>GPA:</strong> {student.gpa}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <Link to="/">
                <button>Quay lại</button>
            </Link>
        </div>
    );
}

export default function Laptop() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StudentsList />} />
                <Route path="/student-detail" element={<StudentDetail />} /> 
            </Routes>
        </Router>
    );
}