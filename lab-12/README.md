# Lab 12 - Age Check Web Application

**Aim:** A web application that takes name and age from an HTML page. If the age is less than 18, it sends a page with the message "Hello <name>, you are not authorized to visit the site". Otherwise, it sends the message "Welcome to this site".

## Files
- `index.html` - form that takes the name and age (POST request)
- `check.php` - reads the name and age, checks the age, and sends the message page

## How it works
1. The form sends `name` and `age` to `check.php` using the POST method.
2. `check.php` reads them with `$_POST`.
3. If age < 18, the page shows "Hello <name>, you are not authorized to visit the site".
4. Otherwise, the page shows "Welcome to this site".

## How to run
PHP runs on a server, so GitHub Pages cannot run it.
1. Install XAMPP, copy the `lab-12` folder into `C:\xampp\htdocs\`, start Apache.
2. Open `http://localhost/lab-12/index.html`.

## Technologies
HTML, CSS, PHP
