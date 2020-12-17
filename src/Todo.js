import React,{Component,Fragment} from 'react'
// import axios from 'axios'
import './style.css'
import TodoList from './TodoList'
import 'antd/lib/button/style';
import 'antd/dist/antd.css'
import { Button } from 'antd';
import { Alert } from 'antd';
import { BackTop } from 'antd';

class Todo extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue:'', //输入框默认值为0
      list:[] //todolist表单
    }

  }
  
  UNSAFE_componentWillMount() {
   
    // console.log('11');
     //从localStrong中获取myList
    var list = localStorage.getItem('list')
    if (list === null || list === '') {
      list = []//初始化myList数组
    } else {
        //把字符串转数组
        list = list.split(',')
    }
    //设置状态值
    this.setState({
      list: list
    })
}
onState() {
  //更新list
  this.setState({
      list: this.state.list
  }, () => {
      //把更新后的state数据更新到localStrong中
      localStorage.list = this.state.list
  })
}


  render(){
    // console.log('render');
    return (
      //flex
        <Fragment>
         <Alert
      message="Please input your do list"
      type="warning"
      closable
    />
          <div className="content">
          <div className="header"> 
          <div className="react-todolist">React Todos</div>
          <input
           id="cwq"
           className="add" 
           value={this.state.inputValue} 
           onChange = {this.inputChange.bind(this)}
           ref={(input)=>{this.input=input}}
           placeholder="Do it!"
           />
   
           <button className="btn" 
           onClick={this.addList.bind(this)} 

           >add</button>
          <Button 
           className="clear" 
           type="primary" 
           onClick={this.clearClick.bind(this)}
           danger>clear
         </Button>
           
        
          </div>
         <ul ref={(ul)=>{this.ul=ul}}>
            {this.state.list.map((item,index)=>{
              return (
                 <TodoList 
                  key={index+item}
                  content={item}
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}
                  changeItem={this.changeItem.bind(this)}
                 > </TodoList>
                 )
              })
            }
        </ul>
        <BackTop>
      <div className="UP">UP</div>
    </BackTop>
        </div>
        </Fragment>
    )
  }
  //输入框输入
  inputChange(){
    this.setState({
      inputValue:this.input.value
    })
  }
  //增加服务
  addList(){
    //判断是否已存在该list
  if(!this.state.list.includes(this.state.inputValue) && this.state.inputValue !== ''){
      // console.log('11');
      this.setState({
        list:[...this.state.list,this.state.inputValue],
        //添加后，清空输入框
        inputValue:''
      },()=>{
        //更新后，放进localStrong中
        localStorage.list = this.state.list
      })
    }else if(this.state.inputValue === ''){
      //输入框为空
      alert('输入值为空！！')
    }else{
      //输入值已存在
      alert('该dolist 已存在！请勿重复添加') 
    }
  }

  //取消服务
  deleteItem(index){
    let list = this.state.list
    //再次确认
    var ok = window.confirm('确认删除吗？')
    if(ok){
      this.onState()
      list.splice(index,1)
      this.setState({
        list:list
      })
    }
   else{
     alert('删除失败')
   }
  }
  changeItem(index){
    var str = prompt('请输入修改内容：')
    if (str != null) {
        //二次确认
        var ok = window.confirm('确认修改吗？')
        if (ok) {
            this.state.list.splice(index, 1, str)
            //调用本地储存方法
            this.onState()
        }
        else{
          alert('修改失败')
        }
    }
     else{
          alert('修改失败')
        }
  }
  //清空dolist
  clearClick(){
    //判断list是否为空
    if(this.state.list.length>0){
      var ok = window.confirm('确认清空吗？')
      if(ok){
       var okt =window.confirm('一旦删除无法恢复，确定删除吗?')
       if(okt){//二次确认
        this.setState({
          list:[],//清空list
        },()=>{
          //更新后，放进localStrong中
          localStorage.list = this.state.list
        })
       }
     }
   }
    else{
      window.confirm('你没有什么好清空的')
    }
  }
}
export default Todo




