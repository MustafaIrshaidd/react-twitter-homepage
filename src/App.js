import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <>
      <Post
        name={"danabramov.bsky.social"}
        userName={"@dan_abramov"}
        date={"29 May"}
        content={"Happy 10th birthday to @ReactJS !"}
        commentsCount={"64"}
        likesCount={"3"}
        retweetsCount={"401"}
        statisticsCount={"1147"}></Post>
    </>
  );
}

export default App;
