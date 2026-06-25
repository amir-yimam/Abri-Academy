import { Link } from 'react-router-dom';
import '../Styles/Exams.css';

function Exams() {
    // Sample exam data
    const exams = [
        {
            id: 1,
            subject: "Biology",
            icon: "🧬",
            title: "Cell Biology & Genetics",
            questions: 50,
            time: "45 min",
            difficulty: "Medium",
            students: 234,
            color: "#00ced1"
        },
        {
            id: 2,
            subject: "Biology",
            icon: "🧬",
            title: "Human Anatomy & Physiology",
            questions: 40,
            time: "35 min",
            difficulty: "Hard",
            students: 189,
            color: "#00bcd4"
        },
        {
            id: 3,
            subject: "English",
            icon: "📖",
            title: "Grammar & Comprehension",
            questions: 35,
            time: "30 min",
            difficulty: "Easy",
            students: 312,
            color: "#f472b6"
        },
        {
            id: 4,
            subject: "English",
            icon: "📖",
            title: "Literature & Poetry",
            questions: 30,
            time: "25 min",
            difficulty: "Medium",
            students: 167,
            color: "#ec4899"
        },
        {
            id: 5,
            subject: "Mathematics",
            icon: "📐",
            title: "Algebra & Geometry",
            questions: 45,
            time: "40 min",
            difficulty: "Hard",
            students: 278,
            color: "#f59e0b"
        },
        {
            id: 6,
            subject: "Mathematics",
            icon: "📐",
            title: "Calculus & Statistics",
            questions: 40,
            time: "35 min",
            difficulty: "Hard",
            students: 145,
            color: "#d97706"
        },
        {
            id: 7,
            subject: "Physics",
            icon: "⚛️",
            title: "Mechanics & Motion",
            questions: 35,
            time: "30 min",
            difficulty: "Medium",
            students: 198,
            color: "#f97316"
        },
        {
            id: 8,
            subject: "Physics",
            icon: "⚛️",
            title: "Optics & Thermodynamics",
            questions: 30,
            time: "25 min",
            difficulty: "Hard",
            students: 123,
            color: "#ea580c"
        },
        {
            id: 9,
            subject: "Chemistry",
            icon: "🧪",
            title: "Organic Chemistry",
            questions: 40,
            time: "35 min",
            difficulty: "Hard",
            students: 156,
            color: "#8b5cf6"
        },
        {
            id: 10,
            subject: "Chemistry",
            icon: "🧪",
            title: "Inorganic & Physical",
            questions: 35,
            time: "30 min",
            difficulty: "Medium",
            students: 187,
            color: "#7c3aed"
        },
        {
            id: 11,
            subject: "History",
            icon: "🏛️",
            title: "World History",
            questions: 30,
            time: "25 min",
            difficulty: "Medium",
            students: 134,
            color: "#ef4444"
        },
        {
            id: 12,
            subject: "History",
            icon: "🏛️",
            title: "Ancient Civilizations",
            questions: 25,
            time: "20 min",
            difficulty: "Easy",
            students: 201,
            color: "#dc2626"
        }
    ];

    // Filter subjects for sidebar
    const subjects = [...new Set(exams.map(exam => exam.subject))];

    return (
        <div className="main-box">
            {/* ===== NAVBAR ===== */}
            <div className="nav-bar">
                <p className="logo">Abri Academy</p>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/exams">Exams</Link></li>
                        <li><Link to="/notes">Notes</Link></li>
                        <li><Link to="/leaderboard">Leaderboard</Link></li>
                    </ul>
                </nav>
                <div className="auth-buttons">
                    <Link to="/login" className="btn-login">Login</Link>
                    <Link to="/signup" className="btn-signup">Sign Up</Link>
                </div>
            </div>

            {/* ===== EXAMS HEADER ===== */}
            <div className="exams-header">
                <h1>📝 Practice Exams</h1>
                <p>Test your knowledge and track your progress</p>
                <div className="exam-stats">
                    <div className="stat-box">
                        <span className="stat-number">{exams.length}</span>
                        <span className="stat-label">Total Exams</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-number">{subjects.length}</span>
                        <span className="stat-label">Subjects</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-number">2,324</span>
                        <span className="stat-label">Students Attempted</span>
                    </div>
                </div>
            </div>

            {/* ===== EXAMS CONTENT ===== */}
            <div className="exams-content">
                {/* Sidebar - Subjects */}
                <div className="exams-sidebar">
                    <h3>Subjects</h3>
                    <ul>
                        <li className="active"><a href="#">All Subjects</a></li>
                        {subjects.map((subject, index) => (
                            <li key={index}><a href="#">{subject}</a></li>
                        ))}
                    </ul>
                    <div className="sidebar-tip">
                        <p>💡 Tip</p>
                        <p>Start with easier exams to build confidence!</p>
                    </div>
                </div>

                {/* Exam Cards Grid */}
                <div className="exams-grid">
                    {exams.map((exam) => (
                        <div className="exam-card" key={exam.id}>
                            <div className="exam-card-header" style={{ borderColor: exam.color }}>
                                <div className="exam-icon" style={{ background: `${exam.color}15` }}>
                                    {exam.icon}
                                </div>
                                <div className="exam-subject" style={{ color: exam.color }}>
                                    {exam.subject}
                                </div>
                            </div>
                            
                            <h3>{exam.title}</h3>
                            
                            <div className="exam-details">
                                <div className="exam-detail">
                                    <span>📋</span>
                                    <span>{exam.questions} Questions</span>
                                </div>
                                <div className="exam-detail">
                                    <span>⏱️</span>
                                    <span>{exam.time}</span>
                                </div>
                                <div className="exam-detail">
                                    <span>📊</span>
                                    <span>{exam.difficulty}</span>
                                </div>
                                <div className="exam-detail">
                                    <span>👥</span>
                                    <span>{exam.students} Attempted</span>
                                </div>
                            </div>

                            <div className="exam-difficulty-bar">
                                <div className={`difficulty-level ${exam.difficulty.toLowerCase()}`}>
                                    {exam.difficulty}
                                </div>
                                <div className="exam-students">
                                    👥 {exam.students}
                                </div>
                            </div>

                            <button className="start-exam-btn" style={{ background: `linear-gradient(135deg, ${exam.color}, ${exam.color}cc)` }}>
                                Start Exam →
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== FOOTER ===== */}
            <div className="footer">
                <div className="footer-1st">
                    <p className="footer-1st-header">Our Network</p>
                    <ul>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Literature</a></li>
                        <li><a href="#">Engineering</a></li>
                        <li><a href="#">Architecture</a></li>
                        <li><a href="#">Software</a></li>
                    </ul>
                </div>

                <div className="footer-2nd">
                    <p className="footer-2nd-header">Learn More</p>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Exams</a></li>
                        <li><a href="#">Notes</a></li>
                        <li><a href="#">Leaderboard</a></li>
                    </ul>
                </div>

                <div className="footer-3rd">
                    <p className="footer-3rd-header">Abri Academy</p>
                    <p className="email">Email: AbriAcademy.edu.et</p>
                    <p className="phone">Phone: +2519904712795</p>
                </div>
            </div>
        </div>
    );
}

export default Exams;