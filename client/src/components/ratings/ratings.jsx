const React = require('react');

const Ratings = (props) => {
  return (
    <div>
    Ratings
      <div>
      Accuracy
        {props.data.length !== 0
          && Math.round((props.data.map(data => data.accuracy)
            .reduce((acc, cur) => acc + cur)) / props.data.length)}
      </div>
      <div>
      Communication
        {props.data.length !== 0
          && Math.round((props.data.map(data => data.communication)
            .reduce((acc, cur) => acc + cur)) / props.data.length)}
      </div>
      <div>
      Cleanliness
        {props.data.length !== 0
          && Math.round((props.data.map(data => data.cleanliness)
            .reduce((acc, cur) => acc + cur)) / props.data.length)}
      </div>
      <div>
      Location
        {props.data.length !== 0
          && Math.round((props.data.map(data => data.location)
            .reduce((acc, cur) => acc + cur)) / props.data.length)}
      </div>
      <div>
      Check-in
        {props.data.length !== 0
          && Math.round((props.data.map(data => data.check_in)
            .reduce((acc, cur) => acc + cur)) / props.data.length)}
      </div>
      <div>
      Value
        {props.data.length !== 0
          && Math.round((props.data.map(data => data.value)
            .reduce((acc, cur) => acc + cur)) / props.data.length)}
      </div>
    </div>
  );
};

export default Ratings;
