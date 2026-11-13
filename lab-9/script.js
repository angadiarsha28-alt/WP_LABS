// Lab 9: read data from an XML file and display it in a table.

var statusBox = document.getElementById("status");
var tableBody = document.getElementById("tableBody");
var fallbackBox = document.getElementById("fallback");

// Helper: get the text inside a child tag, e.g. <name>Varsha</name>
function getText(parent, tagName) {
  var node = parent.getElementsByTagName(tagName)[0];
  return node ? node.textContent : "";
}

// Convert XML text into table rows
function showXML(xmlText) {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlText, "application/xml");

  // If the XML is badly written, the browser adds a <parsererror> tag
  if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
    statusBox.textContent = "The XML file is not valid.";
    statusBox.className = "status error";
    return;
  }

  var students = xmlDoc.getElementsByTagName("student");
  tableBody.innerHTML = "";

  for (var i = 0; i < students.length; i++) {
    var s = students[i];
    var row = document.createElement("tr");
    var columns = ["rollno", "name", "department", "city", "marks"];

    for (var j = 0; j < columns.length; j++) {
      var cell = document.createElement("td");
      cell.textContent = getText(s, columns[j]);
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }

  statusBox.textContent = students.length + " records loaded from students.xml";
  statusBox.className = "status";
  fallbackBox.hidden = true;
}

// Read students.xml from the same folder
function loadXML() {
  fetch("students.xml")
    .then(function (response) {
      if (!response.ok) { throw new Error("File not found"); }
      return response.text();
    })
    .then(showXML)
    .catch(function () {
      statusBox.textContent = "Could not load students.xml automatically.";
      statusBox.className = "status error";
      fallbackBox.hidden = false;
    });
}

// Fallback: let the user choose the XML file (works when opened from a folder)
document.getElementById("xmlFile").addEventListener("change", function (e) {
  var file = e.target.files[0];
  if (!file) { return; }
  var reader = new FileReader();
  reader.onload = function () { showXML(reader.result); };
  reader.readAsText(file);
});

loadXML();
