import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import cn from 'classnames';
import { ReactComponent as Next } from './assets/chevronDown.svg';
import { ReactComponent as Prev } from './assets/chevronUp.svg';
import './Carousel.css';

/*const Carousel = ({
	data,
	leadingText,
}) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleClick = (direction) => {}

	return (
		<section className="outer-container">
	    <div className="carousel-wrapper">
				<button
          type="button"
          className="carousel-button prev"
          onClick={() => handleClick('prev')}
        >
          <Prev />
        </button>

				<button
          type="button"
          className="carousel-button next"
          onClick={() => handleClick('next')}
        >
          <Next />
        </button>
			</div>
			<div className="content">
        <p>{data[activeIndex].content.copy}</p>
      </div>
		</section>
	);
}

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  leadingText: PropTypes.string.isRequired,
};

export default Carousel;*/