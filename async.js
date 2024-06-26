var hellopromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("hello world");
    }, 10000);
});
hellopromise.then(function (message) {
    return console.log(message);
});
