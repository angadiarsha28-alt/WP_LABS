# Lab 9 - Read XML Data and Display in a Table

**Aim:** Design a web page to read data from an XML file and display the data in tabular format.

## Files
- `index.html` - page with the table structure
- `students.xml` - the XML data file (5 student records)
- `style.css` - styling
- `script.js` - reads the XML file, parses it and builds the table rows

## How it works
1. `fetch("students.xml")` reads the XML file as text.
2. `DOMParser` converts the text into an XML document.
3. `getElementsByTagName("student")` finds every record.
4. For each record, a table row is created with the roll number, name, department, city and marks.

## How to run
- Open the live GitHub Pages link, or
- Run it with a local server (for example the VS Code "Live Server" extension).
- If you open `index.html` directly from a folder, browsers block reading the XML file. Use the "Choose file" button that appears and select `students.xml`.

## Technologies
HTML, CSS, JavaScript, XML
