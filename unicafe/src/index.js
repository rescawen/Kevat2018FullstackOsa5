import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counterReducer from './reducer'
 
const store = createStore(counterReducer)

const Statistiikka = (props) => {

  var palautteita = 0

  if(store.getState().good !== 0 ||store.getState().ok !== 0||store.getState().bad !== 0 ) {
    palautteita = 1
  }

  if (palautteita === 0) {
    return (
      <div>
        <h2>stataistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{store.getState().good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{store.getState().ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{store.getState().bad}</td>
          </tr>
          <tr>
            <td>hyviä</td>
            <td>{
               Math.round((store.getState().good / (store.getState().good + store.getState().ok + store.getState().bad))  * 100) 
              
              }%</td>
          </tr>
        </tbody>
      </table>

      <button onClick={props.zero}>nollaa tilasto</button>
    </div >
  )
}

class App extends React.Component {

    constructor(props) {
    super(props);

    store.subscribe(() => {
      this.setState({
        good: store.getState().good,
        ok: store.getState().ok,
        bad: store.getState().bad,
        
        
      });
    });
  }

  klik = (nappi) => () => {
    store.dispatch({type: nappi})
    console.log(store.getState())
  }


  render() {
    
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka zero={this.klik('ZERO')} procent={this.procent} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));