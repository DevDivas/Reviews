const React = require('react');

const Ratings = (props) => {
  const getAverage = (fields) => {
    return (
      Math.round((props.data.map(data => data[fields])
        .reduce((acc, cur) => acc + cur)) / props.data.length)
    );
  };

  return (
    <div>
    Ratings
      <div>
      Accuracy
        {props.data.length !== 0
          && getAverage('accuracy')}
      </div>
      <div>
      Communication
        {props.data.length !== 0
          && getAverage('communication')}
      </div>
      <div>
      Cleanliness
        {props.data.length !== 0
          && getAverage('cleanliness')}
      </div>
      <div>
      Location
        {props.data.length !== 0
          && getAverage('location')}
      </div>
      <div>
      Check-in
        {props.data.length !== 0
          && getAverage('check_in')}
      </div>
      <div>
      Value
        {props.data.length !== 0
          && getAverage('value')}
      </div>
    </div>
  );
};

export default Ratings;
