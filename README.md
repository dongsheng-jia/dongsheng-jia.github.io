# Dongsheng Jia · 贾东升

A bilingual, self-contained academic homepage for GitHub Pages.
中英文双语学术主页，使用纯静态文件，无需安装依赖或运行构建命令。

Homepage: https://dongsheng-jia.github.io/

## 日常维护 / Maintenance

- **文字 / Text:** 编辑 `index.html` 中的姓名和中英文简介；`research/index.html` 为研究页面，`idea/index.html` 为 Idea? 页面。页面标题、简介元数据及语言切换文本在 `assets/main.js`。两种语言请同步修改。
- **样式 / Style:** 字体、颜色、间距及手机布局在 `assets/styles.css`。
- **头像 / Portrait:** 当前头像为 `assets/portrait-sketch.webp`，由提供的 PNG 无损封装，保留原图尺寸与像素。更换文件名时，同时更新 `index.html` 中的图片路径。
- **联系 / Contact:** 学校邮箱以 `jiadongsheng [at] stu.sufe.edu.cn` 纯文字显示，修改 `index.html` 中的联系行即可。
- **导航涂鸦 / Navigation marks:** `assets/nav-home.svg`、`assets/nav-research.svg` 与 `assets/nav-idea.svg` 只放在顶部导航文字下方；正文没有装饰图案。
- **页眉和图标 / Header and favicon:** `assets/avatar-crayon.webp` 是用户本轮提供的彩铅头像的 176px 网页缩略图；左上角为圆形头像加 Dongsheng Jia。`assets/favicon-crayon.svg` 使用同一张图的 128px 版本和圆形裁切，不加边框；`assets/favicon-crayon-48.png` 提供透明圆形 PNG 回退。人物、表情和画风均保留原图。
- **网址 / Site URL:** 更换域名或发布地址后，更新 `index.html` 内的 `og:url`。

All images, fonts, styles, and scripts are served locally. The site has no remote API or analytics dependency. English is the initial language; the language switch remembers the visitor's choice across Home, Research, and Idea?. Direct links may use `?lang=en` or `?lang=zh`.

GitHub Pages can publish these files directly from the repository root. Keep `.nojekyll` alongside `index.html`.

## 字体许可 / Font licenses

The current design uses self-hosted Noto Serif Regular, Bold and Italic for clearer English text and a content-specific Noto Sans CJK SC subset for Chinese. The body remains 18px on desktop and 17px on mobile. Applicable font licenses and copyright notices are included in `assets/fonts/`. Earlier font assets remain available but are not used by the current stylesheet.

中文字体已按当前页面内容做子集化。新增未收录汉字会由后备字体显示；如需完全一致的字形，可更新相应字体子集。
