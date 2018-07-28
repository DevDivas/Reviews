import style from './avg_rating.css';

const React = require('react');


const AvgRating = (props) => {

  const getAverage = () => {
    if (props.data.length !== 0) {
      return (
        (props.data.map(data => data.average)
          .reduce((acc, cur) => acc + cur)) / props.data.length
      );
    }
  };

  const starPercentage = (rating) => {
    const stars = {
      width: `${(rating * 20).toString()}%`,
    };
    return stars;
  };

  return (
    <div className={style.avgRating}>
        <div className={style.starsOuter}>
          <div className={style.starsInner} style={starPercentage(getAverage())} />
        </div>
    </div>
  );
};

export default AvgRating;