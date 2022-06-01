
import LearnMore from './components/LearnMore';
import MetaMask from './components/MetaMask';
import './App.css';

function App() {
  const obj = {
    friend: '1',
    red: '2'

  }
  const list = [
    {
      id: "1",
      name: "Shoken",
      NoOfList: 5,
      content: '3',
      priority: "1"
    },
    {
      id: "2",
      name: "SG Token",
      NoOfList: 5,
      content: '3',
      priority: "1"
    },
    {
      id: "3",
      name: "SG hoken",
      NoOfList: 5,
      content: '3',
      priority: "1"

    },
  ]
  return (<div className='App-link'>
    <div>
      <h1>
        nxedjnicl

      </h1>
    </div>
    <div className='center'>
      <h2>nvmkjjs</h2>
    </div>

    <div className='App-link'>
      <LearnMore abc={obj.red}>

      </LearnMore>
    </div>
    <button id="metamask" onClick={MetaMask()}>connect

    </button>
  </div>
  );
}

export default App;
