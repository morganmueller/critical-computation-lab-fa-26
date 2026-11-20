# Week 13: 11/20/2026

## Agenda

1. [Housekeeping](#housekeeping)
2. [Assignment #8 Part 1: Questions](#assignment-8-part-1-questions)
3. [Reading Discussion: Consentful Tech](#reading-discussion-consentful-tech)
4. [Review: Tools](#review-tools)
5. [Tutorial: Introduction to CSS](#tutorial-introduction-to-css)
    - [What is CSS?](#what-is-css)
    - [Three Ways to Add CSS](#three-ways-to-add-css)
    - [Selectors](#selectors)
    - [Properties: Color, Size, Type](#properties-color-size-type)
    - [The Box Model](#the-box-model)
    - [Breaking the Normal Flow](#breaking-the-normal-flow)
    - [Best Practices](#best-practices)
    - [Livecode: Styling Our Portfolio](#livecode-styling-our-portfolio)
    - [Pair Exercise: Style Jamie's Page](#pair-exercise-style-jamies-page)
6. [Assignment #8 [Part 2]](#assignment-8-part-2)
7. [Extra Review Materials](#extra-review-materials)

## Housekeeping

1. Attendance
2. Upcoming assignment: **#8 Creating a Custom Portfolio, Part 2**, due 12/4

[Back to top](#agenda)

---

## Quick Reference

| coding glossary | |
| --- | --- |
| CSS | Cascading Style Sheets: the language (and `.css` file) that decides how HTML looks |
| rule | one block of CSS: a selector plus `{ property: value; }` pairs |
| selector | which element(s) a rule applies to: `p`, `.class`, `#id` |
| property | what you're changing, left of the colon: `color`, `padding`, `font-family` |
| value | what you're changing it to, right of the colon: `red`, `20px`, `center` |
| class | a reusable name for a group of elements. HTML: `<div class="test">` → CSS: `.test {}` |
| id | a unique name for **one** element. HTML: `<div id="cool-id">` → CSS: `#cool-id {}` |
| cascade | when two rules disagree, the more specific (or later) one wins |
| box model | every element is a box: content + padding + border + margin |
| generic family | a fallback font type: `serif`, `sans-serif`, `monospace` |

---

## Assignment #8 Part 1: Questions

Questions on your HTML structure? Today we keep that exact HTML and give it a style.

[Back to top](#agenda)

---

## Reading Discussion: Consentful Tech

Reading: [Building Consentful Tech](https://www.andalsotoo.net/wp-content/uploads/2018/10/Building-Consentful-Tech-Zine-SPREADS.pdf) by Una Lee & Dave Tolliver

- Have you had any (non-)consentful digital interactions recently?
- What are some recent examples of non-consentful tech being held accountable? What policies have been shaped by consentful tech thinking?
- What makes you feel good about using technology?
- What is a company's responsibility to abide by and enforce [Trust and Safety](https://www.tspa.org/curriculum/ts-fundamentals/industry-overview/intro-to-ts/)?
- What makes a website a *place*?

**Activity:** Did [Chrome quietly install a 4GB AI model on your computer](https://medium.com/@sathishkraju/chrome-quietly-installed-a-4-gb-ai-model-on-your-computer-you-didnt-ask-you-can-t-keep-it-off-75ce6e305b17)?

- In Chrome, visit `chrome://on-device-internals` and look at the model status.
- Or look for a folder called `OptGuideOnDeviceModel` in Chrome's profile folder.
- Talk it over: were you asked? Could you say no? Using the zine's FRIES (Freely given, Reversible, Informed, Enthusiastic, Specific), which parts of consent are missing?

**Keep this in mind while you write CSS:** your own styling choices can be consentful or not. We'll see this with fonts (tracking) and with motion and color preferences (respecting what the visitor already told their computer).

[Back to top](#agenda)

---

## Review: Tools

### Text Editor

From now on, open **Sublime Text** (or any text editor) with your `cc-lab` folder open. A text editor gives us *syntax highlighting*: if something is a strange color, it's probably a typo.

### Browser

Keep a browser open next to your editor. Firefox and Chrome both work. If you use Safari, [turn on the developer tools](https://developer.apple.com/documentation/safari-developer-tools/enabling-developer-features) first.

#### Viewing HTML files

Find your `.html` file on your computer and drag it into a browser window. After every save, **refresh** the browser to see the change.

![drag an html file into the browser](https://github.com/morganmueller/critical-computation-lab-fa-26/blob/main/class_13/images/finder_drag.gif?raw=true)

### GitHub

GitHub is like Google Drive for code: we can share our files **and** publish them as a live website with GitHub Pages.

```
# the code
https://github.com/your-username/cc-lab/tree/main/assignment-8/
# the website
https://your-username.github.io/cc-lab/assignment-8/index.html
```

Swap `assignment-8` for whatever you named your folder. **Never put spaces in folder or file names.** A space turns into `%20` and breaks your URL.

### Questions on tools so far?

[Back to top](#agenda)

---

## Tutorial: Introduction to CSS

### What is CSS?

**C**ascading **S**tyle **S**heets (CSS) is the language used to style HTML. HTML gives the page its *structure* (with tags); CSS decides how that structure *looks*: color, spacing, type, layout, and how the page changes on different screen sizes.

| Language | Job | In a house |
| --- | --- | --- |
| **HTML** | structure & meaning | the walls and rooms |
| **CSS** | appearance | the paint and furniture |
| **JavaScript** | behavior | the electricity and plumbing |

CSS is written as a list of **rules**. Each rule has three parts:

- `selector`: which element(s) get styled
- `property`: what part of the element changes (text color, background, spacing...)
- `value`: what the property changes to

```css
selector {
  property: value;
}
```

A rule can hold as many `property: value;` pairs as you want, one per line. **Don't forget the semicolon** at the end of each line.

```css
selector {
  property: value;
  property: value;
  property: value;
}
```

For example, to make *every paragraph red on a blue background, at 16pt*:

```css
p {
  color: red;
  background-color: blue;
  font-size: 16pt;
}
```

#### Comments

```css
/* this is a comment in CSS */
/* ⌘+/ (Mac) or CTRL+/ (PC) still works as a shortcut */
```

### Three Ways to Add CSS

All three use the same CSS language. The difference is **where the CSS lives**. We will only use Option #3, but you'll see all three in the wild.

**Option #1 (avoid): the `style` attribute on one element**

```html
<p style="color: red;">This is a red paragraph</p>
<p>This paragraph is NOT red.</p>
```

Good for a quick test, but it gets messy fast, and to style two elements the same way you'd have to copy and paste.

**Option #2 (avoid): a `<style>` tag inside `<head>`**

```html
<html>
  <head>
    <style>
      p {
        color: red;
      }
    </style>
    <!-- This applies to ALL <p> tags on this page. -->
  </head>
  <body>
    <p>This is my red paragraph.</p>
    <p>This is another red paragraph.</p>
    <div>This is not red: it's not a p tag.</div>
  </body>
</html>
```

Better, but the styles only work on this one page.

**Option #3 (best): a separate `style.css` file**

Same as Option #2, except the CSS lives in its own file. Every page on your site can share it.

Create `style.css` next to your `index.html`:

```css
p {
  color: red;
}
```

Then link it inside `<head>` with a `<link>` tag:

```html
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <!-- <link> points the page to our CSS file. -->
  </head>
  <body>
    <p>This is a red paragraph.</p>
    <p style="color: blue">
      The style attribute beats the external stylesheet, so this one is blue.
    </p>
  </body>
</html>
```

#### The `<link>` tag

[`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link) connects your page to an outside file. It's a void element (no closing tag).

| Attribute | What it does |
| --- | --- |
| `rel` | "relationship": what the file *is* to this page. `stylesheet` for CSS, `icon` for a tab icon ([more types](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel)) |
| `href` | where the file is: a relative path like `style.css` or `../style.css` |

> **CSS not working?** Nine times out of ten the `href` path is wrong. Check spelling, capitals, and which folder `style.css` is in.

#### Your folder structure

```
└── cc-lab/
    ├── assignment-8/
    │   ├── index.html
    │   ├── about.html
    │   ├── style.css      ← new!
    │   └── images/
    │       └── ...
```

If your folder names don't match, that's fine, **as long as there are no spaces**.

[Back to top](#agenda)

---

### Selectors

The selector is *which thing on the page* you're grabbing. Three basic kinds:

| Selector | Syntax | Selects |
| --- | --- | --- |
| type (tag) | `p` | **every** `<p>` on the page |
| class | `.project` | every element with `class="project"`, whatever its tag |
| id | `#logo` | the **one** element with `id="logo"` |

#### Type selectors

```css
p {
  background-color: cyan;
}
```

#### Class selectors

Classes group things by their purpose. A class selector starts with a dot (`.`).

```css
.search {
  width: 100%;
} /* everything with class="search" */
```

##### A class on a specific element

Put the tag and the class together, **with no space**:

```css
span.highlight {
  background-color: yellow;
}

h1.highlight {
  background-color: pink;
}
```

##### An element with more than one class

An element can have several classes, separated by spaces in HTML. Chain them in CSS (again, no space) to match only elements that have **all** of them:

In `style.css`
```css
.notebox {
  border: 4px solid #666; /* every notebox gets a grey border */
}

.notebox.warning {
  border-color: orange; /* ...orange if it's also a warning */
}

.notebox.danger {
  border-color: red; /* ...red if it's also danger */
}
```

In `index.html`
```html
<div class="notebox">This is an informational note.</div>
<div class="notebox warning">This note shows a warning.</div>
<div class="notebox danger">This note shows danger!</div>
<div class="danger">This won't get styled: it also needs the notebox class.</div>
```

> **Space or no space?** `.notebox.warning` (no space) = one element with both classes. `.notebox .warning` (space) = a `.warning` *inside* a `.notebox`. The same goes for `nav a`: every link inside a `<nav>`.

#### ID selectors

An id starts with a hash (`#`). An id can only be used **once per page**, and an element can only have one id.

In `style.css`
```css
#logo {
  margin: 9px;
}
```

In `index.html`
```html
<h1 id="logo">ID selector</h1>
```

**Warning:** using the same id twice might *look* fine, but it's invalid HTML and causes strange bugs, especially once we add JavaScript. If you need to reuse it, it's a class.

#### The cascade: who wins?

When two rules set the same property on the same element:

1. **More specific wins:** `#id` beats `.class`, and `.class` beats `p`.
2. **If they're equally specific, the later one wins** (lower in the file).
3. A `style=""` attribute beats your stylesheet.

```css
p { color: black; }
.intro { color: purple; }   /* wins over p */
#welcome { color: green; }  /* wins over both */
```

**Try it:** right-click → **Inspect** any element. The *Styles* panel lists every rule that applies; rules that lost are ~~crossed out~~.

[Back to top](#agenda)

---

### Properties: Color, Size, Type

[Full list of CSS properties on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties)

#### Color

[`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color) sets the **text** color. We'll write colors three ways:

| Format | Example | Notes |
| --- | --- | --- |
| named | `red`, `lightseagreen`, `transparent` | case-insensitive; names are a bit random |
| hex | `#ff0000`, short `#f00` | `#RRGGBB` in hexadecimal (0–9, a–f). Add two more digits for transparency: `#ff000080` |
| `rgb()` | `rgb(255, 0, 0)` | each channel 0–255. Add alpha (0–1) for transparency: `rgba(255, 0, 0, 0.5)` |

```css
color: red;                   /* named */
color: rgba(255, 0, 0, 1);    /* rgb + alpha */
color: #ff0000;               /* hex */
/* all three are the same red */
```

> CSS **silently ignores** anything it doesn't understand. Misspell a color (`rbga`, `#ff00`, `lightgrean`) and nothing happens: no error message. Check Inspect for a crossed-out or warning ⚠️ rule.

#### Background color

[`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-color) starts out `transparent` on every element.

```css
background-color: indigo;                   /* named */
background-color: #bbff00;                  /* hex, fully opaque */
background-color: #bf0;                     /* hex shorthand */
background-color: #11ffee00;                /* hex, fully transparent */
background-color: rgb(255, 255, 128);       /* rgb, fully opaque */
background-color: rgba(117, 190, 218, 0.5); /* rgb, 50% transparent */
```

> **Contrast:** light grey text on white looks elegant and is unreadable for many people. Check every text/background pair with the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) and aim for **4.5:1** or higher.

#### Width & height

[`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/width) and [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/height) set an element's size.

```css
width: 300px;       /* fixed pixels */
width: 75%;         /* percent of the parent */
max-width: 700px;   /* grows up to 700px, then stops (great for text columns) */
height: auto;       /* the default: as tall as the content */
```

> Prefer `max-width` over `width` for containers, and avoid setting `height` on boxes with text: text that doesn't fit will spill out.

#### Typography

[`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-size) sets the size of text.

| Unit | Means | Use it for |
| --- | --- | --- |
| `px` | exact pixels | borders, small details |
| `em` | a multiple of the **parent's** font size (`2em` = twice as big) | spacing that grows with the text |
| `rem` | a multiple of the **root** (`<html>`) font size, usually 16px | font sizes: respects the visitor's browser setting |
| `%` | percent of the parent's font size | |

```css
html { font-size: 100%; }   /* keep the visitor's default (usually 16px) */
h1   { font-size: 2.5rem; } /* 2.5 × 16 = 40px */
p    { font-size: 1rem; }
```

> **Consentful type:** people with low vision raise their browser's default font size. `rem` respects that choice; a fixed `px` size on body text overrides it.

[`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-family) is a **priority list** of fonts, separated by commas. The browser uses the first one it has. **Always end with a generic family** as a fallback.

```css
h1 {
  font-family: serif; /* the system's default serif */
}

p {
  font-family: "Gill Sans Extrabold", sans-serif;
  /* Font names with spaces need quotes.
     If Gill Sans isn't available, fall back to any sans-serif. */
}
```

| Generic family | What it is |
| --- | --- |
| `serif` | letters with small strokes ("feet") at the ends, like Times |
| `sans-serif` | without those strokes, like Helvetica or Arial |
| `monospace` | every character the same width, like code |

**Where to find free fonts**

- [Font Squirrel](https://www.fontsquirrel.com/)
- [Facetypes](https://facetypes.xyz/)
- [fonts.coollabs.io](https://fonts.coollabs.io/): a privacy-friendly copy of Google Fonts. Using `fonts.googleapis.com` sends each visitor's IP address to Google: non-consentful tracking on *your* site. Swap the Google URL for the coollabs one; everything else stays the same.
- Or download the font file and host it yourself with [`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face):

```css
@font-face {
  font-family: "My Font";
  src: url("fonts/my-font.woff2") format("woff2");
}

body {
  font-family: "My Font", sans-serif;
}
```

#### Text alignment

[`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-align) sets the horizontal alignment of text inside its box: `left`, `right`, `center`, `justify` (or `start` / `end`, which flip for right-to-left languages).

```css
p {
  text-align: right;
}
```

#### Other text properties you'll want

```css
line-height: 1.5;           /* space between lines; 1.4–1.6 is comfortable */
font-weight: bold;          /* or a number: 400 = normal, 700 = bold */
text-transform: uppercase;  /* ALL CAPS in style only. Remember Jamie's name last week! */
text-decoration: none;      /* removes underlines; keep them on links in paragraphs */
letter-spacing: 0.05em;
```

[Back to top](#agenda)

---

### The Box Model

Every element on the page is a rectangle made of four layers:

```
┌───────────────────── margin ─────────────────────┐
│  ┌────────────────── border ──────────────────┐  │
│  │  ┌─────────────── padding ──────────────┐  │  │
│  │  │                                      │  │  │
│  │  │     content  (width × height)        │  │  │
│  │  │                                      │  │  │
│  │  └──────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────┘
```

**Try it:** Inspect any element and open the *Layout* / *Computed* tab. You'll see this exact diagram with real numbers.

| Layer | Property | What it is |
| --- | --- | --- |
| content | `width`, `height` | the text or image itself |
| [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding) | `padding` | space **inside** the border. Takes the background color. Makes buttons easier to click. |
| [border](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/border) | `border` | the line around the box: `border: 2px solid black;` (width, style, color) |
| [margin](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin) | `margin` | space **outside** the border, between neighbors. Always transparent. |

By default, `width` only measures the content. So the total width is:

**width + left padding + right padding + left border + right border + left margin + right margin**

(Height works the same way.) That math is annoying, so most people add this to the top of every stylesheet:

```css
* {
  box-sizing: border-box; /* width now includes padding and border */
}
```

#### Shorthand: one to four values

`margin` and `padding` read **clockwise from the top**: top, right, bottom, left.

```css
padding: 20px;               /* all four sides */
padding: 10px 20px;          /* top & bottom 10px, left & right 20px */
padding: 10px 20px 30px 40px;/* top, right, bottom, left */
margin-top: 2rem;            /* just one side */
```

#### Centering a box

```css
main {
  max-width: 700px;
  margin: 0 auto; /* auto left & right margins center the box */
}
```

#### Borders

```css
border: 4px dashed hotpink;
border-radius: 8px;   /* rounded corners; 50% on a square makes a circle */
```

`border-style` can be `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none`, or `hidden`.

[Back to top](#agenda)

---

### Breaking the Normal Flow

Last week: HTML stacks **block** elements top to bottom and lines up **inline** elements side by side. These properties change that.

#### `display`

![block vs inline](https://github.com/morganmueller/critical-computation-lab-fa-26/blob/main/class_13/images/block.png?raw=true)

| Value | Does |
| --- | --- |
| `block` | stacks, full width |
| `inline` | sits in a line of text; ignores `width` / `height` |
| `inline-block` | sits in a line **and** respects `width` / `height` / padding |
| `flex` | lays out its **children** in a row (or column) |
| `none` | removes it from the page (and from screen readers) |

#### `display: flex`

The tool you'll use most for layout: put it on the **parent**, and the children line up.

```css
nav ul {
  display: flex;
  gap: 1rem;                       /* space between items */
  justify-content: space-between;  /* along the row */
  align-items: center;             /* across the row */
  list-style: none;                /* remove bullets */
  padding: 0;
}
```

Keep this open: [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Practice with [Flexbox Froggy](https://flexboxfroggy.com/).

#### `position`

![position](https://github.com/morganmueller/critical-computation-lab-fa-26/blob/main/class_13/images/position.png?raw=true)

| Value | Does |
| --- | --- |
| `static` | the default: normal flow |
| `relative` | nudge it with `top` / `left` from where it would have been |
| `absolute` | placed relative to its nearest positioned parent; leaves the flow |
| `fixed` | stuck to the browser window, even when you scroll |
| `sticky` | scrolls normally, then sticks when it hits an edge (great for nav) |

#### `float`

![float](https://github.com/morganmueller/critical-computation-lab-fa-26/blob/main/class_13/images/float.png?raw=true)

`float: left` / `right` / `none` pushes an element to one side and lets text wrap around it, like an image in a magazine. Use it for that; use flex for layout.

#### `overflow`

![overflow](https://github.com/morganmueller/critical-computation-lab-fa-26/blob/main/class_13/images/overflow.png?raw=true)

What happens when content doesn't fit its box: `visible` (default, spills out), `hidden` (cut off), `scroll` (always scrollbars), `auto` (scrollbars only when needed).

[Back to top](#agenda)

---

### Best Practices

1. **One external `style.css`**, linked from every page.
2. **Style by class, not by id.** Classes are reusable; save ids for anchor links and JavaScript.
3. **Don't change your HTML for looks.** Want a smaller heading? Keep the `h2` and set its `font-size`. Semantics stay; CSS changes the look.
4. **Contrast 4.5:1** for text. Check with [WebAIM](https://webaim.org/resources/contrastchecker/).
5. **Never remove focus outlines** (`outline: none`) without adding your own. Keyboard users need to see where they are:
   ```css
   a:focus-visible {
     outline: 3px solid orange;
     outline-offset: 2px;
   }
   ```
6. **Use `rem` for font sizes** so visitors' size settings still work.
7. **Respect what visitors already asked their computer for.** These are consent in CSS:
   ```css
   /* visitor's computer is set to dark mode */
   @media (prefers-color-scheme: dark) {
     body { background-color: #111; color: #eee; }
   }

   /* visitor's computer is set to reduce motion */
   @media (prefers-reduced-motion: reduce) {
     * { animation: none; transition: none; scroll-behavior: auto; }
   }
   ```
8. **No tracking fonts or scripts** you didn't choose. Self-host fonts or use coollabs.
9. **Indent, comment, and validate** with the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input).

[Back to top](#agenda)

---

### Livecode: Styling Our Portfolio

We'll take last week's **Ari Rivera** portfolio (unchanged HTML!) and style it step by step. Add one line to its `<head>`:

```html
<link rel="stylesheet" href="style.css" />
```

| Concept | Where it shows up |
| --- | --- |
| external stylesheet | `<link rel="stylesheet">` |
| type / class / id / descendant selectors | `body`, `.card`, `#projects`, `nav a` |
| color & contrast | custom properties at the top, checked with WebAIM |
| typography | `font-family` with fallbacks, `rem` sizes, `line-height` |
| box model | `box-sizing`, `padding`, `border`, `margin: 0 auto` |
| flex | the nav and the contact list |
| consentful CSS | `:focus-visible`, `prefers-color-scheme`, `prefers-reduced-motion` |

Live, we'll add one section at a time and refresh after each. Full file for checking your work:

```css
/* ===== 1. Reset the box model ===== */
* {
  box-sizing: border-box;
}

/* ===== 2. Page basics ===== */
html {
  font-size: 100%; /* respect the visitor's default size */
}

body {
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.6;
  color: #1d1d1f;
  background-color: #fbf8f1;
  margin: 0;
}

/* ===== 3. Headings ===== */
h1,
h2,
h3 {
  font-family: "Helvetica Neue", Arial, sans-serif;
  line-height: 1.2;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
}

h2 {
  font-size: 1.75rem;
  border-bottom: 2px solid #1d1d1f;
  padding-bottom: 0.25rem;
}

/* ===== 4. Center the content ===== */
header,
main,
footer {
  max-width: 750px;
  margin: 0 auto;
  padding: 1.5rem;
}

/* ===== 5. Nav in a row (flex) ===== */
nav ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
}

nav a {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
  text-decoration: none;
}

/* ===== 6. Links ===== */
a {
  color: #8a2be2;
}

a:hover {
  background-color: #f3e8ff;
}

a:focus-visible {
  outline: 3px solid #ff8c00;
  outline-offset: 2px;
}

/* ===== 7. Project cards ===== */
article {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
}

/* ===== 8. Media never wider than the column ===== */
img,
iframe {
  max-width: 100%;
  height: auto;
  border: 0;
}

figcaption {
  font-size: 0.875rem;
  color: #555;
}

/* ===== 9. One section, by id ===== */
#contact ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
}

footer {
  font-size: 0.875rem;
  text-align: center;
}

/* ===== 10. Respect visitor settings ===== */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #161616;
    color: #eeeeee;
  }

  h2 {
    border-color: #eeeeee;
  }

  article {
    background-color: #222;
    border-color: #444;
  }

  a {
    color: #c9a0ff;
  }

  a:hover {
    background-color: #33224a;
  }

  figcaption {
    color: #bbb;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
    transition: none;
    scroll-behavior: auto;
  }
}
```

**Try it**

- Comment out section 1 (`box-sizing`). Inspect an `<article>`. What changed in the box model diagram?
- Swap the order of the `h1, h2, h3` rule and the `h1` rule. Does anything change? Why or why not?
- Change `color` on `a` to `#c9a0ff` in light mode. Run it through the contrast checker. Pass or fail?
- Turn your computer to dark mode (Mac: System Settings → Appearance). Refresh.
- Tab through the page with the keyboard. Can you always see where you are?
- Delete the `<link>` tag. Your page still works and reads in order. That's why structure comes first.

[Back to top](#agenda)

---

### Pair Exercise: Style Jamie's Page

Start from the **fixed** Jamie Chen page from last week's pair exercise (the solution is in the [Week 12 notes](https://github.com/morganmueller/critical-computation-lab-fa-26/tree/main/class_12)). Work in pairs: one person types, switch every step.

#### Steps

1. **Link it.** Create `style.css` and link it in `<head>`. Prove it works: `body { background-color: lightyellow; }`.
2. **Type selector.** Pick a `font-family` for `body` **with a generic fallback**, and a different one for headings.
3. **Undo the caps.** Jamie's name was typed in caps last week; we fixed the HTML. Make the `<h1>` *look* uppercase again with CSS only.
4. **Box model.** Center `main` with `max-width` and `margin: 0 auto`. Give each `<article>` padding, a border, and a margin between them.
5. **Class selector.** Add `class="tag"` to each `<li>` in the "I like" list. Style `.tag` like a little rounded label (`display: inline-block`, `padding`, `border-radius`, `background-color`).
6. **Chained class.** Add a second class to one project: `<article class="project featured">`. Write `.project.featured` so the featured one has a thicker, colored border.
7. **Flex.** Put the nav links in a row with `display: flex` and a `gap`.
8. **Check.** Run your colors through the [contrast checker](https://webaim.org/resources/contrastchecker/), tab through with the keyboard, and paste your CSS into the [CSS validator](https://jigsaw.w3.org/css-validator/#validate_by_input).

*Stretch (pick one):*

- **Dark mode.** Add a `prefers-color-scheme: dark` block.
- **Sticky header.** Make the header `position: sticky; top: 0;` with a background color.
- **Font.** Load a font from [fonts.coollabs.io](https://fonts.coollabs.io/) or self-host one with `@font-face`.
- **Selector game.** Play the first 10 levels of [Flukeout](https://flukeout.github.io/).

*Share-out:* one pair projects their page and shows the **Styles** panel in Inspect for one element: which rules won, which were crossed out?

<details>
<summary>One possible solution (steps 1–8)</summary>

Changes to the HTML (steps 5–6 only):

```html
<article class="project featured">
  <h3>Bubble Garden</h3>
  ...
</article>

<article class="project">
  <h3>Picking Fruit</h3>
  ...
</article>

...

<ul>
  <li class="tag">frogs</li>
  <li class="tag">noodles</li>
  <li class="tag">code</li>
</ul>
```

`style.css`:

```css
* {
  box-sizing: border-box;
}

/* step 1 + 2 */
body {
  background-color: lightyellow;
  color: #222;
  font-family: Verdana, sans-serif;
  line-height: 1.6;
  margin: 0;
}

h1,
h2,
h3 {
  font-family: "Courier New", monospace;
}

/* step 3: caps in CSS, not in the HTML */
h1 {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* step 4 */
header,
main {
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem;
}

article {
  background-color: white;
  border: 2px solid #222;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

img {
  max-width: 100%;
  height: auto;
}

/* step 5 */
.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background-color: #2e7d32;
  color: white;
}

section ul {
  list-style: none;
  padding: 0;
}

/* step 6 */
.project.featured {
  border: 5px solid #d81b60;
}

/* step 7 */
nav ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
}

a:focus-visible {
  outline: 3px solid #d81b60;
  outline-offset: 2px;
}
```

Notes:

- `text-transform: uppercase` changes the *look*; a screen reader still reads "Jamie Chen" as a name instead of spelling it out.
- `.project.featured` (no space) matches the one article with both classes. `.project .featured` (space) would match nothing here.
- White on `#2e7d32` green passes 4.5:1; white on `lightgreen` would not.
- `section ul` (descendant selector) removes bullets only from lists inside a `<section>`, so the nav and other lists aren't affected by accident.

</details>

[Back to top](#agenda)

---

## Assignment #8 [Part 2]

Creating a Custom Portfolio, Part 2. Due Friday 12/4.

Style your Part 1 portfolio with CSS and publish it. Keep your HTML semantic: change the *look*, not the structure.

1. **External stylesheet:** one `style.css`, linked with `<link>` from every page. No `style=""` attributes and no `<style>` tags.
2. **Selectors:** use at least one type selector, one class selector, and one descendant or chained selector (e.g. `nav a` or `.project.featured`).
3. **Color:** a background and text color palette. Every text/background pair passes **4.5:1** in the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
4. **Type:** a `font-family` with a generic fallback, font sizes in `rem`, and a comfortable `line-height`. If you use a web font, load it from [fonts.coollabs.io](https://fonts.coollabs.io/) or self-host it: **no Google Fonts links**.
5. **Box model & layout:** a centered content column (`max-width` + `margin: 0 auto`), padding and margins that give your projects room, and a nav laid out with `display: flex`.
6. **Keyboard:** visible `:focus-visible` styles on links. Tab through the whole page to check.
7. **Validate:** zero errors in both the [HTML validator](https://validator.w3.org/#validate_by_input) and the [CSS validator](https://jigsaw.w3.org/css-validator/#validate_by_input).
8. **Publish:** push to your `cc-lab` repo and turn on GitHub Pages. Make sure the live URL works (check your file names for spaces and capitals!).
9. **Reflect:** 2–3 sentences. Name one design choice you made with the visitor's consent in mind (fonts, motion, color scheme, text size, or something else).

*Optional:* add `prefers-color-scheme: dark` and/or `prefers-reduced-motion` blocks.

Submit **your live GitHub Pages URL** and your reflection to the CC Lab Canvas assignment.

[Back to top](#agenda)

---

## Extra Review Materials

- MDN: [CSS: styling the web](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)
- MDN: [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors)
- MDN: [CSS properties reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties)
- MDN: [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (`:hover`, `:focus-visible`, `:first-child`...)
- CSS-Tricks: [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [learnlayout.com](https://learnlayout.com/)
- [Flukeout](https://flukeout.github.io/): a game for learning selectors
- [Flexbox Froggy](https://flexboxfroggy.com/): a game for learning flex
- Tania Rascia: [A Complete Guide to CSS Concepts](https://www.taniarascia.com/overview-of-css-concepts/)
- WebAIM: [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- W3C: [CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input)
- Una Lee & Dave Tolliver: [Building Consentful Tech zine](https://www.andalsotoo.net/wp-content/uploads/2018/10/Building-Consentful-Tech-Zine-SPREADS.pdf)
- [Class 12 Notes](https://github.com/morganmueller/critical-computation-lab-fa-26/tree/main/class_12): HTML structure, semantic HTML, the Jamie and Ari pages

[Back to top](#agenda)
