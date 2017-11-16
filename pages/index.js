import React, {Component} from 'react';
import axios from 'axios';
// import LZString from 'lz-string';
// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { ApolloProvider } from 'react-apollo';

// import { gql, graphql } from 'react-apollo';

// const client = new ApolloClient({
//     // By default, this client will send queries to the
//     //  `/graphql` endpoint on the same host
//     // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
//     // to a different host
//     link: new HttpLink(),
//     cache: new InMemoryCache()
//   });

export default class Index extends Component{
    constructor(props){
        super(props);
        
        this.state= { image:"/static/images/test.png", imageData: null };
    }

    // componentDidMount(){

    //     // console.log(query);
    // }

    renderData(){
        if(this.state.imageData !== null){
            return (<p>{this.state.imageData.substring(0, 50)}</p>)
        }
        else{
            return null;
        }
    }

    handleChange(){
        var FR = new FileReader();
        var self = this;
        var imageTarget = document.querySelector('.file-upload').files[0];

        FR.addEventListener("load", function () {
            self.setState({imageData:this.result});
        }, false);

        FR.readAsDataURL(imageTarget);

        this.setState({
            image : window.URL.createObjectURL(imageTarget)
        });
    }

    reset(){
        this.setState({
            image: "/static/images/test.png",
            imageData : null
        })
    }

    submit(){
        console.log(this.state.imageData.length);
        var submission = {
            data : this.state.imageData
        }

        console.log(submission.data.length);

        self = this;
        axios.post('/api/post', submission)
          .then(function (response) {
              console.log(response);
            self.setState({image : "./static/images/rendered/" + response.data.filename})
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render(){
        return(
            // <ApolloProvider client={client}>
                <div>
                    <button onClick={this.reset.bind(this)}>Reset</button>

                    <img className="preview" src={this.state.image} />
                    <br />
                    
                    <input className={"file-upload"} accept=".png, .jpg, .jpeg" type="file"  onChange={this.handleChange.bind(this)} />​
                    <button onClick={this.submit.bind(this)}>Submit</button>
                    
                    {this.renderData()}
                </div>
            // </ApolloProvider>
        );
    }
}