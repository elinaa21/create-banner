export const delayCallingFunction = cb => {
    const delay = 10000;
    let lastCall, timerId;
    return text => {
        const now = Date.now();
        if (!lastCall || now - lastCall >= delay) {
            lastCall = now;
            cb(text);
            console.log('call');
        } else {
            console.log('delayed');
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                cb(text);
            }, delay - now + lastCall);
        }
    };
};
