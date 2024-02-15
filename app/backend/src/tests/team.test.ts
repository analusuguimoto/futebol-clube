import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { teams, oneTeam } from './mocks/teams.mock';
import TeamsModel from '../database/models/TeamsModel';
import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('testing if the team route brings the correct status', () => {
  beforeEach(sinon.restore);

  it('Should return an array with all of the teams', async () => {
    sinon.stub(TeamsModel, 'findAll').resolves(teams as any)

    const { status, body } = await chai.request(app).get('/teams')

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(teams);
  })

  it('Should return 404 not found when no teams were found in the search', async () => {
    sinon.stub(TeamsModel, 'findByPk').resolves(null)

    const { status, body } = await chai.request(app).get('/teams/7')

    expect(status).to.be.equal(404);
    expect(body.message).to.be.deep.equal('Team not found')
  })

  it('Should return 200 success when a team is found in the search', async () => {
    sinon.stub(TeamsModel, 'findByPk').resolves(oneTeam as any);

    const { status, body } = await chai.request(app).get('/teams/2')

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(oneTeam);
  })
})