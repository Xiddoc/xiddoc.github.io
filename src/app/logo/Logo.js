import logo from "./favicon.png";

function Logo(props) {
    return <img src={logo} alt="My logo"
                style={props.style} />
}

export default Logo;