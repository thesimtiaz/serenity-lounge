import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <main className="md:flex p-4">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </div>
  );
}

export default App;
