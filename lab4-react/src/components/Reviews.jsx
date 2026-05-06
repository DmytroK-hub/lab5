import { useEffect, useState } from "react";

function Reviews() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/19/comments")
            .then(response => response.json())
            .then(data => {
                setComments(data);
            })
            .catch(error => {
                console.error("Помилка завантаження коментарів:", error);
            });
    }, []);

    return (
        <section style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>
                Відгуки попередніх роботодавців
            </h2>

            <div
                style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "25px"
                }}
            >
                {comments.map(comment => (
                    <div key={comment.id} className="review-card">
                        <h3>{comment.name}</h3>
                        <p className="email">Email: {comment.email}</p>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;