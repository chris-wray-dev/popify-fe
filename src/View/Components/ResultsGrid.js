import React from 'react';
import { connect } from 'react-redux';
import ResultCard from './ResultCard';
import Pagination from './Pagination';
import { updateSearchQuery, searchSpotify } from '../../redux/actions';
import './ResultsGrid.css';

const ResultsGrid = ({ searchData: { results, query }, updateSearchQuery, searchSpotify }) => {
  const types = Object.keys(results);

  // resets query offset to 0 as you can only specify 1 offset despite mulitple type arrays of differing sizes being returned
  const handleClick = () => {
    query.offset = 0;
    searchSpotify(query);
    updateSearchQuery(query);
  }

  return (
    <div className="container mt-3">
      <ul className="nav nav-pills mb-3 justify-content-md-center" id="pills-tab" role="tablist">
        {/* renders navigational pills to tab between the different type arrays returned */}
        { types.map((type, i) => {
          return(
            <li className="nav-item mx-3" role="presentation" key={type}>
              <button className={`nav-link text-white btn-lg mr-3 ${type} ${i === 0 ? "active" : ""}`} id={type} data-bs-toggle="pill" data-bs-target={`#pill-${type}`} role="tab" aria-controls={`pill-${type}`} aria-selected={i === 0 ? `true` : `false`} onClick={handleClick}>{type}</button>
            </li>
          )
        })}
      </ul>
      {/* renders each type array in a tab page */}
      <div className="tab-content" id="pills-tabContent">
        { types.map((type, i) => {
          return (
            <div className={`tab-pane fade show ${i === 0 ? "active" : ""}`} id={`pill-${type}`} role="tabpanel" aria-labelledby={`pill-${type}-tab`} key={`pill-${type}`}>
              <div className="row mt-3">
                {/* gives a simple previous/next pagination component for each type array */}
                <Pagination type={results[type]} />
                {results[type].items.map(item => {
                  if (item) {
                    return (
                      <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
                        {/* renders a Result Card if there is a result - required as multiple type searches can result in arrays with null items */}
                        {item && <ResultCard item={item} />}
                      </div>
                    ) 
                  } else return null
                })}
                <Pagination type={results[type]} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({ searchData }) => ({
  searchData
})

const mapActionsToProps = ({
  updateSearchQuery,
  searchSpotify
})

export default connect(mapStateToProps, mapActionsToProps)(ResultsGrid);
