import React, { Component } from "react";                /* importando a biblioteca component do react*/

class Welcome extends React.Component {                    /*usando OO, cria uma classe filha de componetes do react*/
  constructor(props) {
    super(props);
    this.state = { name: 'Star Geezers' };
  }
  render() {
    return <h1>Meet the <i>{this.props.name}</i></h1>
  }
}

const Hello = (props) => {                           /*Agora a mesma funcionalidade porem usando hooks*/
  const localName = 'Star Team'
  return (
    <h1>Meet the <i>{props.name}</i></h1>
  )
}

function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
        <img src="images/group.svg" alt="StarGazer Group" />
        <hgroup>
          <Welcome name="Star Pozers" />     /*testando*/
          <Hello name="StarGazers" />         /*testando*/

          <img src="images/group.svg" alt="StarGazers Group" />
          <h1>Meet the <i style={{ color: "SteelBlue" }}>{name}</i></h1>
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species.
            They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={() => alert('Hi There')}>Click me</button>
          <button className="outline" onClick={() => alert('Hi there')}>Click Me</button>
        </hgroup>
      </article>
    </div>
