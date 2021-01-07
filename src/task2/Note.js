import PropTypes from 'prop-types';

function Note(props) {
  const { text, onButtonClick } = props;

  return (
    <div className="Note">
      <p className="Note-text">{text}</p>
      <button className="Note-button-delete" type="button" onClick={onButtonClick}>&#x274C;</button>
    </div>
  );
}

Note.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default Note;