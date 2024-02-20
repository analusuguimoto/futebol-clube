interface MatchesIf {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

interface MatchesNameIf {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  homeTeam: {
    teamName: string
  },
  awayTeamId: number,
  awayTeamGoals: number,
  awayTeam: {
    teamName: string,
  }
  inProgress: boolean,
}

export { MatchesIf, MatchesNameIf };
