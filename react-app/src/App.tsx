import ListGroup from "./components/ListGroup"
import Alert from "./components/Alert"
import {useState} from "react";

import Button from "./components/Button"

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);


  const cities = ['New York','San Francisco','Tokyo','London','Paris'];
  const foods = ['Hot Dog', 'Chicken'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
  <div>
    <ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem}/>
    <ListGroup items={foods} heading="Foods" onSelectItem={handleSelectItem}/>
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>}
    <Button color="danger" onClick={() => {setAlertVisibility(true)}}>My Button</Button>
  </div>)
  
  
}

export default App
