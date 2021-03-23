import './App.css';
import ClassComponent from './components/ClassComponent';
import EventHandlerUsingClassComp from './components/EventHandlerUsingClassComp';
import EventHandlerUsingFunctionalComp from './components/EventHandlerUsingFunctionalComp';
import FunctionalComponent from './components/FunctionalComponent';
import StateHandlerUsingClassCompo from './components/StateHandlerUsingClassCompo';

function App() {
  return (
    <div className="App">
      <FunctionalComponent/>
      <ClassComponent/>
      <EventHandlerUsingFunctionalComp/>
      <EventHandlerUsingClassComp/>
      <StateHandlerUsingClassCompo/>
    </div>
  );
}

export default App;
