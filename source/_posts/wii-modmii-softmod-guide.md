---
title: 任天堂Wii 4.3J 系统软改完全教程（ModMii）
date: 2026-04-03 20:18:00
tags: Wii,任天堂,破解,游戏,软改
categories: 游戏机相关
---

# 任天堂Wii 4.3J 系统软改完全教程（ModMii）

本文是使用 ModMii 对任天堂Wii 4.3J 日版系统进行软改的完整中文翻译教程。ModMii 是目前最方便一键生成个性化Wii破解指南的工具，全程自动化下载所需文件，跟着步骤走就能轻松破解。

> ⚠️ 本软件不用于售卖。如果你花钱购买了本软件或所谓的"捆绑包"，你已经被骗了。  
> **本软件不提供任何明示或暗示的担保。**  
> **除了你自己，没有人会为这个软件对你的任天堂Wii主机造成的任何损坏负责！**  
> **使用需自担风险！**

---

## 你选的配置

本指南使用以下参数生成：

- 安装和/或更新所有推荐的Wii软模
- 当前系统菜单版本：4.3J
- 选择了Wilbrand\LetterBomb漏洞
- 期望系统菜单版本：4.3J
- 不更新激活的IOS（可在选项中启用）
- 不安装cMIOS（可在选项中启用）
- 不安装Hermes cIOS（可在选项中启用）
- 安装USB-Loader转发频道（可在选项中禁用）
- 安装额外砖机保护（在未使用的系统菜单IOS槽中补丁IOS60）（可在选项中禁用）
- 下载Configurable USB-Loader
- USB-Loader设置和配置文件保存到SD卡

---

## 重要说明

- 本指南不需要你的Wii连接互联网
- 推荐使用SD卡，但不强制要求来完全软改你的主机

### 软改注意事项
1. 检查你的SD卡是否有锁定开关，确保它已禁用
2. 如果在任何步骤中遇到错误，请尝试将SD卡（或硬盘）重新格式化为FAT32
3. 如果你的Wii死机，按住Wii上的电源按钮5秒钟关闭电源，然后重试
4. **永远不要卸载系统菜单或IOS**
5. 更新软模时，你应该始终通过安装新模块覆盖旧模块，**不要**尝试"删除所有内容"或"从头开始"
   - 未来更新模块时，你可以像第一次一样使用ModMii向导，更好的方法是使用ModMii的SysCheck更新向导仅更新过期内容，减少操作步骤！
6. 在给Wii改装后接受任天堂官方更新，你可能会丢失一些修改，必须重新安装
7. 在没有Priiloader、Bootmii和NAND备份的情况下，不要安装未测试的WAD/主题
8. 在改装过程中，除非另有说明，否则你应该断开Wii的所有外围设备。这包括Gamecube存储卡、Gamecube控制器、Wii Speak等
9. 配置为在Wii上工作的USB硬盘也可以在vWii（WiiU上的虚拟Wii）和Wii Mini上工作，反之亦然
10. 完成本指南后，你可以通过Homebrew Channel或USB-Loader转发频道启动USB-Loader

### USB加载器说明
- USB加载器顾名思义，也可以在Wii/vWii上配合SD卡使用。如果你更喜欢使用SD卡，只需按照本指南使用FAT32格式化的SD卡代替硬盘即可
- 再次确认你的硬盘始终插在USB port0 - 也就是最靠近Wii边缘的那个端口
- 并非所有外置硬盘都与Wii/vWii/Wii Mini兼容，特别是小型U盘通常兼容性不好。你可以查看[USB设备兼容性列表](https://wiki.gbatemp.net/wiki/USB_Devices_Compatibility_List)查看哪些硬盘兼容

  - 如果你一定要在Wii/vWii上使用小型U盘，将加载器放在SD卡上，然后将U盘格式化为WBFS而不是FAT32，可能会获得更好的兼容性。这可以通过Wii Backup Manager完成。但是，这样做不仅会限制驱动器仅存储Wii游戏，而且在PC上不通过Wii Backup Manager这样的程序你无法访问它。实际上，每次你将硬盘插入PC都会提示你重新格式化。

- 如果USB加载器无法加载特定游戏，请尝试更改游戏特定设置，使用不同的自定义IOS，例如249、250、251等。你的cIOS 249应该可以运行绝大多数游戏，更多信息请查看[Wii cIOS基础兼容性列表](https://wiki.gbatemp.net/wiki/Wii_cIOS_base_Compatibility_List)

- 更广泛的相关主题详细指南可以在[Complete Softmod Guide](https://sites.google.com/site/completesg)、[wii.hacks.guide](https://wii.hacks.guide)和[wiiu.hacks.guide](https://wiiu.hacks.guide)找到
- 如果你遇到不熟悉的术语或缩写，可以参考[WiiBrew词汇表](https://wiibrew.org/wiki/Glossary)或[CSG词汇表](https://sites.google.com/site/completesg/other-stuff/wii-glossary)
- 如果你需要帮助、有问题或者只是想聊天，可以访问[gbatemp上ModMii官方支持帖](https://gbatemp.net/threads/modmii-for-windows-official-support-topic.207126/)或[ModMii Discord服务器](https://discord.gg/cMnBRACQwQ)提问！

*(全文较长，继续阅读原文)*
