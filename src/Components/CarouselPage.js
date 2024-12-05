import React from 'react'
import 'bootstrap'

export default function CarouselPage() {
   
  return (
    <div className='carouselPage'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="carouselContent">
                    <img className="carouselImg" src="https://www.velasca.com/cdn/shop/files/nov_2024_rimando_lookbook_abruzzo.jpg?v=1730980803&width=3000" alt="First slide"/>
                        <div classNameName='carouselTitle'>
                            <h3>A SLECTION OF YOYR FAVORITE LOOKS</h3>
                            <h2>That winter charm</h2>
                        </div>
                </div>
                </div>

                <div className="carousel-item">
                    <div className="carouselContent">
                        <img className="carouselImg" src="https://www.velasca.com/cdn/shop/files/nov_2024_rimando_bok.jpg?v=1730906128&width=3000" alt="Second slide"/>
                        <div className='carouselTitle'>
                                <h3>A SLECTION OF YOYR FAVORITE LOOKS</h3>
                                <h2>That winter charm</h2>
                            </div>
                    </div>
                </div>

            
                <div className="carousel-item">
                    <div className="carouselContent">
                        <img className="carouselImg" src="https://www.velasca.com/cdn/shop/files/ott_2024_rimando_stile_classico.jpg?v=1728573604&width=3000" alt="Third slide"/>
                        <div className='carouselTitle'>
                                <h3>A SLECTION OF YOYR FAVORITE LOOKS</h3>
                                <h2>That winter charm</h2>
                            </div>
                    </div>        
                </div>
            </div>
            <div className='navigateButtons'>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
        </div>
    </div>
  )
}
