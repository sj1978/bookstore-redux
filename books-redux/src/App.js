import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Books } from './components/books/Books';
import { Categories } from './components/books/categories/Categories';


const App = () => {
  return (
   <section className="App">
      <nav className='navbar'>
        
          <Link className="link" to="/">Books</Link>
          <Link className="link" to="/categories">Categories</Link>
        </nav>

    <Routes>
        <Route exact path="/" element={<Books />} />

        <Route path="/categories" element={<Categories />} />



      </Routes>

   </section>
  
  );
}

export default App;