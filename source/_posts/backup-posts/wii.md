---
title: Wii 4.3J 系统信息炸弹软解完全教程
date: 2026-04-03 20:18:00
tags: Wii,破解,游戏,软解
categories: 教程
---

# ModMii for Windows 破解向导指南
*by XFlak*  
版本 v8.0.6 | 生成于 2026/04/02

> ⚠️ 本软件不用于售卖。如果你花钱购买了本软件或所谓的"捆绑包"，你已经被骗了。  
> **本软件不提供任何明示或暗示的担保。**  
> **除了你自己，没有人会为这个软件对你的任天堂Wii主机造成的任何损坏负责！**  
> **使用需自担风险！**

---

## 一、你选择的配置

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

## 二、重要说明

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

---

## 三、破解你的Wii

### 1. 将SD卡分区样式设置为MBR（如适用）

本指南生成时连接的设备分区样式/格式信息保存在下方折叠区域中：

<details>
<summary>点击查看已连接驱动器信息</summary>

```
DeviceID Filesystem
E:       NTFS      
F:       FAT32     
G:       NTFS      
H:       NTFS      

Number Friendly Name       Serial Number        HealthStatus OperationalStatus Total Size Partition Style
1      Samsung SSD 980 1TB 0025_38D3_1142_4757. Healthy      Online             931.51 GB GPT            
2      WD Blue SN580 1TB   0000000000000000     Healthy      Online             931.51 GB GPT            
```
</details>

**首先，将SD卡插入PC，检查它的分区样式是否已经是MBR。**

