# Lab 11 - Current Date, Time and Day in PHP

**Aim:** Write a PHP program to display the current date, time and day using a PHP script.

## Files
- `index.php` - PHP script that shows the current date, time and day

## How it works
- `date_default_timezone_set("Asia/Kolkata")` sets the time zone.
- `date("d-m-Y")` gives the date, `date("h:i:s A")` gives the time, and `date("l")` gives the day name.
- `echo` prints each value inside an HTML table.

## How to run
PHP runs on a server, so GitHub Pages cannot run it. Use one of these:
1. Install XAMPP, copy the `lab-11` folder into `C:\xampp\htdocs\`, start Apache, and open `http://localhost/lab-11/index.php`.
2. Or run `php -S localhost:8000` inside the `lab-11` folder and open `http://localhost:8000/index.php`.

## Technologies
PHP, HTML, CSS
