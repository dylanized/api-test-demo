const test = require('unit.js');

describe('example test suite', function() {
  it(`testing get response`, function(done) {
    test.httpAgent('http://localhost:3000')
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) test.fail(err.message);
        test.assert(res.text === 'hello world');
        done();
      });
    });
    it(`testing post response`, function(done) {
      test.httpAgent('http://localhost:3000')
        .post('/')
        .expect(200)
        .end(function(err, res) {
          if (err) test.fail(err.message);
          test.assert(res.body.foo === 'bar');
          done();
        });
      });
});
