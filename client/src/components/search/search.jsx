const React = require('react');
import style from './search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.pressEnter = this.pressEnter.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  pressEnter(e) {
    if (e.keyCode === 13) {
      this.props.search(this.state.value);
    }
  }

  render() {
    const keywords = this.state.value;
    return (
      <div className={style.search}>
        <div className={style.glassContainer}>
          <div className={style.glass} />
        </div>
        <input className={style.search_bar} value={keywords} onChange={this.handleChange} onKeyDown={this.pressEnter} placeholder="Search reviews" />
      </div>
    );
  }
}

export default Search;
