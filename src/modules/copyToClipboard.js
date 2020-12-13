export const delayCallingFunction = cb => {
    const delay = 2000;
    let lastCall, timerId;
    return text => {
        const now = Date.now();
        if (!lastCall || now - lastCall >= delay) {
            lastCall = now;
            cb(text);
        } else {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                cb(text);
            }, delay - now + lastCall);
        }
    };
};
