---
title: Windows 从零搭建 Hexo + Butterfly 博客完整教程
date: 2026-04-03 23:10:00
tags: Hexo,Butterfly,博客,教程,GitHub Pages
categories: 电脑相关
---

# Windows 从零搭建 Hexo + Butterfly 博客完整教程

想要一个干净好看的个人博客？Hexo + Butterfly 是非常好的选择，完全静态，可以免费托管在 GitHub Pages 上。本文记录完整搭建步骤。

## 前置要求

### 安装 Git
- 下载地址：https://git-scm.com/download/win
- 一路下一步默认安装即可

### 安装 Node.js
Hexo 需要 Node.js 才能运行，推荐安装 v20 以上版本：
- 下载地址：https://nodejs.org/
- 下载 LTS 长期支持版，安装时勾选添加到 PATH

安装完成后打开 CMD/PowerShell 验证：
```bash
node --version
npm --version
```
能输出版本号就说明安装成功。

## 安装 Hexo

打开 PowerShell，运行以下命令：

```bash
npm install -g hexo-cli
```

等待安装完成，然后验证安装：

```bash
hexo --version
```

## 创建你的博客

```bash
hexo init 你的博客文件夹名
cd 你的博客文件夹名
npm install
```

这会初始化一个 Hexo 博客，安装完依赖就完成了。

## 安装 Butterfly 主题

```bash
cd themes
git clone https://github.com/jerryc127/hexo-theme-butterfly.git butterfly
```

克隆完成后，需要安装主题依赖：

```bash
cd ..
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

## 启用 Butterfly 主题

修改博客根目录的 `_config.yml`：

找到这一行：
```yaml
theme: landscape
```
改为：
```yaml
theme: butterfly
```

同时把语言改为中文：
```yaml
language: zh-CN
```

为了方便单独修改主题配置，把主题配置文件复制一份到博客根目录：

```bash
copy themes\butterfly\_config.yml _config.butterfly.yml
```

## 本地预览

```bash
hexo clean && hexo server
```

启动完成后打开浏览器访问 http://localhost:4000 就能看到你的博客了！

## 常用命令

| 命令 | 作用 |
|------|------|
| `hexo clean` | 清除缓存 |
| `hexo generate` (hexo g) | 生成静态网站 |
| `hexo server` (hexo s) | 启动本地服务预览 |
| `hexo deploy` (hexo d) | 部署到远程 |

## 常用配置

### 修改网站信息

在 `_config.yml` 中修改：

```yaml
# Site
title: 你的博客标题
subtitle: 你的副标题
description: 你的描述
author: 你的名字
language: zh-CN
timezone: Asia/Shanghai
```

### 修改首页欢迎屏高度

在 `_config.butterfly.yml` 中找到：

```yaml
# The height of top_img, eg: 300px/300em/300rem
index_top_img_height:
```

如果你觉得默认全屏太长，可以改成三分之一视口高度：

```yaml
index_top_img_height: 33vh
```

### 添加导航菜单

在 `_config.butterfly.yml` 中找到 `menu` 配置，添加你的导航：

```yaml
menu:
  首页: / || fas fa-home
  汽车相关: /categories/汽车相关/ || fas fa-car
  电脑相关: /categories/电脑相关/ || fas fa-laptop
  游戏机相关: /categories/游戏机相关/ || fas fa-gamepad
  音乐分享: /categories/音乐分享/ || fas fa-music
  壁纸分享: /categories/壁纸分享/ || fas fa-image
```

### 写文章

```bash
cd 你的博客文件夹
hexo new post "你的文章标题"
```

会在 `source/_posts/` 生成一个 md 文件，用 Markdown 编辑即可。文章开头格式：

```yaml
---
title: 文章标题
date: 2026-xx-xx xx:xx:00
tags: [标签1,标签2]
categories: 分类名
---

这里写文章内容...
```

## 部署到 GitHub Pages

### 1. 在 GitHub 创建仓库

创建一个名为 `你的用户名.github.io` 的仓库。

### 2. 安装部署插件

```bash
npm install hexo-deployer-git --save
```

### 3. 配置部署信息

在 `_config.yml` 末尾添加：

```yaml
deploy:
  type: git
  repo: https://github.com/你的用户名/你的用户名.github.io.git
  branch: main
```

### 4. 部署

```bash
hexo clean && hexo generate && hexo deploy
```

输入你的 GitHub 账号密码，完成后一会儿就能通过 `https://你的用户名.github.io` 访问了。

## 总结

现在你已经拥有了一个：

- ✅ 完全静态，加载速度飞快
- ✅ 漂亮的 Butterfly 主题
- ✅ 免费托管在 GitHub Pages
- ✅ 本地写文章 Git 管理

开始享受写作吧！ 🎉
