import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './Components/SearchBox';
import ResultsGrid from './Components/ResultsGrid'

class Popify extends Component {
  render() {
    const { searchData: { results } } = this.props;
    return (
      <div>
        <div className="container mt-4">
          <img src="/images/popify.png" alt="popify logo" style={{ width: "80%", maxWidth: "500px" }}/>
          <p style={{ color: "white", fontWeight: "bold" }}>A Spotify Search Engine</p>
        </div>
        <SearchBox />
        {/* only render the results grid if there are any results */}
        { results && <ResultsGrid /> }
      </div>
    );
  }
}

const mapStateToProps = ({ searchData }) => {
  return { searchData }
}

const mapActionsToProps = ({

});

export default connect(mapStateToProps, mapActionsToProps)(Popify);
