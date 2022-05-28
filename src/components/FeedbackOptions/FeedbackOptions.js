import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul className={s.list}>
            {options.map(option => 
                <li className={s.item} key={option}><button className={s.button} name={option} type="button" onClick={onLeaveFeedback}>{option}</button></li>
            )}
        </ul>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;