import React from "react";
import { IntroProps } from "../types/IntroProps";

/* Icons */
import SeperatorIcon from "../assets/icons/intro-icons/intro-seperator.svg?react";
import ArrowRight from "../assets/icons/intro-icons/intro-arrow-right.svg?react";
import ArrowLeft from "../assets/icons/intro-icons/intro-arrow-left.svg?react";

const Intro: React.FC<IntroProps> = ({
  title,
  heading,
  showCountdown = true,
  showArrows = true,
  showBtnMore = false,

}) => {
  return (
    <div className='intro__top'>
      <div className="intro__top-left">
        <div className="intro__top-main">
          <span className="intro__top-heading">{title}</span>
          <h2 className="intro__top-title">{heading}</h2>
        </div>

        {showCountdown && (
          <div className="countdown">
            <div className="countdown__item">
              <span className="countdown__label">Days</span>
              <span className="countdown__number">03</span>
            </div>

            <SeperatorIcon className="countdown__separator" width={4} height={16} aria-hidden="true" />

            <div className="countdown__item">
              <span className="countdown__label">Hours</span>
              <span className="countdown__number">23</span>
            </div>

            <SeperatorIcon className="countdown__separator" width={4} height={16} aria-hidden="true" />

            <div className="countdown__item">
              <span className="countdown__label">Minutes</span>
              <span className="countdown__number">19</span>
            </div>

            <SeperatorIcon className="countdown__separator" width={4} height={16} aria-hidden="true" />

            <div className="countdown__item">
              <span className="countdown__label">Seconds</span>
              <span className="countdown__number">56</span>
            </div>
          </div>
        )}
      </div>

      {showArrows && (
        <div className="arrows">
          <button
            className='btn arrows__btn'
            aria-label="Previous"
          >
            <ArrowLeft width={24} height={24} aria-hidden="true" />
          </button>

          <button
            className='btn arrows__btn'
            aria-label="Next"
          >
            <ArrowRight width={24} height={24} aria-hidden="true" />
          </button>
        </div>
      )}

      {showBtnMore && (
        <button className="btn btn--primary">View All</button>
      )}
    </div>
  );
};

export default Intro;
