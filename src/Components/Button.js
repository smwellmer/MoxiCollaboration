function Button(props) {

    return <button
        style={{
            backgroundColor: props.color,
            padding: "10px",
            fontSize: "1.5em",
            color: "White",
            borderRadius: "30px"
        }}
    >
        
        {props.text}
        </button>
        
}

export default Button