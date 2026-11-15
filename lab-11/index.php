<?php
// Lab 11: display the current date, time and day using PHP.

// Set the time zone so the time is correct for India
date_default_timezone_set("Asia/Kolkata");

$date = date("d-m-Y");        // e.g. 15-11-2026
$time = date("h:i:s A");      // e.g. 02:30:45 PM
$day  = date("l");            // e.g. Sunday
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Lab 11 - Date, Time and Day in PHP</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eef2f5;
      font-family: Georgia, "Times New Roman", serif;
      color: #1d2b36;
      padding: 16px;
    }
    .card {
      width: 100%;
      max-width: 420px;
      background: #ffffff;
      border: 1px solid #c5d0d8;
      border-radius: 10px;
      padding: 24px;
    }
    h1 { font-size: 1.4rem; margin: 0 0 16px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { text-align: left; padding: 10px; border-bottom: 1px solid #dde4e9; font-size: 1.05rem; }
    th { width: 35%; color: #5b6b78; font-weight: normal; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Current Date, Time and Day</h1>
    <table>
      <tr><th>Date</th><td><?php echo $date; ?></td></tr>
      <tr><th>Time</th><td><?php echo $time; ?></td></tr>
      <tr><th>Day</th><td><?php echo $day; ?></td></tr>
    </table>
  </div>
</body>
</html>
