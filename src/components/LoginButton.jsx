import { login } from "../api/login";

export const LoginButton = ({onLoginSuccess}) => {

    const buttonStyle = {
        backgroundColor: "rgba(51, 51, 51, 0.05)",
        borderRadius: "8px",
        borderWidth: "0",
        color: "#333333",
        cursor: "pointer",
        display: "inlineBlock",
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "20px",
        listStyle: "none",
        margin: "0",
        padding: "10px 12px",
        textAlign: "center",
        transition: "all 200ms",
        verticalAlign: "baseline",
        whiteSpace: "nowrap",
        userSelect: "none",
        touchAction: "manipulation",
    };

    return <button
        onClick={() => login(onLoginSuccess)}
        style={buttonStyle}>
        Login
    </button>
}