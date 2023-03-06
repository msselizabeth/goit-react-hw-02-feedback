import './FeedbackOptions.css'
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
    <ul className='list'>
            {options.map(option => {
                return ( 
                    <li key={option}>
                        <button
                            type='button'
                            name={option}
                            onClick={onLeaveFeedback}
                        >{option}</button>
                    </li>
                )
            })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};