import { useCallback, useState } from 'react';
import './App.css';

const images = [
  'https://images.unsplash.com/photo-1558809935-961cd4ed4938?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1570646192295-4374691d97e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
  'https://images.unsplash.com/photo-1599245721985-32af458d77ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=883&q=80',
  'https://images.unsplash.com/photo-1528696334500-245a1b1b67f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1522648485144-849409408aee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
];

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

function App() {
  const [btnBgColor, setBtnBgColor] = useState('#aeb3f8');
  const [bgImages, setBgImages] = useState(images);

  const clickHandler = useCallback((e) => {
    setBtnBgColor(getRandomColor());
    setBgImages(prev => {
      return getShuffledArr(prev);
    });
  }, []);

  return (
    <>
      <header className="background" style={{backgroundImage: `url(${bgImages[0]})` }}>Header</header>
      <div className="container">
        <nav className="background" style={{backgroundImage: `url(${bgImages[1]})` }}>Navigation</nav>
          <main className="background" style={{backgroundImage: `url(${bgImages[2]})` }}>
            <button className="main-btn" style={{backgroundColor: btnBgColor }} onClick={clickHandler}>Click me</button>
          </main>
        <aside className="background" style={{backgroundImage: `url(${bgImages[3]})` }}>Sider</aside>
      </div>
      <footer className="background" style={{backgroundImage: `url(${bgImages[4]})` }}>Footer</footer>
    </>
  );
}

export default App;
