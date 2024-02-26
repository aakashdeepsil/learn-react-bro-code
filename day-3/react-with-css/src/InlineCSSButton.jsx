function InlineCSSButton() {
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
    return (
        <button style={buttonStyle}>Click me</button>
    )
}

export default InlineCSSButton;