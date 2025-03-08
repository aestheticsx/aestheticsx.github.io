document.addEventListener("DOMContentLoaded", () => {
    const contacts = [
        { el: document.querySelector(".contacts #github"), url: "https://github.com/XdreamweaverX" },
        { el: document.querySelector(".contacts #blasthack"), url: "https://www.blast.hk/members/525215/" }
    ];
    
    contacts.forEach(contact => {
        contact.el.addEventListener("click", () => {            
            window.open(contact.url, "_blank");
            console.log(`Open contact -> ${contact.url}`);
        });        
    });

    document.querySelector(".executor").addEventListener("click", () => {
        window.open("https://www.blast.hk/threads/232210/", "_blank");
        console.log("Open executor link");
    });

    document.querySelector(".agreement").addEventListener("click", () => {
        alert("Soon");
    });
});