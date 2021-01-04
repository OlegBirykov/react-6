import PropTypes from 'prop-types';

function ClockFace(props) {
  const { hourAngle, minAngle, secAngle, onButtonClick } = props;

  return (
    <div className="ClockFace">
      <p>{hourAngle}</p>
      <p>{minAngle}</p>
      <p>{secAngle}</p>
      <button className="ClockFace-button" type="button" onClick={onButtonClick}>x</button>
    </div>
  );
}

ClockFace.propTypes = {
  hourAngle: PropTypes.number.isRequired,
  minAngle: PropTypes.number.isRequired,
  secAngle: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default ClockFace;
