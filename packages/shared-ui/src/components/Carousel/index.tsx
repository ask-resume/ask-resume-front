// import React, { useState } from 'react';
// import './index.scss';

// import { ButtonSize } from '../../config/size';
// import { ColorMap } from '../../config/colorMap';

// [TODO 1] Modify the Carousel component to receive the following props
//  * images
//  * children
//  * arrows
//  * arrowSize?:
//      | /*24px*/ 'xs'
//      | /*32px*/ 'sm'
//      | /*40px*/ 'md'
//  * button?: {
//      color?: ColorMap
//      size?: ButtonSize
//    }

// [TODO 2] Style the Carousel component

// const Carousel = ({ images = [], dotsCount = 0, arrows = false, children }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const getSlidesCount = () => {
//     return children ? React.Children.count(children) : images.length;
//   };

//   const goToNextSlide = () => {
//     setActiveIndex(activeIndex === getSlidesCount() - 1 ? 0 : activeIndex + 1);
//   };

//   const goToPrevSlide = () => {
//     setActiveIndex(activeIndex === 0 ? getSlidesCount() - 1 : activeIndex - 1);
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel__cards">
//         {children
//           ? React.Children.map(children, (child, index) => (
//               <div
//                 key={index}
//                 className={`carousel__card ${
//                   index === activeIndex ? 'carousel__card--active' : ''
//                 }`}
//               >
//                 {child}
//               </div>
//             ))
//           : images.map((image, index) => (
//               <div
//                 key={index}
//                 className={`carousel__card ${
//                   index === activeIndex ? 'carousel__card--active' : ''
//                 }`}
//               >
//                 <img src={image} alt={`Image ${index}`} />
//               </div>
//             ))}
//       </div>
//       {dotsCount > 0 && (
//         <div className="carousel__dots">
//           {Array.from({ length: getSlidesCount() }).map((_, index) => (
//             <button
//               key={index}
//               className={`carousel__dot ${index === activeIndex ? 'carousel__dot--active' : ''}`}
//               onClick={() => setActiveIndex(index)}
//             ></button>
//           ))}
//         </div>
//       )}
//       {arrows && (
//         <>
//           <button className="carousel__arrow carousel__arrow--left" onClick={goToPrevSlide}>
//             &#60;
//           </button>
//           <button className="carousel__arrow carousel__arrow--right" onClick={goToNextSlide}>
//             &#62;
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Carousel;
