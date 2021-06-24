import { useState } from 'react';
import './App.css';

function App() {
  const [btnBgColor, setBtnBgColor] = useState('#aeb3f8');
  const [bgColors, setBgColors] = useState([
    '#dc7f13',
    '#5473f7',
    '#8729fd',
    '#be0c68',
    '#829831'
  ]);

  const getRandomColor = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

  const getShuffledArr = arr => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
  };

  const clickHandler = (e) => {
    setBtnBgColor(getRandomColor());
    setBgColors(prev => {
      return getShuffledArr(prev);
    });
  };

  return (
    <>
      <header className="background" style={{backgroundColor: bgColors[0] }}>Header</header>
      <div className="container" style={{backgroundColor: bgColors[1] }}>
        <nav className="background" style={{backgroundColor: bgColors[2] }}>Navigation</nav>
          <main className="background" style={{backgroundColor: bgColors[3] }}>
          <button className="main-btn" style={{backgroundColor: btnBgColor }} onClick={clickHandler}>Click me</button>
          </main>
        <aside className="background" style={{backgroundColor: bgColors[4] }}>Sider</aside>
      </div>
      <footer className="background" style={{backgroundColor: bgColors[5] }}>Footer</footer>
    </>
  );
}

export default App;
