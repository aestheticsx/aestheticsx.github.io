const reviews = [
    { name: "dreamweaver", text: "Отзывов пока что нету =(", avatar: true }
];

document.addEventListener("DOMContentLoaded", () => {
    reviews.reverse().forEach(review => {
        const el = document.createElement("div");
        el.className = "review";

        const avatarEl = document.createElement("img");
        avatarEl.src = review.avatar ? `../images/reviews/${review.name}.png` : "../images/reviews/none.png";
        avatarEl.className = "avatar";

        const nameContainer = document.createElement("div");
        nameContainer.className = "name-container";

        const nameEl = document.createElement("div");
        nameEl.className = "name";
        nameEl.textContent = review.name;

        nameContainer.appendChild(avatarEl);
        nameContainer.appendChild(nameEl);
        el.appendChild(nameContainer);

        const separator = document.createElement("div");
        separator.className = "separator";
        el.appendChild(separator);

        const textEl = document.createElement("div");
        textEl.className = "text";
        textEl.textContent = review.text;
        el.appendChild(textEl);

        document.querySelector(".reviews-container").appendChild(el);
    });

    document.querySelector(".back").addEventListener("click", () => window.location.href = "../index.html");
});
