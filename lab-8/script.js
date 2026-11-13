// Shared script for Lab 8.
// - index.html  : validates the form, saves the data, opens display.html
// - display.html: reads the saved data and shows it
var STORAGE_KEY = "lab8UserInfo";

/* ---------- PAGE 1: FORM (index.html) ---------- */
var form = document.getElementById("userForm");

if (form) {
  var fields = ["name", "mobile", "email", "city", "state", "country"];

  function setError(id, message) {
    document.getElementById(id + "Err").textContent = message;
    var box = document.getElementById(id);
    if (box) { box.classList.toggle("invalid", message !== ""); }
  }

  function validate() {
    var ok = true;
    var name = document.getElementById("name").value.trim();
    var mobile = document.getElementById("mobile").value.trim();
    var email = document.getElementById("email").value.trim();
    var city = document.getElementById("city").value.trim();
    var state = document.getElementById("state").value.trim();
    var country = document.getElementById("country").value;
    var genderPicked = document.querySelector('input[name="gender"]:checked');

    // Name: letters and spaces, at least 2 characters
    if (!/^[A-Za-z .]{2,}$/.test(name)) {
      setError("name", "Enter your name using letters only."); ok = false;
    } else { setError("name", ""); }

    // Gender: one option must be chosen
    if (!genderPicked) {
      document.getElementById("genderErr").textContent = "Please choose a gender."; ok = false;
    } else { document.getElementById("genderErr").textContent = ""; }

    // Mobile: 10 digits, starting with 6-9
    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
      setError("mobile", "Enter a valid 10-digit mobile number."); ok = false;
    } else { setError("mobile", ""); }

    // Email: simple pattern check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("email", "Enter a valid email address."); ok = false;
    } else { setError("email", ""); }

    // City and state: letters and spaces
    if (!/^[A-Za-z .]{2,}$/.test(city)) {
      setError("city", "Enter a valid city name."); ok = false;
    } else { setError("city", ""); }

    if (!/^[A-Za-z .]{2,}$/.test(state)) {
      setError("state", "Enter a valid state name."); ok = false;
    } else { setError("state", ""); }

    // Country: must be selected
    if (country === "") {
      setError("country", "Please select a country."); ok = false;
    } else { setError("country", ""); }

    return ok;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();               // stop page reload
    if (!validate()) { return; }

    var data = {
      name: document.getElementById("name").value.trim(),
      gender: document.querySelector('input[name="gender"]:checked').value,
      mobile: document.getElementById("mobile").value.trim(),
      email: document.getElementById("email").value.trim(),
      city: document.getElementById("city").value.trim(),
      state: document.getElementById("state").value.trim(),
      country: document.getElementById("country").value
    };

    // Save the data so the next page can read it
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    // Open the display page
    window.location.href = "display.html";
  });

  document.getElementById("resetBtn").addEventListener("click", function () {
    form.reset();
    fields.forEach(function (id) { setError(id, ""); });
    document.getElementById("genderErr").textContent = "";
  });
}

/* ---------- PAGE 2: DISPLAY (display.html) ---------- */
var table = document.getElementById("infoTable");

if (table) {
  var saved = localStorage.getItem(STORAGE_KEY);
  var status = document.getElementById("status");

  if (saved) {
    var info = JSON.parse(saved);
    document.getElementById("outName").textContent = info.name;
    document.getElementById("outGender").textContent = info.gender;
    document.getElementById("outMobile").textContent = info.mobile;
    document.getElementById("outEmail").textContent = info.email;
    document.getElementById("outCity").textContent = info.city;
    document.getElementById("outState").textContent = info.state;
    document.getElementById("outCountry").textContent = info.country;
  } else {
    table.style.display = "none";
    status.textContent = "No data found. Please fill the form first.";
  }

  document.getElementById("clearBtn").addEventListener("click", function () {
    localStorage.removeItem(STORAGE_KEY);
    table.style.display = "none";
    status.textContent = "Data cleared. Please fill the form again.";
  });
}
