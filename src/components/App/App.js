import React, {Component} from 'react';
import TodoList from '../todo-list/todo-list';
import ItemAddForm from '../item-add-form';
import SearchForm from '../search-form';
import Map from '../map';
const ligbox = <span>Login please</span>;
const login = false;

const Hed = () => {
    return (
      <h1>My to do List</h1>
    );
  };
export default class App extends Component{
    maxId = 100;
    createToDoItem(label){
        return {
            label: label,
            important: false,
            id: this.maxId++,
            done: false
        }
    }
    state = {
        todoData : [
            this.createToDoItem('Drink coffee'),
            this.createToDoItem('Write code'),
            this.createToDoItem('Sleep')
        ],
        term : ""
    };
    deleteItem = (id) => {
        this.setState (({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0,idx), ...todoData.slice(idx+1)];
            return { todoData : newArray};
        });
    };
    addItem = (text) => {
        console.log('added: ',text);
        const newItem = this.createToDoItem(text);
        this.setState(({todoData}) => {
            const newAr = [
                ...todoData,
                newItem
            ]
            return {todoData : newAr};
        });
        
    };
    stayItem = (text) => {
        console.log('search: ',text);
        this.setState(({todoData}) => {
        todoData.forEach(function(item, index, array) {
            if (!item.label.includes(text)){
                console.log('it: ',item, index);
                const idx = index;
                const newArray = [...todoData.slice(0,idx), ...todoData.slice(idx+1)];
                return { todoData : newArray};
            };
          });
        });
    };
    onToggleImportant = (id) =>{
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, important: !oldItem.important};
            const newArray = [...todoData.slice(0,idx),newItem, ...todoData.slice(idx+1)];
            return { todoData : newArray};
        });
    };
    onToggleDone = (id) =>{
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done};
            const newArray = [...todoData.slice(0,idx),newItem, ...todoData.slice(idx+1)];
            return { todoData : newArray};
        });
    };
    onSearchChange = (term)=>{
        this.setState({term});
    };
    search (items, term) {
        if (term.length === 0){
            return items;
        }
        return items.filter((item)=>{
            return item.label.indexOf(term) > -1;
        });
    }
    render(){
        const {todoData, term} = this.state;
        const visibleItems = this.search(todoData, term);
    return (
      
      <div>
        {login ? null : ligbox }
        <Hed />
        <SearchForm onChange = {this.onSearchChange}/>
        <TodoList todos = {visibleItems} 
        onToggleDone={this.onToggleDone}
        onToggleImportant={this.onToggleImportant}
        onDeleted={this.deleteItem} />
        <ItemAddForm onItemAdded={this.addItem}/>
        <Map />
      </div>
    );
    }
  };