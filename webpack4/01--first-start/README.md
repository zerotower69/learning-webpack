# 环境构建

```shell
npm init -y

npm install webpack@4 webpack-cli@4 -D
```

# 代码文件

新建 `src`目录，其下再建立hello.js

```javascript
const sayHello = () => {
    console.log('hello zerotower!');
}

export default sayHello;
```

再建立index.js文件引入导出的方法。

# 配置文件

根目录下 `webpack.config.js`

```javascript
const path = require('path');

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
}
```

# 脚本配置

`packages.json`的scripts脚本配置
![img]()
