document.addEventListener("DOMContentLoaded", async () => {  
    let config;

    const response = await fetch("../data.json");
    if (!response.ok) throw new Error("Network response was not ok");
    config = await response.json();
    if (!config) return;

    config.agreement.agreements.forEach(agreement => {
        const el = document.createElement("div");
        el.textContent = `· ${agreement}`;
        document.querySelector(".agreements").appendChild(el);
    });

    document.querySelector(".update").textContent = `Обновлено: ${config.agreement.update}`;

    document.querySelector(".back").addEventListener("click", () => window.location.href = "../index.html");
});