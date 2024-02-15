import TeamsIf from './TeamsIf';

interface AllTeamsIf {
  getListOfTeams(): Promise<TeamsIf[]>
}

export default AllTeamsIf;
