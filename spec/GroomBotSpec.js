describe('GroomBot should be a gentle and concise messeger', function () {
    it('should be built in with messages', function () {
        var g = GroomBot([], []);
        expect(g).not.toBe(null);
        expect(g).not.toBe(undefined);
    });
    it('should built a message based on two patterns', function () {
        var g = GroomBot(['...'], ['OK']);
        expect(g.answer()).toBe('...OK');
    });
    it('should built a message based on two distinct patterns', function () {
        var g = GroomBot(['HUm...'], ['That is alright']);
        expect(g.answer()).toBe('HUm...That is alright');
    });
    it('should randomize the messages generated', function () {
        var g = GroomBot(['1', '2', '3'], [4, 5, 6]);
        g.seed(function () {
            return 1;
        });
        expect(g.answer()).toBe('25');
    });
    it('should not generate exceptions', function () {
        var g = GroomBot(['1', '2', '3', '4'], [4, 5, 6]);
        g.seed(function () {
            return 9;
        });
        expect(g.answer()).toBe('24');
    });
    it('should not generate exceptions again', function () {
        var g = GroomBot(['1', '2', '3', '4'], [4, 5, 6]);
        g.seed(function () {
            return 7;
        });
        expect(g.answer()).toBe('45');
    });
});
