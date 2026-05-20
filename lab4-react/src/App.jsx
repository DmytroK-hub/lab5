import { useEffect, useState } from "react";

import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const hour = new Date().getHours();

        if (hour >= 7 && hour < 21) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <div className={`app ${theme}`}>
            <div className="container">
                <button className="theme-btn" onClick={toggleTheme}>
                    Змінити тему
                </button>

                <Header />
                <Experience />
                <Education />
                <Reviews />
                <Footer />
                <ContactForm />
            </div>
        </div>
    );
}

export default App;