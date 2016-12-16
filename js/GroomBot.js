(function (window) {
    'strict';
    window.GroomBot = (function (p, n) {
        var prologue = p,
            nothingness = n,
            seed = function () { return 0; };
        return {
            seed: function (s) {
                seed = s;
            },
            answer: function () {
                console.log(seed());
                return prologue[seed() % prologue.length] + nothingness[seed() % nothingness.length];
            }
        };
    });
}(window));
