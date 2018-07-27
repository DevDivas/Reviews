import UserReviewsEntry from '../user_reviews_entry/user_reviews_entry.jsx';

const React = require('react');


const UserReviews = (props) => {
  return (
    <ul>
      {props.data.map((data) => {
        return <UserReviewsEntry key={props.data.indexOf(data)} review={data} />;
      })}
    </ul>
  );
};

export default UserReviews;
