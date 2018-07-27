const React = require('react');

const UserReviewsEntry = (props) => {
  if (props.review.comment.toLowerCase().includes(props.keywords.toLowerCase())) {
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
  } else {
    return null;
  }
};

export default UserReviewsEntry;