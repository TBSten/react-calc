


function App() {
  return (
    <div className="calc">
      <header>電卓</header>
      <div className="display">
        {/* ここに計算結果表示 */}
      </div>
      <div className="input">
        <div className="numbers">
          {/* ここに数字のボタンや「.」、「=」ボタン */}
        </div>
        <div className="operators">
          {/* ここに「+」、「-」、「*」、「/」ボタン */}
        </div>
      </div>
    </div>
  );
}

export default App;

