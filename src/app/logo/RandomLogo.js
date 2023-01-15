import Logo from "./Logo";

function RandomLogo(props) {
    return <Logo style={{
        position: 'absolute', rotate: Math.floor(Math.random() * 160 - 80) + 'deg', ...props}} />
}

export default RandomLogo;