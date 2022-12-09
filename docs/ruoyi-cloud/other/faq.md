# 常见问题

## 如何不登录直接访问

登录`nacos`在`配置管理`中`配置列表`，修改`ruoyi-gateway-dev.yml`

在`ignore`中设置`whites`，表示允许匿名访问

```yml
# 不校验白名单
security:
  ignore:
    whites:
      - /auth/logout
      - /auth/login
      - /*/v2/api-docs
      - /csrf
```


## 如何获取用户登录信息

**后端获取当前用户信息**
```java
// 获取当前用户名
String username = SecurityUtils.getUsername();

// 获取当前用户ID
Long userid = SecurityUtils.getUserId();

// 获取当前的用户信息
LoginUser loginUser = SecurityUtils.getLoginUser();
```

**vue中获取当前用户信息**
```javascript
// 获取当前用户名
var username = this.$store.state.user.name;
```

## 如何更换项目包路径

> 可以使用[若依框架包名修改器](https://gitee.com/lpf_project/common-tools)一键替换。


## 如何设置令牌有效期

可以在`ruoyi-common-core`模块中的`com.ruoyi.common.core.constant.CacheConstants`类中设置。

```java
/**
 * 缓存有效期，默认720（分钟）
 */
public final static long EXPIRATION = 720;

/**
 * 缓存刷新时间，默认120（分钟）
 */
public final static long REFRESH_TIME = 120;
```

## 提示您没有数据的权限

这种情况都属于权限标识配置不对在```菜单管理```配置好权限标识（菜单&按钮）
1. 确认此用户是否已经配置角色
2. 确认此角色是否已经配置菜单权限
3. 确认此菜单权限标识是否和后台代码一致  

如参数管理  
后台配置`@RequiresPermissions("system:config:list")`对应参数管理权限标识为`system:config:list`

注：如需要角色权限，配置角色权限字符 使用`@RequiresRoles("admin")`


## 系统接口不显示对应服务

访问`swagger`右上角服务列表没有展示新增服务，确认是否在`ruoyi-gateway-dev.yml`配置了对应服务的路由。

**配置示例**
```yml{5-11}
spring:
  cloud:
    gateway:
      routes:
        # xxxx服务
        - id: ruoyi-xxxx
          uri: lb://ruoyi-xxxx
          predicates:
            - Path=/xxxx/**
          filters:
            - StripPrefix=1
```

因为`swagger`右上角服务列表默认是读取的`gateway`中的`routes`服务列表。


## 登录页面如何不显示验证码

登录`nacos`在`配置管理`中`配置列表`，修改`ruoyi-gateway-dev.yml`

在`captcha`中设置`enabled`属性（`true`开启、`false`关闭）

```yml
# 验证码
security:
  captcha:
    enabled: false
```


## 特殊字符串被过滤的解决办法

默认所有的都会过滤脚本，可以在`ruoyi-gateway-dev.yml`配置`xss.excludeUrls`属性排除`URL`
```yml
# 安全配置
security:
  xss:
    enabled: true
    excludeUrls:
      - /system/notice
```


## 如何区分不同环境下配置文件

当在多配置文件中，需要切换配置文件时，通常的做法都是修改激活的文件名称，而`spring.profiles.active=@profiles.active@`是配合`maven profile`进行选择不同配置文件进行启动，可以避免修改文件，而在`maven`打包是指定使用哪个配置文件。

1、配置`pom.xml`，定义不同环境配置属性。
```xml
<profiles>
	<profile>
		<!-- 本地环境 -->
		<id>dev</id>
		<properties>
			<spring.profile>dev</spring.profile>
			<nacos.server.address>127.0.0.1:8848</nacos.server.address>
		</properties>
		<activation>
			<!-- 是否默认激活 -->
			<activeByDefault>true</activeByDefault>
		</activation>
	</profile>
	<profile>
		<!-- 测试环境 -->
		<id>test</id>
		<properties>
			<spring.profile>test</spring.profile>
			<nacos.server.address>120.120.120.120:8848</nacos.server.address>
		</properties>
		<activation>
			<activeByDefault>false</activeByDefault>
		</activation>
	</profile>
	<profile>
		<!-- 生产环境 -->
		<id>prod</id>
		<properties>
			<spring.profile>prod</spring.profile>
			<nacos.server.address>http://ruoyi.vip:8848</nacos.server.address>
		</properties>
		<activation>
			<activeByDefault>false</activeByDefault>
		</activation>
	</profile>
</profiles>

<build>
    <resources>
        <resource>
            <directory>src/main/resources</directory>
            <filtering>true</filtering>
        </resource>
    </resources>
</build>
```

2、修改对应的配置文件，示例如下。
```yml{12,17,20}
# Tomcat
server:
  port: 9201

# Spring
spring: 
  application:
    # 应用名称
    name: ruoyi-system
  profiles:
    # 环境配置
    active: @spring.profile@
  cloud:
    nacos:
      discovery:
        # 服务注册地址
        server-addr: @nacos.server.address@
      config:
        # 配置中心地址
        server-addr: @nacos.server.address@
        # 配置文件格式
        file-extension: yml
        # 共享配置
        shared-configs:
          - application-${spring.profiles.active}.${spring.cloud.nacos.config.file-extension}
```

3、打包测试。
```sh
mvn clean package -P dev
mvn clean package -P test
mvn clean package -P prod
```

打包成功后会进行对应的替换，例如使用`test`环境打包，配置文件的`@nacos.server.address@`会被替换成`pom.xml`测试配置环境变量`nacos.server.address`值`120.120.120.120:8848`。


## 更多项目常见问题查询

微服务版本问题和分离版本大多数雷同。

[RuoYi-Vue分离版本常见问题点我进入](/ruoyi-vue/other/faq.html)

