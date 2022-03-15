import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import NamePlate from './NamePlate/NamePlate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid">
          <div className="bio">
            <Card name="Image"></Card>
            <NamePlate></NamePlate>
            <Card name="Sections"></Card>
            <Card name="Links"></Card>
          </div>
          <div className="content">
            <Card name="About"></Card>
            <Card name="Education"></Card>
            <Card name="Projects"></Card>
            <Card name="Former Jobs"></Card>
            <Card name="Skills"></Card>
            <Card name="Coursework"></Card>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Project in Progress. Please visit some time later.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
