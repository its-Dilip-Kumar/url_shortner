function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                🔗 Shortify
            </div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/">My Urls</a>
                <a href="/">About</a>
                <button>Login</button>
                <button className="signup">Sign Up</button>
            </div>
        </nav>
    );
}

export default Navbar;