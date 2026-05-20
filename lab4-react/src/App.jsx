import { useEffect, useState } from "react";

import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const hour = new Date().getHours();

        if (hour >= 7 && hour < 21) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={`app ${theme}`}>
            <button className="theme-btn" onClick={toggleTheme}>
                Змінити тему
            </button>

            <div className="resume-layout">
                <aside className="sidebar">
                    <div className="avatar-placeholder">
                        DK
                    </div>

                    <h2>Контакти</h2>
                    <p>Email: kucuperadmytro@gmail.com</p>
                    <p>Телефон: +380 968043816</p>
                    <p>GitHub: DmytroK-hub</p>

                    <h2>Навички</h2>
                    <ul>
                        <li>Python</li>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML / CSS</li>
                    </ul>

                    <h2>Хобі</h2>
                    <p>Навчання, програмування, кібербезпека</p>
                </aside>

                <main className="main-content">
                    <Header />
                    <Experience />
                    <Education />
                    <Reviews />
                    <Footer />
                </main>
            </div>

            <ContactForm />
        </div>
    );
}

export default App;