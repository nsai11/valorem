import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import LegoGroup from '../elements/LegoGroup';
import brick1 from './../../assets/images/b3.png';
import brick2 from './../../assets/images/b2.png';
import brick3 from './../../assets/images/b1.png'


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              This is <span className="text-color-primary">Valorem</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Completely changing the face of decentralization <br></br> one block at a time.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="">
                    Research
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="">
                    Blog
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="" data-reveal-value="20px" data-reveal-delay="800">
            {/* <Image
                    className="reveal-from-top-2"
                    src={require('./../../assets/images/b3.png')}
                    alt="Features split 03"
                    width={256}
                    height={256} />
            <LegoGroup>
                <Image
                        className="reveal-from-right-2"
                        src={require('./../../assets/images/b1.png')}
                        alt="Features split 03"
                        width={256}
                        height={256} />
                <Image
                        className="reveal-from-left-2"
                        src={require('./../../assets/images/b2.png')}
                        alt="Features split 03"
                        width={256}
                        height={256} />
            </LegoGroup> */}
            <img src={brick1} className="img-width reveal-from-top-2" style={{zIndex: '3', position: 'relative', top: '31px', left: '2px'}}></img>
            <div style={{display: 'flex', justifyContent: 'center',flex: 'row', position: 'relative'}}>
              <img src={brick2} className="img-width reveal-from-left-2" style={{position:'absolute', right: '183px', bottom: '-36px'}}></img>
              <img src={brick3} className="img-width reveal-from-right-2" style={{position:'absolute', left: '208px', bottom: '-62px'}}></img>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;