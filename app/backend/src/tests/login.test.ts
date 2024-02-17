import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import LoginAuthenticator from '../middlewares/loginAuthenticator';
import UserModels from '../database/models/UsersModel';
// import UserModel from '../model/user.model';
import { noPass, noEmail, userSeeder, notInDb, userSeed } from './mocks/login.mock';
import * as jwt from 'jsonwebtoken';


chai.use(chaiHttp);
const { expect } = chai;

describe('Testing login and authentications', () => {
  beforeEach(sinon.restore);

  it('Should return an error if no password is provided', async () => {
    const { status, body } = await chai.request(app).post('/login').send(noPass);
    expect(status).to.be.equal(400);
    expect(body).to.be.deep.equal({message: 'All fields must be filled' })
  })

  it('Should return an error if no email is provided', async () => {
    const { status, body } = await chai.request(app).post('/login').send(noEmail);
    expect(status).to.be.equal(400);
    expect(body).to.be.deep.equal({message: 'All fields must be filled' })
  })

  it('Should return an error if email is not in the db', async () => {
    sinon.stub(UserModels, 'findOne').resolves(null);

    const { status, body } = await chai.request(app).post('/login').send(notInDb);
    expect(status).to.be.equal(401);
    expect(body).to.be.deep.equal({message: 'Invalid email or password'})
  })

  it('should return a token when valid credentials are given', async () => {
    const userModel = UserModels.build(userSeeder);
    sinon.stub(jwt, 'sign').resolves('any-token');
    sinon.stub(UserModels, 'findOne').resolves(userModel);
    sinon.stub(LoginAuthenticator, 'loginValidation');

    const { status, body } = await chai.request(app).post('/login').send(userSeed)
    expect(status).to.be.equal(200);
    expect(body).to.have.property('token');
  })
})