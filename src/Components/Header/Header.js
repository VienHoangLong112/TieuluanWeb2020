import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="navbar-brand" href="#">Review Film</div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Home
                            </div>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className="dropdown-item" href="#">Action</div>
                                <div className="dropdown-item" href="#">Another action</div>
                                <div className="dropdown-divider" />
                                <div className="dropdown-item" href="#">Something else here</div>
                            </div>
                            </li>
                            <li className="nav-item">
                            <div className="nav-link" href="#">Community</div>
                            </li>
                            <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Movie
                            </div>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className="dropdown-item" href="#">Movie List</div>
                                <div className="dropdown-item" href="#">Movie Single</div>
                                <div className="dropdown-divider" />
                                <div className="dropdown-item" href="#">Series Single</div>
                            </div>
                            </li>
                            <li className="nav-item">
                            <div className="nav-link" href="#">News</div>
                            </li>
                            <li className="nav-item">
                            <div className="nav-link" href="#">Help</div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
