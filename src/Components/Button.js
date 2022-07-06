function Button(props) {

    return <button
        className={props.className}
        style={{
            backgroundColor: props.color,
            padding: "10px",
            color: "black",
            borderRadius: "30px"
        }}
        
    >
        {props.fontSize}
        {props.text}
        </button>
        
}

export default Button