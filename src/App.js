import './App.css';
import { Home } from './pages/Home';
import { BookList } from './pages/booklist';
import { Book } from './pages/books';
import { NewBook } from './pages/newbook';
import { NotFound } from './pages/notfound';
import {Routes,Route, Link} from "react-router-dom"
function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">books</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/books">
        <Route path="/:id" element={<Book/>}></Route>
        <Route path="/new" element={<NewBook/>}></Route>
      </Route>
      {/* <Route path="/books" element={<BookList/>}/> 
      <Route path="/books/:id" element={<Book></Book>}></Route>
      <Route path="/book/new" element={<NewBook/>}>NewBook</Route> */}
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    </>
  );
}

export default App;
