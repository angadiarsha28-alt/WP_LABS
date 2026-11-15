// Lab 10: session handling with sessionStorage.
// index.html  : form sends the name in the request (URL) to hello.html
// hello.html  : reads the name from the request, stores name + start time in the session
// logout.html : shows a thank you message with the duration of usage

function formatDuration(ms) {
  var total = Math.round(ms / 1000);
  var hours = Math.floor(total / 3600);
  var minutes = Math.floor((total % 3600) / 60);
  var seconds = total % 60;
  var parts = [];
  if (hours > 0) { parts.push(hours + (hours === 1 ? " hour" : " hours")); }
  if (minutes > 0) { parts.push(minutes + (minutes === 1 ? " minute" : " minutes")); }
  parts.push(seconds + (seconds === 1 ? " second" : " seconds"));
  return parts.join(" ");
}

/* ---------- HELLO PAGE ---------- */
var greeting = document.getElementById("greeting");
var logoutBtn = document.getElementById("logoutBtn");

if (greeting && logoutBtn) {
  // 1. Take the name from the request (?name=...)
  var params = new URLSearchParams(window.location.search);
  var requestName = (params.get("name") || "").trim();

  // 2. Start a session if there is none (or a different person logs in)
  if (requestName !== "" && sessionStorage.getItem("userName") !== requestName) {
    sessionStorage.setItem("userName", requestName);
    sessionStorage.setItem("startTime", String(Date.now()));
  }

  var userName = sessionStorage.getItem("userName");
  var startTime = sessionStorage.getItem("startTime");

  if (!userName || !startTime) {
    // No request and no session: go back to the login page
    window.location.href = "index.html";
  } else {
    greeting.textContent = "Hello, " + userName + "!";
    document.getElementById("startTime").textContent =
      "Start time: " + new Date(Number(startTime)).toLocaleTimeString();

    // 3. Logout: work out the duration, end the session, open logout page
    logoutBtn.addEventListener("click", function () {
      var duration = Date.now() - Number(startTime);
      sessionStorage.setItem("logoutInfo", JSON.stringify({ name: userName, duration: duration }));
      sessionStorage.removeItem("userName");
      sessionStorage.removeItem("startTime");
      window.location.href = "logout.html";
    });
  }
}

/* ---------- LOGOUT PAGE ---------- */
var thanks = document.getElementById("thanks");
var usage = document.getElementById("usage");

if (thanks && usage) {
  var saved = sessionStorage.getItem("logoutInfo");
  if (saved) {
    var info = JSON.parse(saved);
    thanks.textContent = "Thank you, " + info.name + "!";
    usage.textContent = "You have been logged out. You used this application for " +
      formatDuration(info.duration) + ".";
  } else {
    thanks.textContent = "No active session";
    usage.textContent = "Please login to start a session.";
  }
}
