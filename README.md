# FAQ Widget

A customizable, embeddable FAQ widget built with React, Vite, and Tailwind CSS v4.  
Easily add searchable, categorized FAQs to any website with a single JS and CSS file.

---

## Features

- **Easy Embedding:** Add to any HTML page with a `&lt;script&gt;` and `&lt;link&gt;`.
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
- `my-widget.umd.js`
- `my-widget.css` (or `style.css`)

---

### 2. Embed the Widget

**Upload both files** to your website or CDN.

Add the following to your HTML `&lt;head&gt;`:

```

<link rel="stylesheet" href="/path/to/my-widget.css" />
<script src="/path/to/my-widget.umd.js"></script>

```

Add the widget container wherever you want it to appear:

```

<div></div>

```

---

### 3. Customization

You can customize the widget using data attributes:

```

<div></div>

```

- `data-title`: (string) Widget title.
- `data-faqs`: (JSON array) List of FAQ objects.
- `data-categories`: (JSON array) List of categories.
- `data-theme`: `"light"` or `"dark"`.

---

## Development

- **Start Dev Server:**  
```

npm run dev

```
- **Lint:**  
```

npm run lint

```
- **Preview Production Build:**  
```

npm run preview

```

---

## Project Structure

```

src/
components/
FAQWidget.tsx
FAQItem.tsx
constants/
FAQs.ts
index.css         \# Tailwind CSS entry (@import "tailwindcss";)
WidgetEntry.tsx   \# Library/widget entry point
dist/
my-widget.umd.js
my-widget.css

```

---

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## Notes

- The widget bundle includes React, so no need to load React separately.
- The CSS file **must** be included for correct styling.
- Data attributes for `data-faqs` and `data-categories` must be valid JSON.

---

## License

MIT

---

## Credits

Widget boilerplate and build configuration inspired by [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/) best practices.
```

This README provides everything your client or a developer needs to build, embed, and customize your FAQ widget, following best practices for Vite, React, and Tailwind CSS v4[^9][^10][^11][^13].

<div style="text-align: center">⁂</div>

[^1]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/65395146/e6f599bd-9ca2-4a16-8fb6-48b4f3070dcd/tsconfig.json

[^2]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/65395146/b656fcc2-a53c-4b3c-8a18-2b3a0de290c7/tsconfig.node.json

[^3]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/65395146/ffd121f3-618f-4747-8b61-2ab98754dbbe/tsconfig.app.json

[^4]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/65395146/e3818aaf-52e1-4c67-9c6d-70ee652f1ac7/vite.config.ts

[^5]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/65395146/4b7b5db7-e7af-48e2-9a08-39f71b2bd975/tailwind.config.ts

[^6]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/65395146/2844ebc8-a845-4d29-9e92-2ea8d565ed42/postcss.config.ts

[^7]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/65395146/c08b4a46-713c-4628-8df4-c11c198f1090/my-widget.umd.js

[^8]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/65395146/febaf010-8ef8-40ef-88f6-aebf96241b1d/package.json

[^9]: https://github.com/theodorusclarence/vite-react-tailwind-starter/blob/master/README.md

[^10]: https://makerkit.dev/blog/tutorials/embeddable-widgets-react

[^11]: https://www.restack.io/p/vite-answer-tailwind-css-vite-react

[^12]: https://unpkg.com/browse/vite-react-template@0.1.3/README.md

[^13]: https://tailwindcss.com/docs

[^14]: https://github.com/riipandi/vite-react-template/blob/main/README.md

[^15]: https://gist.github.com/max-lt/bae8f7615e5dcd68083f0fc1b3ea46b6

[^16]: https://stackoverflow.com/questions/66288645/vite-does-not-build-tailwind-based-on-config

[^17]: https://github.com/widgetplatform/widget-oa/blob/main/README.md

[^18]: https://stackoverflow.com/questions/79543175/tailwind-not-working-on-react-project-created-with-webstorms-vite

[^19]: https://designcode.io/cursor-react-project-with-vite-and-tailwind-css/

[^20]: https://www.youtube.com/watch?v=TO8bdYqeX40

[^21]: https://github.com/makerkit/react-embeddable-widget

[^22]: https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma

[^23]: https://stackoverflow.com/questions/79383705/cannot-build-frontend-using-vite-tailwindcss-with-postcss

[^24]: https://stackoverflow.com/questions/79528146/embeddable-widget-react

[^25]: https://stackoverflow.com/questions/75706164/problem-with-tailwind-css-when-using-the-react-markdown-component

[^26]: https://dev.to/piyushkumar_dev/setup-of-react-project-with-vite-and-tailwindcss-231h

[^27]: https://blog.logrocket.com/setting-up-dev-environment-react-vite-tailwind/

[^28]: https://adeesh.hashnode.dev/fullstack-app-setup

