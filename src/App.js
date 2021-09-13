import {useState} from "react" ;
import Button from "./components/Button" ;

function calc(l,o,r){                     //左辺,演算子,右辺を受け取って計算結果を返す
  let ans = "計算エラーです" ;
  try{
    if(o === "+"){
      ans = l+r;
    }else if(o === "-"){
      ans = l-r;
    }else if(o === "*"){
      ans = l*r;
    }else if(o === "/"){
      ans = l/r;
    }
  }catch(e){
    console.error(e);
  }
  return ans ;
}

function App() {
  const [left,setLeft] = useState(0) ;    //左辺 (0-9)
  const [ope,setOpe] = useState(null);    //演算子 (+,-,*,/)
  const [right,setRight] = useState(0) ;  //右辺 (0-9)
  const [ans,setAns] = useState(null);    //答え 

  function keyClicked(key){               //ボタンがクリックされたら
    if(Number.isInteger(key)){            //もし数字が入力されたら
      if(ope === null){                   //演算子入力前なら
                                          //左辺に結合
        setLeft(parseFloat(left+""+key));
      }else{
                                          //右辺に結合
        setRight(parseFloat(right+""+key));
      }
    }else if(key === "+" | key === "-" | key === "*" | key === "/"){
                                          //もし演算子が入力されたら
      setOpe(key);
    }else if(key === "="){                //もし=が入力されたら
      setAns(calc(left,ope,right));       //計算結果をansにセット
    }
  }
  return (
    <div className="calc">
      <header>電卓</header>
      <div className="display">
        {
          ans !== null?
          `計算結果：${ans}`
          :
          `${left} 
            ${ope !== null ?ope:""} 
            ${ope != null ?right:""} `
        }
      </div>
      <div className="input">
        <div className="numbers">
          {
            [7,8,9,4,5,6,1,2,3,0,".","="].map(el=>(
              <Button text={el} onClick={()=>keyClicked(el)} key={el}/>
            ))
          }
        </div>
        <div className="operators">
          {
            ["/","*","-","+"].map(el=>(
              <Button text={el} onClick={()=>keyClicked(el)} key={el}/>
            ))
          }
        </div>
      </div>


    </div>
  );
}

export default App;

