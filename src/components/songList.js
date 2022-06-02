import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    console.log(this.props, "props");
    return <div>SONGLIST</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
