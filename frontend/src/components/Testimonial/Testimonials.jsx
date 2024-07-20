import React from "react"; 
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpeg"
import ava03 from "../../assets/images/ava-3.png"
import ava04 from "../../assets/images/ava-4.jpg"

const Testimonials = () => {

    const settings={

        dots:true,
        Infinity:true,
        autoplay:true,
        speed:1007,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {

                breakpoint: 992,
                serings:{
                    slidesToShow: 2,
                    slidesToScroll:1,
                    infinite: true,
                    dots:true,
                },
            },

                {
                    breakpoint: 576,
                serings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                
                }

            }
        ]

    }

    return <Slider {...settings}>

        
        <div className="testimonial py-4 px3">

        <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01}  className="img_comment"  alt= "" />
            </div>
                <h6 className="mb-0 mt-3">Hafsa</h6>
                <br></br>
                
                <p>"Kepa Tours made planning my Moroccan adventure a breeze! The chat AI, Kepa, was like having a personal travel advisor at my fingertips. From booking hotels to finding the best local spots, Kepa guided me every step of the way. Unforgettable trip, thanks to Kepa Tours!"</p>

         </div>
        <div className="testimonial py-4 px3">

        <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="img_comment"  alt="" />
            </div>
                <h6 className="mb-0 mt-3">gavi</h6>
                <br></br>
                
                <p>"I usually dread organizing business trips, but Kepa Tours transformed the experience. Quick hotel reservations, easy navigation, and the chat assistance were a game-changer. Now, I've started using Kepa for my personal vacations too. Highly recommended!"</p>

         </div>
        <div className="testimonial py-4 px3">

        <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03}  className="img_comment"  alt="" />
            </div>
                <h6 className="mb-0 mt-3">Sara</h6>
                <br></br>
                
                <p>"Planning a family trip to Morocco was a delight with Kepa Tours. The personalized recommendations for family-friendly activities and accommodations were spot-on. Kepa's assistance made our vacation stress-free, and we created lasting memories. Kudos to the team!"</p>

         </div>
        <div className="testimonial py-4 px3">

        <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava04}  className="img_comment"  alt="" />
            </div>
                <h6 className="mb-0 mt-3">Said</h6>
                <br></br>
                
                <p>"Kepa Tours exceeded my expectations! Instead of the usual tourist traps, Kepa suggested hidden gems and local experiences. The real-time chat assistance was invaluable, especially for a solo traveler like me. Can't wait to use Kepa Tours for my next adventure!"</p>

         </div>
            
         
     

        
    </Slider>
    };  

 export default Testimonials;