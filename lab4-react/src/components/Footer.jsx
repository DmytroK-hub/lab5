import { useEffect, useState } from "react";

function Footer() {
    const [systemInfo, setSystemInfo] = useState({
        userAgent: "",
        platform: ""
    });

    useEffect(() => {
        const info = {
            userAgent: navigator.userAgent,
            platform: navigator.platform
        };

        localStorage.setItem("systemInfo", JSON.stringify(info));

        const saved = JSON.parse(localStorage.getItem("systemInfo"));

        if (saved) {
            setSystemInfo(saved);
        }
    }, []);

    return (
        <footer style={{
            marginTop: "auto",
            padding: "20px",
            background: "#222",
            color: "white",
        }}>
            <h3>Системна інформація:</h3>
            <p><b>Браузер:</b> {systemInfo.userAgent}</p>
            <p><b>Платформа:</b> {systemInfo.platform}</p>
        </footer>
    );
}

export default Footer;