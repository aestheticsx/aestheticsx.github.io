document.addEventListener("DOMContentLoaded", () => {
    const contacts = [
        { el: document.querySelector(".contacts #github"), url: "https://github.com/XdreamweaverX" },
        { el: document.querySelector(".contacts #blasthack"), url: "https://www.blast.hk/members/525215/" }
    ];
    
    contacts.forEach(contact => {
        contact.el.addEventListener("click", () => window.open(contact.url, "_blank"));        
    });

    document.querySelector(".executor").addEventListener("click", () => window.open("https://www.blast.hk/threads/232210/", "_blank"));

    document.querySelector(".agreement").addEventListener("click", () => window.location.href = "agreement/index.html");

    document.querySelector(".reviews").addEventListener("click", () => window.location.href = "reviews/index.html");
});