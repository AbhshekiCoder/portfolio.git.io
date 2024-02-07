

const Navbar =()=>{
    return(
        <div className="Navbar bg-black sticky-top">
            <div className="logo">
                .Portfolio
            </div>
            <ul id="nav-item" type="none">
                <li className="nav-item" Style = "--i:1">
                <a href = "/">Home</a>
                </li>
                <li className="nav-item" Style= "--i:2">
                    <a href = "/">About</a>
                </li>
                <li className="nav-item" Style = "--i:3">
                    <a href = "/">Projects</a>
                </li>
                <li className="nav-item" Style = "--i:4">
                    <a href = "/">Contact</a>
                </li>
            </ul>
        </div>

    )
}
export default Navbar;