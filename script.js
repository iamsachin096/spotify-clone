document.getElementById("search").addEventListener("click", () => {
    alert("Search button clicked!");
});



document.querySelectorAll(".icon").forEach(element => {
    element.addEventListener("click", () => {
        alert("Heart clicked!");
    });
});

document.querySelectorAll(".simg").forEach(element => {
    element.addEventListener("click", () => {
        alert("Playing...!");
    });
});
document.querySelectorAll(".item_image").forEach(element => {
    element.addEventListener("click", () => {
        alert("Playing...!");
    });
});

document.querySelectorAll(".pop_item").forEach(element => {
    element.addEventListener("click", () => {
        alert("opening playlist...!");
    });
});






