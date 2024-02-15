import TeamsIf from './TeamsIf';

interface AllTeamsIf {
  getListOfTeams(): Promise<TeamsIf[]>
  getTeamById(id: TeamsIf['id']): Promise<TeamsIf | null>
}

export default AllTeamsIf;
