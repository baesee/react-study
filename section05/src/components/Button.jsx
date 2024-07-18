const Button = ({ text, color, children }) => {
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };
    console.log(text, color);
    return (
        <button
            onClick={onClickButton}
            onMouseEnter={() => {
                console.log('mouse enter');
            }}
            onMouseLeave={() => {
                console.log('mouse leave');
            }}
            // onClick={() => {
            //     console.log(text);
            // }}
            style={{ color: color }}
        >
            {text} - {color}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: 'blue',
};

export default Button;
