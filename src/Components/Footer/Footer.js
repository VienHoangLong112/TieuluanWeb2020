import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer font-small unique-color-dark pt-4">
                    <div className="container">
                        <ul className="list-unstyled list-inline text-center py-2">
                        <li className="list-inline-item">
                        <h5 className="text">Register for free</h5>
                        </li>
                        <button type="button" className="btn btn-dark">Sign UP</button>
                        </ul>
                        </div>
                        <div className="footer-copyright text-center py-3 text">© 2020 Copyright:
                        <a href="https://youtube.com/"> Youtube</a>
                    </div>
                </footer>
            </div>
        )
    }
}
