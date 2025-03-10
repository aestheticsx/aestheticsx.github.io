document.addEventListener("DOMContentLoaded", async () => {
    let config;

    const response = await fetch("../data.json");
    if (!response.ok) throw new Error("Network response was not ok");
    config = await response.json();
    if (!config) return;

    config.review.reviews.reverse().forEach(review => {
        const el = document.createElement("div");
        el.className = "review";
        el.onclick = () => window.open(review.link, "_blank");

        const avatarEl = document.createElement("img");
        avatarEl.src = review.avatar ? `../images/reviews/${review.name}.png` : "../images/reviews/none.png";
        avatarEl.className = "avatar";

        const nameContainer = document.createElement("div");
        nameContainer.className = "name-container";

        const nameEl = document.createElement("div");
        nameEl.className = "name";
        nameEl.textContent = review.name;
        nameEl.onclick = () => window.open(review.profile, "_blank");

        const dateEl = document.createElement("div");
        dateEl.className = "date";
        dateEl.textContent = review.date;

        nameContainer.appendChild(avatarEl);
        nameContainer.appendChild(nameEl);
        nameContainer.appendChild(dateEl);
        el.appendChild(nameContainer);

        const separator = document.createElement("div");
        separator.className = "separator";
        el.appendChild(separator);

        const textEl = document.createElement("div");
        textEl.className = "text";
        textEl.textContent = review.text;
        el.appendChild(textEl);

        document.querySelector(".reviews").appendChild(el);
    });

    document.querySelector(".where").addEventListener("click", () => window.open(config.review.where, "_blank"));

    document.querySelector(".back").addEventListener("click", () => window.location.href = "../index.html");
});