const sumbit_btn = document.getElementById("sumbit");

sumbit_btn.addEventListener("click", () => {
    console.log("Login");
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username);
    // username = "Ahmad251" , password = "integrity" 
    if (username === "Ahmad251" && password === "integrity") {
        window.location.href = "home.html";
    }
    else {
        alert("Username atau Password salah!");
    }
})