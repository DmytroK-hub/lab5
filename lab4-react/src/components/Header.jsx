function Header() {
  return (
    <header
      style={{
        textAlign: "center",
        marginBottom: "30px",
        background: "#2b3a4a",
        padding: "30px",
        borderRadius: "15px"
      }}
    >
      <h1>Дмитро Куцупера</h1>

      <p style={{ fontSize: "18px" }}>
        <strong>Бажана посада:</strong> React Developer Student
      </p>

      <div style={{ marginTop: "15px", lineHeight: "1.8" }}>
        <div>
          Email:{" "}
          <a href="mailto:kucuperadmytro@gmail.com">
            kucuperadmytro@gmail.com
          </a>
        </div>

        <div>
          Телефон:{" "}
          <a href="tel:+380968043816">+380 968043816</a>
        </div>

        <div>
          GitHub:{" "}
          <a href="https://github.com/DmytroK-hub" target="_blank">
            DmytroK-hub
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;