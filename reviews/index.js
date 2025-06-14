document.addEventListener("DOMContentLoaded", () => {
  const reviewsList = document.getElementById("reviews-list");

  async function loadReviews() {
    try {
      const response = await fetch("../reviews.json");
      if (!response.ok)
        throw new Error("Ошибка загрузки отзывов");

      const reviews = await response.json();

      reviews.reverse().forEach(({ avatar, name, date, text }) => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = `../images/reviews/${avatar}`;
        img.alt = name;
        img.className = "review-avatar";

        const content = document.createElement("div");
        content.className = "review-content";

        const nameDate = document.createElement("div");
        nameDate.className = "review-name-date";

        const nameElem = document.createElement("span");
        nameElem.textContent = name;

        const dateElem = document.createElement("span");
        dateElem.textContent = formatDate(date);

        nameDate.appendChild(nameElem);
        nameDate.appendChild(dateElem);

        const textElem = document.createElement("p");
        textElem.className = "review-text";
        textElem.textContent = text;

        content.appendChild(nameDate);
        content.appendChild(textElem);

        li.appendChild(img);
        li.appendChild(content);

        reviewsList.appendChild(li);
      });
    } catch (error) {
      console.error(error);
      
      reviewsList.innerHTML = `<li style="color:#f88;">Не удалось загрузить отзывы</li>`;
    }
  }

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  document.getElementById("home-button").addEventListener("click", () => window.location.href = "../index.html");

  loadReviews();
});
