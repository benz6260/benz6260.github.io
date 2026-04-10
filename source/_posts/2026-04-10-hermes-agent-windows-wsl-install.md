---
title: Hermes 保姆级安装教程（Windows WSL 版），接入飞书
date: 2026-04-10 22:20:00
tags: [AI, Agent, Hermes, WSL, Windows]
categories: AI
---

> 原文：https://x.com/liyue_ai/status/2042519090623922277

Hermes Agent 是 Nous Research 开源的一个 AI Agent 项目。官方给它的 Slogan 很直接：

> **The self-improving AI agent**

翻译成人话就是：**一个会在使用过程中不断变聪明、变熟练的 Agent**。

它想解决的痛点，戳中了现在很多 Agent 的通病——没错，就是针对 OpenClaw 记不住的问题：

- ✅ 能不能记住你
- ✅ 能不能跨会话找回过去的上下文
- ✅ 能不能把做过的事沉淀成技能
- ✅ 能不能越用越顺手，而不是每次都重新认识你一遍

目前 GitHub 已经 4.5k+ star，非常火了。

项目地址：[https://github.com/NousResearch/Hermes-Agent](https://github.com/NousResearch/Hermes-Agent)

## 安装前置要求

安装命令一条搞定：

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

这个安装命令目前支持：
- MacOS
- Linux
- WSL2
- Android via Termux

**不支持 Windows 本地安装**，Windows 想玩必须先装 WSL。

## Windows 安装 WSL

如果你还没装 WSL，以管理员身份打开 PowerShell，执行：

```powershell
wsl --install
```

安装完重启电脑就好了。

## 安装 Hermes

安装完成 WSL 后，进入 WSL 子系统：

```bash
wsl
```

然后执行上面那条安装命令即可：

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

## 配置启动

安装完成后，在 WSL 里依次执行：

```bash
source ~/.bashrc
```

接下来需要配置大模型和聊天工具，配置完就能开始对话了。

### 第一步：初始化配置

第一次上手建议走完整配置：

```bash
hermes setup
```

按照向导一步步来：

1. **配置大模型**：根据自己情况选择大模型服务商，跟着引导填配置
2. **配置语音渠道**：默认用 Edge TTS 就行，不需要改
3. **终端后端**：选本地就好，有 Docker 也可以选 Docker
4. **任务迭代次数**：默认 90，可以更大
5. **任务显示**：默认 `all`，会显示 Hermes 完整执行过程，这个功能很好用
6. **上下文压缩**：默认 0.5 就好，这是 Hermes 的关键优化
7. **会话重置模式**：可选
   - 无活动重置 + 每日重置（推荐）
   - 仅无活动重置
   - 仅每日重置
   - 永不自动重置
8. **设置聊天工具**：按向导配置
9. **设置自启动**：选 Y，选择「用户服务」或者「系统服务」
   - 用户服务：不需要 sudo，适合笔记本/开发机
   - 系统服务：开机自启，需要 sudo
10. **最后配置 CLI 频道**，可跳过

配置完成就可以启动了，启动完直接开始对话。

## 接入聊天平台

Hermes 支持把 Agent 接入聊天平台：Telegram、Discord、Slack、WhatsApp、Signal、飞书 都可以。

如果你想接入飞书，执行：

```bash
hermes gateway setup
```

选择飞书渠道，按照提示输入：
- AppID
- APP Secret

配置完成启动网关：

```bash
hermes gateway
```

启动后，在飞书给机器人发消息，终端会得到一个配对码，把配对码输入终端就完成配对了。

配对成功后，在飞书输入：

```
/sethome
```

设置主频道，后续 Hermes 会把定时任务结果推送到这里。

## 常用命令

Hermes 在 CLI 和消息平台都支持这些命令：

| 命令 | 作用 |
|------|------|
| `/new` 或 `/reset` | 开启新会话 |
| `/model` | 切换模型 |
| `/personality` | 设置人格 |
| `/retry` / `/undo` | 重试或回退 |
| `/compress` | 压缩上下文 |
| `/usage` | 查看用量 |
| `/skills` | 查看已保存技能 |
| `/stop` | 中止当前任务 |

如果你用过 OpenClaw，这些命令会很熟悉。

## 体验总结

Hermes 天生就会自带能力，不需要像 OpenClaw 那样装很多技能才能干活，它会**自动沉淀技能**，越用越聪明。

比如让它总结 X 上当天 AI 热点，它会真的一步步：
1. 打开网站
2. 抓取内容
3. 分析总结
4. 给你结果

整个过程看得清清楚楚，确实是真干活，不像有些 Agent 偷懒给你过时信息。

---

*本文转载自[@liyue_ai](https://x.com/liyue_ai)的推文*
