# React.js实现todolist

## 目的

- 编写Web应用程序以管理待办事项列表

## 功能

- 允许用户管理待办事项列表（CRUD）
  - 查看待办事项
  - 将新的待办事项添加到列表中
  - 编辑待办事项
  - 从列表中删除待办事项
  - 判断用户输出值为空/为重复
  - 清空所有列表
- 持久存储数据
  - 刷新页面时，列表不会重置
  - 使用HTML5 Web存储（localstorage)

## 技术使用

- 使用[React](https://zh-hans.reactjs.org/docs/getting-started.html)和[JavaScript编写](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- 使用[Ant Design UI组件](https://ant.design/index-cn)进行[设计](https://ant.design/index-cn)
- 使用静态类型检查，Proptypes
- localstorage存储
- 使用shouldComponentUpdate解决子组件大量渲染问题

## 代码中各功能有详细注释请查阅