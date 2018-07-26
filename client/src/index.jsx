import AvgRating from './components/avg_rating/avg_rating.js';
import Ratings from './components/ratings/ratings.jsx';
import Search from './components/search/search.js';
import TotalNumberReviews from './components/total_number_reviews/total_number_reviews.js';
import UserReviews from './components/user_reviews/user_reviews.js';
// import UserReviewsEntry from './components/user_reviews_entry.jsx';

const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get('/rooms/2/reviews')
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  render() {
    return (
      <div>
        <TotalNumberReviews numberOfReviews={this.state.data.length} />
        <AvgRating data={this.state.data} />
        <Search />
        <Ratings data={this.state.data}/>
        <UserReviews />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
