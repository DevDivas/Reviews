const React = require('react');

function AvgRating(props) {
  return <div>{props.data.length !== 0 &&
                Math.round((props.data.map((data) => data.average).reduce((acc, cur) => acc + cur)) / props.data.length)}
         </div>;
}

export default AvgRating;
