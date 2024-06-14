import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const FunFactsBox = ({ endValue }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    const { number } = useSpring({
        reset: inView,
        from: { number: 0 },
        to: { number: inView ? endValue : 0 },
        config: { duration: 2000 },
    });

    return (
        <h3 className="counter" ref={ref}>
            <animated.span>{number.interpolate((val) => Math.floor(val))}</animated.span>
        </h3>
    );
};

export default FunFactsBox;
