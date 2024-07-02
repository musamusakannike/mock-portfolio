function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light m-0 p-0">
                <div className="container" style={{padding: '24px 42px'}}>
                    <a className="navbar-brand" id="logo" href="#">Logo</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end align-center" id="collapsibleNavId">
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link body-text active" href="#About" aria-current="page"
                                >About
                                    <span className="visually-hidden">(current)</span></a
                                >
                            </li>
                            <li className="nav-item">
                                <a className="nav-link body-text" href="#Work">Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link body-text" href="#Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >

        </div >
    );
}

export default Navbar;