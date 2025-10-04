document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === '' || password === '') {
                alert('Please fill in all fields.');
                return;
            }
            // In a real application, you would send this to a server for validation.
            // For this frontend-only demo, we'll just redirect.
            alert('Login successful!');
            window.location.href = 'dashboard.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirm-password').value.trim();

            if (username === '' || password === '' || confirmPassword === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // In a real application, you would send this to a server to create an account.
            // For this frontend-only demo, we'll just redirect.
            alert('Registration successful! Please login.');
            window.location.href = 'login.html';
        });
    }
});