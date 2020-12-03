import Page from './Components/Page'
import './App.css';
import   {Route,Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
            <Switch>
              <Route path='/' exact component={Page}/>
            </Switch>
    </div>
  );
}

export default App;
