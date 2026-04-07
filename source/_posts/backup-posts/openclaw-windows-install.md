---
title: Windows 从零安装 OpenClaw 完整教程
date: 2026-04-03 22:34:00
tags: OpenClaw,AI,教程,Windows
categories: 教程
---

# Windows 从零安装 OpenClaw 完整教程

OpenClaw 是一个本地运行的 AI 助手框架，可以让你在自己的电脑上跑一个私人 AI 助手，配合各种大语言模型 API 使用。本文记录了在 Windows 上从零开始安装配置 OpenClaw 的完整步骤。

## 前置要求

### 需要安装的基础软件

1. **Node.js** - v20 以上版本推荐
   - 下载地址：https://nodejs.org/
   - 下载 LTS 版本安装即可，安装时勾选 Add to PATH

2. **Git** - 用于克隆代码
   - 下载地址：https://git-scm.com/download/win
   - 默认安装选项一路下一步就行

3. **代码编辑器（可选）** - 推荐 VS Code
   - 下载地址：https://code.visualstudio.com/

## 安装步骤

### 1. 克隆 OpenClaw 代码

打开 PowerShell 或 CMD，运行：

```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
```

### 2. 安装依赖

```bash
npm install
```

这个过程需要下载一些包，耐心等待完成。

### 3. 配置你的 API 密钥

OpenClaw 默认使用 Volcengine（火山引擎）的 Claude 3 模型，需要配置 API 密钥。

复制示例配置文件：

```bash
copy .env.example .env
```

然后用编辑器打开 `.env` 文件，修改你的 API 密钥：

```env
VOLC_ACCESS_KEY=你的火山引擎AccessKey
VOLC_SECRET_KEY=你的火山引擎SecretKey
```

如果你使用其他模型服务商，也可以按照文件里的说明配置对应的密钥。

### 4. 启动 OpenClaw

```bash
npm start
```

第一次启动会初始化工作区，完成之后会输出：

```
Gateway running at http://localhost:20110
```

### 5. 访问 Web UI

打开浏览器访问：http://localhost:20110

你就能看到 OpenClaw 的网页聊天界面了，可以直接开始聊天。

## 常用操作

### 启动和停止

- 启动：在 openclaw 目录运行 `npm start`
- 停止：在运行窗口按 `Ctrl + C`

### 更新到最新版本

```bash
git pull
npm install
```

### 查看状态

```bash
npx openclaw status
```

## 目录结构说明

```
~/openclaw/
├── .openclaw/
│   ├── workspace/          # 工作区
│   │   └── AGENTS.md       # 你的AI助手配置
│   │   └── SOUL.md         # AI助手人格定义
│   │   └── MEMORY.md       # 长期记忆
│   └── extensions/         # 安装的扩展技能
├── source/                 # 源代码
└── .env                    # 你的API密钥配置
```

## 常见问题

### 1. npm install 很慢或者失败

可以试试用淘宝镜像：

```bash
npm config set registry https://registry.npmmirror.com/
npm install
```

### 2. 端口被占用

如果 20110 端口被占用，可以在 `.env` 里修改端口：

```env
PORT=20111
```

### 3. 如何更换模型？

在 `.env` 文件中修改 `MODEL` 变量，比如：

```env
MODEL=volc-anthropic/claude-3-5-sonnet
```

## 启动网页界面

成功启动后，直接访问 http://localhost:20110 就能聊天了。左边是聊天记录，底部输入框发送消息，右边是 AI 回复。

## 后续

安装完成后，你可以：

1.  修改 `SOUL.md` 自定义你的AI助手人格
2.  去 [ClawHub](https://clawhub.com/) 安装更多技能
3.  配置定时提醒、天气查询等功能

Enjoy your personal AI assistant! 🎉
