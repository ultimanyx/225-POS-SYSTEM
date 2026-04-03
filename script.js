// Atong i-wrap ang tanan sa "DOMContentLoaded" para sigurado nga 
// human na og load ang HTML una mo-andar ang JS.
document.addEventListener('DOMContentLoaded', function() {

    // --- LOGIN LOGIC ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;
            const message = document.getElementById('message');

            if (user === "admin" && pass === "1234") {
                window.location.href = "dashboard.html";
            } else {
                message.innerText = "Invalid Username or Password!";
            }
        });
    }

    // --- LOGOUT LOGIC ---
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm("Sigurado ka nga mo-logout?")) {
                window.location.href = "index.html";
            }
        });
    }
});