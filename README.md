# 安装

1. 安装 [VS Code](https://code.visualstudio.com/Download)
1. 安装 [Prince](https://www.princexml.com/download/)
1. 安装 [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced#:~:text=Markdown%20Preview%20Enhanced%20is%20an%20extension%20that%20provides,inspired%20by%20Markdown%20Preview%20Plus%20and%20RStudio%20Markdown.) 插件
1. 修改主题
   1. 替换 style.less 文件，可以参考这个 [链接](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/customize-css)。
1. 重启软件

> 推荐安装 [night-owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl) 主题。
>
> 更改 VS Code 的语言和其他可能用的到的插件。
>
> + [中文包](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)
> + [Markdown 语法检查](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

## 预览

<div class="col2">

> ##### 屏显预览
>
>> ![shadow](./Snipaste_2022-05-01_15-03-49.png)

> ##### 打印预览
>
>> ![shadow](./Snipaste_2022-05-01_15-56-37.png)

</div>

> ⚠️请注意：本主题并未针对 图片 的导出做任何优化。

## 更新

+ 2022.05.02
  - 调整了**代码**的字体显示不正常的问题。将代码的中文字体更改为**楷体**。
  - 修复了不显示页眉页脚的问题 <span class="fn">⚠️注意：当您发现无法正常显示页眉页脚时，请查看`@page:left`和`@page:right`中间是否有**空格**。如果存在空格，请用文本编辑器将其清除后，再重新生成 pdf。</span>。
+ 2022.05.03
  - 图片可以浮动于文字周围
  - 标题可以自动编号（二级到四级标题）

## 字体

默认使用了如下字体：

+ 英文字体
  + Avenir Next
  + Latin Modern Roman
  + Latin Modern Mono
+ 中文字体
  + Source Han Sans SC
  + Source Han Serif SC
  + 江城圆体
  + TH-Khaai-PP0
  + HYFangSongS
  + FZLiBian-S02
+ 日文字体
  + Kozuka Gothic Pr6N
  + Kozuka Mincho Pr6N
  + A-OTF Kyoukasho ICA Pro
  + A-OTF Jomin Std
  + A-OTF Likurei Std

> 可以通过这个链接 [font](https://www.aliyundrive.com/s/YZ7YJkxGgmk) 下载所需字体。大概有 290M。
>
> 阿里云盘目前并不不支持分享 ttf 格式的思源字体。但可以通过这个链接下载 (otc 格式，Windows 系统可能无法使用。也可自行搜索下载。)：[思源黑体](https://mirrors.tuna.tsinghua.edu.cn/adobe-fonts/source-han-sans/OTC/),[思源宋体](https://mirrors.tuna.tsinghua.edu.cn/adobe-fonts/source-han-serif/OTC/)。
>
> ⚠️ 上述字体不下载也可以正常显示，此时会调用系统的宋体和黑体来显示。其他的如：楷体、仿宋、隶书、圆体等都会显示为宋体或黑体。

## 特殊用法

> [Markdown Preview Enhanced 插件使用说明](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)

### 字体调整

使用部分 html 标签可以达到特殊效果。如：修改字体、颜色等。具体见 [其他说明](#其他说明)

> 当然，也可以使用 Latex 语法来更改字体样式。例如：
>
> + $\color{blue}{RED}$
> + $\huge{SMALL}$
> + $\small\color{red}{HUGE}$

### 添加水印

找到 style.less 文件，修改下方的`商无辛`为自己想要的水印即可。`color`、`font-size`等也可以按照需要修改。

```css{.line-numbers}
@prince-overlay {
    color: rgba(0, 0, 0, 0.015);
    content: "商无辛";
    font-size: 10pt;
    font-family: var(--font-hei-cn);
    vertical-align: top;
}
```

### 调整图片样式

+ ![shadow](图片地址，添加 shadow 可以增加阴影)
+ ![center](图片地址，添加 center 可以居中图片)
+ ![50%](图片地址，调整 百分比 可以更改大小。默认的包括：25%，50%，75%，85%，95%)

#### 图片环绕文字

如果想要让图片浮动于文字的左右侧，可以添加`left`或者`right`来实现。请注意，在使用浮动时，请同时调整图片大小。另外，也可以通过主动添加多个换行`<br />`来实现某些效果。例如：

![shadow 25% left](./Snipaste_2022-05-01_15-56-37.png)

这是一段测试文字。道可道也 [^①]，非恒道也 [^②]。名可名也 [^③]，非恒名也。无名 [^④]，万物之始也；有名 [^⑤]，万物之母也 [^⑥]。故恒无欲也 [^⑦]，以观其眇 [^⑧]；恒有欲也，以观其所徼 [^⑨]。两者同出，异名同谓 [^⑩]。玄之又玄 [^⑾]，众眇之门 [^⑿]。<br /><br />

![shadow 25% right](./Snipaste_2022-05-01_15-56-37.png)

这是一段测试文字。道可道也 [^①]，非恒道也 [^②]。名可名也 [^③]，非恒名也。无名 [^④]，万物之始也；有名 [^⑤]，万物之母也 [^⑥]。故恒无欲也 [^⑦]，以观其眇 [^⑧]；恒有欲也，以观其所徼 [^⑨]。两者同出，异名同谓 [^⑩]。玄之又玄 [^⑾]，众眇之门 [^⑿]。

### 页面调整

1. 调整页面大小。找到这行代码，按照需要修改即可。

    ```css{.line-numbers}
    //通过 size 来控制打印大小，可选值为任意的尺寸组合或者固定的页面尺寸。例如，size:8in 11in(width*height);size:a4 landscape;size:a4 portrait
    ```

1. 调整页眉页脚。修改第 1139 行到 1193 行的代码即可。（以`@page:right`和`@page:left`开头）
1. 调整脚注。找到`.fn {`并修改其中的代码即可。
1. 为适合打印输出，默认设置所有的一级标题前都会有换页符，即在新的一页上重新开始，且全部居于**左侧**。如果想的话，可以删去 `h1`下的这段代码：`break-before: right`。

# 第一章

+ [出处](https://www.daodejing.org/1.html)

## 原文

> 道可道也 [^①]，非恒道也 [^②]。名可名也 [^③]，非恒名也。无名 [^④]，万物之始也；有名 [^⑤]，万物之母也 [^⑥]。故恒无欲也 [^⑦]，以观其眇 [^⑧]；恒有欲也，以观其所徼 [^⑨]。两者同出，异名同谓 [^⑩]。玄之又玄 [^⑾]，众眇之门 [^⑿]。

## 译文

**道**如果可以用言语来表述，那它就是常**道** (**道**是可以用言语来表述的，它并非一般的**道**)；<u>名</u>如果可以用文辞去命名，那它就是常<u>名</u>(<u>名</u>也是可以说明的，它并非普通的<u>名</u>)。`无`可以用来表述天地浑沌未开之际的状况；而==有==，则是宇宙万物产生之本原的命名。因此，要常从`无`中去观察领悟**道**的奥妙；要常从==有==中去观察体会**道**的端倪。无与有这两者，来源相同而名称相异，都可以称之为玄妙、深远。它不是一般的玄妙、深奥，而是玄妙又玄妙、深远又深远，是宇宙天地万物之奥妙的总门（从“有名”的奥妙到达无形的奥妙，**道**是洞悉一切奥妙变化的门径）。

## 注释

注意：使用 markdown 的脚注，所有的脚注都将出现在最后。但这个不是<span class="fn">这是使用`<span class="fn"></span>`产生的。</span>。

[^①]: 第一个**道**是名词，指的是宇宙的本原和实质，引申为原理、原则、真理、规律等。第二个**道**是动词。指解说、表述的意思，犹言“说得出”。
[^②]: 恒：一般的，普通的。
[^③]: 第一个<u>名</u>是名词，指**道**的形态。第二个<u>名</u>是动词，说明的意思。
[^④]: 无名：指无形。
[^⑤]: 有名：指有形。
[^⑥]: 母：母体，根源。
[^⑦]: 恒：经常。
[^⑧]: 眇（miao）：通妙，微妙的意思。
[^⑨]: 徼（jiao）：边际、边界。引申端倪的意思。
[^⑩]: 谓：称谓。此为“指称”。
[^⑾]: 玄：深黑色，玄妙深远的含义。
[^⑿]: 门：之门，一切奥妙变化的总门径，此用来比喻宇宙万物的唯一原**道**的门径。

# 其他

## 标题

### 三级标题

#### 四级标题

#### 四级标题 admin

##### 五级标题

###### 六级标题

> 五级标题和六级标题并不推荐使用，因此并未对这两级标题设定不同的样式。但是可以试试在**引用**下使用不同级别的标题。例如：
>
> ##### 这是一个五级标题
>
> ###### 这是一个六级标题

## 列表

+ 无序列表
+ 充分等等
  + 无序列表的递进
  + 仍然会无序列表
    + 充分等等

1. 有序列表
1. 日日日动词
   1. 有序列表下的递进
   1. 顶顶顶方法
      1. 有序列表下的递进
      1. 顶顶顶方法

## 代码

```html
<!-- 这是一段注释 -->
<html>
 <head>
        <titile>this is a html file</titile>
    </head>
    <body>
        <div id="head title">
            <p>
                <span class="para highlight">highlight paragraph</span>
            </p>
             <p>
                <span class="para highlight">高亮段落</span>
            </p>
            <img alt="content" width="520px">
        </div>
    </body>
```

```css{.line-numbers}
html{
    color:white;
    width:2px;
}
```

## 表格

| 左对齐   |   右对齐 | 居中对齐 |
| :------- | -------: | :------: |
| 单元格   |   单元格 |  单元格  |
| 单元格 1 | 单元格 2 | 单元格 3 |

## admontion

!!! info

    测试内容

!!! warning ""

    没有标题的测试内容

!!! warning 标题测试

    有标题的测试内内容

# 其他说明 {#其他说明}

1. 如何添加脚注：使用 `<span class="fn"></span>` 包裹脚注内容即可。
1. 如何快速分页：使用 `<hr class="pb">`。
1. 如何大面积使用楷体：`<div class="intro"></div>`。
1. 添加标签：<kbd>kbd 臣本布衣</kbd>
1. 修改字体：
   1. 中文<tt>tt 臣本布衣あいうえお</tt>
   1. 日文<em><tt>tt 臣本布衣あいうえお</tt></em>
   1. 中文<samp>samp 臣本布衣</samp>
   1. 日文<em><samp>samp 臣本布衣</samp></em>
   1. <ruby>ruby 臣本布衣<ruby>
1. 其他的具有语义的标签：

    + <ins>ins 臣本布衣，用于公式</ins>
    + <var>var 臣本布衣，用于警示</var>
    + <dfn>dfn 臣本布衣，用于例题</dfn>
