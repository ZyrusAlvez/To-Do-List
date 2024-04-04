import Card from "./Card.jsx";
import Btn from "./Btn.jsx"

function App(){

  return (
    <>
      <div className="organizer">
        <Card name="HEHE"/>
        <Card name="aha"/>
        <Card/>
      </div>
      <div>
        <Btn/>
      </div>  
    </>
  );
}

export default App