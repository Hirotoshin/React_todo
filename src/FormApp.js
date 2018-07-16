import  React, {Component} from  'react';

export  class FormApp extends Component{

   constructor(props){
        super(props);
        this.state = {
            value:'',
            message:''

        };
    }
    handleInput({target:{value}}){
       this.setState({
           value
       });



        console.log('handleInput calded');
        console.log(this.props.name);
    }
    send(){
       const {value} = this.state;
        this.setState({
            value:"",
            message:value
        });


        console.log('send called');
    }

    render(){
        return(
            <div>
                <input type ="text" value={this.state.value} onChange={this.handleInput.bind(this)}/>
                <button onClick={this.send.bind(this)}>SEND</button>
                <div>{this.state.message}</div>
                </div>
        );


    }








}