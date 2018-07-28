import AvgRating from './components/avg_rating/avg_rating.jsx';
import Ratings from './components/ratings/ratings.jsx';
import Search from './components/search/search.jsx';
import TotalNumberReviews from './components/total_number_reviews/total_number_reviews.jsx';
import UserReviews from './components/user_reviews/user_reviews.jsx';
import style from './index.css'

const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      keywords: '',
    };
    this.getData = this.getData.bind(this);
    this.search = this.search.bind(this);
    this.splitPages = this.splitPages.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/rooms/2/reviews')
      .then((response) => {
        this.splitPages(response.data);
        // this.setState({ data: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  splitPages(data) {
    const result = [];
    let pageNumber = 1;
    for (let i = 0; i < data.length; i++) {
      if (i % 5 === 0 && i !== 0) {
        pageNumber += 1;
      }
      data[i].pageNumber = pageNumber;
      result.push(data[i]);
    }
    this.setState({ data: result });
  }

  search(val) {
    this.setState({ keywords: val });
  }

  render() {
    return (
      <div>
        <div className={style.topContainer}>
          <TotalNumberReviews numberOfReviews={this.state.data.length} />
          <AvgRating data={this.state.data} />
          <Search search={this.search} />
        </div>
        <div>
          <Ratings data={this.state.data} />
        </div>
        <UserReviews data={this.state.data} keywords={this.state.keywords} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
