import React, { useRef } from 'react';
import './styles.css';
import 'intersection-observer';
import IsVisible from 'react-is-visible';

const SectionHeader = ({ sectionHeader, translateX }) => {
  /**
   * Animates the header to the center.
   *
   * @param isVisible boolean value denoting whether the component is visible in user's view port.
   * @returns {{transform: string, transition: string}} Inline-styling for animation.
   */
  const HeaderStyling = (isVisible) => ({
    transform: isVisible ? `translateX(0px)` : `translateX(750px)`,
    transition: `all 1.5s ease-in-out`,
  });
  const HeaderLineStyling = (isVisible) => ({
    transform: isVisible ? translateX : `translateX(-750px)`,
    transition: `all 1.5s ease-in-out`,
  });

  const nodeRef = useRef();

  return (
    <IsVisible once>
      {(isVisible) => (
        <div className="section-header" ref={nodeRef}>
          <span style={HeaderStyling(isVisible)}>{sectionHeader}</span>
          <div className="section-header-line" style={HeaderLineStyling(isVisible)} />
        </div>
      )}
    </IsVisible>
  );
};

export default SectionHeader;
