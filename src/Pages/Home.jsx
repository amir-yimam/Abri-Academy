import { Link } from 'react-router-dom';
import biology from '../assets/biology.jpg';
import '../Styles/Home.css';

function Home() {
    return (
        <div className="main-box">
            <div className="nav-bar">
                <p className="logo">Abri Academy</p>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>           {/* FIXED: /home → / */}
                        <li><Link to="/exams">Exams</Link></li>
                        <li><Link to="/notes">Notes</Link></li>
                        <li><Link to="/leaderboard">Leaderboard</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="hero-section">                         {/* FIXED: Hero-section → hero-section */}
                <section className="hero-quote">
                    <p>Being prepared is more important than being clever</p>  {/* FIXED: added "more" */}
                </section>
                <section className="hero-img">
                    <img src={biology} alt="Hero Image" style={{ width: "200px", height: "200px" }} />  {/* FIXED: removed quotes around {biology} */}
                </section>
            </div>

            <div className="main-body">
                <div className="exam-cards">
                    <p className="subject-name">Biology</p>
                    <img src={biology} alt="Biology book" style={{ width: "200px", height: "200px" }} />
                    <button>Practice Exam</button>
                </div>

                <div className="exam-cards">
                    <p className="subject-name">English</p>
                    <img src={biology} alt="English book" style={{ width: "200px", height: "200px" }} />
                    <button>Practice Exam</button>
                </div>

                <div className="exam-cards">
                    <p className="subject-name">Mathematics</p>
                    <img src={biology} alt="Mathematics book" style={{ width: "200px", height: "200px" }} />
                    <button>Practice Exam</button>
                </div>
            </div>

            <div className="review">
                <div className="review-cards">
                    <p className="reviewer-name">Amir Yimam</p>
                    <p>This is the best exam preparation website ever, I really loved it.</p>
                    <img src={biology} alt="Reviewer" style={{ width: "200px", height: "200px" }} />
                </div>

                <div className="review-cards">
                    <p className="reviewer-name">Amir Yimam</p>
                    <p>This is the best exam preparation website ever, I really loved it.</p>
                    <img src={biology} alt="Reviewer" style={{ width: "200px", height: "200px" }} />
                </div>

                <div className="review-cards">
                    <p className="reviewer-name">Amir Yimam</p>
                    <p>This is the best exam preparation website ever, I really loved it.</p>
                    <img src={biology} alt="Reviewer" style={{ width: "200px", height: "200px" }} />
                </div>
            </div>

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

export default Home;