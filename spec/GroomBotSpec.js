describe('GroomBot should be a gentle and concise messeger', function () {
    it('should be built in with messages', function () {
        var g = GroomBot([], []);
        expect(g).not.toBe(null);
        expect(g).not.toBe(undefined);
    });
});
