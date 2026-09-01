# Lab Fixes — Summary

All three labs shared **the same root cause** for "not displaying," plus Lab
3B had one extra bug on top of it. Lab 3A (registration form) wasn't
affected because it never referenced an external image, which is why it was
left untouched.

## The shared bug: images loaded from the internet

Lab 1 (book covers) and Lab 2 (product photos) pulled every image from an
external site — `covers.openlibrary.org` and `placehold.co`. That works fine
when you're online, but the pages go **blank where the images should be**
the moment they're opened without an internet connection, on a locked-down
lab/exam network, or on a machine that blocks third-party image hosts. Since
grading/demo environments often fall into one of those categories, this is
almost always the "not displaying" symptom.

**Fix:** every image was replaced with a small **inline SVG placeholder**
built directly into the `src` attribute (`data:image/svg+xml,...`). These
are just text baked into the HTML file itself — no network request, no
external file — so they render 100% of the time, on any machine, forever.
You already had one example of this pattern in your own code: the page
favicons (the 📚/🛍️/🎉 emoji icons) were already done this way.

## Lab 3B's extra bug: `<frameset>` is dead

`index.html` used `<frameset>` / `<frame>` to split the page into a book
list on the left and details on the right. **Every modern browser** (Chrome,
Firefox, Edge, Safari) removed support for `<frameset>` years ago, so the
page rendered nothing at all regardless of images.

**Fix:** `index.html` now uses a flexbox layout with two `<iframe>` elements
instead of `<frameset>`/`<frame>`. This reproduces the exact same behavior:
- `booklist.html` loads in the left pane (`name="listFrame"`)
- `welcome.html` (then whichever book you click) loads in the right pane
  (`name="infoFrame"`)

Nothing in `booklist.html` had to change — `target="infoFrame"` works on an
`<iframe name="infoFrame">` exactly the way it worked on the old
`<frame name="infoFrame">`.

## Content added (as requested)

| Lab | Added |
|---|---|
| Lab 1 | Two more Jack Reacher titles: **Persuader**, **The Enemy** (with their own detail pages, linked from the list) |
| Lab 2 | Two more product rows: **Aurora Laptop 15 Air** (Dell), **Pixel Shot Mirrorless Camera** (Sony) |
| Lab 3B | One more book: **Verity** by Colleen Hoover, added to `booklist.html` with its own detail page |

## Files changed per lab

- **lab1-book-website/**: `index.html` (new list entries), `killing_floor.html`,
  `die_trying.html`, `tripwire.html`, `the_visitor.html` (local cover images),
  plus new `persuader.html` and `the_enemy.html`. `style.css` untouched.
- **lab2-product-table/**: `index.html` (local product images + 2 new rows).
  `style.css` untouched.
- **lab3b-frames-website/**: `index.html` rewritten (iframe layout instead of
  frameset), `it_ends_with_us.html`, `it_starts_with_us.html`,
  `happy_place.html` (local cover images), `booklist.html` (new list entry),
  plus new `verity.html`. `style.css`, `welcome.html` untouched.
- **lab3a-registration-form/**: unchanged — no bug was present.

## How to check it worked

Open each `index.html` directly by double-clicking it (no internet needed):
- **Lab 1 / Lab 2**: all book covers / product thumbnails should show
  colored placeholder art immediately, and the new entries should appear in
  the list/table.
- **Lab 3B**: you should see two panes side by side on load; clicking a book
  on the left (including the new "Verity") updates the right pane.
