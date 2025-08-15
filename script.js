document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop form from refreshing page

    let username = document.querySelector("input[type='text']").value.trim();
    let password = document.querySelector("input[type='password']").value.trim();

    if (username === "" || password === "") {
        alert("Please enter both username and password!");
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
    } else {
        alert("Login successful ✅");
        // You can redirect to another page here
        // window.location.href = "home.html";
    }
});
