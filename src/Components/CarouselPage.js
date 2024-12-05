import React, { useEffect, useState } from 'react'
import 'bootstrap'

export default function CarouselPage() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const slides =  [
        {id:0, src: "https://www.velasca.com/cdn/shop/files/nov_2024_rimando_lookbook_abruzzo.jpg?v=1730980803&width=3000",
            title: "A SLECTION OF YOYR FAVORITE LOOKS",
            tagLine: "That winter charm",
            descrption: "In winter, fashion is a balance between comfort and elegance, wrapped up in the perfect coat.",
        },
        {id:1, src: "https://www.velasca.com/cdn/shop/files/nov_2024_rimando_bok.jpg?v=1730906128&width=3000",
            title: "Blue of a Kind",
            tagLine: "Where style meets the depth of blue.",
            descrption: "Elegance in every shade, a true masterpiece in blue. A dress that speaks the language of sophistication and style.",
        },
        {id:2, src: "https://www.velasca.com/cdn/shop/files/ott_2024_rimando_stile_classico.jpg?v=1728573604&width=3000",
            title: "THE ELEGANCE OF DESIGN",
            tagLine: "Top-quality craftsmanship",
            descrption: "Unveiling timeless beauty through impeccable design. Where every detail speaks of sophistication and grace.",
        },
    ]
const prevSlide = ()=>{
    setCurrentSlide((prevSlide)=> (prevSlide + 1) % slides.length )
}
const nextSlide = ()=>{
    setCurrentSlide((prevSlide)=> (prevSlide - 1 + slides.length) % slides.length)
}

useEffect(()=>{
    const slideInterval = setInterval(nextSlide,5000)
    return ()=> clearInterval(slideInterval)
},[])

   
  return (
    <div className='carouselPage'>
        <div className="carouselContent">
        <button className='carouselButton prev' onClick={prevSlide}> &lt; </button>
            <img className="carouselImg" src={slides[currentSlide].src} alt="First slide"/>
                <div className='carouselText'>   
                    <h3>{slides[currentSlide].title}</h3>
                    <h2>{slides[currentSlide].tagLine}</h2>
                    <p>{slides[currentSlide].descrption}</p>
                </div>
                <button className='carouselButton next' onClick={nextSlide}> &gt; </button>     
        </div>
        <div className="carouselIndicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>

  )
}
