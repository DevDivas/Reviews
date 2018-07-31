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
      searchedData: 1,
      keywords: '',
    };
    this.getData = this.getData.bind(this);
    this.search = this.search.bind(this);
    this.splitPages = this.splitPages.bind(this);
    this.backBtn = this.backBtn.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/rooms/2/reviews')
      .then((response) => {
        this.setState({
          data: this.splitPages(response.data),
        });
        // this.splitPages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  splitPages(data) {
    if (!data) {
      data = this.state.data;
    }
    const result = [];
    let pageNumber = 1;
    for (let i = 0; i < data.length; i++) {
      if (i % 5 === 0 && i !== 0) {
        pageNumber += 1;
      }
      data[i].pageNumber = pageNumber;
      result.push(data[i]);
    }
    return result;
  }

  backBtn() {
    this.setState({ searchedData: 1 });
  }

  search(val) {
    // this.state.data.map((data) => {
    //   if (data.comment.includes(val))
    // })
    const result = this.splitPages(this.state.data.filter(data => data.comment.includes(val)));
    if (result.length !== 0) {
      this.setState({ searchedData: result });
    } else {
      this.setState({ searchedData: 'nothing' });
    }
    this.setState({ keywords: val });
  }

  render() {
    return (
      <div>
        <div className={style.topContainer}>
          <TotalNumberReviews numberOfReviews={this.state.data.length} />
          <AvgRating data={this.state.data} />
          <Search search={this.search} value={this.state.searchedData} />
        </div>
        <div>
          {this.state.searchedData === 1
            && <Ratings data={this.state.data} />}
        </div>
        {this.state.searchedData === 'nothing'
          && (
            <div className={style.backBtnContainer}>
              <div className={style.backBtnString}>
                0 guests have mentioned “{this.state.keywords}”
              </div>
              <button className={style.backBtn} type="button" onClick={this.backBtn}>Back to all reviews</button>
            </div>
          )}
        {Array.isArray(this.state.searchedData) === true
          && (
            <div className={style.backBtnContainer}>
              <div className={style.backBtnString}>
                {this.state.searchedData.length} guests have mentioned “{this.state.keywords}”
              </div>
              <button className={style.backBtn} type="button" onClick={this.backBtn}>Back to all reviews</button>
            </div>
          )}
        {Array.isArray(this.state.searchedData) === true ? (
          <UserReviews data={this.state.searchedData} keywords={this.state.keywords} />
        ) : (
          <UserReviews data={this.state.data} keywords={this.state.keywords} />
        )}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
