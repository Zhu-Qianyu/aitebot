# Aitebot | 爱特沃机器人俱乐部

静态官网的可发布交互项目（Vite）。页面内容与原 `index.html` 保持一致。

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开终端提示的本地地址（默认 `http://localhost:5173`）。

## 构建发布

```bash
npm run build
```

产物在 `dist/`，可用任意静态托管发布：

```bash
npm run preview   # 本地预览构建结果
```

也可将 `dist/` 部署到 GitHub Pages、Vercel、Nginx 等。

## 中英文切换

导航栏右侧有 **EN / 中文** 按钮，点击即可切换整站语言。选择会保存在浏览器 `localStorage`（键名 `aitebot-lang`）。

双语文案都在 `public/content.json` 的 `zh` / `en` 下：

- `ui`：导航、章节标题、表单等静态文案
- `hero` / `projects` / `news`：顶部轮播、在研项目、新闻动态

改英文时编辑 `en` 对应字段即可。

## 如何更新顶部背景 / 在研项目 / 新闻动态

这三块内容由配置文件驱动，**不用改 HTML**。

1. 把图片放到 `public/files/`（例如 `hero-1.jpg`、`project-zhuqiang.jpg`）
2. 编辑 `public/content.json` 里 `zh` 和 `en` 对应条目的 `image`，例如：

```json
"image": "./files/hero-1.jpg"
```

3. 本地执行 `npm run dev` 预览；上线前执行 `npm run build` 并重新部署

### `content.json` 结构说明

顶层为 `zh` / `en`，每种语言包含：

- **ui**：页面静态文案键值
- **hero**：顶部轮播（`title` / `subtitle` / `ctaText` / `ctaHref` / `slides[]`）
- **projects**：在研项目卡片（`image`、`icon`、`tag`、`tagClass`、`title`、`description`、`link`）
- **news**：新闻动态卡片（`image`、`icon`、`date`、`title`、`summary`、`link`）

当前默认仍使用 picsum 占位图；换成 `public/files/` 里的真实素材即可。

## 技术说明

- 单页 HTML + Tailwind CSS（CDN）+ Font Awesome
- Vite 提供本地开发服务器与生产构建；`public/` 下文件会原样拷到 `dist/`
- 交互：中英文切换、轮播、导航滚动、移动端菜单、联系表单校验
