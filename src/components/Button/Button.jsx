import "./Button.css";

// eslint-disable-next-line react/prop-types
function Button({ children, handleClick }) {

    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };

    return (
        <div
            className={`container-button ${esOperador(children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => handleClick(children)}>
            {children}
        </div>
    );
}

export default Button;