import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre';
import Button from './components/Button';

/*
Simulation de données JSON
*/
const famille = {
  membre1: {
    nom: 'Matthieu',
    age: 28
  },
  membre2: {
    nom: 'Klara',
    age: 24
  },
  membre3: {
    nom: 'Bibou',
    age: 5
  },
  membre4: {
    nom: 'Doudoune',
    age: 3
  }
}


class App extends Component {

  state = {
    famille,
    //isShow permet de montrer une description apres click
    isShow: false
  }

  handleClick = (num) => {
    const famille = {... this.state.famille};
    famille.membre1.age += num;
    this.setState({famille});
  }

  handleChange = (event, id) => {
    const famille = {... this.state.famille};
    const nom = event.target.value;
    famille[id].nom = nom;
    console.log(nom);
    this.setState({famille});
  }

  hideName = id => {
    const famille = {... this.state.famille};
    famille[id].nom = 'X';

    this.setState({famille});
  }

  handleChangeAge = event => {
    const famille = {... this.state.famille};
    const age = event.target.value;
    famille.membre2.age = age;
    console.log(age);
    this.setState({famille});
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow;
    this.setState({isShow});
  }

  render(){

    const {titre} = this.props; //Destructuring
    const {famille, isShow} = this.state;
    // On set la decription à null par default
    let description = null;

    // If on click alors je suis un chien apparait
    if(isShow) {
      description =(
         <strong>Je suis un chien!</strong>
      )
    }

    /*
    * Objet liste qui va parcourir nos membre pour les afficher
    */
    const liste = Object.keys(famille)
    .map(membre => (
      <Membre
      key = {membre}
      handleChange = {event => this.handleChange(event, membre)}
      hideName = {() => this.hideName(membre)}
      age={famille[membre].age}
      nom={famille[membre].nom} />
    ))
    console.log(liste);

  return (

    //Fragment permet d'englober mes éléments HTML sans le rendre
    //dans le navigateur
    <div className="App">
      <h1>{titre}</h1> 


      <input value={famille.membre2.age} onChange=
      {this.handleChangeAge} type='text'/>
      
      {liste}

{/*
      <Membre nom ={famille.membre4.nom}
              age={famille.membre4.age}> 

      {description}

      <button onClick={this.handleShowDescription}>

        { isShow ? 'Cacher'  : 'Montrer' }
        
      </button>
      </Membre> */
  }

      <Button 
          vieillir={() => this.handleClick(2)}/>

    </div>


    /*
    Création d'un élément simple (Balise Titre)
    */
   // React.createElement("div", null, React.createElement('h1', null, 'React App'))
  )
 }
}

export default App;
