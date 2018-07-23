import AvgRating from './components/avg_rating.jsx';
import Ratings from './components/ratings.jsx';
import Search from './components/search.jsx';
import TotalNumberReviews from './components/total_number_reviews.jsx';
import UserReviews from './components/user_reviews.jsx';
// import UserReviewsEntry from './components/user_reviews_entry.jsx';

const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  render() {
    return (
      <div>
        <TotalNumberReviews />
        <AvgRating />
        <Search />
        <Ratings />
        <UserReviews />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
