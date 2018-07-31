import style from './closing_popup.css';

const React = require('react');

const ClosingPopup = (props) => {
  const exitBtn = () => {
    props.exit();
  };

  return (
    <div className={style.popupContainer}>
      <div className={style.popup}>
        <button className={style.exitBtn} onClick={exitBtn} type="button" />
        <h2>
        Thank You
        </h2>
        <div>
        These reports help make Airbnb better for everyone, so we take them seriously. We’ll reach out if we have questions about your report.
        </div>
      </div>
    </div>
  );
};

export default ClosingPopup;
