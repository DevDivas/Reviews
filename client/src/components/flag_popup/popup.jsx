import style from './popup.css';

const React = require('react');

class Popup extends React.Component {
  constructor() {
    super();
    this.state = { selected: '', submit: false }
    this.exitBtn = this.exitBtn.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  exitBtn() {
    this.props.exit();
  }

  clickHandler(e) {
    this.setState({ selected: e.target.value });
  }

  handleSubmit() {
    this.props.submit()
  }

  render() {
    return (
      <div className={style.popupContainer}>
        <div className={style.popup}>
          <button className={style.exitBtn} onClick={this.exitBtn} type="button" />
          <h2>
          Do you want to anonymously report this review?
          </h2>
          <div className={style.outerContent}>
            If so, please choose one of the following reasons. Learn more
          </div>
          <form>
            <div className="radio">
              <label>
                <input className={style.radioBtn} type="radio" value="option1" onClick={this.clickHandler} checked={this.state.selected === 'option1'} />
                Inappropriate content
              </label>
              <div className={style.content}>
              This review contains violent, graphic, promotional, or otherwise offensive content.
              </div>
            </div>
            <div className="radio">
              <label>
                <input className={style.radioBtn} type="radio" value="option2" onClick={this.clickHandler} checked={this.state.selected === 'option2'} />
                Dishonest or hateful content
                <div className={style.content}>
                This review is purposefully malicious and assaulting.
                </div>
              </label>
            </div>
            <div className="radio">
              <label>
                <input className={style.radioBtn} type="radio" value="option3" onClick={this.clickHandler} checked={this.state.selected === 'option3'} />
                Fake content
                <div className={style.content}>
                This review contains false information or may be fake.
                </div>
              </label>
            </div>
          </form>
          {this.state.selected ? (
            <button type="button" className={style.submit} onClick={this.handleSubmit}>
            submit
            </button>
          ) : (
            <button type="button" className={style.submitDisabled}>
            submit
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Popup;