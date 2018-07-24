import style from './total_number_reviews.css';

const React = require('react');

function TotalNumberReviews(props) {
  return <div className="style.TotalNumberReviews">{props.numberOfReviews} Reviews</div>;
}

export default TotalNumberReviews;
