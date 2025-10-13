import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`Count ist: ${count}`);
    return () => console.log("Cleanup läuft");
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>--</button>
      <button onClick={() => setCount(count + 1)}>++</button>
      <br/>
      <button onClick={() => setCount(0)}>0</button>
      <p>Click 'em :)</p>
    </div>
  );

}

export default App
