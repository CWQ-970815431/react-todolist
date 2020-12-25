import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button } from 'antd';//引入antd button组件

class TodoList extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.changeClick=this.changeClick.bind(this)
  }
  //优化子组件不停渲染问题
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
      return true
    }else{
      return false
    }
  }
  render() { 
    // console.log('render');
    return (  
      <div className="todoWrapper">
    <li >
     {this.props.user} <span className="sd">Should</span>  {this.props.content}</li>
     <button className="deleteTodo" onClick={this.handleClick}>delete</button>
     <Button className="changeTodo" onClick={this.changeClick} type="primary">change</Button>
     </div>
    );
  }
  //调用父级方法改变index-删除
  handleClick(){
    this.props.deleteItem(this.props.index)
  }
  //调用父级方法改变index-改变值
  changeClick(){
    this.props.changeItem(this.props.index)
  }
}
//使用Proptypes定义类型
TodoList.propTypes={
  user:PropTypes.string.isRequired,
  content:PropTypes.string,
  index:PropTypes.number,
  deleteItem:PropTypes.func
}
//设置默认值
TodoList.defaultProps={
  user:'陈伟强'
}
 
export default TodoList;