![检查MBR动图演示](https://modmii.github.io/Images/gifs/MBR_Check.gif)

  A. 右键点击"此电脑"或"我的电脑"，选择"管理"，会打开一个新窗口，在左侧面板点击"磁盘管理"
     - 如果桌面上没有"此电脑"或"我的电脑"，可以使用 **Win + E** 快捷键打开

  B. 在磁盘管理窗口中，右键点击你要处理的磁盘，选择"属性"
  C. 在磁盘属性窗口中，选择"卷"选项卡
  D. **如果分区样式已经是主引导记录（MBR），你可以跳过这一步剩下的内容。**

**如果你的SD卡还不是MBR，你必须使用以下任意一种方法进行转换。**

---

#### 方法1：MiniTool Partition Wizard

- 如果SD卡上有你想要保留的文件，你可以使用MiniTool Partition Wizard在不丢失数据的情况下将分区样式转换为MBR
- 即使你的数据应该会被保留，但不能保证，你仍然应该备份文件
- 如果你的SD卡已经不是想要的格式（例如FAT32），你无论如何都要在下一步格式化它，所以没必要用这个方法

1. [下载MiniTool Partition Wizard](https://tiny.cc/minitoolfree)，安装并启动程序

![MiniTool动图演示](https://modmii.github.io/Images/gifs/MiniTool.gif)

2. 在MiniTool窗口中，右键点击你要转换的GPT磁盘，选择"将GPT磁盘转换为MBR磁盘"
3. 点击工具栏中的"应用"按钮
4. 点击"是"按钮确认转换
5. 等待转换完成，然后点击"确定"
6. 成功将SD卡转换为MBR后，你可以继续本指南的下一步。

---

#### 方法2：DiskPart

> ⚠️ **转换前请备份磁盘上的所有数据！这会擦除磁盘上的所有数据！**

1. 按 **Win + R**，输入"cmd"打开命令提示符
2. 然后输入以下命令，每个命令输入后按回车：
   - `diskpart`
   - `list disk`
   - `select disk #`（其中#是对应你要转换设备的磁盘编号）
   - `clean`
   - `convert MBR`

---

### 2. 将SD卡格式化为FAT32（如适用）

> 注意：如果你没有SD卡，你仍然可以使用FAT32格式化的硬盘代替SD卡完成大多数操作（Bootmii显然需要SD卡）。确保始终将硬盘插在USB port0 - 也就是最靠近Wii边缘的那个端口。如果你既没有SD卡也没有硬盘，你可以通过ModMii从互联网将应用和WAD安装到Wii上，只需用ModMii打开应用（boot.dol\elf文件）或WAD即可。请注意，如果某些应用需要SD或HDD却没有，它们可能无法正常工作或支持所有功能。永远不要尝试通过互联网更改主机区域。

  A. 首先，插入SD卡到PC，通过检查SD卡当前的格式/文件系统来确定是否需要格式化。

![格式化动图演示](https://modmii.github.io/Images/gifs/format.gif)

  - 打开"此电脑"或"我的电脑"，右键点击你要使用的SD卡，然后选择"属性"
    - 如果桌面上没有"此电脑"或"我的电脑"，使用 **Win + E** 快捷键打开
  - 记下SD卡的驱动器号，这对后面很重要
  - 如果文件系统已经是FAT32，你可以跳过这一步

  B. **如果SD卡上有任何内容，你现在应该备份它，因为格式化后所有数据都会丢失。**

  C. 从开始菜单或桌面的快捷方式启动FAT32 GUI Formatter，或者直接从`C:\ModMii\Program Files`启动

![FAT32格式化动图演示](https://modmii.github.io/Images/gifs/fat32sd.gif)

  - 仔细选择对应你的SD卡的正确驱动器号
  - 你可以选择取消勾选"快速格式化"框，然后点击"开始"
    - 完成后应该显示"Done"
    - 如果出现设备正在使用的错误，请先关闭所有文件资源管理器窗口，即使那些没有浏览该设备的窗口，然后重试

  - 点击"关闭"按钮

  D. 将ModMii下载的文件复制到你的SD卡：

  - 文件应该保存在这里：`C:\ModMii\COPY_TO_SD`

  > 📁 你的文件夹结构应该**类似**这样：
  > ```
  > SD卡或USB驱动器
  > └── apps
  >     ├── AppName1
  >     │   ├── boot.dol
  >     │   ├── meta.xml
  >     │   └── icon.png
  >     └── （所有其他Wii应用都应该在这里）
  > ```

  > ❌ 你的文件夹结构**不应该**这样：
  > ```
  > SD卡或USB驱动器
  > ├── COPY_TO_SD
  > └── COPY_TO_USB
  > ```

  - 文件复制到SD卡完成后，你应该安全地从计算机弹出SD卡，然后将其重新插入主机，继续下一步。

---

### 3. 安装Homebrew Channel（HBC）和Bootmii

如果你的Wii之前已经修改过，并且已经安装了HBC、Bootmii boot2或转发频道，你可以使用其中一个代替漏洞来更新HBC和Bootmii。如果你没有这些，或者不知道它们是什么，没关系，它们不是必需的，在本指南结束时你会安装全部或部分这些。

<details>
<summary>如果你已经有HBC、Bootmii boot2、Priiloader或转发频道，请点击这里</summary>

如果你已经有HBC，可以通过HBC启动HackMii安装程序来重新安装和/或更新HBC或Bootmii。

如果你的Wii已经将Bootmii安装为boot2，你可以将带有ModMii文件的SD卡插入Wii并开机，Bootmii会加载。从Bootmii菜单中，按Wii主机上的电源按钮2次进入第三个选项（SD菜单），然后按复位按钮选择它（你也可以使用Gamecube控制器）。然后反复按电源按钮直到选中bootmini.elf，然后按复位按钮选择它。这会加载HackMii安装程序，允许你重新安装和/或更新HBC和Bootmii。

如果你的Wii安装了Priiloader，你可以在开机时按住复位按钮直到出现Priiloader菜单来访问它。然后进入"Load/Install File"加载HackMii安装程序（即`SD:\apps\hackmii_installer\boot.elf`），使用它重新安装和/或更新HBC和Bootmii。

如果你已经有来自之前软改的转发频道，只需将对应你要加载的应用的boot.elf/dol（例如`SD:\apps\hackmii_installer\boot.elf`或`SD:\apps\yawmME\boot.dol`）保存到转发频道使用的特定位置（例如`SD:\apps\usbloader_gx\boot.dol`）。然后启动频道，HackMii安装程序会加载，允许你重新安装HBC或Bootmii。请注意，如果你的转发频道仅加载dol而不加载elf，先启动yawmME，然后使用它启动HackMii安装程序的boot.elf。

</details>

如果你真的是第一次改装Wii，请继续这一步来启动漏洞。漏洞是主机软件中的一个漏洞，它让我们能够访问启动完成本指南所需的工具。大多数Wii漏洞会加载`SD:/boot.elf`或`SD:/boot.dol`来接管后续家庭brew的加载。

#### 启动漏洞

你只需要执行以下**其中一个**漏洞即可完成本指南。

> 注意：如果你没有SD卡或者SD卡读卡器坏了，你可以使用str2hax漏洞来安装HBC，但跳过安装和使用Bootmii来制作NAND备份，直到你获得SD卡。现在，先将[nanddumper@IOS](https://hbb1.oscwii.org/api/contents/nanddumper_ios/nanddumper_ios.zip)保存到你的USB硬盘（也可以在ModMii Classic的下载页面2找到），并在安装HBC后启动它，创建保存在`USB:/wii/backups/`的兼容Bootmii的NAND备份。

---

##### str2hax

**str2hax**

![str2hax动图演示](https://modmii.github.io/Images/gifs/str2hax.gif)

要求：Wii需要联网，但不需要SD卡就能启动HackMii安装程序。如果SD卡中存在`SD:\boot.elf`会优先启动。无法启动dol。仅适用于Wii。

  A. 如果你还没有连接，[将你的Wii连接到互联网](https://en-americas-support.nintendo.com/app/answers/detail/a_id/2679/~/how-to-connect-a-wii-console-to-the-internet)
   - 如果提示，选择不执行更新
   - 如果遇到连接问题，请确保你的路由器受Wii支持，并按照[这些指南](https://www.nintendo.com/en-gb/Support/Wii/Setup-amp-Connect/Online-Connection/Choosing-a-Wireless-Router/Choosing-a-Wireless-Router-240422.html)进行配置

  B. 进入"Wii选项"菜单，然后选择"Wii设置"，然后进入第2页选择"互联网"，选择"连接设置"，然后选择你当前激活的连接
  C. 选择"更改设置"，向右滚动3次选择"自动获取DNS"（不是IP地址）
  D. 选择"否"然后选择"高级设置"
  E. **将主DNS更改为 `3.143.163.250`**
   - 如果之后你遇到连接测试问题或其他问题，请点击[这里](https://wiibrew.org/wiki/Str2hax)确认str2hax DNS是否最近更改，因为它时不时会变。

  F. 选择"确认"，然后"保存"，然后选择"确定"运行连接测试
  G. 如果连接测试成功，选择"否"跳过Wii系统更新
   - 如果连接测试不起作用，确保你有可用的互联网连接且DNS输入正确，然后重试。如果仍然失败，你应该选择一个不同的漏洞。

  H. 两次选择"返回"回到互联网面板，**然后选择用户协议或协议/联系**。
  I. 对使用Wii商店频道和WiiConnect24选择"是"
  J. 点击"下一步"查看用户协议

   - 如果你在屏幕上看到一个心形小马，说明你做的一切都正确。

  K. 选择"我接受"继续
   - 点击"我接受"后，Wii遥控器在1-2分钟内没响应是正常的，然后才会启动你的家庭brew应用
   - 如果超过2分钟还没启动，按住电源按钮5秒钟关闭Wii，然后重试
   - 如果一直失败，你应该选择一个不同的漏洞

> 💡 关于str2hax的有趣事实！如果在SD卡根目录检测到boot.elf文件，str2hax会启动它，而不是自动下载然后启动HackMii安装程序。你知道吗，str2hax完成后，会将你的DNS重置为Google的8.8.8.8和8.8.4.4？你可以保持这样，或者重新启用自动获取DNS，或者改为Cloudflare的1.1.1.1，或者使用[WiiLink的DNS](https://wiilink.ca/guide/wii/)，选择权在你！

---

##### LetterBomb（又名Wilbrand，邮箱炸弹）

**LetterBomb；又名Wilbrand，邮箱炸弹**

要求：需要SD、SDHC或SDXC卡。适用于4.3版本系统菜单。可以启动dol和elf。仅适用于Wii。

###### 下载LetterBomb并保存到你的SD卡

![下载LetterBomb动图演示](https://modmii.github.io/Images/gifs/DL_LetterBomb.gif)

> 注意：LetterBomb是主机特定的，不要使用视频中的MAC地址，否则它对你不起作用。

  A. 在你的Wii上，进入Wii设置，然后互联网，然后主机信息，记下你的MAC地址
  B. 点击下方折叠区域下载LetterBomb
     i. 输入你Wii的MAC地址，将系统菜单版本设置为4.3J
     ii. 确保**没有**勾选Bundle the HackMii Installer
     iii. 完成验证码验证，剪断任意一根线下载你的LetterBomb
         - 你选择哪根线都无所谓

  C. 将下载的ZIP中的private文件夹解压到SD卡根目录，然后将SD卡插入Wii

<details>
<summary>点击下载LetterBomb</summary>

<iframe width="100%" height="360" src="https://please.hackmii.com" style="border:0; padding-bottom:2px;"></iframe>

LetterBomb来自please.hackmii.com，如果你在上面看不到输入MAC地址的区域，请直接访问[please.hackmii.com](https://please.hackmii.com)或者直接在ModMii应用中输入你的MAC地址，使用Wilbrand构建你的LetterBomb。

</details>

###### 在你的Wii上启动LetterBomb

![启动LetterBomb动图演示](https://modmii.github.io/Images/gifs/LetterBomb.gif)

  1. 在你的Wii上，返回到Wii菜单，然后打开"留言板"，导航到昨天
  2. 点击带有粉色炸弹图标的信封，启动保存在SD卡根目录的boot.elf/dol文件
   - 如果在"昨天"下面找不到letterbomb，检查你Wii的日期设置是否正确
   - 如果这个漏洞遇到困难，点击上面的str2hax按钮改用"str2hax"，或者尝试重新格式化你的SD卡，或者换一张不同的SD卡。

> 💡 有趣的事实！有两个工具可以构建这个漏洞。LetterBomb在功能上与ModMii使用Wilbrand构建的邮箱炸弹相同。

---

#### 使用HackMii安装程序安装HBC和Bootmii

![HackMii动图演示](https://modmii.github.io/Images/gifs/HackMii.gif)

> HackMii安装程序将允许你安装Homebrew Channel和Bootmii。  
> Homebrew Channel允许你从SD卡或硬盘启动Wii家庭brew应用。  
> Bootmii是一款可以备份和恢复Wii的NAND存储的软件，并提供砖机保护。

- 启动HackMii安装程序后，你会看到一个诈骗警告屏幕
- 等待30秒后，会出现"按1继续"的消息

  1. **按 1 继续**（如果使用Gamecube控制器，按 A 继续）
     - 如果"按1继续"消息没有出现，或者你收到"no vulnerable IOS"错误消息或者在这一步遇到任何其他问题，再次运行ModMii，这次选择"HackMii Solutions"选项，在继续本指南之前按照这些新说明操作。

  2. 按 A 继续，然后按 → 直到选中"**安装Homebrew Channel**"，然后按 A，然后选择"是，继续"安装它
     - 完成后安装程序应该显示"SUCCESS"

  3. 按 A 继续返回到主菜单

  4. 从主菜单，按 → 两次选中"Bootmii..."，然后按 A

  5. 从Bootmii菜单，导航到"**将Bootmii安装为IOS**"，然后按 A，然后选择"是，继续"将运行时文件写入SD卡，然后再次选择"是，继续"将Bootmii安装为IOS
     - 完成后安装程序应该显示"SUCCESS"
     - 如果安装失败，仔细检查SD卡的锁定开关已禁用（如果适用），或者换一张卡试试。如果你缺少兼容Bootmii的SD卡，你现在可以跳过安装Bootmii，直到你得到一张。同时，你至少可以运行[nanddumper@IOS](https://hbb1.oscwii.org/api/contents/nanddumper_ios/nanddumper_ios.zip)从HBC创建兼容Bootmii的NAND备份，它具有更好的SD卡兼容性，还支持USB硬盘。

  6. 按 A 继续到Bootmii菜单

  7. 从Bootmii菜单，检查是否有"将Bootmii安装为boot2"选项
     - 如果它作为选项列出，导航到**"将Bootmii安装为boot2"**并按 A。然后按照上面将Bootmii安装为IOS描述的相同过程安装它。

  8. 将Bootmii安装为IOS和（如果可能）boot2后，导航到"返回主菜单"并按 A，然后向下到"退出"并按 A **退出到Homebrew Channel**

##### 关于Bootmii作为IOS和Bootmii作为boot2的一些说明

- 如果可能，推荐将Bootmii同时安装为IOS和boot2
- 只有较老的Wii才能选择将Bootmii安装为boot2，它提供最高级别的砖机保护
  - 不用担心如果你的Wii不能安装Bootmii作为boot2，所有Wii都可以安装Priiloader；安装Priiloader后，你可以从大多数砖机中恢复。只要你不卸载Priiloader、系统菜单或系统菜单IOS，即使没有安装Bootmii作为boot2你也能够恢复。
  - 如果Bootmii安装到boot2，你可以在系统菜单（或Priiloader）加载之前访问Bootmii和Homebrew Channel，这允许你启动家庭brew来修复砖机或恢复NAND备份。如果Bootmii安装到boot2，**只有**在SD卡上检测到Bootmii文件夹时，它才会在每次Wii启动时加载Bootmii菜单。如果你移动或重命名此文件夹，Wii将继续启动系统菜单（如果安装了Priiloader则启动Priiloader）。

- 所有Wii都能够将Bootmii安装为IOS
  - 虽然Bootmii作为IOS本身不能提供很多砖机保护，但它允许你制作NAND备份。当与Priiloader结合使用时，NAND备份可以帮助你在未来从潜在的半砖机中恢复。

---

### 4. 制作NAND备份

![NAND备份动图演示](https://modmii.github.io/Images/gifs/NANDBackup.gif)

> 创建NAND备份类似于在Windows中创建系统还原点。如果你将来半砖了你的Wii但仍然可以访问Bootmii，恢复NAND备份就像把你的Wii带回到问题发生之前的时间。NAND备份是主机特定的，所以通常你不能恢复来自不同Wii的备份。
>
> 请注意，Bootmii需要SD卡。如果你没有SD卡或者你的SD卡读卡器坏了，跳过下面的Bootmii步骤，而是将[nanddumper@IOS](https://hbb1.oscwii.org/api/contents/nanddumper_ios/nanddumper_ios.zip)保存到你的USB硬盘（也可以在ModMii Classic的下载页面2找到），并从HBC启动它来创建保存在`USB:/wii/backups/`的兼容Bootmii的NAND备份。

- Bootmii不支持Wiimote，下面的步骤将指导你使用Wii主机正面的按钮
  - 电源按钮 = 前进到下一个项目
  - 复位按钮 = 选择高亮项目

- Bootmii也支持Gamecube控制器；事实上，在无法安装Bootmii到boot2的主机上恢复NAND备份需要一个Gamecube控制器。

  A. **从Homebrew Channel内部按Home按钮，然后选择"启动Bootmii"**
  B. **按Wii主机上的电源按钮3次**，进入最后一个选项访问设置（带齿轮的按钮），**然后按复位按钮**选择它
  C. **按复位**选择第一个备份选项（带绿色箭头的按钮）
  D. **再次按复位**开始制作你的NAND备份
   - 制作NAND备份时不要关闭Wii电源或拔出SD卡
   - 这个过程大约需要8分钟完成；实际时间可能会有所不同
   - 有一些黑色"坏块"是正常的，不用担心
   - 备份NAND后，Bootmii将开始验证它。虽然推荐验证，但可以按主机上的弹出键跳过。

  E. **按主机上的任意按钮**退出NAND备份屏幕
  F. **退出Bootmii并启动HBC**：按Wii主机上的电源按钮3次前进到最后一个选项（带后退箭头的那个），然后按复位按钮选择它。然后按电源按钮1次前进到Homebrew Channel，然后按复位按钮启动它
  G. 此时，或者在本指南完成之后，你应该从Wii中取出SD卡（在HBC中这样做是安全的），将SD卡上的Bootmii文件夹、nand.bin和keys.bin备份到硬盘、云或任何安全的地方。万一发生紧急情况你可能需要这些，所以不要丢失它们。备份后可选择将它们从SD卡中擦除以释放空间，或者重命名Bootmii文件夹以避免已将Bootmii安装到boot2的主机在启动时自动启动Bootmii（或者使用ModMii自定义它的bootmii.ini配置文件）。完成后，安全地从计算机中取出SD卡，然后重新插入Wii，继续下一步。

<details>
<summary>点击查看关于NAND备份的有趣事实</summary>

> 有趣的事实！如果你需要恢复NAND备份，你可以启动Bootmii，让SD卡包含正确命名的Bootmii文件夹、nand.bin和keys.bin，然后按照上面描述的过程操作，只是这次选择红色箭头朝另一个方向的选项。
>
> 另一个有趣的事实！你可以使用ModMii或ShowMiiWads等工具打开nand.bin提取其内容，然后保存到硬盘或SD卡作为模拟NAND（或虚拟NAND），允许你在Wii的真实NAND和一个或多个模拟NAND之间切换。模拟NAND可以提供比Wii的500MB大得多的存储空间。如果你想要一个全新的开始，ModMii可以帮你生成全新的、没有任何游戏存档或其他设置的模拟NAND。有关这方面的更多帮助，完成本指南后，请查看ModMii的SNEEK安装和EmuNAND功能。
</details>

---

### 5. 安装和配置Priiloader

![Priiloader动图演示](https://modmii.github.io/Images/gifs/Priiloader.gif)

> Priiloader就在Wii系统菜单之前加载，除非你在开机时按住复位按钮或USB连接键盘上的ESC键，否则它是不可见的。Priiloader不仅是一种很好的砖机保护形式，还可以自定义自动直接启动到系统菜单（默认行为）并带有补丁功能（也就是"系统菜单Hacks"），或者直接启动到HBC或用户定义的家庭brew（例如USB-Loader，疯狂介绍视频等）。点击[这里](https://sites.google.com/site/completesg/system-hacks/priiloader)查看在Priiloader中"安装文件"（也就是dol或elf文件）启动用户定义家庭brew的说明。可以从ModMii的高级下载菜单构建与Priiloader兼容的自定义转发dol。更多Priiloader信息可以在它的[FAQ](https://dacotaco.github.io/priiloader/docs/FAQ.html)找到。

- 你可以使用Wiimote、GameCube控制器、USB键盘或主机正面的电源/复位按钮导航Priiloader菜单：电源用于导航，复位用于选择
  - 注意：如果使用主机正面按钮，你将无法访问系统菜单hack、文件/dol和密码菜单

  A. **从Homebrew Channel启动"Priiloader Installer"**
  B. Priiloader安装程序加载后，**按 + 安装它**
   - 成功后安装程序应该显示"Install done!"
   - 如果遇到"System Menu Version invalid or not vanilla"错误，完整完成"安装WADs"步骤，然后立即返回这一步，Priiloader应该可以成功安装。
   - 如果遇到"System Menu Version invalid or not vanilla"错误，可以使用ModMii的SysCheck更新向导，或者重复ModMii向导，但这次选择与你开始时不同的系统菜单版本。这会用官方原生系统菜单覆盖无效/自定义系统菜单，让Priiloader成功安装。
   - 如果遇到"cIOSPAGHETTI"错误，完整完成"安装WADs"步骤，然后立即返回这一步，Priiloader应该可以成功安装。

  C. **按 A**退回到Homebrew Channel
  D. **通过HBC启动"Load Priiloader"应用**访问Priiloader菜单
   - 你也可以在开机时按住复位按钮或USB连接键盘上的ESC键来访问Priiloader

  E. 从Priiloader菜单，**选择"系统菜单Hacks"**并启用一些系统菜单hack
   - 注意不要随便启用任何hack，例如不要启用"Lock System Menu with Black Screen"
   - 点击[这里](https://dacotaco.github.io/priiloader/docs/HACKSLIST.html)查看每个Priiloader系统菜单hack的描述。

##### 推荐Hacks

- 阻止光盘更新
- 阻止在线更新
- 全区所有内容
- 系统菜单480p图形修复
- 移除闪烁（如果你不使用CRT显示器才需要）
- Wiimmfi Patch v4
- 移除NoCopy存档文件保护

  F. 向下滚动到"保存设置"并按 A，然后按 B 回到Priiloader的主菜单
  G. 可选：自动启动USB-Loader频道而不是系统菜单
   - 选择"Load/Install File"。选择你的转发dol（例如`USBLoader_IDCL_Channel_Forwarder.dol`）并按 A安装它。等待它安装完成并返回主菜单。
     - 你知道吗？自定义转发dols可以从ModMii的高级下载菜单构建！
   - 导航到"设置"并将"Autoboot"更改为"Installed File"

  H. 导航到"Homebrew Channel"并按 A启动它。

> 💡 专业提示！如果你更新或（重新）安装任何系统菜单，通常会**删除**Priiloader，你应该立即重新安装它以保持保护。只有YAWM ModMii Edition允许你在（重新）安装系统菜单时安全保留Priiloader。

> 💡 另一个专业提示！如果你一直将硬盘插在主机上，你可以在Priiloader设置中启用"忽略待机"，这样默认情况下主机会完全关闭。这可以防止硬盘在不使用时24/7旋转。

---

### 6. 安装WADs

![YAWM ModMii Edition动图演示](https://modmii.github.io/Images/gifs/yawmME.gif)

> YAWM ModMii Edition全称Yet Another Wad Manager ModMii Edition（简称yawmME）。WAD管理器允许你安装包含主机更新和其他内容的"WAD"，例如IOS、自定义IOS（或cIOS）或其他可下载内容，它们都可以打包成WAD并安装到你的主机。可以把WAD想象成一个zip文件，但它是给Wii用的。

> ⚠️ 警告：安装WAD时不要拔出主机。WAD也可以卸载，如果你不小心，错误卸载甚至安装错误的WAD都可能使你的主机变砖。你正在使用的WAD管理器YAWM ModMii Edition内置了一些额外的砖机保护，限制你做灾难性的事情，比如卸载任何系统菜单WAD、必需的系统菜单IOS，以及其他十几种如果你不知道你在做什么可能会导致砖机的操作。坚持使用ModMii指南，你会没事的。

<details>
<summary>点击这里了解IOS和cIOS是什么</summary>

> 有趣的事实！我之前提到过IOS和cIOS，"Wii主机使用'IOS'系统与硬件通信，它就像一个驱动程序（和Windows相比）。它包含信息和通信工具（比如如何访问光盘驱动器，如何访问USB，读取存储在内存中的存档数据等等）" ~Cyan。如果你好奇想了解更多关于IOS或cIOS的信息，可以在[Cyan的IOS解释帖子](https://gbatemp.net/threads/d2xl-cios-a-fork-of-davebaols-d2x-cios.558581/#post-8968173)找到完整的解释。
</details>

  A. **在你的主机上，从HomeBrew Channel加载"YAWM ModMii Edition"**
  B. 使用左右键选择你的源设备，大多数情况下是"Wii SD Slot"，**按 A**
  C. **安装下面折叠区域中你自定义的16个WAD**
   - 注意不要安装此文件夹中可能之前保存的任何额外WAD（它们可能是安全的，但我不能保证）

  D. 按 → 让 >> 光标指向列表中的任意WAD，然后**按住 + 2秒钟**选中文件夹中的所有WAD
   - 或者，你可以通过导航到每个WAD并按 + 来逐个选中或取消选中WAD
   - 警告：**不要**使用减号 (-)，因为这会将WAD标记为卸载

  E. 标记完下面列出的所有WAD后，**在任意标记的WAD上按 A 安装所有WAD**
  F. 确认选择用于安装的总数是16，然后**再次按 A 安装**
   - 如果任何WAD安装失败，请重试安装
   - 如果询问是否保留或删除Priiloader，**按 A 保留Priiloader**

  G. **成功安装所有WAD后，按任意键继续，然后按Wiimote上的Home按钮退出YAWM ModMii Edition**

<details>
<summary>点击查看你需要安装的16个WAD唯一列表</summary>

**以下是你需要安装的16个WAD唯一列表：**
1.  cIOS248[38]-d2x-v11-beta3
2.  cIOS249[56]-d2x-v11-beta3
3.  cIOS250[57]-d2x-v11-beta3
4.  cIOS251[58]-d2x-v11-beta3
5.  IOS11v65535(ModMii-IOS60-v6174)
6.  IOS20v65535(ModMii-IOS60-v6174)
7.  IOS30v65535(ModMii-IOS60-v6174)
8.  IOS40v65535(ModMii-IOS60-v6174)
9.  IOS50v65535(ModMii-IOS60-v6174)
10. IOS52v65535(ModMii-IOS60-v6174)
11. IOS58-64-v6176
12. IOS60v65535(ModMii-IOS60-v6174)
13. IOS70v65535(ModMii-IOS60-v6174)
14. IOS80v65535(ModMii-IOS60-v6174)
15. Open_HBC_1.1.5_LULZ
16. USBLoader(s)-ahbprot58-SD-USB-v14-IDCL-(Wii+vWii)

<details>
<summary>点击查看USBLoader转发器启动顺序和其他信息</summary>

USBLoader转发频道会从以下列表中找到的第一个应用启动：
1.  SD+USB:\apps\usbloader_gx\boot.dol
2.  SD+USB:\apps\usbloader_gx\boot.elf
3.  SD+USB:\apps\WiiFlow\boot.dol
4.  SD+USB:\apps\WiiFlow\boot.elf
5.  SD+USB:\apps\usbloader_cfg\boot.dol
6.  SD+USB:\apps\usbloader_cfg\boot.elf
7.  SD+USB:\apps\usbloader\boot.dol
8.  SD+USB:\apps\usbloader\boot.elf
9.  SD+USB:\apps\usb-loader\boot.dol
10. SD+USB:\apps\usb-loader\boot.elf

注意：转发器需要IOS58。先检查SD路径，然后检查USB。它能够从FAT32、NTFS、ext2、ext3和ext4格式化的SD卡和硬盘启动应用。它还支持meta.xml参数，能够直接硬件访问启动应用。

> 想自定义一些你的频道吗？首先确保你完成本指南并在需要时安装Priiloader，然后从ModMii Classic的下载页面5获取CustomizeMii。你可以使用这个工具修改频道的音频或视觉效果，甚至注入一个新的"dol"来启动。你可以从ModMii Classic的高级下载页面为自定义路径、频道或网站URL构建转发dol。

</details>
</details>

---

## 四、USB Loader和硬盘设置

本指南剩下的部分将在你的电脑上完成，目的是为你的Wii或vWii设置USB-Loader。另外请注意，FAT32 SD\SDHC\SDXC卡也可以选择代替硬盘使用。

本指南生成时连接的外部硬盘分区样式/格式信息保存在下方折叠区域中：

<details>
<summary>点击查看已连接驱动器信息</summary>

```
DeviceID Filesystem
E:       NTFS      
F:       FAT32     
G:       NTFS      
H:       NTFS      

Number Friendly Name       Serial Number        HealthStatus OperationalStatus Total Size Partition Style
1      Samsung SSD 980 1TB 0025_38D3_1142_4757. Healthy      Online             931.51 GB GPT            
2      WD Blue SN580 1TB   0000000000000000     Healthy      Online             931.51 GB GPT            
```
</details>

### 1. 将外部硬盘分区样式设置为MBR（如适用）

- **首先，将硬盘插入PC，检查它的分区样式是否已经是MBR。**

![检查MBR动图演示](https://modmii.github.io/Images/gifs/MBR_Check.gif)

  A. 右键点击"此电脑"或"我的电脑"，选择"管理"，会打开一个新窗口，在左侧面板点击"磁盘管理"
     - 如果桌面上没有"此电脑"或"我的电脑"，可以使用 **Win + E** 快捷键打开

  B. 在磁盘管理窗口中，右键点击你要处理的磁盘，选择"属性"
  C. 在磁盘属性窗口中，选择"卷"选项卡
  D. **如果分区样式已经是主引导记录（MBR），你可以跳过这一步剩下的内容。**

- 如果你的硬盘大于2TB且还不是MBR，你必须按照[ca032769的西数硬盘指南](https://tiny.cc/wiibigdrive)或[Al_Touriste的希捷硬盘指南](https://tiny.cc/wiibigseagate)完成这一步。
  - 如果你的硬盘大于2TB，不是MBR，且不是支持的西数或希捷硬盘，那么目前没有办法。
  - 成功将硬盘转换为MBR后，你可以继续本指南的下一步。

- 如果你的硬盘是2TB或更小且还不是MBR，你必须使用以下任意一种方法进行转换。

---

#### 方法1：MiniTool Partition Wizard

- 如果硬盘上有你想要保留的文件，你可以使用MiniTool Partition Wizard在不丢失数据的情况下将分区样式转换为MBR
- 即使你的数据应该会被保留，但不能保证，你仍然应该备份文件
- 如果你的硬盘已经不是想要的格式（例如FAT32），你无论如何都要在下一步格式化它，所以没必要用这个方法

1. [下载MiniTool Partition Wizard](https://tiny.cc/minitoolfree)，安装并启动程序

![MiniTool动图演示](https://modmii.github.io/Images/gifs/MiniTool.gif)

2. 在MiniTool窗口中，右键点击你要转换的GPT磁盘，选择"将GPT磁盘转换为MBR磁盘"
3. 点击工具栏中的"应用"按钮
4. 点击"是"按钮确认转换
5. 等待转换完成，然后点击"确定"
6. 成功将硬盘转换为MBR后，你可以继续本指南的下一步。

---

#### 方法2：Windows磁盘管理

> ⚠️ **转换前请备份磁盘上的所有数据！这会擦除磁盘上的所有数据！**

1. 按照上述相同过程打开磁盘管理，找到你要使用的磁盘驱动器

![MBR转换动图演示](https://modmii.github.io/Images/gifs/MBR_WDM.gif)

2. 右键点击驱动器上的分区（确保你选对了驱动器！），选择"删除卷"或"删除分区"来删除它们。对磁盘上的每个分区重复此过程。
3. 右键点击磁盘管理中的磁盘，选择"转换为MBR磁盘"
   - 如果"转换为MBR磁盘"不可用，请选择另一种MBR转换方法
4. 在窗口的下半部分菜单，找到未分配空间，右键点击它，选择"新建简单卷"，然后点击"下一步"
5. 为这个分区选择一个驱动器号，然后点击"下一步"
   - 记下这个驱动器号，后面会用到
6. 将文件系统设置为你想要的格式，可选择自定义"卷标"
   - 如果想要的格式（例如FAT32）不可用，请选择NTFS，我们稍后可以更改它
7. 点击"下一步"，然后点击"完成"
   - 如果看到提示你需要格式化驱动器的消息，点击"取消"

---

#### 方法3：DiskPart

> ⚠️ **转换前请备份磁盘上的所有数据！这会擦除磁盘上的所有数据！**

1. 按 **Win + R**，输入"cmd"打开命令提示符
2. 然后输入以下命令，每个命令输入后按回车：
   - `diskpart`
   - `list disk`
   - `select disk #`（其中#是对应你要转换设备的磁盘编号）
   - `clean`
   - `convert MBR`

---

### 2. 对外部硬盘进行分区和格式化（如适用）

使用下方按钮选择格式化选项。通常推荐FAT32，但你可以点击其他按钮查看每种格式的优缺点。

---

##### FAT32（推荐）

**FAT32（推荐）**

优点：
- Wii可以直接访问存储在FAT32上的应用、游戏、封面图片、媒体和其他文件，不需要SD卡
- 兼容玩Gamecube游戏
- 兼容SNEEK/Nand模拟

缺点：
- 无法存储大于4GB的文件。这个限制不适用于Wii游戏，因为它们可以被分割成多个部分。除非你还用驱动器存储高清视频，否则这可能不会影响你。

  A. 首先，插入硬盘到PC，通过检查硬盘当前的格式/文件系统来确定是否需要格式化。

![格式化动图演示](https://modmii.github.io/Images/gifs/format.gif)

  - 打开"此电脑"或"我的电脑"，右键点击你要使用的外部硬盘，然后选择"属性"
    - 如果桌面上没有"此电脑"或"我的电脑"，使用 **Win + E** 快捷键打开
  - 记下外部硬盘的驱动器号，这对后面很重要
  - 如果文件系统已经是FAT32，你可以跳过这一步

  B. **如果硬盘上有任何内容，你现在应该备份它，因为格式化后所有数据都会丢失。**

  C. 从开始菜单或桌面的快捷方式启动FAT32 GUI Formatter，或者直接从`C:\ModMii\Program Files`启动

![FAT32格式化动图演示](https://modmii.github.io/Images/gifs/FAT32.gif)

  - 仔细选择对应你的外部硬盘的正确驱动器号
  - 你可以选择取消勾选"快速格式化"框，然后点击"开始"
    - 完成后应该显示"Done"
    - 如果出现设备正在使用的错误，请先关闭所有文件资源管理器窗口，即使那些没有浏览该设备的窗口，然后重试

  - 点击"关闭"按钮

---

##### NTFS

**NTFS**

优点：
- 能够存储大于4GB的文件
- 大多数USB加载器都可以访问保存在NTFS上的游戏、封面和音乐

缺点：
- HBC无法加载存储在NTFS上的应用，因此需要SD卡或现代转发频道才能运行USB加载器
- 不兼容玩Gamecube游戏
- 不兼容SNEEK/Nand模拟

  A. 首先，插入硬盘到PC，通过检查硬盘当前的格式/文件系统来确定是否需要格式化。

![格式化动图演示](https://modmii.github.io/Images/gifs/format.gif)

  - 打开"此电脑"或"我的电脑"，右键点击你要使用的外部硬盘，然后选择"属性"
    - 如果桌面上没有"此电脑"或"我的电脑"，使用 **Win + E** 快捷键打开
  - 记下外部硬盘的驱动器号，这对后面很重要
  - 如果文件系统已经是NTFS，你可以跳过这一步

  B. **如果硬盘上有任何内容，你现在应该备份它，因为格式化后所有数据都会丢失。**

  C. 右键点击"我的电脑"，选择"管理"，打开一个新窗口，在左侧面板点击"磁盘管理"

![NTFS格式化动图演示](https://modmii.github.io/Images/gifs/NTFS.gif)

  - 右键点击你要格式化的驱动器（确保你选对了驱动器！），然后选择"格式化..."
  - 选择"NTFS"作为要使用的文件系统，输入硬盘/卷的名称
  - 你可以选择取消勾选"快速格式化"框，然后点击"确定"，然后再次点击"确定"

---

##### WBFS

**WBFS**

优点：
- 对硬盘有更好的兼容性，特别是小型U盘。如果使用其他格式加载备份不起作用，你可以在购买新硬盘之前尝试WBFS。

缺点：
- WBFS**只能**存储Wii游戏，因此通常需要SD卡才能运行应用
- 不兼容玩Gamecube游戏
- 不兼容SNEEK/Nand模拟
- Windows资源管理器无法打开WBFS驱动器，可能会提示你格式化，小心不要意外格式化。
  - Wii游戏保存在驱动器上仍然可以通过Wii Backup Manager或Wii上的USB-Loader在PC上管理。

  A. **如果硬盘上有任何内容，你现在应该备份它，因为格式化后所有数据都会丢失。**
  - 如果你硬盘上已经有任何Wii文件，你现在应该将它们复制到你的SD卡上（例如"apps"文件夹、"usb-loader"文件夹等）

  B. 从开始菜单或桌面的快捷方式启动Wii Backup Manager，或者直接从`C:\ModMii\Program Files`启动

![WBFS格式化动图演示](https://modmii.github.io/Images/gifs/WBFS.gif)

  - 在Wii Backup Manager窗口中，点击"工具"菜单，选择"格式化驱动器"
  - 仔细选择对应你的外部硬盘的正确驱动器号
  - 确认新文件系统是"WBFS"，然后点击"开始"
  - 当询问你是否要继续时点击"是"，然后点击"关闭"

  - **警告：** Windows资源管理器无法打开WBFS驱动器，可能会提示你格式化，小心不要意外格式化。
  - Wii游戏保存在驱动器上仍然可以通过Wii Backup Manager或Wii上的USB-Loader在PC上管理。

---

##### FAT32 + NTFS

**FAT32 + NTFS**

优点：
- FAT32分区可用于启动应用，不需要SD卡
- FAT32分区兼容玩Gamecube游戏
- FAT32分区兼容SNEEK/Nand模拟
- NTFS分区可用于存储大于4GB的文件

缺点：
- 某些低容量U盘可能无法实现
- 设置稍微麻烦一点

  A. **如果硬盘上有任何内容，你现在应该备份它，因为格式化后所有数据都会丢失。**
  B. 右键点击"此电脑"或"我的电脑"，选择"管理"，打开一个新窗口，在左侧面板点击"磁盘管理"

![FAT32+NTFS格式化动图演示](https://modmii.github.io/Images/gifs/FAT32NTFS.gif)

  - 右键点击驱动器上的分区（确保你选对了驱动器！），选择"删除卷"或"删除分区"来删除它们。对磁盘上的每个分区重复此过程。
  - 在窗口的下半部分菜单，找到未分配空间，右键点击它，选择"新建简单卷..."
  - 输入你想要FAT32分区的容量，然后点击"下一步"
  - 为这个分区选择一个驱动器号，然后点击"下一步"
  - 记下这个驱动器号，我们稍后使用FAT32 GUI Formatter时会用到
  - 将文件系统设置为"FAT32"（如果可能）并可选择自定义"卷标"
    - FAT32通常只有在容量低于32GB时才会作为选项列出
  - 如果FAT32不是选项，你可以选择"不要格式化这个卷"
    - 也可以格式化为NTFS或exFAT，因为我们稍后会将其更改为FAT32

  - 点击"下一步"，然后点击"完成"
    - 如果看到提示你需要格式化驱动器的消息，点击"取消"

  - 在磁盘管理的下半部分，找到驱动器剩余的未分配空间，右键点击它，选择"新建简单卷..."
  - 点击"下一步"格式化驱动器剩余的所有空间
  - 为NTFS分区选择一个驱动器号，然后点击"下一步"
  - 确保文件系统设置为NTFS，然后命名/标记卷，并可选择取消勾选"快速格式化"框
  - 点击"下一步"，然后点击"完成"

  如果你能够将第一个分区格式化为FAT32，那么你可以跳过这一步剩下的内容。

  - 从开始菜单或桌面的快捷方式启动FAT32 GUI Formatter，或者直接从`C:\ModMii\Program Files`启动
  - 仔细选择对应你的外部硬盘第一个分区的正确驱动器号
  - 你可以选择取消勾选"快速格式化"框，然后点击"开始"
    - 完成后应该显示"Done"
    - 如果出现设备正在使用的错误，请先关闭所有文件资源管理器窗口，即使那些没有浏览该设备的窗口，然后重试
  - 点击"关闭"按钮

---

##### FAT32 + WBFS

**FAT32 + WBFS**

优点：
- FAT32分区可用于启动应用，不需要SD卡
- FAT32分区兼容玩Gamecube游戏
- FAT32分区兼容SNEEK/Nand模拟
- WBFS对硬盘有更好的兼容性，特别是小型U盘。如果使用其他格式加载备份不起作用，你可以在购买新硬盘之前尝试WBFS。

缺点：
- 某些低容量U盘可能无法实现
- 设置稍微麻烦一点
- WBFS分区**只能**存储Wii游戏
- Windows资源管理器无法打开WBFS分区，可能会提示你格式化，小心不要意外格式化。
  - Wii游戏保存在WBFS分区仍然可以通过Wii Backup Manager或Wii上的USB-Loader在PC上管理。

  A. **如果硬盘上有任何内容，你现在应该备份它，因为格式化后所有数据都会丢失。**
  B. 右键点击"此电脑"或"我的电脑"，选择"管理"，打开一个新窗口，在左侧面板点击"磁盘管理"

    - 如果桌面上没有"此电脑"或"我的电脑"，使用 **Win + E** 快捷键打开

![FAT32+WBFS格式化动图演示](https://modmii.github.io/Images/gifs/FAT32WBFS.gif)

  - 右键点击驱动器上的分区（确保你选对了驱动器！），选择"删除卷"或"删除分区"来删除它们。对磁盘上的每个分区重复此过程。
  - 在窗口的下半部分菜单，找到未分配空间，右键点击它，选择"新建简单卷..."
  - 输入你想要FAT32分区的容量，然后点击"下一步"
  - 为这个分区选择一个驱动器号，然后点击"下一步"
  - 记下第一个分区的驱动器号，我们稍后使用FAT32 GUI Formatter时会用到
  - 将文件系统设置为"FAT32"（如果可能）并可选择自定义"卷标"
    - FAT32通常只有在容量低于32GB时才会作为选项列出
  - 如果FAT32不是选项，你可以选择"不要格式化这个卷"
    - 也可以格式化为NTFS或exFAT，因为我们稍后会将其更改为FAT32

  - 点击"下一步"，然后点击"完成"
    - 如果看到提示你需要格式化驱动器的消息，点击"取消"

  - 在磁盘管理的下半部分，找到驱动器剩余的未分配空间，右键点击它，选择"新建简单卷..."
  - 点击"下一步"格式化驱动器剩余的所有空间
  - 为WBFS分区选择一个驱动器号，然后点击"下一步"
  - 将文件系统设置为任何东西（例如"NTFS"），因为我们稍后会将其更改为WBFS，并可选择自定义"卷标"
  - 点击"下一步"，然后点击"完成"

  如果你能够将第一个分区格式化为FAT32，那么你可以跳到格式化第二个分区为WBFS。

  - 从开始菜单或桌面的快捷方式启动FAT32 GUI Formatter，或者直接从`C:\ModMii\Program Files`启动
  - 仔细选择对应你的外部硬盘第一个分区的正确驱动器号
  - 你可以选择取消勾选"快速格式化"框，然后点击"开始"
    - 完成后应该显示"Done"
    - 如果出现设备正在使用的错误，请先关闭所有文件资源管理器窗口，即使那些没有浏览该设备的窗口，然后重试
  - 点击"关闭"按钮

  - 要将第二个分区格式化为WBFS，从开始菜单或桌面的快捷方式启动Wii Backup Manager，或者直接从`C:\ModMii\Program Files`启动
  - 在Wii Backup Manager窗口中，点击"工具"菜单，选择"格式化驱动器"
  - 仔细选择对应你的外部硬盘第二个分区的正确驱动器号
  - 确认新文件系统是"WBFS"，然后点击"开始"
  - 当询问你是否要继续时点击"是"，然后点击"关闭"

  - **警告：** Windows资源管理器无法打开WBFS驱动器，可能会提示你格式化，小心不要意外格式化。
  - Wii游戏保存在驱动器上仍然可以通过Wii Backup Manager或Wii上的USB-Loader在PC上管理。

---

### 3. 管理游戏备份（可选）

- 从开始菜单或桌面的快捷方式启动以下工具。

#### Wii Backup Manager

**Wii Backup Manager**

> Wii Backup Manager (WBM) 是一个Windows程序，可帮助在硬盘和SD卡之间传输Wii游戏。它还可以下载游戏封面、列出你的游戏、识别设备之间缺少哪些游戏等等。

- 你可以使用这个程序来管理/传输你的Wii游戏备份（.WBFS/.ISO/.CISO）
- 它非常易于使用，但在[这里](https://wii.hacks.guide/wii-backups#using-wii-backup-manager)可以找到详细教程。
- Wii游戏目录结构：
  - 下面是一个单个WBFS示例，和一个分割WBFS示例。如果你的存储设备格式化为FAT32且WBFS文件超过4GB，WBM可以自动分割游戏并为你设置目录结构。

  > 📁 你的目录结构应该如下：
  > ```
  > SD卡或USB驱动器
  > └── wbfs
  >     └── GameName [GameID]
  >         └── GameID.wbfs （非分割游戏）
  >     或者
  >     └── GameName [GameID]
  >         ├── GameID.wbfs
  >         └── GameID.wbf1
  > ```

#### GameCube Backup Manager

**GameCube Backup Manager**

> GameCube Backup Manager (GCBM) 是一个Windows程序，可帮助在硬盘和SD卡之间传输GameCube游戏。它的界面与流行的Wii Backup Manager程序非常相似，因此易于使用。

- 你可以使用这个程序来管理/传输你的GameCube游戏备份（.ISO/.CISO/.GCM和提取的FST格式）
- 更详细的使用信息可以在[这里](https://wii.hacks.guide/gc-backups.html)找到。
- Gamecube（Nintendont）游戏目录结构：
  - 下面是一个单碟游戏示例，和双碟游戏示例。对于ISO/GCM和CISO格式的单碟游戏，子目录是可选的。在传输操作中，GCBM可以自动正确为你设置目录结构。

  > 📁 你的目录结构应该如下：
  > ```
  > SD卡或USB驱动器
  > └── games
  >     └── GameName [GameID]
  >         └── game.ciso （单碟游戏）
  >     或者
  >     └── GameName [GameID]
  >         ├── game.iso
  >         └── disc2.iso
  > ```

#### NKit Processing App

**NKit Processing App**

> NKit是Nintendo ToolKit，可以恢复和保留Wii和GameCube光盘镜像。

- 实际上，你只需要在遇到"NKit.iso"或"NKit.gcz"游戏备份时才需要这个应用，这些备份不被WBM或GCBM支持。
  - 通常这些文件名中会有NKit，但如果WBM或GCBM无法处理备份，它可能是未标记的NKit备份。

- **如何使用NKit Processing App将NKit备份转换为ISO**
  1. 将源文件拖放到NKit Processing App窗口
  2. 选择"Convert to ISO"模式
  3. 点击"Process"
  4. 完成后，转换后的游戏将保存在：`..\NKit\Processed\Wii_MatchFail\`

  - 点击[这里](https://www.youtube-nocookie.com/embed/IrzE23XuFJU?rel=0)查看简短视频教程。

- 从NKit转换为ISO后，备份就可以像平常一样被WBM和GCBM处理。

##### 如何备份原始光盘

> 从原始Wii光盘抓取不能在普通电脑上完成，需要罕见的能够做到这一点的光盘驱动器（大多数是LG品牌的）。

- 要复制Wii光盘，启动Configurable USB-Loader并将光盘插入你的Wii，然后按 +。
- 要复制GameCube（或Wii）光盘，从HBC启动"CleanRip"并将光盘插入你的Wii，然后按照非常简单的屏幕说明操作。请注意CleanRip不支持格式化为WBFS的设备。
  - **警告：** 使用你的主机将游戏抓取到NTFS非常不稳定，强烈推荐抓取到FAT32或WBFS格式化的HDD，然后使用电脑将它们传输到你的NTFS驱动器。请记住，GameCube游戏保存在NTFS设备上无法游玩。

### 4. 配置/自定义你的USB-Loader（可选）

- 从HBC、转发频道启动你喜欢的USB-Loader，或者设置Priiloader开机自动启动。

  - 从那里你可以很直观地浏览和调整任何设置以满足你的喜好，下载封面，将私有服务器设置为[Wiimmfi](https://wii.hacks.guide/wiimmfi.html#automatic-backup-patching-via-usb-loader)以重新启用心连心在线多人游戏，禁用模糊的闪烁滤镜等等。

- 你可以按照[这里](https://wii.hacks.guide/themes#wiiflow-lite-theming)的步骤自定义USB-Loader或HBC的外观/主题。

- 要自定义CFG USB-Loader，请在这里找到Configurable USB-Loader的配置器：`COPY_TO_SD\usb-loader\CfgLoaderConfigurator.exe`
  - 有关使用配置器的提示和技巧，请[点击这里](http://gwht.wikidot.com/configurable-options)。

---

## 五、改装Wii之后

- 全部搞定！享受你的改装主机吧，如果觉得有用，欢迎考虑[给作者买一杯咖啡](https://modmii.github.io/donations.html)！

- 可选：使用ModMii的"文件检查"功能移除不必要的文件，防止新手使用潜在危险的应用。

- 考虑再做一次NAND备份，这样如果你将来需要恢复它，就不必重复整个软改过程。

- 你可以随时在Wii上运行SysCheck，获取已安装软改的sysCheck.csv日志；将来你可以用最新版本的ModMii打开你的日志，检查是否有任何模块过期。

- 定期使用ModMii的"文件检查"功能检查SD卡或USB硬盘上的应用更新。它会扫描你的设备寻找ModMii自动更新的应用，并提供检查更新。

- 将最新的Wii家庭brew应用下载到你的SD卡或FAT32 USB硬盘，这样它们就可以通过HBC或转发频道启动。

  - 从ModMii Classic下载页面下载一些Wii相关PC工具或者有趣的Wii应用，比如模拟器或金手指。
  - 从ModMii或提供的链接获取[Homebrew Browser](https://web.archive.org/web/20231213215727/wii.guide/hbb)或[Open Shop Channel for Windows](https://github.com/dhtdht020/osc-dl/releases/latest)，你可以轻松从Wii或PC直接下载许多其他流行应用！
  - 其他一些很棒的家庭brew应用库可以在[wiibrew.org](https://wiibrew.org/wiki/List_of_all_homebrew)、[wiidatabase.de](https://translate.google.com/translate?hl=en&sl=en&tl=en&u=https%3A%2F%2Fwiidatabase.de%2Fdownloads%2F)、[oscwii.org](https://oscwii.org/library)当然还有[gbatemp](https://gbatemp.net/forums/nintendo-wii.105/)找到。

    - 要手动"安装"应用，下载你的家庭brew，你应该会找到一个boot.dol（或boot.elf）文件，可能还有一个icon.png和meta.xml。
    - 要让HBC正确读取你的SD/USB，你的卡必须结构化为：`SD+USB:/apps/application name/boot.dol\elf`
    - 某些应用需要将meta.xml保存在与boot.dol\elf相同的位置才能正常工作（icon.png始终可选）。
    - 如果你有一个不叫"boot"的dol或elf，将其重命名为boot.dol\elf，否则HBC不会识别它（如果使用Priiloader安装文件则不需要）。

- 查看我的一些自定义[转发频道](https://gbatemp.net/threads/x-flaks-top-wii-channels.205622/)，你可以直接从系统菜单启动你最喜欢的Wii家庭brew。
- 给你的Wii菜单换个[新主题](https://wii.hacks.guide/themes.html)！在安装主题之前确认你安装了Priiloader，然后使用ModMii或ThemeMii Mod打开我的主题文件，将它们转换为特定系统菜单版本的csm文件。或者去[www.wiithemer.org](https://www.wiithemer.org)查看大量可用主题，这个网站可以即时将MYM转换为CSM。然后可以使用csm-installer或MyMenuify Mod将CSM文件安装到你的Wii。ThemeMii Mod、csm-installer和MyMenuify Mod都可以在ModMii Classic的下载页面找到。
- 通过让Wii从外部存储器加载系统菜单来"扩展"Wii的500MB内部内存，获得更多WiiWare和虚拟控制台游戏。使用ModMii的SNEEK安装程序和模拟NAND生成器开始。
  - 你也可以使用Wii的nand.bin备份作为模拟NAND，而不需要ModMii从头构建一个。要从nand.bin备份提取文件用作模拟NAND，只需使用ModMii打开nand.bin文件。
  - 或者，你可以使用USB Loader GX的功能将Wii的NAND转储用作模拟NAND。

- 将[Fakemote](https://gbatemp.net/threads/release-fakemote-an-ios-module-that-fakes-wiimotes-from-the-input-of-usb-game-controllers.601771)安装到未使用的IOS插槽（如247），以添加对DS3和DS4控制器的支持。这也可以通过ModMii Classic的高级下载菜单在ModMii选项中选择最新的FM（Fakemote）版本d2x来完成。
- 查看一些[疯狂介绍视频](https://gbatemp.net/threads/x-flaks-crazy-intro-videos.189411/)，自定义你的Wii启动方式（需要SD卡）。

- 把WiiConnect24带回你的Wii！WiiLink Patcher恢复了Wii Mail和各种任天堂频道的功能，例如预报、新闻、全民投票、任天堂、Mii评比等等！你可以从ModMii Classic下载页面5获取这个工具。

- 查看[RiiTag\LinkTag](https://wiki.hacks.guide/wiki/RiiTag)：一个可定制的动态gamertag，可自动在Discord更新你在Wii上玩的内容。

---

## 六、鸣谢

ModMii完全由我XFlak编写。相信我，没有其他人疯到会去维护一个变得如此庞大和"乱七八糟"的批处理文件。但如果没有许多其他非常有才华的人的帮助，ModMii就不会存在。有些人贡献了支持文件或程序，有些人分享了他们的知识，有些人提供了想法，有些人付出了时间。

我已经尽力认识到每个人对ModMii的贡献，无论大小。如果我忘记了谁，请通知我，我会尽快将他们添加到鸣谢中。

<details>
<summary>点击查看完整鸣谢列表</summary>

- **Team Twiizers**
  感谢Team Twiizers创造了革命性的HackMii安装程序。没有他们的努力工作，Wii可能永远不会被解锁。许多Team Twiizer成员后来加入了Team Fail Overflow；这个团队在解锁PS3中发挥了至关重要的作用。

  我要特别感谢Bushing（愿他安息），在他早逝之前，他允许ModMii下载和使用HackMii安装程序。

- **Giantpune**
  Giantpune是Wii社区的传奇，我认为他是我的好朋友。他创造了许多漏洞，包括PAL和KOR Wii的Smash Stack漏洞（这可能仍然是修复003变砖Wii的唯一方法），频道转发dol，USB Loader GX，以及许多其他修复或还原Wii的计算机程序。

  他对更多项目的贡献比我知道的还多，所以我真的无法传达他对社区的影响。即使在ModMii还被称为NUS Auto Downloader的早期，他也花时间向我解释一些关于cIOS的事情。

- **DeadlyFoez**
  DeadlyFoez以Wii维修和infectus教程而闻名。他不仅在ModMii v5.0.0更新中发挥了关键作用，他想到了使用HTML指南的想法，还为ModMii的自定义HTML指南创建了模板，并录制了几乎所有他们使用的视频和图像。在我们最初交谈后的1.5周内，我们合作并在圣诞节及时实现了这个想法。与他合作真的很有收获，也很有趣。DeadlyFoez还独自建立了第一个官方ModMii网站。

  就我个人而言，DeadlyFoez怎么说呢，他总是给我惹麻烦，但他的友谊值得每一次失败。没办法，网上认识的人不全是疯子，他只是有点疯而已。说真的，感谢DeadlyFoez总是在那里，我可以和他交流ModMii的想法，主持我们Team Your Mom会议，还把我介绍给他很棒的家人和朋友。没有他，我不可能做到这些。

- **Violator**
  他是我的兄弟，我的表亲，我的伴郎，也是我买Wii改装的原因。如果不是他，"XFlak"这个名字很多年前就不存在了。感谢Violator，让我对这东西感兴趣，还为ModMii和我的[Top Wii Channels](https://gbatemp.net/threads/x-flaks-top-wii-channels.205622/)录制了所有很棒的音乐。

- **JoostinOnline**
  感谢他开发KoreanKii（和tueidj一起），SysCheck HD Edition，分享他的网络托管空间，还有他所有的笑话；我永远不会厌倦我们没完没了的爱国"辩论"。

- **Crediar, Daco Taco and Phpgeek**
  以上所有人都参与创造了Priiloader。这是另一个革命性的工具，主要因为它是第一个为无法安装Bootmii boot2的新Wii提供一定程度保护的工具。Crediar开发了原始的preloader，还有s/uneek、Nintendont、NMM、DML等等。特别感谢Daco Taco，他是最后一个坚持积极改进/维护Priiloader的人，更不用说开发OpenDolBoot，而且通常非常乐于助人，知识渊博。

- **NinjaCheetah**
  感谢他在libWiiPy、WiiPy、NUSGet等方面的工作！很高兴和他一起测试他的工具，他总是非常开放接受反馈和功能请求。

- **Comex**
  除了是Team Twiizers的成员并为HackMii安装程序做出贡献，Comex还创造了被广泛使用的bannerbomb漏洞。这个漏洞允许3.0-4.2固件的Wii只需要SD卡就可以软改，不需要特定的几个Wii游戏之一。

- **Maschell and GaryOderNichts**
  感谢你们绝对是WiiU和vWii社区的传奇！

- **Waninkoko**
  Waninkoko是第一个公开发布cIOS和其他优秀应用（如WAD manager、Save Game Manager、USB loader等）的人。我还要感谢他允许ModMii重新创建他的cIOS为WAD格式。

- **Hermes and Rodries**
  Hermes以他的cIOS 222/223/224和他的usbloader "uloader"闻名。有一段时间，他的cIOS是唯一可以和RockBand类游戏一起工作的，直到今天仍然被高度使用。感谢Rodries改进了Hermes v5.1 cIOS。

- **davebaol, blackb0x, XFlak and xabby**
  这些开发人员一起修改了Waninkoko的rev21 cIOS，创造了新的"d2x" cIOS。这个cIOS目前被认为是终极cIOS，因为它纠正了许多bug，添加了以前认为不可能的功能（即支持IOS重新加载游戏）。WiiPower对IOS重新加载支持也有很大影响。

- **Fullmetal5**
  感谢他开发了str2hax和bluebomb漏洞。

- **WiiGator**
  WiiGator创造了cMIOS和Gamecube备份启动器。任何GameCube粉丝都非常感谢WiiGator的工作。

- **cwstjdenobs**
  cwstjdenobs是我在Wii社区遇到的少数我很想请他喝啤酒的人之一。他一直非常支持我，鼓励我尽可能问他问题。他最出名的是YAWMM（Yet Another Wad Manager Mod），这是第一个增加砖机保护的WAD管理器，通过限制用户犯愚蠢的错误，比如卸载或 stub 关键文件。他还专门为ModMii制作和修改应用。例如，他修改了WadMii，使其不对WAD添加时间戳，他还为ModMii的NAND构建器制作了setting.txt构建器。

- **Leathl**
  Leathl是另一个很棒的开发者，在我出名之前就支持我，扩展他的应用来进一步支持ModMii。Leathl创建了许多Wii应用，包括ShowMiiWads、CustomizeMii、libWiiSharp、patchios、nusfilegrabber等等。尽管他最近不活跃，但他的应用今天仍然被高度使用...高质量的工作永远不会过时。我也要感谢RetroHead对ShowMiiWads的Mod，ModMii用它来构建模拟nand，不需要用户任何输入。libWiiSharp.dll基于wii.py，wii.py的开发者是Megazig、Omega、Xuzz、SquidMan、Matt_P和The Lemon Man。也感谢Daeken编写Struct.py和marcan编写LZ77代码。

- **scooby74029**
  scooby74029最出名的是sneeky compiler，它能够构建多个不同版本的s\uneek。ModMii将始终构建他在sneeky compiler google代码页面上可用的最新版本的s\uneek。这意味着他完全控制ModMii将构建哪个版本的s\uneek。他还修改了Leathl的libWiiSharp.dll和patchios.exe，进一步支持ModMii。此外，他修改了其他应用，如Any Region Changer ModMii Edition、JoyFlow、JoyLoader GX、JoyLoader CFG等。最重要的是，他是一个非常棒的人，我很自豪能成为他的朋友，很高兴在这。感谢和我交换一点批处理编码知识。很高兴有一个同好的批处理编码朋友；我们是濒危物种，所以继续保持伟大的工作，Universal Forwarder Creator和你所有的其他项目。

- **person66**
  person66参与了许多项目，但最值得注意的是他的sharpii cmd line工具和他的Universal Forwarder Creator。他还写了autoit脚本的初始版本，用于启动ModMii，带有图标、参数和其他有用功能。感谢和我交换一点批处理编码知识。很高兴有一个同好的批处理编码朋友；我们是濒危物种，所以继续保持伟大的工作，Universal Forwarder Creator和你所有的其他项目。

- **WiiPower and shoutplenty**
  WiiPower创造了Neogamma，这绝对是最好的Wii备份光盘加载器。他还为许多其他流行的usb加载器贡献了代码，并帮助为d2x cIOS添加了IOS重新加载支持。此外，他修改了WiiGators cMIOS，后来shoutplenty进一步修改它以包含Swiss，今天它被认为是终极cMIOS。

- **OverjoY and obcd**
  OverjoY创建了JoyFlow，这是WiiFlow的一个修改版本，运行在s\uneek。然后他和obcd合作完成了一些非常惊人的事情，比如构建他们的s\uneek修改版本NEEK2O，允许它加载wbfs格式的游戏，并从多个模拟NAND中进行选择。

- **Maeson and NoobletCheese**
  感谢你们对视频滤镜的深入研究，让Deflicker视频滤镜mod正常工作！

- **CrafterPika**
  感谢开发和托管更新的服务器来保存SysCheck报告上传。

- **Arikado and the Dop-Mii Team**
  他们创造了Dop-Mii；很多应用都借用了Dop-Mii的代码，所以即使你从未使用过Dop-Mii但使用过MMM或WiiMod，你也要感谢这些人。

- **DarkMatterCore**
  感谢他在wad2bin、Yet Another BlueDump MOD、ww-43db-patcher以及ModMii开发和测试discord中的工作。

- **WiiWu**
  他制作了Multi-Mod Manager (MMM)，它将许多不同的Wii改装工具功能整合到一个用户友好的应用中。

- **WB3000 and WiiNinja**
  感谢WB3000创建NUS Downloader，WiiNinja制作cmd行版本的NUS Downloader。NUS Downloader一直是ModMii重要的支持应用。

- **TheShadowEevee**
  TheShadowEevee帮助更新了许多工具使用新的NUS端点。他还帮助对Any Region Changer ModMii Edition实现了一些修复和改进。

- **WiiCrazy**
  WiiCrazy最出名的是"Wii Game Shortcut Creator"（以前叫"Crap"），Crazy Intro和Crazy Intro Video。他还通过绕过某些游戏特定安全对usb加载器做出了贡献。WiiCrazy是另一个总是愿意尽一切可能帮助我或其他任何人的人。

- **oggzee, usptactical, gannon and Dr.Clipper**
  以上这些人一起组成了Configurable USB Loader团队。以前，这个usb加载器总是第一个添加新功能，在我看来，它是前三好的usb加载器之一。

- **Cyan, dimok, blackb0x and the USBLoaderGX team**
  感谢他们在USBLoaderGX上的工作。它是功能最丰富的usb加载器之一，很快成为社区的最爱。我还要特别感谢Cyan，多年来他在gbatemp上一直为用户提供出色的支持，他可能比我解释IOS的次数还多！

- **OverjoY, blackb0x, Peter0x44, scooby74029 and thepikachugamer**
  这个梦之队开发者实现了我的愿景，他们创造了YAWM ModMii Edition。

- **Hibernatus, Fledge68 and the WiiFlow team**
  感谢他们在WiiFlow上的工作。它一直很漂亮，但现在它有各种各样的功能，你应该去看看。

- **Wiimm**
  感谢Wiimm创建了Wiimmfi和Wiimms ISO Tools，包括ModMii用来转换Wii游戏为s/uneek格式，构建转发器ISO，并启用/禁用Deflicker视频滤镜。

- **Leseratte**
  感谢他在Wiimmfi以及d2xl和其他惊人项目上的工作。

- **diddy81 and the Wii Theme Team**
  Wii主题团队创造了一些Wii史上最好的主题！ModMii中的所有替代主题都是他们创造的。我要特别感谢diddy81，他和我一起工作，确保他所有的主题都能在所有地区正常工作。

- **FIX94, Narolez and the WiiXplorer Team**
  感谢所有人对最好的SD/USB转发器的贡献。我要特别感谢FIX94，他不仅在Nintendont、Some YAWMM Mod、WiiFlow和几乎所有其他大型Wii应用上工作，他还花了很多时间测试ModMii的Forwarder Builder。

- **jskyboo**
  感谢jskyboo创建WiiMod。他的应用可以做很多不同的事情，它是第一个启用ahbprot的WAD管理器，包含davebaol的ahbprot bug修复。

- **ModMii的翻译者**
  翻译ModMii是一项巨大的工作。让特殊字符在cmd窗口中正确显示非常具有挑战性，更不用说保持一切正确格式正确了。但也许最困难的部分是跟上更新。如果你使用翻译版本的ModMii，我鼓励你感谢你的翻译，因为这真的是很多工作。

  法语翻译：mamule, xav91 and ketufe  
  荷兰语翻译：Hielkenator  
  意大利语翻译：Wasabi, Step and Robilyn  
  西班牙语翻译：ledebene and Burton  
  韩语翻译：DDinghoya

- **Fig2k4**
  感谢WiiBackupManager。很高兴能帮你beta测试，分享我的想法，希望能在论坛上再次看到你。

- **Gabubu, sthetix, Foxlet, Alexander1970, Vila and Aep**
  感谢你们录制、编辑或升像素放大部分ModMii使用的YouTube视频。特别感谢Gabubu，他独自一人在7.0.0更新中创建了所有新/更新视频，并为一堆ModMii的Wii频道更新了GFX。

- **WiiShizzza, pepxl, RobGee789, M3RK, AuroraNemoia and emilydaemon**
  感谢WiiShizzza创建了ModMii的新图标，pepxl创建了ModMii的原始图标。我要感谢每个人创建ModMii图标并提交到[ModMii的新图标竞赛](https://gbatemp.net/threads/new-modmii-icon-logo-candidates.296772/)。

  RobGee789和M3RK制作了ModMii Skin的原始图形。AuroraNemoia制作了ModMii Skin的新（2022）[默认\Nebula主题](https://github.com/modmii/modmii.github.io/tree/master/Support/Skins/Default)。和他们合作很愉快，他们都对反馈非常开放，愿意重新开始，直到完美。谢谢大家！

  emilydaemon制作了ModMii的WiiU\Aroma启动屏幕，并且维护[Wilbrand Web网站](https://wilbrand.donut.eu.org/)。

- **dhtdht020, Gabubu, Artuto and the Open Shop Channel team**
  感谢维护oscwii.org！特别感谢dhtdht020在2022年刷新了ModMii图标；现在我有一堆彩虹图标可以选择，万一需要。

- **vgmoose, pwsincd, Nightkingale, Gabubu and the Homebrew App Store team**
  感谢维护hb-app.store和所有其他项目你们贡献！

- **My Fellow Guide Writers**
  感谢tj_cool, xzxero, burritoboy9984, ChokeD, mauifrog, playerjmr, Ingunar和Wii\WiiU hacks指南团队提供了很棒的指南。我要特别感谢tj_cool和xzxero邀请我加入"The Crew"加入Complete Softmod Guide。我永远不会忘记，作为一个相对新手进入这个领域，被邀请和你们每个人作为平等一员加入，这种感觉真好。

- **DaMysteryMan**
  感谢帮助我理解cIOS的结构，这样我就能更好地在WAD中重新创建它。

- **Gannon**
  感谢bootopera，我能够修改它来创建URL加载器基础dol。

- **Devnol**
  感谢正确修改Open HBC使用与官方HBC相同的标题ID (LULZ)。

- **ca032769 and Al_Touriste**
  感谢他们关于如何在Wii上将大于2TB的硬盘用作单个FAT32分区教程。

- **All My Beta Testers!**
  都是因为你们，ModMii才如此稳定。考虑到ModMii完全是在记事本中开发的，没有任何调试器或开发者工具；ModMii几乎一直没有bug（只有几个小例外），这非常了不起。感谢你们对ModMii的不懈投入，对质量控制！

这是一些ModMii beta测试者的列表（无序）：scooby74029, DeadlyFoez, redia, Etheboss, JoostinOnline, person66, brausm08, geovalley, undeadsquirrel, mauifrog, FIX94, wolf, Larsenv, Peter0x44, Alexander1970, Cyan, Damaj301damaj, Function, forseenink, jeannotte, saulfabreg, Vila, ca032769, godreborn, KleinesSinchen, RunningSnakes, Scooty, bibarub, Aep, Isla, beta215, Binsky, CoolMe, forseenink, Maeson, grandosegood, and last but certainly not least, Denver Gamer and Clutz450. @Clutz450 and Denver Gamer，你们很棒，我真的很喜欢讨论ModMii教程视频和你的想法，关于让ModMii变得更好的小方法。

- **你！**
  如果没有你，ModMii就不会存在。感谢你使用ModMii满足你所有的Wii\WiiU软改需求！

</details>

## 支持ModMii
============

ModMii早在2010年就是一个小副业，一开始只是一个简单的NUS自动下载脚本，现在更新日志比我还高！我20多岁开始在业余时间做这个项目，从那以后我结了婚，有了四个孩子，每个都相差大约两岁。我喜欢和他们以及你们所有人分享我对游戏和Wii的热爱。这是一个充满激情的项目，仅我一个人就轻松花了9000-10000小时，这不包括无数开发者和测试者花的时间。

说实话，除了一些excel技巧我对电脑了解不多，我慢慢地在我原来低效代码上构建更高级的功能，如果不是那么令人望而却步，我真想重写它。在整个旅程中，我从鸣谢列表中的那些人，以及整个令人难以置信的Wii社区中学到了很多。我从一个只是我家人的"数字哥"变成了现在的位置，这个项目、社区和粉丝们都要感谢我。

ModMii完全免费使用，没有广告。作者可以选择通过下方按钮捐赠，或者从鸣谢中选择你喜欢的贡献者并查看他们的捐赠页面。

<p style="text-align:center">
<a href="https://modmii.github.io/donations.html" target="_blank"><img src="https://modmii.github.io/Images/donate.png" height="95" width="109" border="0"></a></p>

如果你像我一样，很难通过捐赠表示支持，你可以花一分钟在[gbatemp上ModMii官方支持帖](https://gbatemp.net/threads/modmii-for-windows-official-support-topic.207126/)投票或分享你的反馈，我总是很高兴听到你使用ModMii的体验。

<br>

<img src="https://modmii.github.io/Images/FN2187.gif" alt="XFlak" height="95" width="94"><br>
- XFlak