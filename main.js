document.addEventListener("DOMContentLoaded", async () => {
    let config;

    const response = await fetch("data.json");
    if (!response.ok) throw new Error("Network response was not ok");
    config = await response.json();
    if (!config) return;

    config.home.card.languages.forEach(language => {
        const el = document.createElement("img");
        el.className = "icon";
        el.src = `images/languages/${language}.png`;
        document.querySelector(".card .languages").appendChild(el);
    });

    config.home.contacts.forEach(contact => {
        const el = document.createElement("img");
        el.className = "icon";
        el.id = contact.name;
        el.src = `images/contacts/${contact.name}.png`;
        el.onclick = () => window.open(contact.link, "_blank");
        document.querySelector(".contacts").appendChild(el);
    });

    document.querySelector(".card .name").textContent = config.home.card.name;

    if (config.home.executor.display) {
        document.querySelector(".executor").addEventListener("click", () => window.open(config.home.executor.link, "_blank"));
    } else {
        document.querySelector(".executor").style.display = "none";
    }

    document.querySelector(".agreement").addEventListener("click", () => window.location.href = "agreement/index.html");

    document.querySelector(".reviews").addEventListener("click", () => window.location.href = "reviews/index.html");
});