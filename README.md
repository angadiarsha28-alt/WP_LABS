# Web Programming Labs

A collection of four standalone HTML/CSS/JS labs. Each lab lives in its own
folder and has no build step, server, or dependencies — every page runs
straight from the file system in any modern browser.

## Contents

| Folder | Lab | What it demonstrates |
|---|---|---|
| `lab1-book-website/` | Book Information Website | Multi-page site, internal linking, shared stylesheet |
| `lab2-product-table/` | Product Table | HTML tables, live client-side search with JavaScript |
| `lab3a-registration-form/` | Registration Form | Form elements, validation, `input`/`change` events |
| `lab3b-frames-website/` | Frames Website | Two-pane layout with `target`-linked navigation |

## How to run

No installation, server, or build tools are required.

1. Unzip the lab you want to run.
2. Open its `index.html` file directly in a browser — either:
   - double-click the file in your file explorer, or
   - right-click → **Open with** → your browser, or
   - drag the file into an open browser window.
3. That's it. All styling (`style.css`) and scripts are loaded automatically
   from the same folder, and all images are embedded directly in the HTML,
   so the pages work fully offline.

`lab3a-registration-form/` has one file to open: `register.html` (not
`index.html`).

### Optional: run with a local server instead

Opening files directly (`file://`) works fine for every lab here, but if
your browser or course setup prefers `http://`, you can serve any lab folder
with Python's built-in server:

```bash
cd lab1-book-website
python3 -m http.server 8000
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

## Browser support

All four labs use standard HTML5/CSS3/vanilla JS and run in any current
version of Chrome, Firefox, Edge, or Safari. No frameworks, no external
scripts, no internet connection required.
