import chai from 'chai'
import chaiHttp from 'chai-http'
import { app } from '../app.js'

chai.use(chaiHttp);
let should = chai.should();

describe('/GET', () => {
    it('it should return \'Hello World!\'', (done) => {
      chai.request(app)
          .get('/')
          .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.a('string');
                res.text.should.be.equal("Hello World!");
            done();
          });
    });
});