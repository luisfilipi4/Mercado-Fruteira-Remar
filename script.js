document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");

    document.querySelector(".wrapper").addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");
        content.classList.toggle("expanded");
    });
});
