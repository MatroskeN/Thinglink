import css from './Slider.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

function Slider(props){

    const slides = props.string.replace(' ', '').split('|');
    function Arrows(){
        if(slides.length <= 1){
            document.querySelector('.swiper-button-next').style.display = "none";
            document.querySelector('.swiper-button-prev').style.display = "none";
        }
    }

    return (
        <div className={css.root}>
            <div className={css.title}>
                {props.title}
            </div>
            <div className={css.subtitle}>
                {props.name}
            </div>
            <div className={css.tag}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#FB607F"/>
                    <path d="M14 23.3333C17.813 23.3333 20.9654 20.4622 21.4588 16.7466C21.5341 16.2062 21.0574 15.7249 20.5223 15.8009C16.843 16.2991 14 19.4826 14 23.3333ZM8.64838 13.4111C8.64838 14.5764 9.58491 15.5222 10.7389 15.5222C11.182 15.5222 11.5834 15.3871 11.9262 15.1506L11.9095 15.3111C11.9095 16.4764 12.8461 17.4222 14 17.4222C15.1539 17.4222 16.0905 16.4764 16.0905 15.3111L16.0737 15.1506C16.4082 15.3871 16.8179 15.5222 17.2611 15.5222C18.4151 15.5222 19.3516 14.5764 19.3516 13.4111C19.3516 12.5666 18.8583 11.8489 18.1559 11.5111C18.8583 11.1733 19.3516 10.4555 19.3516 9.61109C19.3516 8.44575 18.4151 7.49998 17.2611 7.49998C16.8179 7.49998 16.4166 7.63509 16.0737 7.87153L16.0905 7.71109C16.0905 6.54575 15.1539 5.59998 14 5.59998C12.8461 5.59998 11.9095 6.54575 11.9095 7.71109L11.9262 7.87153C11.5918 7.63509 11.182 7.49998 10.7389 7.49998C9.58491 7.49998 8.64838 8.44575 8.64838 9.61109C8.64838 10.4555 9.14173 11.1733 9.84413 11.5111C9.14173 11.8489 8.64838 12.5666 8.64838 13.4111ZM14 9.39998C15.1539 9.39998 16.0905 10.3458 16.0905 11.5111C16.0905 12.6764 15.1539 13.6222 14 13.6222C12.8461 13.6222 11.9095 12.6764 11.9095 11.5111C11.9095 10.3458 12.8461 9.39998 14 9.39998ZM6.54119 16.7466C7.03454 20.4622 10.187 23.3333 14 23.3333C14 19.4826 11.1569 16.2991 7.47772 15.8009C6.94256 15.7249 6.46593 16.2062 6.54119 16.7466Z" fill="white"/>
                </svg>
                <span>tag</span>
            </div>
            <Swiper
                className={css.slider}
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides
                navigation
            >
                {props.string.replace(' ', '').split('|').map( (item) => (
                    <SwiperSlide className={css.slide}>
                        <img src={item} alt="pic"/>
                    </SwiperSlide>
                ))} {Arrows()}
            </Swiper>
        </div>
    )
}

export default Slider;