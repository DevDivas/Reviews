const React = require('react');
import style from './total_number_reviews.css';

const TotalNumberReviews = (props) => {
  return (
    <div className={style.TotalNumberReviews}>
      <h2>
        {props.numberOfReviews} Reviews
      </h2>
    </div>
  )
};

export default TotalNumberReviews;
