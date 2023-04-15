import './App.css';
import Post from "./Post";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { useState } from "react";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";

function App() {
  const [search, setSearch] = useState('');
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout search={search} setSearch={setSearch} />}>
          <Route index element={<IndexPage searchTerm={search} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
