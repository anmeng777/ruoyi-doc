(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{294:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"环境部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境部署"}},[t._v("#")]),t._v(" 环境部署")]),t._v(" "),s("h2",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("JDK >= 1.8 (推荐1.8版本)\nMysql >= 5.7.0 (推荐5.7版本)\nRedis >= 3.0\nMaven >= 3.0\nNode >= 12\nnacos >= 1.1.0 (ruoyi-cloud >= 3.0.0需要下载nacos >= 2.x.x版本)\nsentinel >= 1.6.0\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"运行系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行系统"}},[t._v("#")]),t._v(" 运行系统")]),t._v(" "),s("h3",{attrs:{id:"后端运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端运行"}},[t._v("#")]),t._v(" 后端运行")]),t._v(" "),s("p",[t._v("1、前往"),s("code",[t._v("Gitee")]),t._v("下载页面("),s("a",{attrs:{href:"https://gitee.com/y_project/RuoYi-Cloud",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/y_project/RuoYi-Cloud"),s("OutboundLink")],1),t._v(")下载解压到工作目录"),s("br"),t._v("\n2、导入到"),s("code",[t._v("Eclipse")]),t._v("，菜单 "),s("code",[t._v("File")]),t._v(" -> "),s("code",[t._v("Import")]),t._v("，然后选择 "),s("code",[t._v("Maven")]),t._v(" -> "),s("code",[t._v("Existing Maven Projects")]),t._v("，点击 "),s("code",[t._v("Next")]),t._v("> 按钮，选择工作目录，然后点击 "),s("code",[t._v("Finish")]),t._v(" 按钮，即可成功导入。"),s("br"),t._v(" "),s("code",[t._v("Eclipse")]),t._v("会自动加载"),s("code",[t._v("Maven")]),t._v("依赖包，初次加载会比较慢（根据自身网络情况而定）"),s("br"),t._v("\n3、创建数据库"),s("code",[t._v("ry-cloud")]),t._v("并导入数据脚本"),s("code",[t._v("ry_2021xxxx.sql")]),t._v("（"),s("font",{attrs:{color:"#FF0000"}},[t._v("必须")]),t._v("），quartz.sql（"),s("font",{attrs:{color:"#8A8A8A"}},[t._v("可选")]),t._v("）"),s("br"),t._v("\n4、创建数据库"),s("code",[t._v("ry-config")]),t._v("并导入数据脚本"),s("code",[t._v("ry_config_2021xxxx.sql")]),t._v("（"),s("font",{attrs:{color:"#FF0000"}},[t._v("必须")]),t._v("）"),s("br"),t._v("\n5、配置"),s("code",[t._v("nacos")]),t._v("持久化，修改"),s("code",[t._v("conf/application.properties")]),t._v("文件，增加支持"),s("code",[t._v("mysql")]),t._v("数据源配置")],1),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# db mysql")]),t._v("\nspring.datasource.platform=mysql\ndb.num=1\ndb.url.0=jdbc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3306/ry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("characterEncoding=utf8"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC")]),t._v("\ndb.user=root\ndb.password=password\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("配置文件"),s("code",[t._v("application.properties")]),t._v("是在下载的"),s("code",[t._v("nacos-server")]),t._v("包"),s("code",[t._v("conf")]),t._v("目录下。"),s("br"),t._v("\n最新"),s("code",[t._v("RuoYi-Cloud")]),t._v("版本"),s("code",[t._v(">=3.0.0")]),t._v("需要下载的"),s("code",[t._v("nacos-server")]),t._v("必须"),s("code",[t._v(">=2.x.x")]),t._v("版本。"),s("br"),t._v("\n默认配置单机模式，"),s("code",[t._v("nacos")]),t._v("集群/多集群部署模式参考 ("),s("a",{attrs:{href:"https://nacos.io/zh-cn/docs/deployment.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nacos支持三种部署模式"),s("OutboundLink")],1),t._v(")")])]),t._v(" "),s("p",[t._v("6、打开运行基础模块（启动没有先后顺序）")]),t._v(" "),s("ul",[s("li",[t._v("RuoYiGatewayApplication （网关模块 "),s("font",{attrs:{color:"#FF0000"}},[t._v("必须")]),t._v("）")],1),t._v(" "),s("li",[t._v("RuoYiAuthApplication    （认证模块 "),s("font",{attrs:{color:"#FF0000"}},[t._v("必须")]),t._v("）")],1),t._v(" "),s("li",[t._v("RuoYiSystemApplication  （系统模块 "),s("font",{attrs:{color:"#FF0000"}},[t._v("必须")]),t._v("）")],1),t._v(" "),s("li",[t._v("RuoYiMonitorApplication （监控中心 "),s("font",{attrs:{color:"#8A8A8A"}},[t._v("可选")]),t._v("）")],1),t._v(" "),s("li",[t._v("RuoYiGenApplication     （代码生成 "),s("font",{attrs:{color:"#8A8A8A"}},[t._v("可选")]),t._v("）")],1),t._v(" "),s("li",[t._v("RuoYiJobApplication     （定时任务 "),s("font",{attrs:{color:"#8A8A8A"}},[t._v("可选")]),t._v("）")],1),t._v(" "),s("li",[t._v("RuoYFileApplication     （文件服务 "),s("font",{attrs:{color:"#8A8A8A"}},[t._v("可选")]),t._v("）")],1)]),t._v(" "),s("p",[t._v("7、集成"),s("code",[t._v("seata")]),t._v("分布式事务（"),s("font",{attrs:{color:"#8A8A8A"}},[t._v("可选配置，默认不启用")]),t._v("）")],1),t._v(" "),s("p",[t._v("创建数据库"),s("code",[t._v("ry-seata")]),t._v("并导入数据脚本"),s("code",[t._v("ry_seata_2021xxxx.sql")])]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ruoyi-cloud/cloud/seata.html#集成nacos配置中心"}},[t._v("参考集成nacos配置中心")])],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("运行前需要先启动"),s("code",[t._v("nacos")]),t._v("，运行成功可以通过("),s("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080"),s("OutboundLink")],1),t._v(")访问，但是不会出现静态页面，可以继续参考下面步骤部署"),s("code",[t._v("ruoyi-ui")]),t._v("前端，然后通过前端地址来访问。")])]),t._v(" "),s("h3",{attrs:{id:"前端运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端运行"}},[t._v("#")]),t._v(" 前端运行")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ruoyi-ui\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--registry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npmmirror.com\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地开发 启动项目")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("4、打开浏览器，输入：("),s("a",{attrs:{href:"http://localhost:80",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:80"),s("OutboundLink")],1),t._v(") 默认账户/密码 "),s("code",[t._v("admin/admin123")]),t._v("）"),s("br"),t._v("\n若能正确展示登录页面，并能成功登录，菜单及页面展示正常，则表明环境搭建成功")]),t._v(" "),s("p",[t._v("建议使用"),s("code",[t._v("Git")]),t._v("克隆，因为克隆的方式可以和"),s("code",[t._v("RuoYi")]),t._v("随时保持更新同步。使用"),s("code",[t._v("Git")]),t._v("命令克隆")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone https://gitee.com/y_project/RuoYi-Cloud.git\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("因为本项目是前后端完全分离的，所以需要前后端都单独启动好，才能进行访问。"),s("br"),t._v("\n前端安装完node后，最好设置下淘宝的镜像源，不建议使用cnpm（可能会出现奇怪的问题）")])]),t._v(" "),s("h2",{attrs:{id:"部署系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署系统"}},[t._v("#")]),t._v(" 部署系统")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("因为本项目是前后端分离的，所以需要前后端都部署好，才能进行访问")])]),t._v(" "),s("h3",{attrs:{id:"后端部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端部署"}},[t._v("#")]),t._v(" 后端部署")]),t._v(" "),s("ul",[s("li",[t._v("打包工程文件")])]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("ruoyi")]),t._v("项目的"),s("code",[t._v("bin")]),t._v("目录下执行"),s("code",[t._v("package.bat")]),t._v("打包Web工程，生成war/jar包文件。"),s("br"),t._v("\n然后会在项目下生成"),s("code",[t._v("target")]),t._v("文件夹包含"),s("code",[t._v("war")]),t._v("或"),s("code",[t._v("jar")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("不同模块版本会生成在"),s("code",[t._v("ruoyi/ruoyi-xxxx")]),t._v("模块下"),s("code",[t._v("target")]),t._v("文件夹")])]),t._v(" "),s("ul",[s("li",[t._v("部署工程文件")])]),t._v(" "),s("p",[t._v("1、jar部署方式"),s("br"),t._v("\n使用命令行执行："),s("code",[t._v("java –jar ruoyi-xxxx.jar")]),t._v(" 或者执行脚本："),s("code",[t._v("ruoyi/bin/run-xxxx.bat")])]),t._v(" "),s("p",[t._v("2、war部署方式"),s("br"),t._v(" "),s("code",[t._v("ruoyi/pom.xml")]),t._v("中的"),s("code",[t._v("packaging")]),t._v("修改为"),s("code",[t._v("war")]),t._v("，放入"),s("code",[t._v("tomcat")]),t._v("服务器"),s("code",[t._v("webapps")])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("packaging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("war"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("packaging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("不同模块版本在"),s("code",[t._v("ruoyi/ruoyi-xxxx")]),t._v("模块下修改"),s("code",[t._v("pom.xml")])])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("SpringBoot")]),t._v("去除内嵌"),s("code",[t._v("Tomcat")]),t._v("（PS：此步骤不重要，因为不排除也能在容器中部署"),s("code",[t._v("war")]),t._v("）")])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 排除内置tomcat --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-web"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("exclusions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("exclusion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-tomcat"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("exclusion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("exclusions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h3",{attrs:{id:"前端部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端部署"}},[t._v("#")]),t._v(" 前端部署")]),t._v(" "),s("p",[t._v("当项目开发完毕，只需要运行一行命令就可以打包你的应用")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包正式环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:prod\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包预发布环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:stage\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("构建打包成功之后，会在根目录生成 "),s("code",[t._v("dist")]),t._v(" 文件夹，里面就是构建打包好的文件，通常是 "),s("code",[t._v("***.js")]),t._v(" 、"),s("code",[t._v("***.css")]),t._v("、"),s("code",[t._v("index.html")]),t._v(" 等静态文件。")]),t._v(" "),s("p",[t._v("通常情况下 "),s("code",[t._v("dist")]),t._v(" 文件夹的静态文件发布到你的 nginx 或者静态服务器即可，其中的 "),s("code",[t._v("index.html")]),t._v(" 是后台服务的入口页面。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("outputDir 提示")]),t._v(" "),s("p",[t._v("如果需要自定义构建，比如指定 "),s("code",[t._v("dist")]),t._v(" 目录等，则需要通过 "),s("a",{attrs:{href:"https://gitee.com/y_project/RuoYi-Vue/blob/master/ruoyi-ui/vue.config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("config"),s("OutboundLink")],1),t._v("的 "),s("code",[t._v("outputDir")]),t._v(" 进行配置。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("publicPath 提示")]),t._v(" "),s("p",[t._v("部署时改变页面js 和 css 静态引入路径 ,只需修改 "),s("code",[t._v("vue.config.js")]),t._v(" 文件资源路径即可。")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("publicPath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//请根据自己路径来配置更改")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hash'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hash模式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[t._v("#")]),t._v(" 环境变量")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ruoyi-vue/document/hjbs.html#环境变量"}},[t._v("参考环境变量")])],1),t._v(" "),s("h2",{attrs:{id:"nginx配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[t._v("#")]),t._v(" Nginx配置")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ruoyi-vue/document/hjbs.html#nginx配置"}},[t._v("参考nginx配置")])],1),t._v(" "),s("h2",{attrs:{id:"tomcat配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat配置"}},[t._v("#")]),t._v(" Tomcat配置")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ruoyi-vue/document/hjbs.html#tomcat配置"}},[t._v("参考tomcat配置")])],1),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("ol",[s("li",[t._v("如果使用"),s("code",[t._v("Mac")]),t._v("需要修改"),s("code",[t._v("nacos")]),t._v("配置"),s("code",[t._v("ruoyi-file-dev.yml")]),t._v("文件路径"),s("code",[t._v("path")])]),t._v(" "),s("li",[t._v("如果使用"),s("code",[t._v("Linux")]),t._v(" 提示表不存在，设置大小写敏感配置在"),s("code",[t._v("/etc/my.cnf")]),t._v("添加"),s("code",[t._v("lower_case_table_names=1")]),t._v("，重启MYSQL服务")]),t._v(" "),s("li",[t._v("如果提示当前权限不足，无法写入文件请检查"),s("code",[t._v("ruoyi-file-dev.yml")]),t._v("中的"),s("code",[t._v("path")]),t._v("路径或"),s("code",[t._v("logback.xml")]),t._v("中的"),s("code",[t._v("log.path")]),t._v("路径是否有可读可写操作权限")])]),t._v(" "),s("p",[t._v("如遇到无法解决的问题请到"),s("a",{attrs:{href:"https://gitee.com/y_project/RuoYi-Cloud/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("Issues"),s("OutboundLink")],1),t._v("反馈，会不定时进行解答。")])])}),[],!1,null,null,null);s.default=e.exports}}]);