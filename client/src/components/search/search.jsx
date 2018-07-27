const React = require('react');

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
      <input value={keywords} onChange={this.handleChange} onKeyDown={this.pressEnter} />
    );
  }
}

export default Search;
