import style from './ratings.css';

const React = require('react');

const Ratings = (props) => {
  const getAverage = (fields) => {
    if (props.data.length !== 0) {
      return (
        (props.data.map(data => data[fields])
          .reduce((acc, cur) => acc + cur)) / props.data.length
      );
    }
  };

  const starPercentage = (rating) => {
    const stars = {
      width: `${(rating * 20).toString()}%`,
    };
    return stars;
  };

  const makeSpaces = (num) => {
    let result = '';
    for (let i = 0; i < num; i++) {
      result += '&nbsp;';
    }
    return result;
  };

  return (
    <div className={style.ratingsContainer}>
      <table className={style.tableOne}>
        <tbody>
          <tr className={style.rating}>
            <td>
            Accuracy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </td>
            <td>
              <div className={style.starsOuter}>
                <div className={style.starsInner} style={starPercentage(getAverage('accuracy'))} />
              </div>
            </td>
          </tr>
          <tr className={style.rating}>
            <td>
            Communication
            </td>
            <td>
              <div className={style.starsOuter}>
                <div className={style.starsInner} style={starPercentage(getAverage('communication'))} />
              </div>
            </td>
          </tr>
          <tr className={style.rating}>
            <td>
            Cleanliness
            </td>
            <td>
              <div className={style.starsOuter}>
                <div className={style.starsInner} style={starPercentage(getAverage('cleanliness'))} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table className={style.tableTwo}>
        <tbody>
          <tr className={style.rating}>
            <td>
            Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </td>
            <td>
              <div className={style.starsOuter}>
                <div className={style.starsInner} style={starPercentage(getAverage('location'))} />
              </div>
            </td>
          </tr>
          <tr className={style.rating}>
            <td>
            Check-in
            </td>
            <td>
              <div className={style.starsOuter}>
                <div className={style.starsInner} style={starPercentage(getAverage('check_in'))} />
              </div>
            </td>
          </tr>
          <tr className={style.rating}>
            <td>
            Value
            </td>
            <td>
              <div className={style.starsOuter}>
                <div className={style.starsInner} style={starPercentage(getAverage('value'))} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  );
};

export default Ratings;
