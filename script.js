const browserInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    online: navigator.onLine,
    cookiesEnabled: navigator.cookieEnabled
};

localStorage.setItem("browserInfo", JSON.stringify(browserInfo));

const savedInfo = JSON.parse(localStorage.getItem("browserInfo"));

const footerBlock = document.getElementById("systemInfo");

footerBlock.innerHTML = `
    <p><b>Браузер та ОС:</b> ${savedInfo.userAgent}</p>
    <p><b>Платформа:</b> ${savedInfo.platform}</p>
    <p><b>Мова браузера:</b> ${savedInfo.language}</p>
    <p><b>Онлайн:</b> ${savedInfo.online}</p>
    <p><b>Cookies увімкнено:</b> ${savedInfo.cookiesEnabled}</p>
`;

const commentsList = document.getElementById("commentsList");

fetch("https://jsonplaceholder.typicode.com/posts/19/comments")
    .then(response => response.json())
    .then(comments => {
        comments.forEach(comment => {
            commentsList.innerHTML += `
                <div class="comment-card">
                    <h3>${comment.name}</h3>
                    <p><b>Email:</b> ${comment.email}</p>
                    <p>${comment.body}</p>
                </div>
            `;
        });
    })
    .catch(error => {
        commentsList.innerHTML = "<p>Помилка завантаження коментарів.</p>";
        console.error("Помилка:", error);
    });

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

setTimeout(() => {
    modal.style.display = "flex";
}, 60000);

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


const themeToggle = document.getElementById("themeToggle");

const hour = new Date().getHours();

if (hour >= 7 && hour < 21) {
    document.body.classList.add("light");
} else {
    document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("light")) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
});