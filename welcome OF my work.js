//click continue button we can make loading to go to the next page
document.querySelector("button").addEventListener("click", function() {
    this.textContent = "Loading...";
    this.disabled = true;
    setTimeout(() => {
        window.location.href = "./SWAP TWO NUMBER.html";
    }, 2000); // 2 seconds delay
    this.textContent = "Continue";
    this.disabled = false;
});

//back button functionality
document.querySelector("a").addEventListener("click", function() {
    this.textContent = "Loading...";
    setTimeout(() => {
        window.location.href = "./welcome OF my work.html";
    }, 2000); // 2 seconds delay
});
