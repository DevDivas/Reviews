import style from './search.css';

const React = require('react');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.pressEnter = this.pressEnter.bind(this);
    this.clearButton = this.clearButton.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    // this.clearButton(e.target.value);
  }

  pressEnter(e) {
    if (e.keyCode === 13) {
      this.props.search(this.state.value);
    }
  }

  clearButton() {
    this.setState({ value: '' });
  }

  render() {
    const keywords = this.state.value;
    return (
      <div className={style.search}>
        <div className={style.glassContainer}>
          <div className={style.glass} />
        </div>
        <input
          className={style.search_bar}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.pressEnter}
          placeholder="Search reviews"
        />
        {keywords.length !== 0
          && <button className={style.clearButton} type="button" onClick={this.clearButton} />
        }
      </div>
    );
  }
}

export default Search;
