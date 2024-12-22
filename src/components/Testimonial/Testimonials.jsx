import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
    const settings = {
        dots:true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }  ,
        },
    ],
    };
  return (
 <Slider {...settings}>
<div className="testimonial py-4 px-3">
{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Alias asperiores nisi quo, suscipit placeat consequuntur 
    neque, delectus culpa eaque consectetur dolore at, voluptatum ipsa! 
    Maxime, dicta.
     Dicta libero obcaecati expedita.</p> */}
     <p>"I had a minor issue with my hotel reservation, but the customer service team was incredibly responsive and helpful in resolving the problem. They went above and beyond to ensure I had a positive experience."</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava01} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Kim Namjoon</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Alias asperiores nisi quo, suscipit placeat consequuntur 
    neque, delectus culpa eaque consectetur dolore at, voluptatum ipsa! 
    Maxime, dicta.
     Dicta libero obcaecati expedita.</p> */}
     <p>쉬운 사용법, 좋은 항공편 옵션, 사용하기 쉽고, 항공편 및 호텔에서 훌륭한 거래를 찾았습니다. 예약 프로세스가 원활했습니다.</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava02} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Kim lisa</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Alias asperiores nisi quo, suscipit placeat consequuntur 
    neque, delectus culpa eaque consectetur dolore at, voluptatum ipsa! 
    Maxime, dicta.
     Dicta libero obcaecati expedita.</p> */}
     <p>I was initially hesitant to book flights online, but this website made the process so easy. The search filters are very comprehensive, and I was able to find exactly what I was looking for. I also appreciated the ability to compare prices from different airlines."</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava03} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>John Cena</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Alias asperiores nisi quo, suscipit placeat consequuntur 
    neque, delectus culpa eaque consectetur dolore at, voluptatum ipsa! 
    Maxime, dicta.
     Dicta libero obcaecati expedita.</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava03} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>John Doe</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Alias asperiores nisi quo, suscipit placeat consequuntur 
    neque, delectus culpa eaque consectetur dolore at, voluptatum ipsa! 
    Maxime, dicta.
     Dicta libero obcaecati expedita.</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava02} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Lia Franklin</h6>
    <p>Customer</p>
</div>
</div>
</div>
 </Slider>
  )
}

export default Testimonials
