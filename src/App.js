import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div className="hero">
    <div className="hero-text">
      <h1>Hi, I'm <span className="highlight">Courage</span></h1>
      <p>
        You’re building something big, and I’m here to handle the things that slow you down whether it’s DMs, tasks, follow-ups, content calendars, or all that behind-the-scenes work. You don’t need to explain everything twice. I get it, and I get it done.
      </p>
      <Link to="/contact" className="cta-button">Work With Me</Link>
    </div>
    <div className="hero-image">
      <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Profile" />
    </div>
  </div>
);

const About = () => (
  <div className="about">
    <h2>About Me</h2>
    <p>Hi, I am Nigerian virtual assistant who will make your life easier and get things done without stress.</p>

    <p>I help busy people, small business owners, and teams handle the work they don’t have time for. From managing emails and scheduling meetings to handling documents, research, and tech tools. I take care of the background work so you can focus on what matters.</p>

    <h3>Here’s what I do well:</h3>
    <ul>
      <li>Turn scattered tasks into clear plans</li>
      <li>Keep your calendar and emails under control</li>
      <li>Help with research, reports, and light content work</li>
      <li>Set up tools like Google Workspace, Notion, Trello, Canva, etc.</li>
      <li>Use AI tools like ChatGPT to work smarter and faster</li>
    </ul>

    <h3>Why I do this:</h3>
    <p>I enjoy bringing order to busy days. I love helping people save time and reduce stress, especially when they’re juggling so much.</p>

    <h3>Why people like working with me:</h3>
    <ul>
      <li>I learn fast, I am reliable, and I don’t wait for you to repeat things twice.</li>
      <li>I work with initiative, I don’t need micromanaging.</li>
      <li>I bring positive energy and good communication (even when work is plenty).</li>
      <li>I take your work seriously and treat it like my own</li>
    </ul>

    <h3>When I’m not working:</h3>
    <p>I’m either scrolling through TikTok, or relaxing with a good movie and food.</p>

    <p><strong>If you’re tired of doing everything alone, I’m ready to help.</strong></p>
  </div>
);

const ResumeHighlights = () => (
  <div className="resume-highlights">
    <h2>Resume Highlights</h2>

    <h3>Education</h3>
    <ul>
      <li>Bingham University, Computer Science (2023) - First Class (4.51 CGPA)</li>
      <li>ALX Virtual Assistant Program
        <ul>
          <li>Mastered CRM workflows, task automation, and client retention strategies.</li>
        </ul>
      </li>
      <li>Google Digital Garage – Digital Marketing Fundamentals</li>
        <ul>
          <li>Skills: SEO, content strategy, and audience engagement.</li>
        </ul>
    </ul>

    <h3>Tools I Use</h3>
    <ul>
      <li>Google Workspace (Docs, Sheets, Calendar, Gmail)</li>
      <li>Notion, Trello</li>
      <li>Canva, Grammarly</li>
      <li>ChatGPT, Calendly</li>
      <li>Zoom, Meta Business Suite</li>
    </ul>

    <h3>Soft Skills</h3>
    <ul>
      <li>Excellent Communication</li>
      <li>Problem-Solving</li>
      <li>Adaptability & Flexibility</li>
      <li>Time Management & Prioritization</li>
      <li>Attention to Detail</li>
      {/* Add more soft skills here */}
    </ul>
  </div>
);

const Contact = () => (
  <div className="contact">
    <h2>Contact Me</h2>
    <form action="https://formspree.io/f/xrbpepqy" method="POST">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
);

const WorkHistory = () => (
  <div className="work-history">
    <h2>Work Experience</h2>

    {/* Visual Design Specialist */}
    <div className="work-item">
      <h3>Visual Design Specialist</h3>
      <p className="job-title">Tech Branding and AI Visuals</p>
      <p className="job-duration">2022 - Present</p>
      <div className="job-image">
        <img src={process.env.PUBLIC_URL + '/GRAPHIC DESIGN.png'} alt="AI branding project samples" />
      </div>
      <p className="job-description">
        Created over 150 designs for tech and AI startups, including LinkedIn posts, email banners, and product graphics.
        Used Adobe tools and Midjourney AI to make clear, eye-catching visuals.
      </p>
      <div className="job-tags">
        <span>Brand Identity Design</span>
        <span>AI Art</span>
        <span>Design for Conversions</span>
      </div>
    </div>

    {/* Senior Tech Content Writer */}
    <div className="work-item">
      <h3>Senior Tech Content Writer</h3>
      <p className="job-title">AI and SaaS Articles</p>
      <p className="job-duration">June 2023 - Present</p>
      <div className="job-image">
        <img src={process.env.PUBLIC_URL + '/content.png'} alt="AI writing portfolio samples" />
      </div>
      <p className="job-description">
        Wrote more than 80 articles on AI, machine learning, and tech in Nigeria.
        The articles kept readers engaged and helped boost clicks and shares.
      </p>
      <div className="job-tags">
        <span>Technical Writing</span>
        <span>SEO</span>
        <span>Simple Data Stories</span>
      </div>
    </div>

    {/* Email Marketing Strategist */}
    <div className="work-item">
      <h3>Email Marketing Strategist</h3>
      <p className="job-title">Email Campaigns and Client Follow-up</p>
      <p className="job-duration">Feb 2024 - Present</p>
      <div className="job-image">
        <img src={process.env.PUBLIC_URL + '/email.png'} alt="Email campaign performance dashboard" />
      </div>
      <p className="job-description">
        Planned and set up 22 email campaigns to guide customers through different steps.
        These emails had strong open and conversion rates for B2B software.
      </p>
      <div className="job-tags">
        <span>Email Automation</span>
        <span>Testing Emails</span>
        <span>CRM Tools</span>
      </div>
    </div>

    {/* Inclusifund */}
    <div className="work-item">
      <h3>Startup Funding Content Assistant</h3>
      <p className="job-title">Inclusifund | African Startup News and Learning</p>
      <p className="job-duration">2024 - Present</p>
      <div className="job-image">
        <img src={process.env.PUBLIC_URL + '/inclusi.png'} alt="Inclusifund website preview" />
      </div>
      <p className="job-description">
        Helped create and manage content for Inclusifund, a platform that shares startup funding news and learning tips.
        Worked on articles, newsletters, and visual content for founders across Africa.
      </p>
      <div className="job-tags">
        <span>Startup Funding</span>
        <span>Content Creation</span>
        <span>African Tech Ecosystem</span>
      </div>
    </div>
  </div>
);

const Navbar = () => (
  <nav>
    <div className="logo">
      <Link to="/">
        <img src={process.env.PUBLIC_URL + '/VALOGO.png'} alt="Paul Courage Logo" className="logo-img" />
      </Link>
    </div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/resume-highlights">Resume Highlights</Link>
      <Link to="/work-history">Work History</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

const Footer = () => (
  <footer>
    <p>© {new Date().getFullYear()} Paul Courage. All rights reserved.</p>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume-highlights" element={<ResumeHighlights />} />
            <Route path="/work-history" element={<WorkHistory />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
