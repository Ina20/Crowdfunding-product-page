import React from 'react';

const Statistics = (props) => {

  return (
    <div className="statistics box">
      <div className="stats money">
        <h2>{'$' + props.moneyTotal}</h2>
        <p>of $100,000 backed</p>
      </div>
      <div className="stats backers">
        <h2>5,007</h2>
        <p>total backers</p>
      </div>
      <div className="stats days">
        <h2>56</h2>
        <p>days left</p>
      </div>
    </div>
  )
}

export default Statistics;
