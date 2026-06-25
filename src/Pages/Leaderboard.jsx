import { Link } from 'react-router-dom';
import '../Styles/Leaderboard.css';

function Leaderboard() {
    // Sample student data
    const students = [
        { rank: 1, name: "Abebe Kebede", score: 98, subject: "Mathematics", avatar: "👨‍🎓" },
        { rank: 2, name: "Tigist Hailu", score: 95, subject: "Biology", avatar: "👩‍🎓" },
        { rank: 3, name: "Samuel Tadesse", score: 92, subject: "Physics", avatar: "👨‍🎓" },
        { rank: 4, name: "Meron Tekle", score: 90, subject: "Chemistry", avatar: "👩‍🎓" },
        { rank: 5, name: "Dawit Girma", score: 88, subject: "English", avatar: "👨‍🎓" },
        { rank: 6, name: "Helen Wondimu", score: 85, subject: "Mathematics", avatar: "👩‍🎓" },
        { rank: 7, name: "Yonas Assefa", score: 83, subject: "Biology", avatar: "👨‍🎓" },
        { rank: 8, name: "Sara Mohammed", score: 80, subject: "Physics", avatar: "👩‍🎓" },
        { rank: 9, name: "Biruk Alemu", score: 78, subject: "Chemistry", avatar: "👨‍🎓" },
        { rank: 10, name: "Mekdes Worku", score: 75, subject: "English", avatar: "👩‍🎓" },
        { rank: 11, name: "Henok Desta", score: 72, subject: "Mathematics", avatar: "👨‍🎓" },
        { rank: 12, name: "Betelehem Getu", score: 70, subject: "Biology", avatar: "👩‍🎓" },
    ];

    // Get top 3 for podium
    const top3 = students.slice(0, 3);
    const rest = students.slice(3);

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

            {/* ===== LEADERBOARD HEADER ===== */}
            <div className="leaderboard-header">
                <h1>🏆 Leaderboard</h1>
                <p>Top performing students of the month</p>
            </div>

            {/* ===== PODIUM (Top 3) ===== */}
            <div className="podium">
                {/* 2nd Place */}
                <div className="podium-card silver">
                    <div className="podium-rank">🥈</div>
                    <div className="podium-avatar">{top3[1].avatar}</div>
                    <h3>{top3[1].name}</h3>
                    <p className="podium-score">{top3[1].score}%</p>
                    <p className="podium-subject">{top3[1].subject}</p>
                    <div className="podium-number">#2</div>
                </div>

                {/* 1st Place */}
                <div className="podium-card gold">
                    <div className="podium-rank">👑</div>
                    <div className="podium-avatar">{top3[0].avatar}</div>
                    <h3>{top3[0].name}</h3>
                    <p className="podium-score">{top3[0].score}%</p>
                    <p className="podium-subject">{top3[0].subject}</p>
                    <div className="podium-number">#1</div>
                </div>

                {/* 3rd Place */}
                <div className="podium-card bronze">
                    <div className="podium-rank">🥉</div>
                    <div className="podium-avatar">{top3[2].avatar}</div>
                    <h3>{top3[2].name}</h3>
                    <p className="podium-score">{top3[2].score}%</p>
                    <p className="podium-subject">{top3[2].subject}</p>
                    <div className="podium-number">#3</div>
                </div>
            </div>

            {/* ===== FULL LEADERBOARD TABLE ===== */}
            <div className="leaderboard-table">
                <div className="table-header">
                    <span>Rank</span>
                    <span>Student</span>
                    <span>Subject</span>
                    <span>Score</span>
                </div>

                {rest.map((student) => (
                    <div className="table-row" key={student.rank}>
                        <span className="rank">#{student.rank}</span>
                        <span className="student-info">
                            <span className="student-avatar">{student.avatar}</span>
                            {student.name}
                        </span>
                        <span className="subject">{student.subject}</span>
                        <span className="score">{student.score}%</span>
                    </div>
                ))}
            </div>

            {/* ===== YOUR RANK (Demo) ===== */}
            <div className="your-rank">
                <p>🎯 Your Rank: <span>#15</span></p>
                <p className="your-score">Keep practicing to climb the leaderboard!</p>
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

export default Leaderboard;