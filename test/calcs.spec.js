import chai from 'chai'
import chaiHttp from 'chai-http'
import { app } from '../app.js'

chai.use(chaiHttp);
let should = chai.should();

describe('/GET', () => {
    it('it should return \'Hello World!\' with status 200', (done) => {
      chai.request(app)
          .get('/')
          .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.equal("Hello World!");
            done();
          });
    });
});

// Test Variance
// test /calculations/variance/{inputs} with invalid inputs -- Should return status 400 with string message 'error parsing inputs'
// test /calculations/variance/{inputs} with valid inputs -- Should return status 200 with body {"result":{result}}

// Test Mean
// test /calculations/mean/{inputs} with invalid inputs -- Should return status 400 with string message 'error parsing inputs'
// test /calculations/mean/{inputs} with valid inputs -- Should return status 200 with body {"result":{result}}