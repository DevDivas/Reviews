const React = require('react');

const UserReviewsEntry = (props) => {
  return (
    <li>
      {props.review.picture}
      {props.review.name}
      {props.review.date}
      <div>
        {props.review.comment}
      </div>
    </li>
  );
};

export default UserReviewsEntry;