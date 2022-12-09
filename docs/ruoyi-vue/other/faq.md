# 常见问题

## 如何新增系统图标

如果你没有在本项目 [Icon](https://gitee.com/y_project/RuoYi-Vue/tree/master/ruoyi-ui/src/assets/icons/svg) 中找到需要的图标，可以到 [iconfont.cn](http://iconfont.cn/) 上选择并生成自己的业务图标库，再进行使用。或者其它 svg 图标网站，下载 svg 并放到文件夹之中就可以了。

下载完成之后将下载好的 .svg 文件放入 `@/icons/svg` 文件夹下之后就会自动导入。

**使用方式**

```js
<svg-icon icon-class="password" /> // icon-class 为 icon 的名字
```

:::tip 提示
菜单图标会自动引入`@/icons/svg`，放入此文件夹中图标就可以选择了
:::

## 如何不登录直接访问

方法1：在 SecurityConfig 中设置```httpSecurity``` 配置匿名访问
```java
// 使用 permitAll() 方法所有人都能访问，包括带上 token 访问
.antMatchers("/admins/**").permitAll()

// 使用 anonymous() 所有人都能访问，但是带上 token 访问后会报错
.antMatchers("/admins/**").anonymous()
```

方法2：在对应的方法或类上面使用`@Anonymous`注解。
```java
// 类上定义匿名注解，作用于所有的方法
@Anonymous
@RestController
@RequestMapping("/system/xxxx")
public class SysXxxxController extends BaseController
{
}

// 方法定义匿名注解，作用于单独的方法
@Anonymous
@GetMapping("/list")
public List<SysXxxx> list(SysXxxx xxxx)
{
    return xxxxList;
}
```

::: warning 警告
匿名访问的方法上面`@PreAuthorize`权限注解也需要去掉，因为已经使用匿名访问了，权限自然也不需要去验证了。
:::

::: tip 前端不登录如何直接访问
如果是前端页面可以在`src/permission.js`配置`whiteList`属性白名单即可。
:::


## 如何更换项目包路径

[参考如何更换项目包路径](/ruoyi/other/faq.html#如何更换项目包路径)

## 业务模块访问出现404

[参考业务模块访问出现404](/ruoyi/other/faq.html#业务模块访问出现404)

## 如何使用多数据源

[参考如何使用多数据源](/ruoyi/other/faq.html#如何使用多数据源)

## 如何更换主题皮肤

默认的主题都是深色主题，如果需要其他主题可以做如下配置。

1、点击顶部最右侧个人中心头像，选择布局设置，选择`主题风格设置`。（局部设置）

2、在`ruoyi-ui\src\settings.js`，设置侧边栏主题`sideTheme`为`theme-xxxx`。（全局设置）

## 如何使用横向菜单

默认的导航菜单都是在左侧，如果需要横向导航菜单可以做如下配置。

1、点击顶部最右侧个人中心头像，选择布局设置，开启`TopNav`。（局部设置）

2、在`ruoyi-ui\src\settings.js`，设置是否显示顶部导航`topNav`为`true`。（全局设置）

## 系统接口访问出现401

在测试系统接口中可能存在一些接口用到用户信息或权限验证，此时需要添加全局的`token`参数。如图

![swagger](https://oscimg.oschina.net/oscnet/up-a474910efef3e0739b42f3d5cc329f8ef66.png)
 
`token`是在登录成功后返回的，可以在浏览器通过F12查看`Network`中的请求地址，对应参数`Authorization`。复制截图内容到`swagger`全局`Authorization`属性`value`参数中，点击`Authorize`，以后每次访问接口会携带此`token`信息。

![swagger](https://oscimg.oschina.net/oscnet/up-f3571ea3706bb7881d8ee1aa3e7193962f4.png)

## 如何更换后端请求地址

在`vue.config.js`中，修改`target`值为对应的的后端接口地址。
```java
devServer: {
  ...,
  proxy: {
    [process.env.VUE_APP_BASE_API]: {
      target: `http://localhost:8080`,
      ...
    }
  },
  ...
},
```

## 如何启动项目https协议

通常情况下，在启动本地项目时，默认都是`http`协议，但是有时候测试网站要求我们的协议是`https`，那么可以配置`vue.config.js`中的`devServer`,让其在启动项目的时候，默认是https协议。
```js
module.exports = {
    ......
	devServer: {
	  https: true,
	  ......
	},
}
```


## 如何获取用户登录信息

1. 第一种方法
```java
// 获取当前的用户名称
String username = SecurityUtils.getUsername();
```

2、缓存获取当前用户信息
```java
@Autowired
private TokenService tokenService;
	
LoginUser loginUser = tokenService.getLoginUser();
// 获取当前的用户名称
String username = loginUser.getUsername();
```

3、vue中获取当前用户信息
```javascript
const username = this.$store.state.user.name;
```


## 提示您没有数据的权限

这种情况都属于权限标识配置不对在```菜单管理```配置好权限标识（菜单&按钮）
1. 确认此用户是否已经配置角色
2. 确认此角色是否已经配置菜单权限
3. 确认此菜单权限标识是否和后台代码一致  

如参数管理  
后台配置```@PreAuthorize("@ss.hasPermi('system:config:query')")```对应参数管理权限标识为```system:config:query```

注：如需要角色权限，配置角色权限字符 使用```@PreAuthorize("@ss.hasRole('admin')")```


## 如何创建新的菜单页签

Vue设置路由跳转的两种方法

一、路由跳转`router.push`
```javascript
// 字符串
router.push('apple')
// 对象
router.push({path:'apple'})
// 命名路由
router.push({name: 'applename'})
//直接路由带查询参数query，地址栏变成 /apple?color=red
router.push({path: 'apple', query: {color: 'red' }})
// 命名路由带查询参数query，地址栏变成/apple?color=red
router.push({name: 'applename', query: {color: 'red' }})
//直接路由带路由参数params，params 不生效，如果提供了 path，params 会被忽略
router.push({path:'applename', params:{ color: 'red' }})
// 命名路由带路由参数params，地址栏是/apple/red
router.push({name:'applename', params:{ color: 'red' }})
// 其他方式
this.$router.push({ path: "/system/user" });
```

二、动态赋值`<router-link :to="...">`，`to`里的值可以是一个字符串路径，或者一个描述地址的对象。例如：
```vue
// 字符串
<router-link to="apple"> to apple</router-link>
// 对象
<router-link :to="{path:'apple'}"> to apple</router-link>
// 命名路由
<router-link :to="{name: 'applename'}"> to apple</router-link>
//直接路由带查询参数query，地址栏变成 /apple?color=red
<router-link :to="{path: 'apple', query: {color: 'red' }}"> to apple</router-link>
// 命名路由带查询参数query，地址栏变成/apple?color=red
<router-link :to="{name: 'applename', query: {color: 'red' }}"> to apple</router-link>
//直接路由带路由参数params，params 不生效，如果提供了 path，params 会被忽略
<router-link :to="{path: 'apple', params: { color: 'red' }}"> to apple</router-link>
// 命名路由带路由参数params，地址栏是/apple/red
<router-link :to="{name: 'applename', params: { color: 'red' }}"> to apple</router-link>
// 其他方式
<router-link :to="'/system/user/' + scope.row.userId" class="link-type">
  <span>{{ scope.row.userId }}</span>
</router-link>
```

## 如何手动配置路由传参

第一种：使用`path`来匹配路由，然后通过`query`来传递参数，这种情况下`query`传递的参数会显示在`url`后面会跟`?id=`
```js
this.$router.push({
    path: '/user/profile',
    query: {
      id: id
    }
})
```
获取参数方式：`this.$route.query.id`

第二种：使用`name`来匹配路由，使用`params`传参，可以在路由的`path`里加参数。
```js
this.$router.push({
    name: 'UserProfile',
    params: {
      id: id
    }
})
```
获取参数方式：`this.$route.params.id`


第三种：直接让路由携带参数跳转
```js
this.$router.push({
  path: '/user/profile/:id(\\d+)'
})
```

获取参数方式：`this.$route.params.id`


## 如何菜单配置路由传参

在菜单管理中选择菜单类型为菜单，填写对应的路由参数，如：`{"id": 1, "name": "ry"}`

在自己的组件中获取参数方式：`this.$route.query.id`，`this.$route.query.name`

:::warning 外链可以通过原生方式设置
例如：http://ruoyi.vip?id=1&name=ry
:::


## 如何动态修改页签名称

可以使用`tagsView/updateVisitedView`动态修改名称，示例如下。
```js
const id = row.id;
const title = '自定义标题' 
const route = Object.assign({}, this.$route, { title: `${title}-${id}` }) 
this.$store.dispatch('tagsView/updateVisitedView', route)
```
此时页签名称会被修改成`自定义标题-{id}`


## 如何实现路由的懒加载

在单页应用中，进入首页时，如果需要加载的内容过多，延时过长，不利于用户体验，而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时。

静态路由懒加载方式，自定义在`router\index.js`
```js
{
  path: '/xxxx',
  name: 'xxxx',
  component: () => import('@/views/xxxx')
}

```


动态路由懒加载方式，在`store\modules\permission.js`修改成`import`方式
```js {6}
export const loadView = (view) => {
  if (process.env.NODE_ENV === 'development') {
    return (resolve) => require([`@/views/${view}`], resolve)
  } else {
    // 使用 import 实现生产环境的路由懒加载
    return () => import(`@/views/${view}`)
  }
}
```


## 使用Gzip解压缩静态文件

需要先完成上述的步骤 [环境部署-Nginx配置-开启Gzip压缩](/ruoyi-vue/document/hjbs.html#nginx配置)

上述方案配置后由于`Nginx`的动态压缩是对每个请求先压缩再输出，这样造成虚拟机浪费了很多`CPU`。解决这个问题可以利用`nginx`的`http_gzip_static_module`模块，主要作用是对于需要压缩的文件，直接读取已经压缩好的文件(文件名为加`.gz`)，而不是动态压缩（消耗性能）。所以采用这个方案需要确保目录文件名有生成`.gz`（最新版本的配置打包默认都会生成`.gz`文件）

首先需要安装`nginx`的`http_gzip_static_module`模块
```sh
# 安装模块（如果存在其他模块,用空格分开 --with-xxx --with-xxx,防止覆盖）
./configure --with-http_gzip_static_module

# 编译
make & make install
```

查询安装配置信息是否包含`http_gzip_static_module`
```sh{7}
./nginx -V

nginx version: nginx/1.8.1
built by gcc 4.8.5 20150623 (Red Hat 4.8.5-39) (GCC) 
built with OpenSSL 1.0.2k-fips  26 Jan 2017
TLS SNI support enabled
configure arguments: --prefix=/usr/local/nginx --with-http_ssl_module --with-http_gzip_static_module
```


配置`nginx.conf`的`gzip_static`属性
```sh{4-5}
server {
	listen       80;
	server_name vue.ruoyi.vip;
	# 开启解压缩静态文件
	gzip_static on;
	location / {
		root   /home/ruoyi/projects/ruoyi-ui;
		try_files $uri $uri/ /index.html;
		index index.html;
	}
}
```
开启`gzip_static`后，对于任何文件都会先查找是否有对应的`gz`文件。


重启`nginx`，使其生效
```sh
./nginx -s reload
```

测试解压缩静态文件是否成功
```sh
# 查询 nginx worker 进程的PID
ps ax | grep nginx

# 使用strace追踪是否请求.gz
strace -p 23558 2>&1 | grep gz

# 如果请求.gz的文件表示开启成功
open("/xxxx/static/css/chunk-171ca186.f59a1d86.css.gz", O_RDONLY|O_NONBLOCK) = 46
open("/xxxx/static/js/chunk-01ef53b6.a7928e48.js.gz", O_RDONLY|O_NONBLOCK) = 46
```


## 如何防止请求重复提交

后端可以通过`@RepeatSubmit`注解控制
```java
/**
 * 在对应方法添加注解 @RepeatSubmit
 */
@RepeatSubmit
public AjaxResult edit()
```

## 如何进行流量限制控制

后端可以通过`@RateLimiter`注解控制
```java
/**
 * 在对应方法添加注解 @RateLimiter
 */
@RateLimiter(count = 100, time = 60)
public AjaxResult edit()
```


## 如何实现滑块验证码

[参考集成aj-captcha实现滑块验证码](/ruoyi-vue/document/cjjc.html#集成aj-captcha实现滑块验证码)


## 异步处理获取用户信息

项目中可以通过`SecurityContextHolder.getContext().getAuthentication()`获取用户信息，例如
```java
LoginUser loginUser = SecurityUtils.getLoginUser()
```

绝大多数情况下都是通过同步的方式来获取用户信息，如果通过异步获取还需要添加`AsyncConfigurerSupport`处理。

```java
// 启动类上面添加，开启异步调用
@EnableAsync
// 方法上面添加，异步执行
@Async
```

```java
package com.ruoyi.framework.config;

import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.AsyncConfigurerSupport;
import org.springframework.security.concurrent.DelegatingSecurityContextExecutorService;

@Configuration
public class AsyncConfig extends AsyncConfigurerSupport
{
    /**
     * 异步执行需要使用权限框架自带的包装线程池 保证权限信息的传递
     */
    @Override
    public Executor getAsyncExecutor()
    {
        return new DelegatingSecurityContextExecutorService(Executors.newFixedThreadPool(5));
    }
}

```

## 前端如何配置后端接口

对于特殊情况，需要直接调用后台接口或者指定域名可以修改`.env.production`文件`VUE_APP_BASE_API`属性

```
# 后端接口地址
VUE_APP_BASE_API = '//localhost:8080'
```


## 图片上传成功不能显示

文件上传成功后，请求访问后台地址会根据`profile`进行匹配，需要自己配置`nginx`代理，参考如下。

```nginx
location /profile/ {
    # 方式一：指向地址
    proxy_pass http://127.0.0.1:9999/profile/; 
}
```
		
```nginx
location /profile/
{
    # 方式二：指向目录，对应后台`application.yml`中的`profile`配置
    alias /home/ruoyi/uploadPath/;
}
```


## 富文本自定义上传地址

需要设置`:uploadUrl`属性，指定上传地址。
```js
<editor v-model="form.noticeContent" :min-height="192" :uploadUrl="uploadUrl" />

export default {
  data() {
    return {
      uploadUrl: process.env.VUE_APP_BASE_API + "/common/upload",
}
```


## 富文本显示HTML内容

需要定义在`ql-container ql-snow/ql-editor`里面。
```
<div class="ql-container ql-snow">
  <div class="ql-editor" v-html="form.noticeContent"/>
</div>
```


## 侧边栏如何默认展开

某些场景下，用户需要默认展开侧边栏的某些`sub-menu`，可以通过`default-openeds`来进行设置。

`layout\components\Sidebar\index.vue`
```vue{2}
<el-menu
	:default-openeds="['/system', '/tool']"
	:default-active="activeMenu"
	:collapse="isCollapse"
	:background-color="settings.sideTheme === 'theme-dark' ? variables.menuBg : variables.menuLightBg"
	:text-color="settings.sideTheme === 'theme-dark' ? variables.menuText : 'rgba(0,0,0,.65)'"
	:unique-opened="false"
	:active-text-color="settings.theme"
	:collapse-transition="false"
	mode="vertical"
    >
	<sidebar-item v-for="route in sidebarRouters" :key="route.path  + index" :item="route" :base-path="route.path" />
  </el-menu>
```


## 如何调整左侧菜单宽度

如果觉得左侧菜单宽度不够，可以进行调整。

在`ruoyi-ui\src\assets\styles\variables.scss`修改变量`$sideBarWidth: 200px;`


## 左侧菜单如何默认收缩

在`ruoyi-ui\src\store\modules\app.js`修改变量`opened: false;`
```js{3}
const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : false,
    withoutAnimation: false
  },
  device: 'desktop',
  size: Cookies.get('size') || 'medium'
}
```


## 菜单名称过长显示不全

菜单名称太长的话超出宽度部分会显示`...`，此时我们可以自己调整一下菜单的宽度或者设置一个`title`，这样鼠标移动上去显示完整的菜单名称。

在`layout\components\Sidebar\SidebarItem.vue`文件设置`:title`
```vue{6}
<sidebar-item
  v-for="child in item.children"
  :key="child.path"
  :is-nest="true"
  :item="child"
  :title="child.meta.title"
  :base-path="resolvePath(child.path)"
  class="nest-menu"
/>
```

在`layout\components\Sidebar\Item.vue`文件设置`title={(title)}`
```js{2}
if (title) {
  vnodes.push(<span slot='title' title={(title)}>{(title)}</span>)
}
```


## 进入首页默认记忆控制台

例如用户退出后，下次登陆系统，能默认打开之前工作路径。

可以在`request.js`，修改`LogOut`
```js
store.dispatch('LogOut').then(() => {
  location.href = '/index';
})
```
换成
```js
store.dispatch('LogOut').then(() => {
  location.reload();
})
```

## 如何设置接口的超时时间

**全局超时时间设置src/utils/request.js**
```js{4}
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // 默认超时时间为10秒，可以自己定义默认的全局 timeout
  timeout: 10000
})
```

**针对某个单独接口设置超时时间**
```js{6}
// 在自己的接口里面单独加个`timeout`属性就行了
export function getCodeImg() {
  return request({
    url: '/captchaImage',
    method: 'get',
    timeout: 20000 // 20秒
  })
}
```


## 默认跳转到第一个子菜单

在开启`TopNav`时需要点击主菜单时，想默认跳转到第一个子菜单可以在`handleSelect`事件处理。
```js{14-32}
// 菜单选择事件
handleSelect(key, keyPath) {
  this.currentIndex = key;
  if (this.ishttp(key)) {
	// http(s):// 路径新窗口打开
	window.open(key, "_blank");
  } else if (key.indexOf("/redirect") !== -1) {
	// /redirect 路径内部打开
	this.$router.push({ path: key.replace("/redirect", "") });
  } else {
	// 显示左侧联动菜单
	this.activeRoutes(key);

	let myRoutes = [];
	if (this.childrenMenus && this.childrenMenus.length > 0) {
	  this.childrenMenus.map((item) => {
		if (key == item.parentPath || (key == "index" && "" == item.path)) {
		  myRoutes.push(item);
		}
	  });
	}
	setTimeout(() => {
	  if(myRoutes[0].path != this.$route.path) {
		this.$router.replace({
		  path: myRoutes[0].path
		})
	  } else {
		this.$router.replace({
		  path: '/index'
		})
	  }
	}, 100)
  }
},
```

## 生产环境图标加载时乱码

有一些小伙伴确实会出现这种情况，是因为`dart-sass`的问题，似乎这个作者现在也没打算解决。问题链接：[https://github.com/sass/dart-sass/issues/1219](https://github.com/sass/dart-sass/issues/1219)

如遇见可以换成`node-sass`。

1、修改`package.json`（记得重新install）。
```json
// 添加`node-sass`
"node-sass": "4.14.1",

// 移除`sass`
"sass": "1.32.0",
```

2、修改部分文件为`node-sass`语法

`::v-deep`替换成`/deep/`

:::warning 也可以采用如下方案，在vue.config.js加入sassOptions选项（建议）。
```json
css: {
  loaderOptions: {
    sass: {
      sassOptions: { outputStyle: "expanded" }
    }
  }
},
```
详细的说明可以参考官方文档 [https://webpack.js.org/loaders/sass-loader/#sassoptions](https://webpack.js.org/loaders/sass-loader/#sassoptions)
:::


## 解决node-sass安装失败

`node-sass` 安装失败的原因
`npm` 安装 `node-sass` 依赖时，会从 `github.com` 上下载 `.node` 文件。由于国内网络环境的问题，这个下载时间可能会很长，甚至导致超时失败。
这是使用 `sass` 的同学可能都会遇到的郁闷的问题。

解决方案就是使用其他源，或者使用工具下载，然后将安装源指定到本地。

<b>解决方法一：使用淘宝镜像源（推荐）</b>  
设置变量 sass_binary_site，指向淘宝镜像地址。示例
```
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/

// 也可以设置系统环境变量的方式。示例
// linux、mac 下
SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install node-sass

// window 下
set SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ && npm install node-sass
```

或者设置全局镜像源：
```
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
```
之后再涉及到 node-sass 的安装时就会从淘宝镜像下载。

<b>解决方法二：使用 cnpm</b>  
使用 cnpm 安装 node-sass 会默认从淘宝镜像源下载，也是一个办法：
```
cnpm install node-sass
```

<b>解决方法三：创建.npmrc文件</b>  
在项目根目录创建.npmrc文件，复制下面代码到该文件。
```
phantomjs_cdnurl=http://cnpmjs.org/downloads
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
registry=https://registry.npm.taobao.org
```
保存后 删除之前安装失败的包(第一次安装请跳过此步)
```
npm uninstall node-sass
```
重新安装
```
npm install node-sass
```


## 浏览器兼容性问题需求

本项目暂时没有兼容性需求，如有兼容性需求可自行使用 babel-polyfill。

```shell
// 下载依赖
npm install --save babel-polyfill
```

在入口文件中引入

```js
import 'babel-polyfill'
// 或者
require('babel-polyfill') //es6
```

在 webpack.config.js 中加入 babel-polyfill 到你的入口数组：

```js
module.exports = {
  entry: ['babel-polyfill', './app/js']
}
```

具体可参考 [link](https://babeljs.io/docs/en/babel-polyfill/)

或者更简单暴力 [polyfill.io](https://cdn.polyfill.io/v3/) 使用它给的一个 cdn 地址，引入这段 js 之后它会自动判断游览器，加载缺少的那部分 polyfill,但国内速度肯能不行，大家可以自己搭 cdn。


## 如何分析构建文件体积

如果你的构建文件很大，你可以通过 `webpack-bundle-analyzer` 命令构建并分析依赖模块的体积分布，从而优化你的代码。

```bash
npm run preview -- --report
```

运行之后你就可以在 [http://localhost:9526/report.html](http://localhost:9526/report.html) 页面看到具体的体积分布

![](https://oscimg.oschina.net/oscnet/up-d97831fab48b955ca15111d110c49e518f2.JPEG)

具体的优化可以参考 [Webpack 大法之 Code Splitting](https://zhuanlan.zhihu.com/p/26710831)

::: tip
强烈建议开启 gzip ，使用之后普遍体积只有原先 1/3 左右。打出来的 app.js 过大，查看一下是不是 Uglify 配置不正确或者 sourceMap 没弄对。 优化相关请看该 [Webpack Freestyle 之 Long Term Cache](https://zhuanlan.zhihu.com/p/27710902)
:::


## 模态框点击空白不消失

设置属性`:close-on-click-modal="false"`
```html
<el-dialog :close-on-click-modal="false"></el-dialog>
```

如果想全部设置可以在`main.js`中添加以下内容
```js{1}
Element.Dialog.props.closeOnClickModal.default = false
```

## 如何给模态框添加拖拽

设置属性`v-dialogDrag`
```html
<el-dialog v-dialogDrag></el-dialog>
```


## 模态框可拖动弹窗宽度

设置属性`v-dialogDragWidth`
```html
<el-dialog v-dialogDragWidth></el-dialog>
```


## 模态框可拖动弹窗高度

设置属性`v-dialogDragHeight`
```html
<el-dialog v-dialogDragHeight></el-dialog>
```


## 如何给表格设置固定列

在`el-table-column`对应列添加`fixed`参数，可选值`left`、`right`
```vue
<el-table-column label="编号" fixed="left">
<el-table-column label="操作" fixed="right">
```


## 如何给默认的表格加边框

`el-table` 加上 `border`
```html
<el-table border :data="dataList"/>
```

如果想全部设置可以在`main.js`中添加以下内容
```js
// 带有斑马纹
Element.Table.props.stripe = {
  default:true,
  type:Boolean
}

// 带有边框
Element.Table.props.border = {
  default:true,
  type:Boolean
}
```


## 表单按回车键会刷新页面问题

原因：当表单只有一个输入框时，就会造成该现象。

解决：在`el-form`标签里加上`@submit.native.prevent`即可。
```html
<!-- 在这里加 @submit.native.prevent -->
<el-form @submit.native.prevent/>
	<el-form-item>
		<el-input v-model="query"></el-input>
	</el-form-item>
</el-form>
```


## 如何在表格中实现图片预览

方式一：使用`img`预览组件
```vue
<el-table-column label="图片" align="center" prop="url">
    <template slot-scope="scope">
        <img :src="scope.row.url" alt="" style="width: 45px;height: 45px">
    </template>
</el-table-column>
```

方式二：使用`image-preview`预览组件（推荐）
```vue
<!-- 内链地址预览 -->
<el-table-column label="图片" align="center" prop="url" width="100">
  <template slot-scope="scope">
	  <image-preview :src="scope.row.url" :width="50" :height="50"/>
  </template>
</el-table-column>

<!-- 外链地址预览 -->
<el-table-column label="图片" align="center" prop="url" width="100">
  <image-preview src="http://ruoyi.vip/images/logo.png" />
</el-table-column>
```

:::tip 提示
默认的`img`组件不会携带`VUE_APP_BASE_API`不能被代理，通过`image-preview`封装的预览组件会自动携带`VUE_APP_BASE_API`会被代理。
:::


## 如何支持多类型数据库

[参考如何支持多类型数据库](/ruoyi/other/faq.html#如何支持多类型数据库)

## 如何降低mysql驱动版本

[参考如何降低mysql驱动版本](/ruoyi/other/faq.html#如何降低mysql驱动版本)

## 如何配置tomcat访问日志

[参考如何配置tomcat访问日志](/ruoyi/other/faq.html#如何配置tomcat访问日志)

## 如何配置项目访问根路径

[参考如何配置项目访问根路径](/ruoyi/other/faq.html#如何配置项目访问根路径)

## 普通用户创建文件无权限

[参考普通用户创建文件无权限](/ruoyi/other/faq.html#普通用户创建文件无权限)

## Swagger的启用和禁用

[Swagger的启用和禁用](/ruoyi/other/faq.html#Swagger的启用和禁用)

## 如何汉化系统接口Swagger

[参考如何汉化系统接口Swagger](/ruoyi/other/faq.html#如何汉化系统接口swagger)

## Swagger接口出现转换错误

[参考Swagger接口出现转换错误](/ruoyi/other/faq.html#Swagger接口出现转换错误)

## 如何Excel导出子对象多个字段

[参考如何Excel导出子对象多个字段](/ruoyi/other/faq.html#如何excel导出子对象多个字段)

## Tomcat部署多个War包项目异常

[参考Tomcat部署多个War包项目异常](/ruoyi/other/faq.html#tomcat部署多个war包项目异常)

## Tomcat临时目录tmp抛错误异常

[参考Tomcat临时目录tmp抛错误异常](/ruoyi/other/faq.html#tomcat临时目录tmp抛错误异常)

## 如何部署配置支持https访问

[参考如何部署配置支持https访问](/ruoyi/other/faq.html#如何部署配置支持https访问)

## 特殊字符串被过滤的解决办法

[参考特殊字符串被过滤的解决办法](/ruoyi/other/faq.html#特殊字符串被过滤的解决办法)

## Linux系统验证码乱码解决方法

[参考Linux系统验证码乱码解决方法](/ruoyi/other/faq.html#linux系统验证码乱码解决方法)

## 公共数据库定时任务没有被执行

[参考公共数据库定时任务没有被执行](/ruoyi/other/faq.html#公共数据库定时任务没有被执行)

## 如何处理Long类型精度丢失问题

[如何处理Long类型精度丢失问题](/ruoyi/other/faq.html#如何处理long类型精度丢失问题)


## 如何修改Swagger默认访问地址

由于采用的前后端分离模式，且前端`Swagger`使用的`iframe`打开页面。所以默认请求的是前端地址，然后前端通过代理转发到后端接口。对于特殊情况需要直接请求后端提供如下方案：

方案1：使用新窗口打开，不要用`iframe`打开。因为`swagger`默认是获取当前服务的地址。

方案2：在`SwaggerConfig`配置中`createRestApi`方法设置后端的地址。
```java
return new Docket(DocumentationType.SWAGGER_2)
    ....
	// 后端地址
    .host("localhost:8080")
```


## 如何默认显示顶部导航栏菜单

在`ruoyi-ui\src\settings.js`中设置`topNav`为`true`表示显示顶部导航，也可以在用户布局设置中开启`TopNav`后保存配置。

```js
/**
* 是否显示顶部导航
*/
topNav: true,
```


## 如何修改超级管理员登录密码

1、如果是自己知道超级管理员的密码且需要修改的情况。  
默认口令 `admin/admin123`，可以登录后在首页个人中心修改密码。

2、如果自己忘记了超级管理员的密码可以重新生成秘钥替换数据库密码。
```java
public static void main(String[] args)
{
	System.out.println(SecurityUtils.encryptPassword("admin123"));
}
```


## 如何修改数据监控登录账户密码

[参考如何修改数据监控登录账户密码](/ruoyi/other/faq.html#如何修改数据监控登录账户密码)


## 如何设置用户登录缓存超时时间

找到`ruoyi-admin\src\main\resources`下面的`application.yml`配置文件

```yml
# token配置
token:
    # 令牌有效期（默认30分钟）
    expireTime: 30
```


## 如何格式化前端日期时间戳内容

对应一些时间格式需要在前端进行格式化操作情况，解决方案如下

1、后端使用`JsonFormat`注解格式化日期，时间戳`yyyy-MM-dd HH:mm:ss`

```java
/** 创建时间 */
@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
private Date time;
```

2、前端使用`parseTime`方法格式化日期，时间戳`{y}-{m}-{d} {h}:{i}:{s}`

```javascript
<el-table-column label="创建时间" align="center" prop="createTime" width="160">
	<template slot-scope="scope">
	  <span>{{ parseTime(scope.row.createTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
	</template>
</el-table-column>
```


## 登录页如何开启注册用户功能

在菜单`参数设置`修改参数键名`sys.account.registerUser`设置`true`即可。默认为`false`关闭。

同时在前端`login.vue`页面需要设置属性`register`注册开关为`true`。

```js
export default {
  name: "Login",
  data() {
    return {
      // 注册开关
      register: true,
	  .......
```

## 登录页面如何不显示验证码

在菜单`参数设置`修改参数键名`sys.account.captchaOnOff`设置`false`即可。默认为`true`开启。


## 如何限制账户不允许多终端登录

这本来是一个可有可无的问题，不过经常有小伙伴有这样的需求。废话不多说，先来看同一用户不同终端限制登录的解决方法。方法很简单，大致思路就是做出userid与token（一个用户对应一个token，userid唯一）的键值对，存于缓存中。用于登录时判断用户是否在别的终端在线。详细实现代码如下：

1、`application.yml`新增一个配置`soloLogin`用于限制多终端同时登录。
```yml
# token配置
token:
    # 是否允许账户多终端同时登录（true允许 false不允许）
    soloLogin: false
```
	
2、`Constants.java`新增一个常量`LOGIN_USERID_KEY`公用
```java
/**
 * 登录用户编号 redis key
 */
public static final String LOGIN_USERID_KEY = "login_userid:";
```

3、调整`TokenService.java`，存储&刷新缓存用户编号信息
```java
// 是否允许账户多终端同时登录（true允许 false不允许）
@Value("${token.soloLogin}")
private boolean soloLogin;

/**
 * 删除用户身份信息
 */
public void delLoginUser(String token, Long userId)
{
	if (StringUtils.isNotEmpty(token))
	{
		String userKey = getTokenKey(token);
		redisCache.deleteObject(userKey);
	}
	if (!soloLogin && StringUtils.isNotNull(userId))
	{
		String userIdKey = getUserIdKey(userId);
		redisCache.deleteObject(userIdKey);
	}
}

/**
 * 刷新令牌有效期
 * 
 * @param loginUser 登录信息
 */
public void refreshToken(LoginUser loginUser)
{
	loginUser.setLoginTime(System.currentTimeMillis());
	loginUser.setExpireTime(loginUser.getLoginTime() + expireTime * MILLIS_MINUTE);
	// 根据uuid将loginUser缓存
	String userKey = getTokenKey(loginUser.getToken());
	redisCache.setCacheObject(userKey, loginUser, expireTime, TimeUnit.MINUTES);
	if (!soloLogin)
	{
		// 缓存用户唯一标识，防止同一帐号，同时登录
		String userIdKey = getUserIdKey(loginUser.getUser().getUserId());
		redisCache.setCacheObject(userIdKey, userKey, expireTime, TimeUnit.MINUTES);
	}
}

private String getUserIdKey(Long userId)
{
	return Constants.LOGIN_USERID_KEY + userId;
}
```

4、自定义退出处理类`LogoutSuccessHandlerImpl.java`清除缓存方法添加用户编号
```java
// 删除用户缓存记录
tokenService.delLoginUser(loginUser.getToken(), loginUser.getUser().getUserId());
```

5、登录方法`SysLoginService.java`，验证如果用户不允许多终端同时登录，清除缓存信息
```java
// 是否允许账户多终端同时登录（true允许 false不允许）
@Value("${token.soloLogin}")
private boolean soloLogin;
	
if (!soloLogin)
{
	// 如果用户不允许多终端同时登录，清除缓存信息
	String userIdKey = Constants.LOGIN_USERID_KEY + loginUser.getUser().getUserId();
	String userKey = redisCache.getCacheObject(userIdKey);
	if (StringUtils.isNotEmpty(userKey))
	{
		redisCache.deleteObject(userIdKey);
		redisCache.deleteObject(userKey);
	}
}
```


## 如何区分部署多个项目的Redis缓存

如果部署了多个若依系统，连接的是同一个`Redis`源时会导致`Key`值冲突，我们可以修改`Redis`默认的序列化值用于区分。

1、新增`RedisKeySerializer.java`序列化，添加`Key`前缀值。
```java{24-27}
@Component
public class RedisKeySerializer implements RedisSerializer<String>
{
    @Autowired
    private RuoYiConfig config;

    private final Charset charset;

    public RedisKeySerializer()
    {
        this(Charset.forName("UTF8"));
    }

    public RedisKeySerializer(Charset charset)
    {
        Assert.notNull(charset, "字符集不允许为NULL");
        this.charset = charset;
    }

    @Override
    public byte[] serialize(String string) throws SerializationException
    {
        // 通过项目名称ruoyi.name来定义Redis前缀，用于区分项目缓存
        if (StringUtils.isNotEmpty(config.getName()))
        {
            return new StringBuilder(config.getName()).append(":").append(string).toString().getBytes(charset);
        }
        return string.getBytes(charset);
    }

    @Override
    public String deserialize(byte[] bytes) throws SerializationException
    {
        return (bytes == null ? null : new String(bytes, charset));
    }
}
```

2、修改`RedisConfig.java`，配置新的`RedisKeySerializer`。
```java{3,16,20}
@Bean
@SuppressWarnings(value = { "unchecked", "rawtypes" })
public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory connectionFactory, RedisKeySerializer redisKeySerializer)
{
	RedisTemplate<Object, Object> template = new RedisTemplate<>();
	template.setConnectionFactory(connectionFactory);

	FastJson2JsonRedisSerializer serializer = new FastJson2JsonRedisSerializer(Object.class);

	ObjectMapper mapper = new ObjectMapper();
	mapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
	mapper.activateDefaultTyping(LaissezFaireSubTypeValidator.instance, ObjectMapper.DefaultTyping.NON_FINAL, JsonTypeInfo.As.PROPERTY);
	serializer.setObjectMapper(mapper);

	// 使用StringRedisSerializer来序列化和反序列化redis的key值
	template.setKeySerializer(redisKeySerializer);
	template.setValueSerializer(serializer);

	// Hash的key也采用StringRedisSerializer的序列化方式
	template.setKeySerializer(redisKeySerializer);
	template.setHashValueSerializer(serializer);

	template.afterPropertiesSet();
	return template;
}
```

此时自定义配置`application.yml`中的`ruoyi.name`就会把所有`redis key`加上对应的前缀。


## 前端静态资源如何整合到后端访问

分离版本都是前端和后端单独部署的，但是有些特殊情况想把前端静态资源整合到后端。提供如下方案：

1、修改`ruoyi-ui`中的`.env.production`（二选一）
```
// 本机地址访问
VUE_APP_BASE_API = '/'
```

```
// 任意地址访问
VUE_APP_BASE_API = '//localhost:8080'
```

2、修改`ruoyi-ui`中的`router/index.js`，设置`mode`属性为`hash`
```js
export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
```

3、执行`bin\build.bat`打包前端静态资源文件。

4、修改后端`resources`中的`application.yml`，添加`thymeleaf`模板引擎配置
```yml
spring:
  # 模板引擎
  thymeleaf:
    mode: HTML
    encoding: utf-8
    cache: false
```

5、修改后端`pom.xml`，增加`thymeleaf`模板引擎依赖
```xml
<!-- spring-boot-thymeleaf -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

6、修改后端`ResourcesConfig.java`中的addResourceHandlers，添加静态资源映射地址
```java
/** 前端静态资源配置 */
registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
```

7、修改后端`SecurityConfig.java`中的configure，添加允许访问的地址。
```java
.antMatchers(
		HttpMethod.GET,
		"/*.html",
		"/**/*.html",
		"/**/*.css",
		"/**/*.js",
		"/static/**",
		"/",
		"/index"
).permitAll()
```

8、后端新建访问控制处理`IndexController.java`设置对应访问页面。
```java
package com.ruoyi.project.system.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController
{
    // 系统首页
    @GetMapping(value = { "/", "/index", "/login" })
    public String index()
    {
        return "index";
    }
}
```

9、整合前端`dist`静态资源文件到后端

* 后端`resources`下新建`templates`目录，复制静态页面`index.html`过来。

* 复制静态文件`static`到`resources`目录下。

10、启动测试访问地址

打开浏览器，输入：`http://localhost:8080` 能正常访问和登录表示成功。


## 使用Velocity模板引擎兼容$符号

[使用Velocity模板引擎兼容$符号](/ruoyi/other/faq.html#使用Velocity模板引擎兼容$符号)


## 登录密码如何使用加密传输方式

[集成jsencrypt实现密码加密传输方式](/ruoyi-vue/document/cjjc.html#集成jsencrypt实现密码加密传输方式)


## 如何解决多数据源事务的一致性

[参考如何解决多数据源事务的一致性](/ruoyi/other/faq.html#如何解决多数据源事务的一致性)


## 登录出现DatatypeConverter异常

错误提示：`Handler dispatch failed; nested exception is java.lang.NoClassDefFoundError: javax/xml/bind/DatatypeConverter`

由于`>= jdk9`中不再包含这个`jar`包，所以需要在`ruoyi-common\pom.xml`手动添加依赖。

```xml
<dependency>
	<groupId>javax.xml.bind</groupId>
	<artifactId>jaxb-api</artifactId>
	<version>2.3.1</version>
</dependency>
```


## 如何优雅的关闭后台系统服务

[参考集成actuator实现优雅关闭应用](/ruoyi-vue/document/cjjc.html#集成actuator实现优雅关闭应用)

## 如何解决导出使用下载插件出现异常

[参考如何解决导出使用下载插件出现异常](/ruoyi/other/faq.html#如何解决导出使用下载插件出现异常)

## 更多项目常见问题查询

分离版本问题和不分离版本大多数雷同。

[RuoYi不分离版本常见问题点我进入](/ruoyi/other/faq.html)
