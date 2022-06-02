import React from "react";
import { selectSong } from "../actions";
import SongList from "./songList";
const App = () => {
  return (
    <div className="App">
      <SongList />
    </div>
  );
};
export default App;
