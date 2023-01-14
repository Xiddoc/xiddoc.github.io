import Logo from "./Logo";

function RandomLogo() {
    return <Logo style={{
        position: 'absolute', left: Math.floor(Math.random() * 70 + 10) + '%',
        height: '5%', rotate: Math.floor(Math.random() * 160 - 80) + 'deg'}} />
}

export default RandomLogo;