import { useEffect } from 'react';
import { isBrowser, off, on } from './misc/util';
import useRafState from './useRafState';
var useWindowScroll = function () {
    var _a = useRafState({
        x: isBrowser ? window.pageXOffset : 0,
        y: isBrowser ? window.pageYOffset : 0,
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        var handler = function () {
            setState({
                x: window.pageXOffset,
                y: window.pageYOffset,
            });
        };
        on(window, 'scroll', handler, {
            capture: false,
            passive: true,
        });
        return function () {
            off(window, 'scroll', handler);
        };
    }, []);
    return state;
};
export default useWindowScroll;
