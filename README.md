# Dongsheng Jia · 贾东升 — Academic Homepage

Live site: <https://dongsheng-jia.github.io/>  
Repository: <https://github.com/dongsheng-jia/dongsheng-jia.github.io>  
Default branch: `main` · Hosting: GitHub Pages

This repository contains the source files for a bilingual (English / Simplified Chinese) academic homepage. It is a lightweight static website: **there is no package manager, build step, framework, or server-side application**. GitHub Pages publishes the files directly from the repository root.

> **Important privacy note:** this repository is currently **PUBLIC**. Anyone can view and download its source code and public assets. The published website is also public. Do not put passwords, API keys, private documents, unpublished confidential data, or personal information here that you do not want exposed.

---

## 1. Repository map

```text
/
├── index.html                 # Home page
├── research/
│   └── index.html             # Research, publications and projects
├── idea/
│   └── index.html             # Ideas / notes page
├── assets/
│   ├── styles.css             # Shared design system and responsive styles
│   ├── main.js                # Language switch, page metadata and shared behavior
│   ├── avatar-crayon.webp     # Small round header avatar
│   ├── portrait-sketch.webp   # Larger portrait used in page content (420 × 420 WebP, about 16 KB)
│   ├── favicon-crayon.svg     # Browser tab icon (SVG)
│   ├── favicon-crayon-48.png  # Browser tab icon (PNG)
│   ├── nav-home.svg           # Subtle hand-drawn stroke under Home
│   ├── nav-research.svg       # Subtle hand-drawn stroke under Research
│   ├── nav-idea.svg           # Subtle hand-drawn stroke under Idea?
│   ├── margin-sketch.svg      # Very light page-margin doodle
│   └── fonts/                 # Locally hosted Noto fonts and license notices
└── .nojekyll                  # Keep this file; disables Jekyll processing
```

The three HTML pages intentionally share the same header, navigation, footer, stylesheet and JavaScript. If you change shared markup (for example, the name, navigation labels or footer), check all three pages so they remain consistent.

## 2. Where to make common changes

| Task | File(s) to edit |
| --- | --- |
| Name, short bio, email, links and Home page content | `index.html` |
| Research interests, publications, working papers and projects | `research/index.html` |
| Ideas, short research notes and observations | `idea/index.html` |
| Fonts, colors, spacing, layout, navigation, responsive/mobile styles | `assets/styles.css` |
| Language switching, remembered language, page title/description metadata | `assets/main.js` |
| Small header avatar (256 × 256 WebP, about 10 KB) | `assets/avatar-crayon.webp` |
| Larger portrait in page content | `assets/portrait-sketch.webp` |
| Browser tab icon | `assets/favicon-crayon.svg`, `assets/favicon-crayon-48.png` |
| Hand-drawn navigation strokes | `assets/nav-home.svg`, `assets/nav-research.svg`, `assets/nav-idea.svg` |
| Very subtle page-margin doodle | `assets/margin-sketch.svg` |
| Font files and license notices | `assets/fonts/` |

**For ordinary content updates, edit the relevant HTML page only.** Avoid changing the shared CSS or JavaScript unless the requested change concerns appearance or behavior.

## 3. Bilingual content rules

- The site has English and Simplified Chinese versions. Text blocks use language attributes such as `lang="en"` and `lang="zh-CN"`.
- When changing a paragraph, heading, button label or publication description, update both language versions unless the content is intentionally language-specific.
- Preserve the existing language attributes, element classes, IDs and surrounding HTML structure. They are used by the language switcher, styles and accessibility features.
- The language switcher remembers the visitor's choice in that browser and carries it across pages.
- A URL can request a language explicitly: `?lang=en` or `?lang=zh`. If the URL already has a query parameter, append the language with `&lang=zh`.
- Page titles and descriptions are also defined in `assets/main.js` (the `pages` metadata). When changing a page title or description, check the corresponding metadata as well as the HTML `<head>`.

## 4. How to add a publication or project

1. Open `research/index.html`.
2. Find the existing publication or project section that most closely matches the new item.
3. Copy one complete existing item/section and edit the copy. Reuse its existing classes so the new item inherits the current design.
4. Update both English and Chinese text.
5. Add the DOI, journal, working-paper or project link only when the exact URL is known.
6. Keep HTML nesting valid. If you add a heading with an `id`, make sure the ID is unique and any `aria-labelledby` reference points to it.
7. Preview the page and check that the new item follows the same spacing and typography as its neighbors.

