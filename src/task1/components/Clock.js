import React from 'react';
import PropTypes from 'prop-types';
import { getTime } from '../utils/utils';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.time = getTime();
    this.offset = props.timezone * 3600;
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    timezone: PropTypes.number.isRequired,
    onButtonClick: PropTypes.func.isRequired 
  }

  componentDidMount() {
    this.timerId = setInterval(this.timer, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  timer() {

  }

  render() {
    const { name, onButtonClick } = this.props;

    return (
      <div className="Clock">  
        <p>{name}</p>
        <div>
          <button type="button" onClick={onButtonClick}>x</button>
        </div>
        <p>{this.offset}</p>
      </div>
    );
  }
}

export default Clock;
