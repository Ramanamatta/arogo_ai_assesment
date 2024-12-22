import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../pages/Header";
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost";
import Post from "../pages/Post";
import EditPost from "../pages/EditPost";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;
