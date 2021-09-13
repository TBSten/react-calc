import Button from "./components/Button" ;

function App() {
  return (
    <div className="calc">
      <header>電卓</header>
      <div className="display">dipslay</div>
      <div className="input">
        <div className="numbers">
          {
            [1,2,3,4,5,6,7,8,9,0,".","="].map(el=>(
              <Button text={el}/>
            ))
          }
        </div>
        <div className="operators">
          {
            ["/","*","-","+"].map(el=>(
              <Button text={el}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;

