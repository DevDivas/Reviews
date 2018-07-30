import style from './popup.css';

const React = require('react');

class Popup extends React.Component {
  constructor() {
    super();
    this.exitBtn = this.exitBtn.bind(this);
  }

  exitBtn() {
    this.props.exit();
  }

  render() {
    return (
      <div className={style.popupContainer}>
        <div className={style.popup}>
        <button className={style.exitBtn} onClick={this.exitBtn} />
          <h2>
          Do you want to anonymously report this review?
          </h2>
          <ul>
            <div>
            If so, please choose one of the following reasons. Learn more
            </div>
            <li>
            Inappropriate content
              <div>
              This review contains violent, graphic, promotional, or otherwise offensive content.
              </div>
            </li>
            <li>
            Dishonest or hateful content
              <div>
              This review is purposefully malicious and assaulting.
              </div>
            </li>
            <li>
              Fake content
              <div>
              This review contains false information or may be fake.
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Popup;