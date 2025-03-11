import React from "react";

/* Icons */
import SeperatorIcon from "../assets/icons/intro-icons/intro-seperator.svg?react";
import ArrowRight from "../assets/icons/intro-icons/intro-arrow-right.svg?react";
import ArrowLeft from "../assets/icons/intro-icons/intro-arrow-left.svg?react";

interface IntroProps {
  name: string,
  title: string,
  showCountDown: boolean,
  showArrows: boolean
}

const Intro: React.FC<IntroProps> =
  ({
    name,
    title,
    showCountDown,
    showArrows
  }) => {
    return (
      <>
        <div className="intro">
          <div className="intro__top">
            <span className="intro__top-name">{name}</span>
          </div>
          <div className="intro__bottom">
            <div className="intro__bottom-left">
              <h2 className="intro__bottom-title">{title}</h2>

              {showCountDown ? (
                <div className="countdown">
                  <span className="countdown__group">
                    <span className="countdown__head">Days</span>
                    <span className="countdown__time">03</span>
                  </span>

                  <SeperatorIcon width={4} height={16} />

                  <span className="countdown__group">
                    <span className="countdown__head">Hours</span>
                    <span className="countdown__time">23</span>
                  </span>

                  <SeperatorIcon width={4} height={16} />

                  <span className="countdown__group">
                    <span className="countdown__head">Minutes</span>
                    <span className="countdown__time">19</span>
                  </span>

                  <SeperatorIcon width={4} height={16} />

                  <span className="countdown__group">
                    <span className="countdown__head">Seconds</span>
                    <span className="countdown__time">56</span>
                  </span>
                </div>
              ) : (
                <>
                </>
              )}
            </div>
            {showArrows ? (
              <div className="arrows">
                <button className="btn arrows__btn">
                  <ArrowLeft width={24} height={24} />
                </button>

                <button className="btn arrows__btn">
                  <ArrowRight width={24} height={24} />
                </button>
              </div>
            ) : (
              <>
              </>
            )}
          </div>
        </div>
      </>
    )
  }

export default Intro;