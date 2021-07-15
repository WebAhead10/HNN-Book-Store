module.exports = (req, res, next) => {
    const fakeError = new Error("uh oh");
    fakeError.status = 403;
    next(fakeError);
}