import React from 'react';
import { connect } from 'react-redux';
import { searchSpotify, updateSearchQuery } from '../../redux/actions';

const Pagination = ({ type, updateSearchQuery, searchSpotify, searchData: { query } }) => {
  
  // creates a pgaination object showing from, to and total
  const pagination = {
    from: type.offset + 1,
    to: (type.offset + type.limit) > type.total ? type.total : (type.offset + type.limit),
    total: type.total
  }

  const handleClick = (event) => {
    const direction = event.target.id;
    // deconstructs the current offest from the type
    let { offset } = type;
    // adds or subtracts 20 depnding on the direction
    direction === "previous" ? offset -= 20 : offset += 20;
    query.offset = offset;
    searchSpotify(query);
    updateSearchQuery(query);
  }

  return (
    <div className="row">
      <div className="d-flex justify-content-end m-3">
        {/* renders a previous button if there is a previous page using the visibilty property in styles - this prevents negative offsets */}
        <button type="button" id="previous" className="btn btn-dark" style={{ visibility: `${type.previous ? "" : "hidden"}` }} onClick={handleClick}>previous</button>

        <p className="m-2 text-white">{
          `results ${pagination.from} to ${pagination.to} of ${pagination.total}`
        }</p>

        <button type="button" id="next" className="btn btn-dark" style={{ visibility: `${type.next ? "" : "hidden"}` }} onClick={handleClick}>next</button>
      </div>
    </div>
  );

};

const mapStateToProps = ({ searchData }) => ({
  searchData
});

const mapActionsToProps = {
  searchSpotify,
  updateSearchQuery
}

export default connect(mapStateToProps, mapActionsToProps)(Pagination);
