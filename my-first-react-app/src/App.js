import './App.css';


// Heading
function Header() {
  return (
    <div>
      <h1>My Favourite Delicacies</h1>
      <p>Below is a list of meals that I can never get tired of</p>
    </div>
  )
}

// list
function List() {
  return(
    <ul>
      <li>Chapati Beans</li>
      <li>Ugali Nyama</li>
      <li>Rice Beans</li>
      <li>Pilau</li>
    </ul>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
