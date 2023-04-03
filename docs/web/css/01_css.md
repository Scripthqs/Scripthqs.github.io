# CSS 简介

## CSS 是什么

CSS (Cascading Style Sheets) 层叠样式表，网页实际上是一个多层结构，通过 CSS 可以将网页的每一层来设置样式，最终我们只能看到网页的最上面一层。

- CSS 的属性语法：`属性：属性值;` 多个属性之间用`;`隔开，多个属性值用``或者`,`隔开，根据具体情况。
- HTML 的属性语法：`属性="属性值"` 多个属性之间用**空格**隔开

## CSS 修改样式的方法

1. 内联样式（行内样式）：在标签内部通过`style`属性来设置元素的样式。样式只对一个标签生效，维护不方便。
2. 内部样式表：将样式写到`head`中的`style`标签中，通过 CSS 选择器选中元素并为其设置样式，但是只能对当前页面起作用。
3. 外部样式表：创建一个`.css`文件，再通过`<link ref="stylesheet" href=".css">`引入样式。将样式编写到外部的 css 中可以使用浏览器的缓存机制，从而加快网页的加载速度。开发中都用这种方法。
4. @import 导入的方式，@import 导入的 css 开始不会被加载 只有在引用到他的时候浏览器才会下载去加载

```css
/*行内样式*/
<p style="color:red;">段落</p>
/*内部样式表*/
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>
/*外部样式表*/
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
/*@import 引入*/
<style>
 @import url("css/styles.css");
</style>
```

优先级：行内样式 > 内嵌样式 > 外部样式 > 导入样式

## CSS 基本语法

CSS 有**选择器**和**声明块**。选择器可以选中页面中的指定元素，声明块中通过一个个声明组成，声明也是一个名值对。

## CSS 注释

```css
/*我是css注释*/
/*
分为
几行
的
注释
*/
```