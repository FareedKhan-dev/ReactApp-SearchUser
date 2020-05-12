import React from 'react';

export const SearchBox = ({secondchange}) => {
  return (
    <div>
      <input onChange={secondchange} type="search"  className="SearchTerm ma3 pa3" placeholder="Search"/>
    </div>
  );
}