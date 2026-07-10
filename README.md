# Aitebot | 爱特沃智能机器人俱乐部

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

## 技术说明

- 单页 HTML + Tailwind CSS（CDN）+ Font Awesome
- Vite 提供本地开发服务器与生产构建
- 交互：轮播、导航滚动、移动端菜单、联系表单校验
