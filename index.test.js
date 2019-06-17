const test = require('unit.js');

describe('example test suite', function() {
  it(`example test`, function(done) {
    test.httpAgent('http://localhost:3000')
      .get('/')
      .expect(200)
      .end(function(err, res){
        if (err) test.fail(err.message);
        test.assert(res.text === 'hello world');
        done();
      });
    });
});