Do not invent publication status, journal names, coauthors, dates or links. If information is not confirmed, leave it out or mark it clearly as forthcoming / working paper only when that status is accurate.

## 5. Design and image maintenance

- `assets/styles.css` is the single shared stylesheet. It is organized by page region; common design variables are grouped near the top in `:root`.
- Prefer editing an existing variable or relevant rule instead of appending another override at the end of the file. Avoid duplicate selectors and unexplained one-off values.
- Mobile-specific rules are in media queries. After changing widths, spacing, font sizes or navigation, check both desktop and narrow/mobile layouts.
- The navigation strokes are separate SVG assets placed beneath the navigation labels. The page-margin sketch is a separate, restrained decoration. Their shapes live in SVG; CSS controls their placement, size and opacity.
- The header avatar, larger portrait and favicon are separate assets. If replacing an image, the safest method is to keep the existing filename and format. If you change a filename, update every reference in the HTML/CSS.
- Fonts are served locally from `assets/fonts/`. Keep the accompanying copyright and license files when retaining or replacing font files. The Chinese font is a subset; a missing character may fall back to the system font.

## 6. JavaScript and technical constraints

- `assets/main.js` contains shared language and page-metadata behavior. Keep it small and avoid adding dependencies.
- This is a static GitHub Pages site. Do not add server-side secrets, private API keys, database credentials or authentication tokens to HTML, CSS or JavaScript: anything shipped to the browser is public.
- There is currently no build command, test suite or dependency installation step. Do not introduce a framework or build process just to make a small content edit.
- Keep `.nojekyll` in the repository root.

## 7. Safe editing workflow (human or AI)

1. **Inspect first.** Read this README and the exact page / asset that needs changing. Do not assume the current file structure from an old conversation.
2. **Make the smallest relevant change.** Preserve existing page content, design, responsive behavior, bilingual structure and working links unless the task explicitly asks to change them.
3. **Do not rewrite whole files unnecessarily.** For a content update, edit only the relevant content block. For a design update, identify the relevant CSS/SVG rules first.
4. **Check both languages.** Confirm English and Chinese versions remain present and consistent.
5. **Check all affected pages.** Shared header, navigation, footer, CSS and JavaScript changes may affect Home, Research and Idea?.
6. **Check links and assets.** Verify image paths, navigation links, external URLs, unique IDs and ARIA references.
7. **Preview before publishing.** Check desktop and mobile widths, all three pages, and both language modes.
8. **Publish through GitHub.** Commit changes to `main`. GitHub Pages normally deploys automatically; wait for the Pages build/deployment workflow to complete successfully before considering the change live.
9. **Verify the live site.** Open Home, Research and Idea?, switch languages, inspect images and links, and hard-refresh if an old cached asset appears.

### Instructions for AI assistants

When an AI assistant is asked to modify this repository, it should:

- Read this README and inspect the current source before editing.
- Treat the existing HTML/CSS/JS as the source of truth; do not reconstruct the site from screenshots or conversation summaries.
- Preserve the current visual identity: restrained academic layout, clear typography, circular header avatar, subtle hand-drawn navigation strokes and minimal margin decoration.
- Preserve all existing factual content unless the user explicitly requests a change.
- Make focused, maintainable edits with clear class names and comments where useful. Do not scatter CSS overrides or create redundant files.
- Keep English and Chinese content synchronized.
- Report exactly which files changed, what changed, and whether deployment and live-page checks were actually completed. Never claim a deployment succeeded without checking it.

## 8. Publishing and cache notes

GitHub Pages publishes from the repository root on the `main` branch. After committing, check the repository's **Actions** tab for the **pages build and deployment** workflow. A successful commit does not by itself prove that the live site has finished updating.

The HTML pages use version query strings (for example, `?v=...`) on local assets to help browsers refresh cached CSS, JavaScript and images. If you change an asset and users continue seeing an old version, update the relevant version query strings consistently in all pages that reference that asset. Do not change version strings without checking the corresponding references.

Live site: <https://dongsheng-jia.github.io/>  
Repository settings and deployment status: <https://github.com/dongsheng-jia/dongsheng-jia.github.io/settings/pages>  
GitHub Pages documentation: <https://docs.github.com/en/pages>
