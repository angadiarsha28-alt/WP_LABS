<?php
// Lab 12: read name and age from the form and send a message page.

// Get the values sent by the form (POST request)
$name = isset($_POST["name"]) ? trim($_POST["name"]) : "";
$age  = isset($_POST["age"]) ? $_POST["age"] : "";

$valid = ($name !== "" && is_numeric($age) && $age >= 0);

if (!$valid) {
    $message = "Please go back and enter a valid name and age.";
    $color = "#b3261e";
} elseif ($age < 18) {
    // Under 18: show the entered name in the message
    $message = "Hello " . htmlspecialchars($name) . ", you are not authorized to visit the site";
    $color = "#b3261e";
} else {
    $message = "Welcome to this site";
    $color = "#1f6f3b";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Lab 12 - Result</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eef2f5;
      font-family: Georgia, "Times New Roman", serif;
      padding: 16px;
    }
    .card {
      width: 100%;
      max-width: 460px;
      background: #ffffff;
      border: 1px solid #c5d0d8;
      border-radius: 10px;
      padding: 28px;
      text-align: center;
    }
    h1 { font-size: 1.4rem; margin: 0 0 20px; color: <?php echo $color; ?>; line-height: 1.4; }
    a { color: #1f6f8b; }
  </style>
</head>
<body>
  <div class="card">
    <h1><?php echo $message; ?></h1>
    <a href="index.html">Go back</a>
  </div>
</body>
</html>
