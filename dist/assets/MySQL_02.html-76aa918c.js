import{_ as a,o as s,c as n,f as e}from"./app-dcac65c0.js";const l={},p=e('<h1 id="sql-语句" tabindex="-1"><a class="header-anchor" href="#sql-语句" aria-hidden="true">#</a> SQL 语句</h1><p>SQL 语句是数据库沟通的语言，用来操作数据库，特别是在代码中操作</p><ul><li>SQL 是 Structured Query Language，称之为结构化查询语言，简称 SQL</li><li>使用 SQL 编写出来的语句，就称之为 SQL 语句，以用于对数据库进行操作</li></ul><p>SQL 语句的常用规范：</p><ul><li>通常关键字使用大写的，比如 CREATE、TABLE、SHOW 等等</li><li>一条语句结束后，需要以 ; 结尾</li><li>如果遇到关键字作为表明或者字段名称，可以使用``包裹</li></ul><h2 id="sql-语句的分类" tabindex="-1"><a class="header-anchor" href="#sql-语句的分类" aria-hidden="true">#</a> SQL 语句的分类</h2><p>常见的 SQL 语句可以分成四类：</p><ul><li>DDL（Data Definition Language）：数据定义语言，创建、删除、修改等操作</li><li>DML（Data Manipulation Language）：数据操作语言，添加、删除、修改等操作</li><li>DQL（Data Query Language）：数据查询语言，从数据库中查询记录(重点)</li><li>DCL（Data Control Language）：数据控制语言，对数据库、表格的权限进行相关访问控制操作</li></ul><h2 id="sql-操作数据库" tabindex="-1"><a class="header-anchor" href="#sql-操作数据库" aria-hidden="true">#</a> SQL 操作数据库</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 对数据库进行操作:</span>\n<span class="token comment"># 1.查看当前所有的数据库</span>\nSHOW DATABASES<span class="token punctuation">;</span>\n\n<span class="token comment"># 2.使用某一个数据库</span>\nUSE test_db<span class="token punctuation">;</span>\n\n<span class="token comment"># 3.查看目前哪一个数据是选中(正在使用的数据)</span>\nSELECT DATABASE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment"># 4.创建一个新的数据库</span>\n<span class="token comment"># CREATE DATABASE test_db;</span>\nCREATE DATABASE IF NOT EXISTS test_db<span class="token punctuation">;</span>\n\n<span class="token comment"># 5.删除某一个数据库</span>\nDROP DATABASE IF EXISTS test_db<span class="token punctuation">;</span>\n\n<span class="token comment"># 6.修改数据库(了解)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql-数据类型" tabindex="-1"><a class="header-anchor" href="#sql-数据类型" aria-hidden="true">#</a> SQL 数据类型</h2><p>在数据库中有不同的数据类型，MySQL 支持的数据类型有：数字类型，日期和时间类型，字符串（字符和字节）类型，空间类型和 JSON 数据类型(这种类型建议新建表)。</p><h3 id="数字类型" tabindex="-1"><a class="header-anchor" href="#数字类型" aria-hidden="true">#</a> 数字类型</h3><p>最常用有 INT 和 DOUBLE 类型</p><ul><li>整数数组类型：INTEGER、INT、BIGINT 等等</li><li>浮点数字类型：FLOAT(4 个字节)、DOUBLE(8 个字节)</li><li>精确数字类型：DECIMAL、NUMERIC</li></ul><h3 id="日期类型" tabindex="-1"><a class="header-anchor" href="#日期类型" aria-hidden="true">#</a> 日期类型</h3><p>最常用的有：DATE 和 TIMESTAMP</p><ul><li>YEAR 以 YYYY 格式显示值</li><li>DATE 类型用于具有日期部分但没有时间部分的值</li><li>DATETIME 类型用于包含日期和时间部分的值(比下面这个宽松一点)</li><li>TIMESTAMP 数据类型被用于同时包含日期和时间部分的值(对时间有一定限制)</li></ul><h3 id="字符串类型" tabindex="-1"><a class="header-anchor" href="#字符串类型" aria-hidden="true">#</a> 字符串类型</h3><p>最常用的是 VARCHAR，VARCHAR 被查询不会删除后面的空格，CHAR 被查询时会删除后面空格</p><ul><li>CHAR 类型在创建表时为固定长度，长度可以是 0 到 255 之间的任何值</li><li>VARCHAR 类型的值是可变长度的字符串，长度可以指定为 0 到 65535 之间的值</li><li>BINARY 和 VARBINARY 类型用于存储二进制字符串，存储的是字节字符串</li><li>BLOB 用于存储大的二进制类型</li><li>TEXT 用于存储大的字符串类型</li></ul><h2 id="表约束" tabindex="-1"><a class="header-anchor" href="#表约束" aria-hidden="true">#</a> 表约束</h2><h3 id="主键-primary-key" tabindex="-1"><a class="header-anchor" href="#主键-primary-key" aria-hidden="true">#</a> 主键 PRIMARY KEY</h3><p>一张表中，为了区分每一条记录的唯一性，必须有一个字段是永远不会重复，并且不会为空的，这个字段我们通常会将它设 置为主键(PRIMARY KEY)</p><ul><li>主键是表中唯一的索引</li><li>并且必须是 NOT NULL 的，如果没有设置 NOT NULL，那么 MySQL 也会隐式的设置为 NOT NULL</li><li>主键也可以是多列索引，PRIMARY KEY(key_part, ...)，一般称之为联合主键</li><li>建议：开发中主键字段应该是和业务无关的，尽量不要使用业务字段来作为主键</li></ul><h3 id="唯一-unique" tabindex="-1"><a class="header-anchor" href="#唯一-unique" aria-hidden="true">#</a> 唯一 UNIQUE</h3><p>某些字段在开发中希望是唯一的，不会重复的，比如手机号码、身份证号码等，这个字段我们可以使用 UNIQUE 来约束</p><ul><li>使用 UNIQUE 约束的字段在表中必须是不同的</li><li>UNIQUE 索引允许 NULL 包含的列具有多个值 NULL</li></ul><h3 id="不能为空-not-null" tabindex="-1"><a class="header-anchor" href="#不能为空-not-null" aria-hidden="true">#</a> 不能为空 NOT NULL</h3><p>某些字段要求用户必须插入值，不可以为空，这个时候可以使用 NOT NULL 来约束</p><h3 id="默认值-default" tabindex="-1"><a class="header-anchor" href="#默认值-default" aria-hidden="true">#</a> 默认值 DEFAULT</h3><p>某些字段希望在没有设置值时给予一个默认值，这个时候可以使用 DEFAULT 来完成；</p><h3 id="自动递增-auto-increment" tabindex="-1"><a class="header-anchor" href="#自动递增-auto-increment" aria-hidden="true">#</a> 自动递增 AUTO_INCREMENT</h3><p>某些字段希望不设置值时可以进行递增，比如用户的 id，这个时候可以使用 AUTO_INCREMENT 来完成</p><h3 id="外键约束" tabindex="-1"><a class="header-anchor" href="#外键约束" aria-hidden="true">#</a> 外键约束</h3><p>外键约束也是最常用的一种约束手段，一般用于多表关系</p><h2 id="ddl-操作数据表" tabindex="-1"><a class="header-anchor" href="#ddl-操作数据表" aria-hidden="true">#</a> DDL 操作数据表</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CREATE TABLE IF NOT EXISTS <span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">test</span><span class="token variable">`</span></span><span class="token punctuation">(</span>\n  name VARCHAR<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>,\n  age INT,\n  height DOUBLE\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment"># 查看所有的数据表</span>\nSHOW TABLES<span class="token punctuation">;</span>\n<span class="token comment"># 查看某一个表结构</span>\nDESC user<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ddl-创建表" tabindex="-1"><a class="header-anchor" href="#ddl-创建表" aria-hidden="true">#</a> DDL 创建表</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CREATE TABLE IF NOT EXISTS <span class="token variable"><span class="token variable">`</span><span class="token function">users</span><span class="token variable">`</span></span><span class="token punctuation">(</span>\n  <span class="token function">id</span> INT PRIMARY KEY AUTO_INCREMENT,\n  name VARCHAR<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> NOT NULL,\n  age INT DEFAULT <span class="token number">0</span>,\n  phone VARCHAR<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> DEFAULT <span class="token string">&#39;&#39;</span> UNIQUE NOT NULL\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ddl-删除表" tabindex="-1"><a class="header-anchor" href="#ddl-删除表" aria-hidden="true">#</a> DDL 删除表</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DROP TABLE <span class="token function">users</span><span class="token punctuation">;</span>\nDROP TABLE IF EXISTS <span class="token function">users</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ddl-修改表" tabindex="-1"><a class="header-anchor" href="#ddl-修改表" aria-hidden="true">#</a> DDL 修改表</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.修改表名</span>\nALTER TABLE <span class="token variable"><span class="token variable">`</span>moments<span class="token variable">`</span></span> RENAME TO <span class="token variable"><span class="token variable">`</span>moment<span class="token variable">`</span></span><span class="token punctuation">;</span>\n<span class="token comment"># 2.添加一个新的列</span>\nALTER TABLE <span class="token variable"><span class="token variable">`</span>moment<span class="token variable">`</span></span> ADD <span class="token variable"><span class="token variable">`</span>publishTime<span class="token variable">`</span></span> DATETIME<span class="token punctuation">;</span>\nALTER TABLE <span class="token variable"><span class="token variable">`</span>moment<span class="token variable">`</span></span> ADD <span class="token variable"><span class="token variable">`</span>updateTime<span class="token variable">`</span></span> DATETIME<span class="token punctuation">;</span>\n<span class="token comment"># 3.删除一列数据</span>\nALTER TABLE <span class="token variable"><span class="token variable">`</span>moment<span class="token variable">`</span></span> DROP <span class="token variable"><span class="token variable">`</span>updateTime<span class="token variable">`</span></span><span class="token punctuation">;</span>\n<span class="token comment"># 4.修改列的名称</span>\nALTER TABLE <span class="token variable"><span class="token variable">`</span>moment<span class="token variable">`</span></span> CHANGE <span class="token variable"><span class="token variable">`</span>publishTime<span class="token variable">`</span></span> <span class="token variable"><span class="token variable">`</span>publishDate<span class="token variable">`</span></span> DATE<span class="token punctuation">;</span>\n<span class="token comment"># 5.修改列的数据类型</span>\nALTER TABLE <span class="token variable"><span class="token variable">`</span>moment<span class="token variable">`</span></span> MODIFY <span class="token variable"><span class="token variable">`</span><span class="token function">id</span><span class="token variable">`</span></span> INT<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dml-操作数据表" tabindex="-1"><a class="header-anchor" href="#dml-操作数据表" aria-hidden="true">#</a> DML 操作数据表</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一张新的表</span>\nCREATE TABLE IF NOT EXISTS <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span><span class="token punctuation">(</span>\n    <span class="token variable"><span class="token variable">`</span><span class="token function">id</span><span class="token variable">`</span></span> INT PRIMARY KEY AUTO_INCREMENT,\n    <span class="token variable"><span class="token variable">`</span>title<span class="token variable">`</span></span> VARCHAR<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>,\n    <span class="token variable"><span class="token variable">`</span>description<span class="token variable">`</span></span> VARCHAR<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>,\n    <span class="token variable"><span class="token variable">`</span>price<span class="token variable">`</span></span> DOUBLE,\n    <span class="token variable"><span class="token variable">`</span>publishTime<span class="token variable">`</span></span> DATETIME\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment"># 插入数据</span>\n<span class="token comment"># INSERT INTO `products` (字段名称) VALUES (值);</span>\nINSERT INTO <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> <span class="token punctuation">(</span><span class="token variable"><span class="token variable">`</span>title<span class="token variable">`</span></span>, <span class="token variable"><span class="token variable">`</span>description<span class="token variable">`</span></span>, <span class="token variable"><span class="token variable">`</span>price<span class="token variable">`</span></span>, <span class="token variable"><span class="token variable">`</span>publishTime<span class="token variable">`</span></span><span class="token punctuation">)</span>\nVALUES <span class="token punctuation">(</span><span class="token string">&#39;iPhone&#39;</span>, <span class="token string">&#39;iPhone12只要998&#39;</span>, <span class="token number">998.88</span>, <span class="token string">&#39;2020-10-10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nINSERT INTO <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> <span class="token punctuation">(</span><span class="token variable"><span class="token variable">`</span>title<span class="token variable">`</span></span>, <span class="token variable"><span class="token variable">`</span>description<span class="token variable">`</span></span>, <span class="token variable"><span class="token variable">`</span>price<span class="token variable">`</span></span>, <span class="token variable"><span class="token variable">`</span>publishTime<span class="token variable">`</span></span><span class="token punctuation">)</span>\nVALUES <span class="token punctuation">(</span><span class="token string">&#39;huawei&#39;</span>, <span class="token string">&#39;huaweiP40只要888&#39;</span>, <span class="token number">888.88</span>, <span class="token string">&#39;2020-11-11&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment"># 删除数据</span>\n<span class="token comment"># 会删除表中所有的数据(慎用)</span>\nDELETE FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span><span class="token punctuation">;</span>\n<span class="token comment"># 会删除符合条件的数据</span>\nDELETE FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE <span class="token variable"><span class="token variable">`</span>title<span class="token variable">`</span></span> <span class="token operator">=</span> <span class="token string">&#39;iPhone&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment"># 修改数据</span>\n<span class="token comment"># 会修改表中所有的数据</span>\nUPDATE <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> SET <span class="token variable"><span class="token variable">`</span>title<span class="token variable">`</span></span> <span class="token operator">=</span> <span class="token string">&#39;iPhone12&#39;</span>, <span class="token variable"><span class="token variable">`</span>price<span class="token variable">`</span></span> <span class="token operator">=</span> <span class="token number">1299.88</span><span class="token punctuation">;</span>\n<span class="token comment"># 会修改符合条件的数据</span>\nUPDATE <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> SET <span class="token variable"><span class="token variable">`</span>title<span class="token variable">`</span></span> <span class="token operator">=</span> <span class="token string">&#39;iPhone12&#39;</span>, <span class="token variable"><span class="token variable">`</span>price<span class="token variable">`</span></span> <span class="token operator">=</span> <span class="token number">1299.88</span> WHERE <span class="token variable"><span class="token variable">`</span>title<span class="token variable">`</span></span> <span class="token operator">=</span> <span class="token string">&#39;iPhone&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment"># 如果希望修改完数据后，直接可以显示最新的更新时间</span>\nALTER TABLE <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> ADD <span class="token variable"><span class="token variable">`</span>updateTime<span class="token variable">`</span></span> TIMESTAMP\nDEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dql-语句查询数据库" tabindex="-1"><a class="header-anchor" href="#dql-语句查询数据库" aria-hidden="true">#</a> DQL 语句查询数据库</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SELECT select_expr <span class="token punctuation">[</span>, select_expr<span class="token punctuation">]</span><span class="token punctuation">..</span>.\n    <span class="token punctuation">[</span>FROM table_references<span class="token punctuation">]</span>\n    <span class="token punctuation">[</span>WHERE where_condition<span class="token punctuation">]</span>\n    <span class="token punctuation">[</span>ORDER BY <span class="token function">expr</span> <span class="token punctuation">[</span>ASC <span class="token operator">|</span> DESC<span class="token punctuation">]</span><span class="token punctuation">]</span>\n    <span class="token punctuation">[</span>LIMIT <span class="token punctuation">{</span><span class="token punctuation">[</span>offset,<span class="token punctuation">]</span> row_count <span class="token operator">|</span> row_count OFFSET offset<span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">[</span>GROUP BY expr<span class="token punctuation">]</span>\n    <span class="token punctuation">[</span>HAVING where_condition<span class="token punctuation">]</span>\n\n<span class="token comment"># 创建一个表，并添加一些字段</span>\nCREATE TABLE IF NOT EXISTS <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> <span class="token punctuation">(</span>\n    <span class="token function">id</span> INT PRIMARY KEY AUTO_INCREMENT,\n    brand VARCHAR<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>,\n    title VARCHAR<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> NOT NULL,\n    price DOUBLE NOT NULL,\n    score DECIMAL<span class="token punctuation">(</span><span class="token number">2,1</span><span class="token punctuation">)</span>,\n    voteCnt INT,\n    url VARCHAR<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>,\n    pid INT\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本查询" tabindex="-1"><a class="header-anchor" href="#基本查询" aria-hidden="true">#</a> 基本查询</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询所有的数据并且显示所有的字段</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span><span class="token punctuation">;</span>\n<span class="token comment"># 查询title、brand、price</span>\nSELECT title, brand, price FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span><span class="token punctuation">;</span>\n<span class="token comment"># 给字段起别名，别名一般在多张表或者给客户端返回对应的key时会使用到</span>\nSELECT title as t, brand as b, price as p FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h3><ul><li>条件查询会使用 WHERE 查询子句</li><li>逻辑条件 &amp;&amp;,||,BETWEEN,AND,OR,IN</li><li>模糊查询 LIKE 关键字结合<code>%</code>和<code>_</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 简单条件查询</span>\n<span class="token comment"># 查询价格小于1000的手机</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE price <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span>\n<span class="token comment"># 查询价格大于等于2000的手机</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE price <span class="token operator">&gt;=</span> <span class="token number">2000</span><span class="token punctuation">;</span>\n<span class="token comment"># 价格等于3399的手机</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE price <span class="token operator">=</span> <span class="token number">3399</span><span class="token punctuation">;</span>\n<span class="token comment"># 价格不等于3399的手机</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE price <span class="token operator">!=</span> <span class="token number">3399</span><span class="token punctuation">;</span>\n<span class="token comment"># 查询华为品牌的手机</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE <span class="token variable"><span class="token variable">`</span>brand<span class="token variable">`</span></span> <span class="token operator">=</span> <span class="token string">&#39;华为&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment"># 逻辑条件 &amp;&amp;,||,BETWEEN,AND,OR,IN</span>\n<span class="token comment"># 查询品牌是华为，并且小于2000元的手机</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE <span class="token variable"><span class="token variable">`</span>brand<span class="token variable">`</span></span> <span class="token operator">=</span> <span class="token string">&#39;华为&#39;</span> AND <span class="token variable"><span class="token variable">`</span>price<span class="token variable">`</span></span> <span class="token operator">&lt;</span> <span class="token number">2000</span><span class="token punctuation">;</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE <span class="token variable"><span class="token variable">`</span>brand<span class="token variable">`</span></span> <span class="token operator">=</span> <span class="token string">&#39;华为&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token variable"><span class="token variable">`</span>price<span class="token variable">`</span></span> <span class="token operator">&lt;</span> <span class="token number">2000</span><span class="token punctuation">;</span>\n<span class="token comment"># 查询1000到2000的手机（不包含1000和2000）</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE price <span class="token operator">&gt;</span> <span class="token number">1000</span> AND price <span class="token operator">&lt;</span> <span class="token number">2000</span><span class="token punctuation">;</span>\n<span class="token comment"># OR: 符合一个条件即可</span>\n<span class="token comment"># 查询所有的华为手机或者价格小于1000的手机</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE brand <span class="token operator">=</span> <span class="token string">&#39;华为&#39;</span> OR price <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE brand <span class="token operator">=</span> <span class="token string">&#39;华为&#39;</span> <span class="token operator">||</span> price <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span>\n<span class="token comment"># 查询1000到2000的手机（包含1000和2000）</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE price BETWEEN <span class="token number">1000</span> AND <span class="token number">2000</span><span class="token punctuation">;</span>\n<span class="token comment"># 查看多个结果中的一个</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE brand IN <span class="token punctuation">(</span><span class="token string">&#39;华为&#39;</span>, <span class="token string">&#39;小米&#39;</span><span class="token punctuation">)</span>\n\n<span class="token comment"># 模糊条件查询</span>\n<span class="token comment"># 模糊查询使用LIKE关键字，结合两个特殊的符号：</span>\n<span class="token comment"># %表示匹配任意个的任意字符</span>\n<span class="token comment"># _表示匹配一个的任意字符</span>\n<span class="token comment"># 查询所有以v开头的title</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE title LIKE <span class="token string">&#39;v%&#39;</span><span class="token punctuation">;</span>\n<span class="token comment"># 查询带M的title</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE title LIKE <span class="token string">&#39;%M%&#39;</span><span class="token punctuation">;</span>\n<span class="token comment"># 查询带M的title必须是第三个字符</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE title LIKE <span class="token string">&#39;__M%&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询结果排序" tabindex="-1"><a class="header-anchor" href="#查询结果排序" aria-hidden="true">#</a> 查询结果排序</h3><p>将查询到的结果按照某种方式进行排序，这个时候使用的是 ORDER BY 有两个常用的值：</p><ul><li>ASC：升序排列</li><li>DESC：降序排列</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> WHERE brand <span class="token operator">=</span> <span class="token string">&#39;华为&#39;</span> or price <span class="token operator">&lt;</span> <span class="token number">1000</span> ORDER BY price ASC<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h3><p>当数据库中的数据非常多时，不能一次性查询到所有的结果，需要分页查询</p><ul><li>用户传入 offset、limit 或者 page 等字段</li><li>可以在数据库中进行分页查询</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> LIMIT <span class="token number">30</span> OFFSET <span class="token number">0</span><span class="token punctuation">;</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> LIMIT <span class="token number">30</span> OFFSET <span class="token number">30</span><span class="token punctuation">;</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> LIMIT <span class="token number">30</span> OFFSET <span class="token number">60</span><span class="token punctuation">;</span>\n<span class="token comment"># 另外一种写法：offset, row_count</span>\nSELECT * FROM <span class="token variable"><span class="token variable">`</span>products<span class="token variable">`</span></span> LIMIT <span class="token number">90</span>, <span class="token number">30</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',61),i=[p];function t(c,o){return s(),n("div",null,i)}const d=a(l,[["render",t],["__file","MySQL_02.html.vue"]]);export{d as default};