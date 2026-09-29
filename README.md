# Web Programming Labs

A collection of standalone HTML/CSS/JS labs. Each lab lives in its own
folder and has no build step, server, or dependencies — every page runs
straight from the file system in any modern browser.

## Contents

| Folder | Lab | What it demonstrates |
|---|---|---|
| `lab1-book-website/` | Book Information Website | Multi-page site, internal linking, shared stylesheet |
| `lab2-product-table/` | Product Table | HTML tables, live client-side search with JavaScript |
| `lab3a-registration-form/` | Registration Form | Form elements, validation, `input`/`change` events |
| `lab3b-frames-website/` | Frames Website | Two-pane layout with `target`-linked navigation |
| `lab-4/` | Country and Capital | Dropdown with a JavaScript `onchange` event, styled output |
| `lab-5/` | College Page | Background image, large title, smaller address text |
| `lab-6/` | Travel Destination (Bengaluru) | External CSS, background image, coloured and bordered text |

## How to run

No installation, server, or build tools are required.

1. Download or clone this repository.
2. Open the lab's main file directly in a browser — either:
   - double-click the file in your file explorer, or
   - right-click → **Open with** → your browser, or
   - drag the file into an open browser window.
3. That's it. Styling (`style.css`) and scripts load automatically from the
   same folder, so the pages work fully offline.

Which file to open in each folder:

| Folder | Open this file |
|---|---|
| `lab1-book-website/` | `index.html` |
| `lab2-product-table/` | `index.html` |
| `lab3a-registration-form/` | `register.html` |
| `lab3b-frames-website/` | `index.html` |
| `lab-4/` | `lab4_capital.html` |
| `lab-5/` | `lab5_college.html` |
| `lab-6/` | `index.html` |

### Optional: run with a local server instead

Opening files directly (`file://`) works fine for every lab here, but if
your browser or course setup prefers `http://`, you can serve any lab folder
with Python's built-in server:

```bash
cd lab-6
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Lab details

### Lab 1 — Book Information Website
`lab1-book-website/index.html` lists Jack Reacher novels. Click a title to
open its own detail page (author, genre, publisher, summary). Each detail
page links back to the list via the "All Books" breadcrumb.

### Lab 2 — Product Table
`lab2-product-table/index.html` shows a product table with images, brand,
price, and description. Type in the search box above the table to filter
rows live by product name or brand (no page reload).

### Lab 3A — Registration Form
`lab3a-registration-form/register.html` is a festival registration form
covering text/email/tel inputs, radio buttons, checkboxes, a select
dropdown, and a textarea with a live character counter. Submitting a valid
form shows an inline confirmation message instead of actually posting
anywhere.

### Lab 3B — Frames Website
`lab3b-frames-website/index.html` splits the screen into two panes: a book
list on the left and book details on the right. Clicking a book in the left
pane loads its details into the right pane without reloading the left side —
implemented with two `<iframe>`s linked by the `target` attribute.

### Lab 4 — Country and Capital
`lab-4/lab4_capital.html` has a dropdown of countries. Selecting one shows
its capital next to it in bold dark-green text, using an `onchange` handler
and a small JavaScript function.

### Lab 5 — College Page
`lab-5/lab5_college.html` is a college home page with a full-screen
background image, a large college name, and a smaller address line. To show
your own background, place an image named `college.jpg` in the same folder
(a plain colour is used if the image is missing).

### Lab 6 — Travel Destination
`lab-6/index.html` presents Bengaluru as a travel destination. All styling
lives in the external stylesheet `style.css`: a background image
(`bengaluru.jpg`), coloured text, and bordered content panels.

## Browser support

All labs use standard HTML5/CSS3/vanilla JS and run in any current
version of Chrome, Firefox, Edge, or Safari. No frameworks, no external
scripts, no internet connection required.
