import { useEffect, useState } from "react"


function Hello()
{
  function byFn(){
    console.log("bye :(");
  }

  function hiFn(){
    console.log("created :)");

    return byFn;
  };

  useEffect(hiFn, []);

  return <h1>Hello</h1>
}

function App() {

  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {/** 자바 스크립트를 쓸 때 중괄호를 쓰는것을 기억해야한다!!! */}
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
