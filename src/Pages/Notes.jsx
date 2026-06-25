import { Link } from 'react-router-dom';
import '../Styles/Notes.css';

function Notes() {
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

            {/* ===== NOTES HEADER ===== */}
            <div className="notes-header">
                <h1>📚 Study Notes</h1>
                <p>Access all your subject notes in one place</p>
            </div>

            {/* ===== SUBJECT NOTES ===== */}
            <div className="notes-grid">
                {/* Biology Notes */}
                <div className="note-card">
                    <div className="note-icon">🧬</div>
                    <h3>Biology</h3>
                    <p>Cell structure, Genetics, Human anatomy, Ecology, Evolution</p>
                    <div className="note-topics">
                        <span>Cell Biology</span>
                        <span>Genetics</span>
                        <span>Anatomy</span>
                    </div>
                    <button>View Notes</button>
                </div>

                {/* English Notes */}
                <div className="note-card">
                    <div className="note-icon">📖</div>
                    <h3>English</h3>
                    <p>Grammar, Literature, Writing skills, Poetry, Comprehension</p>
                    <div className="note-topics">
                        <span>Grammar</span>
                        <span>Literature</span>
                        <span>Writing</span>
                    </div>
                    <button>View Notes</button>
                </div>

                {/* Mathematics Notes */}
                <div className="note-card">
                    <div className="note-icon">📐</div>
                    <h3>Mathematics</h3>
                    <p>Algebra, Geometry, Calculus, Statistics, Trigonometry</p>
                    <div className="note-topics">
                        <span>Algebra</span>
                        <span>Geometry</span>
                        <span>Calculus</span>
                    </div>
                    <button>View Notes</button>
                </div>

                {/* Physics Notes */}
                <div className="note-card">
                    <div className="note-icon">⚛️</div>
                    <h3>Physics</h3>
                    <p>Mechanics, Optics, Thermodynamics, Electricity, Magnetism</p>
                    <div className="note-topics">
                        <span>Mechanics</span>
                        <span>Optics</span>
                        <span>Thermodynamics</span>
                    </div>
                    <button>View Notes</button>
                </div>

                {/* Chemistry Notes */}
                <div className="note-card">
                    <div className="note-icon">🧪</div>
                    <h3>Chemistry</h3>
                    <p>Organic, Inorganic, Physical, Biochemistry, Analytical</p>
                    <div className="note-topics">
                        <span>Organic</span>
                        <span>Inorganic</span>
                        <span>Biochemistry</span>
                    </div>
                    <button>View Notes</button>
                </div>

                {/* History Notes */}
                <div className="note-card">
                    <div className="note-icon">🏛️</div>
                    <h3>History</h3>
                    <p>World history, Ancient civilizations, Modern era, Geography</p>
                    <div className="note-topics">
                        <span>Ancient</span>
                        <span>Medieval</span>
                        <span>Modern</span>
                    </div>
                    <button>View Notes</button>
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

export default Notes;