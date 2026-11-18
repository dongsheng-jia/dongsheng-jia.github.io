# Dongsheng Jia · 贾东升

主页：<https://dongsheng-jia.github.io/>

这是一个中英文双语的静态学术主页。直接编辑 HTML、CSS 和 JavaScript 即可维护，不需要安装依赖或执行构建命令。GitHub Pages 从仓库根目录发布；请保留根目录的 `.nojekyll`。

## 文件在哪里

| 要修改的内容 | 对应文件 |
| --- | --- |
| 个人简介、导师链接、邮箱 | `index.html` |
| 研究介绍、论文及项目 | `research/index.html` |
| 想法与经济现象 | `idea/index.html` |
| 字体、颜色、间距、导航、手机布局 | `assets/styles.css` |
| 语言切换、页面标题与简介元信息 | `assets/main.js` |
| 导航文字下的淡铅笔痕迹 | `assets/nav-home.svg`、`assets/nav-research.svg`、`assets/nav-idea.svg` |
| 页面留白处的轻淡装饰 | `assets/margin-sketch.svg` |
| 页眉圆形小头像 | `assets/avatar-crayon.webp` |
| 浏览器页签图标 | `assets/favicon-crayon.svg`、`assets/favicon-crayon-48.png` |
| 首页正文中的大头像 | `assets/portrait-sketch.webp` |

## 改文字与增加研究内容

每段正文都有英文和中文两个版本，分别使用 `lang="en"` 与 `lang="zh-CN"`。修改时保留这两个属性和原有结构，并同步更新两种语言。

在研究页面增加内容，可以复制现有的 `<section class="article-section">`，填写标题、介绍和论文链接。新标题的 `id` 应唯一，外层 `aria-labelledby` 与它保持一致。这样既能沿用排版，也方便使用屏幕阅读器的访客浏览。

三个页面的页眉、导航和页脚各自写在 HTML 中。修改姓名、导航栏目或页脚时，请同步修改三页；日常调整颜色、尺寸和间距，只需改共享的 CSS。

## 改外观与图片

`assets/styles.css` 按页面区域分段，顶部 `:root` 集中放置常用颜色、字体和装饰透明度。先改这些变量，再按需调整对应区域，避免在文件末尾重复追加覆盖规则。手机布局单独放在媒体查询中。

导航笔触衬在文字下沿，正文装饰放在留白边角；它们的形状由 SVG 决定，显示位置、大小和深浅由 CSS 控制。头像与正文插画分开管理。更换图片时如沿用原文件名，无须逐页改路径；若换了文件名，应同时更新引用。

## 语言、字体与发布

首次访问默认英文，切换语言后会在当前浏览器记住选择，跨页面继续沿用。链接加 `?lang=zh` 或 `?lang=en` 可指定语言；已有其他查询参数时用 `&lang=zh`。页面标题和简介的双语内容在 `assets/main.js` 的 `pages` 中，同时保留各 HTML `<head>` 内的初始英文信息。

字体均放在 `assets/fonts/`：英文使用 Noto Serif 的常规、粗体和斜体；中文使用 Noto Sans CJK SC 的常规、粗体子集。保留同目录的许可文件。新增汉字若不在子集中，会使用系统后备字体；需要完全一致时再扩充子集。

修改完成后提交到 `main`，等待 GitHub 的 **pages build and deployment** 成功。页面与资源链接中的 `v=` 用于区分缓存版本；更新样式或图片时，同步更新三页中的版本标记，避免访客继续看到旧版。上线后查看 Home、Research、Idea?，切换一次中英文，再检查手机宽度即可。
