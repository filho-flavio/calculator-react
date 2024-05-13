import "./ButtonEqual.css";

// eslint-disable-next-line react/prop-types
function ButtonEqual({ children, handleClick }) {

    return (
        <div
            className="button-equal"
            onClick={() => handleClick(children)}>
            {children}
        </div>
    );
}

export default ButtonEqual;