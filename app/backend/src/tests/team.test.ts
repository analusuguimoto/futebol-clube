import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { teams } from './mocks/teams.mock';
import TeamsModel from '../database/models/TeamsModel';
import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('testing if the team route brings the correct status', () => {

  it('Should return an array with all of the teams', async () => {
    sinon.stub(TeamsModel, 'findAll').resolves(teams as any)

    const { status, body } = await chai.request(app).get('/teams')

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(teams);
  })
})