import React, { Component } from 'react';
import './details.js';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state={
            film1:"Tiệc Trăng Máu",
            film2:"Bí Mật Của Gió",
            film3:"Liên Quân Siêu Thú",
            film4:"Vùng đất câm lặng II",
            film5:"SeoBok",
            film6:"The Witches",
            Trailer:"Trailer",
            details: "Xem chi tiết"
        };
    }
    
    shoot1 = () => {
        alert(this.state.film1)
    }
    shoot2 = () => {
        alert(this.state.film2)
    }
    shoot3 = () => {
        alert(this.state.film3)
    }
    shoot4 = () => {
        alert(this.state.film4)
    }
    shoot5 = () => {
        alert(this.state.film5)
    }
    shoot6 = () => {
        alert(this.state.film6)
    }
    render() {
        return (
            <div>
                
                <div className="slider movie-items">
                    <div className="container">
                        <div className="row">   
                        <div className="movie-item">
                            <div className="mv-img">
                            <img src="https://static.mservice.io/blogscontents/momo-upload-api-201022112523-637389627239984896.jpg" alt="" />
                            </div>
                            <div className="title-in">
                            <button onClick={this.shoot1}>{this.state.details}</button>
                            <div className="cate">
                                <span className="blue"><a className="color" href="https://www.youtube.com/watch?v=MzYoVbzy_4U">{this.state.Trailer}</a></span>
                            </div>
                           
                            <h5>{this.state.film1}</h5>
                            </div>
                        </div>
                        <div className="movie-item">
                            <div className="mv-img">
                            <img src="https://vcdn-giaitri.vnecdn.net/2020/11/02/1-POSTER-CHINH-THUC-DIGITAL-1-7900-1604280918.jpg" alt="" />
                            </div>
                            <div className="title-in">
                            <button onClick={this.shoot2}>{this.state.details}</button>
                            <div className="cate">
                                <span className="blue"><a href="https://www.youtube.com/watch?v=L2EodPu-3DY">{this.state.Trailer}</a></span>
                            </div>
                            <h5>{this.state.film2}</h5>
                            </div>
                        </div>
                        <div className="movie-item">
                            <div className="mv-img">
                            <img src="https://m.media-amazon.com/images/M/MV5BYzMzOTQwNzktOWVmYS00YTE2LWE2ZTItNmE4MTQ3OTVjNDVlXkEyXkFqcGdeQXVyMjMwODE4ODI@._V1_.jpg" alt="" />
                            </div>
                            <div className="title-in">
                            <button onClick={this.shoot3}>{this.state.details}</button>
                            <div className="cate">
                                <span className="blue"><a href="https://youtu.be/DmQTZ__oyaA">{this.state.Trailer}</a></span>
                            </div>
                            <h5>{this.state.film3}</h5>
                            </div>
                        </div>
                        <div className="movie-item">
                            <div className="mv-img">
                            <img src="https://cms.megagscinemas.vn//media/76396/86300049_708552052882215_5209194833490477056_o.jpg" alt="" />
                            </div>
                            <div className="title-in">
                            <button onClick={this.shoot4}>{this.state.details}</button>
                            <div className="cate">
                                <span className="yell"><a href="https://youtu.be/OObI02klU6E">{this.state.Trailer}</a></span>
                            </div>
                            <h5>{this.state.film4}</h5>
                            </div>
                        </div>
                        <div className="movie-item">
                            <div className="mv-img">
                            <img src="https://vov.vn/sites/default/files/styles/large/public/2020-10/gong-yoo.jpg" alt="" />
                            </div>
                            <div className="title-in">
                            <button onClick={this.shoot5}>{this.state.details}</button>
                            <div className="cate">
                                <span className="yell"><a href="https://youtu.be/HHcr8ZRY04w">{this.state.Trailer}</a></span>
                            </div>
                            <h5>{this.state.film5}</h5>
                            </div>
                        </div>
                        <div className="movie-item">
                            <div className="mv-img">
                            <img src="https://m.media-amazon.com/images/M/MV5BNjRkYjlhMjEtYzIwOC00ZWYzLTgyMmQtYjI5M2UzNDJkNTU2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg" alt="" />
                            </div>
                            <div className="title-in">
                            <button onClick={this.shoot6}>{this.state.details}</button>
                            <div className="cate">
                                <span className="yell"><a href="https://youtu.be/Kmd24MrCHXI">{this.state.Trailer}</a></span>
                            </div>
                            <h5>{this.state.film6}</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
