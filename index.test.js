const test = require('unit.js');

const api = require('./index');

describe('example test suite', function() {
  it(`testing get response`, function(done) {
    test.httpAgent(api)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) test.fail(err.message);
        test.assert(res.text === 'hello world');
        done();
      });
    });
    it(`testing post response`, function(done) {
      test.httpAgent(api)
        .post('/')
        .expect(200)
        .end(function(err, res) {
          if (err) test.fail(err.message);
          test.assert(res.body.foo === 'bar');
          done();
        });
      });
    after(function(done) {
      api.close();
      done();
    });
});
