import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import MatchesModel from '../database/models/MatchesModel';
import { inProgressMatch, matchesList, endedMatches } from './mocks/matches.mock';

chai.use(chaiHttp);
const { expect } = chai;

describe('testing the route match, if it brings correct data', () => {
  beforeEach(sinon.restore);

  it('should return all the matches, wether they ended or no', async () => {
    sinon.stub(MatchesModel, 'findAll').resolves(matchesList as any)

    const { status, body } = await chai.request(app).get('/matches')
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(matchesList);
  });

  it('should filter in progress matches', async() => {
    sinon.stub(MatchesModel, 'findAll').resolves(matchesList as any)
    const { status, body } = await chai.request(app).get('/matches?inProgress=true')
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(inProgressMatch);
  });

  it('should filter ended matches', async() => {
    sinon.stub(MatchesModel, 'findAll').resolves(matchesList as any)
    const { status, body } = await chai.request(app).get('/matches?inProgress=false')
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(endedMatches);
  });

})