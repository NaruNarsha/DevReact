import { useState, useEffect } from 'react';

function App() {
  
  const [loading, setLoading] = useState(true); 
  const [coins, setCoins] = useState([]);  

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []); // 아무것도 주시하고 있지 않으면 (빈 배열이면) 이 코드는 한 번만 실행된다.

  return (
  <div>
    <h1>The Coins !! {loading ? "" : '(${coins.length})'} </h1>
    {loading ? <strong>Loading....</strong> : null}
    <select>
      {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
          </option>
        ))}
    </select>
  </div>
  );
}

export default App;
