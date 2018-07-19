import  React, {Component} from  'react';
import  request from "superagent";

export  class FormApp extends Component{

   constructor(props){
        super(props);
        this.state = {
            value:'',
            messages:[]

        };
    }

    componentDidMount(){
        request
            .get("http://127.0.0.1:5000/message")
            .then(response =>{
                console.log(response);
                this.setState({
                    messages:response.body.Allmessage
                })
            })
    }
    handleInput({target:{value}}){
       this.setState({
           value
       });

    }
    send(){
       const {value} = this.state;

        request
            .post("http://127.0.0.1:5000/message")
            .set("Content-Type","application/json")
            .send({
                message:value
            })
            .then(res => {
                console.log(res);
                this.setState({
                    messages:res.body.Allmessage
                })
            })

    }

    render(){
        return(
            <div>
                <input type ="text" value={this.state.value} onChange={this.handleInput.bind(this)}/>
                <button onClick={this.send.bind(this)}>SEND</button>
                {this.state.messages.map((message) =>{
                    return <div>{message}</div>
                }
                )
                }
                </div>
        );


    }








}