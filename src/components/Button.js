
import PropTypes from 'prop-types'

/*
const Button = ({ text, color,  hoverText, onClick}) => {
    return (
        <button className='btn' 
        title={hoverText}
        style={{backgroundColor:color}} onClick={onClick}> {text}</button>
    )
}

*/

const Button = (props) => {
    return (
        <button className='btn' 
        title={props.hoverText}
        style={{backgroundColor:props.color}} onClick={props.onClick}> {props.text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    hoverText: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  }

export default Button;