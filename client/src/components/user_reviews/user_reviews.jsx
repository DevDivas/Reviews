import UserReviewsEntry from '../user_reviews_entry/user_reviews_entry.jsx';
import style from './user_reviews.css'

const React = require('react');


class UserReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
    this.handleClick = this.handleClick.bind(this);
    this.pageButton = this.pageButton.bind(this);
    this.leftBtn = this.leftBtn.bind(this);
    this.rightBtn = this.rightBtn.bind(this);
    this.highlight = this.highlight.bind(this);
  }

  handleClick(e) {
    this.setState({ page: parseInt(e.target.innerText) });
  }

  pageButton(pageNumber, currentPage, numberOfPages, pageOne) {
    if (pageNumber === pageOne || pageNumber === numberOfPages) {
      return true;
    }
    if (currentPage === 4 && pageNumber === 2) {
      return true;
    }
    if (currentPage === numberOfPages - 3 && pageNumber === numberOfPages - 1) {
      return true;
    }
    if ((currentPage - pageNumber) > 1
      && (numberOfPages - pageNumber) !== 2) {
      return false;
    }
    if ((pageNumber - currentPage) > 1
      && (pageNumber - 1) !== 2) {
      return false;
    }
    return true;
  }

  leftBtn() {
    if (this.state.page !== 1) {
      this.setState({ page : this.state.page - 1})
    }
  }

  rightBtn() {
    if (this.state.page !== Math.ceil((this.props.data.length) / 5)) {
      this.setState({ page : this.state.page + 1})
    }
  }

  highlight(pageNumber) {
    if (pageNumber === this.state.page) {
      return <div className={style.currentPage}>{pageNumber}</div>;
    }
    return <div>{pageNumber}</div>
  }

  render() {
    return (
      <div className={style.reviewContainer}>
        <div>
          {this.props.data.map((data, ind) => {
            if (data.pageNumber === this.state.page) {
              return (
                <UserReviewsEntry key={ind.toString()} review={data} keywords={this.props.keywords} />
              );
            }
          })}
        </div>
        <div>
          <button className={style.leftBtn} onClick={this.leftBtn} />
          {this.props.data.map((data, ind) => {
            const pageNumber = ind / 5 + 1;
            const currentPage = this.state.page;
            const numberOfPages = Math.ceil((this.props.data.length) / 5);
            const pageOne = 1;
            if (ind % 5 === 0
                && this.pageButton(pageNumber, currentPage, numberOfPages, pageOne)) {
              return (
                <button className={style.button} type="button" onClick={this.handleClick} key={ind.toString()}>
                  {this.highlight(pageNumber)}
                </button>
              );
            }
            if (pageNumber - currentPage === 3) {
              return <div className={style.button}>...</div>;
            }
            if (currentPage - pageNumber === 3) {
              return <div className={style.button}>...</div>;
            }
          })}
          <button className={style.rightBtn} onClick={this.rightBtn} />
        </div>
      </div>
    );
  }
}

export default UserReviews;
