import React, {Component} from 'react';
import './search-form.css';

export default class SearchForm extends Component{
    state = {
        term: ''
    };

    onLabelChange = (e)=>{
        const term = e.target.value;
        this.setState({ term });
        this.props.onChange(term);
    };
    
    render(){
        const searchStyle = {
            fontSize: '25px'
        };
        return(
            <form className='search-formt d-flex'>
                <input style = {searchStyle} 
                onChange={this.onLabelChange}
                value={this.state.term}
                placeholder = "search" />
                <button className='btn btn-outline-secondary'>
                    All
                </button>
                <button className='btn btn-outline-secondary'>
                    Active
                </button>
                <button className='btn btn-outline-secondary'>
                    Done
                </button>
            </form>
        )      
        
    }
}