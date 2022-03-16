import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import NamePlate from './NamePlate/NamePlate';
import Links from './Links/Links';
import Section from './Section/Section';
//import Carousel from './Carousel/Carousel';

function App() {
  var data = {
    "leadingText": "All about",
    "slides": [
      {
        "introline": "dogs",
        "id": "dogs",
        "content": {
          "copy": "Dog ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus."
        }
      },
    ]
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid">
          <div className="bio">
            <Card name="Image"></Card>
            <NamePlate></NamePlate>
            <Card name="Sections"></Card>
            <Section name="Education"></Section>
            <Links></Links>
          </div>
          <div className="content">
            {/*<Carousel data={data.slides} leadingText={data.leadingText}></Carousel>*/}
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
