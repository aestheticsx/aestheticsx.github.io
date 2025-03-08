const updateDate = "08.03.2025";

const agreements = [
    "После успешной сделки возврат средств не осуществляется",
    "Исполнитель исправляет баги, но не несет ответственность за изменения на стороне сервера",
    "Отменить заказ после начала работы - нельзя, а так же средства не возвращаются",
    "Вы не можете присваивать авторство скрипта/плагина себе, автором является исполнитель",
    "Заказ может быть не выполнен без объяснения причин, с возвратом средств",
    "Исполнитель имеет право предоставить заказ без исходного кода",
    "В случае каких-либо недочетов исполнитель исправит их без доп. платы",
    "Правки не описанные в Т/З будут выполнены за дополнительную плату"
];

document.addEventListener("DOMContentLoaded", () => {  
    document.querySelector(".back").addEventListener("click", () => {
        window.location.href = "../index.html";
    });

    agreements.forEach(agreement => {
        const el = document.createElement("div");
        el.textContent = `· ${agreement}`;
        document.querySelector(".agreements").appendChild(el);
    });

    document.querySelector(".update").textContent = `Обновлено: ${updateDate}`;
});