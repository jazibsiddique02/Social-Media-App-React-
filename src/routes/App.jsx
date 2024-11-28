import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostListProvider from "../store/post-list-provider";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {/* {selectedTab === "Home" ? <PostList /> : <CreatePost />} */}
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
