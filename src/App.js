import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>	
class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
      
      	$.getJSON('https://api.unsplash.com/users/sukumu/photos/?client_id=W8vWI-gJMLM96O4Eg_wST1Uf63Wry9BUG9Abwfcp1_I', function(data) {
  console.log(data);
  
  $.each(data, function(index, value) {
    console.log(value);
    
     var name = value.user.name;
     var bio = value.user.bio;
     var imageURL = value.urls.regular;
    
//$('.name').text(name);
//$('.bio').text(bio);
//$('.image img').attr('src', imageURL);
    
    $('.output').append('<h1 class="name">' + name + '</h1><h2 class="bio">' + bio + '</h2><div class="image"><img src="' + imageURL + '"/></div>');
      });
});
      
      
      
    )
  }
}

export default App
