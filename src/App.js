import "./App.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import User from "./components/User";

function App() {
  return (
    <>
      <Post
        name={"danabramov.bsky.social"}
        userName={"@dan_abramov"}
        postDate={"29 May"}
        content={"Happy 10th birthday to @ReactJS !"}
        commentsCount={"64"}
        likesCount={"3"}
        retweetsCount={"401"}
        statisticsCount={"1147"}></Post>

      <User
        name={"Mustafa Irshaid"}
        userName={"@mustafairshaidd"}
        bio={
          "We're a community of millions of people who are building new skills and getting new jobs together."
        }
        isVerfied={true}></User>

        <Navbar/>
    </>
  );
}

export default App;
