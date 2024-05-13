import './ButtonClear.css';

// eslint-disable-next-line react/prop-types
const ButtonClear = ({ handleClear }) => (
    <div className='button-clear' onClick={handleClear}>
        X
    </div>
);

export default ButtonClear;