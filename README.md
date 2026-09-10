# Corentin Barloy — academic website

Build the site with the same Pandoc workflow:

```sh
pandoc index.md -f markdown -o index.html --template=html/uikit.html --toc
```

The generated `index.html` uses `css/site.css` and `js/site.js`. Existing `pdfs/`, `cours/`, and optional `images/` folders can be copied alongside these files without changing their links.

