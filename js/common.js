const range = (start, stop, step = 1) => {
    if (stop === undefined) {
        [start, stop] = [0, start];
    }
    return Array.from(
        { length: Math.ceil((stop - start) / step) },
        (_, i) => start + i * step,
    );
};
