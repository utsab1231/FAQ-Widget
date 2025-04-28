# FAQ Widget

A customizable, embeddable FAQ widget built with React, Vite, and Tailwind CSS v4.  
Easily add searchable, categorized FAQs to any website with a single JS and CSS file.

---

## Features

- **Easy Embedding:** Add to any HTML page with a `<script>` and `<link>`.
- **Customizable:** Set FAQs, categories, title, and theme via data attributes.
- **Modern Stack:** Built with React 19, Vite, and Tailwind CSS v4.
- **Auto Mount:** Automatically renders on all `.faq-widget` containers.
- **Responsive &amp; Accessible:** Mobile-friendly and keyboard-navigable.

---

## Getting Started

### 1. Build the Widget

Install dependencies and build:

```

npm install
npm run build

```

This will generate distributable files in the `dist/` folder:
- `faq-widget.umd.js`
- `faq-widget.css`

---

### 2. Embed the Widget

**Upload both files** to your website or CDN.

Add the following to your HTML `<head>`:

```

<link rel="stylesheet" href="/path/to/faq-widget.css" />
<script src="/path/to/faq-widget.umd.js"></script>

```

Add the widget container wherever you want it to appear:

```

<div class='faq-widget'></div>

```

---

### 3. Customization

You can customize the widget using data attributes:

```

<div class='faq-widget' ...attributes></div>

```
attributes available are : 
- `data-title`: (string) Widget title.
- `data-faqs`: (JSON array) List of FAQ objects.
- `data-categories`: (JSON array) List of categories.
- `data-theme`: `"light"` or `"dark"`.

---

## Usage
---
##### Using CDN
To use the widget, add the following to your HTML `<head>` tag:

```html
<link rel="stylesheet" href="https://unpkg.com/faq-widget@1.0.0/dist/faq-widget.css">
<script src="https://unpkg.com/faq-widget@1.0.0/dist/faq-widget.umd.js"></script>
```
and a container wtih `faq-widget` classname will give you the widget. 
```
<div class='faq-widget'></div>
<div class='faq-widget' ...attributes></div> 
```

##### using npm
install the package using `npm`:
```
npm i faq-widget
```
You can import after installing the package normally like this: 
```
import 'faq-widget/dist/faq-widget.css'; // Import the CSS
import FAQWidget from 'faq-widget';       // Import the component
```
and then use it:
```
<FAQWidget 
  faqs={[
    { question: 'What is this widget?', answer: 'It is an FAQ widget.', category: 'General' },
    { question: 'How do I use it?', answer: 'Embed it into your site.', category: 'Technical' },
  ]}
  categories={['General', 'Technical']}
  title="FAQs"
  theme="light"
/>
```