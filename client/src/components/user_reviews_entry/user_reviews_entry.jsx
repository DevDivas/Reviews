import style from './user_reviews_entry.css';
import Popup from '../flag_popup/popup.jsx';

const React = require('react');

class UserReviewsEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = { popup: false }
    this.dateConvert = this.dateConvert.bind(this);
    this.clickFlag = this.clickFlag.bind(this);
    // this.exit = this.exit.bind(this);
  }

  dateConvert(date) {
    const result = date.split(' ');
    return `${result[2]} ${result[4]}`;
  }

  clickFlag() {
    this.setState({ popup: !this.state.popup });
  }

  render() {
    return (
      <div className={style.reviews}>
      <button className={style.flag} onClick={this.clickFlag} />
        <div className={style.picture} />
        <div className={style.name}>
          {this.props.review.name}
        </div>
        <div className={style.date}>
          {this.dateConvert(this.props.review.date)}
        </div>
        <p>
          {this.props.review.comment}
        </p>
        {this.state.popup
          && <Popup exit={this.clickFlag} />}
      </div>
    );
  }
}

export default UserReviewsEntry;
