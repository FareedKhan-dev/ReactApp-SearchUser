import React from 'react';

const robot = (props) => {
  const {id,name,email} = props;
  return (
    <div className="back dib bw tc shadow-5 pa3 ma3 grow">
      <img src={`https://picsum.photos/id/${id}/300/200`} alt="profile"/>
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default robot;