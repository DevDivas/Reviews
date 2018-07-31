import style from './user_reviews_entry.css';
import Popup from '../flag_popup/popup.jsx';
import ClosingPopup from '../closing_popup/closing_popup.jsx'

const React = require('react');

class UserReviewsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reportPopup: false, closingPopup: false };
    this.dateConvert = this.dateConvert.bind(this);
    this.clickFlag = this.clickFlag.bind(this);
    this.clickExit = this.clickExit.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
  }

  dateConvert(date) {
    const result = date.split(' ');
    return `${result[2]} ${result[4]}`;
  }

  clickFlag() {
    this.setState({ reportPopup: true });
  }

  clickExit() {
    this.setState({ reportPopup: false, closingPopup: false });
  }

  clickSubmit() {
    this.setState({ reportPopup: false, closingPopup: true });
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
        {this.state.reportPopup
          && <Popup exit={this.clickExit} submit={this.clickSubmit} />}
        {this.state.closingPopup
          && <ClosingPopup exit={this.clickExit} />}
      </div>
    );
  }
}

export default UserReviewsEntry;
