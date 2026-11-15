# Lab 10 - Session: Hello Page with Start Time and Logout

**Aim:** A web application that takes a name as input, and on submit shows a hello page where the name is taken from the request. It shows the start time at the top right corner and provides a logout button. On clicking logout, a logout page shows a thank you message with the duration of usage. A session is used to store the name and time.

## Files
- `index.html` - form that sends the name to `hello.html` as a request (`?name=...`)
- `hello.html` - hello page with the start time at the top right and a Logout button
- `logout.html` - thank you page showing the duration of usage
- `style.css` - styling for all pages
- `script.js` - reads the request, manages the session and calculates the duration

## How it works
1. The form uses the GET method, so the name travels in the URL: `hello.html?name=Varsha`.
2. `hello.html` reads the name with `URLSearchParams` (the request).
3. The name and start time are stored in `sessionStorage` (the session).
4. On Logout, duration = current time - start time. The session is cleared and `logout.html` shows the thank you message.

## How to run
Open `index.html` in any web browser, or use the live GitHub Pages link.

## Note
GitHub Pages hosts static files only, so the session is kept in the browser with `sessionStorage`. In a Java servlet or PHP version, the same idea uses `HttpSession` or `$_SESSION` on the server.

## Technologies
HTML, CSS, JavaScript
