import { MatchesNameIf } from '../Interfaces/MatchesIf';
import LeaderboardIf from '../Interfaces/LeaderboardIf';

type TeamType = 'homeTeam' | 'awayTeam';

const initialTeam = (team: string): LeaderboardIf => ({
  name: team,
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
  efficiency: '0',
});

const pointCalculator = (team: LeaderboardIf, match: MatchesNameIf) => {
  const teamInfo = { ...team };
  teamInfo.totalGames += 1;
  teamInfo.goalsFavor += match.homeTeamGoals;
  teamInfo.goalsOwn += match.awayTeamGoals;
  teamInfo.goalsBalance = teamInfo.goalsFavor - teamInfo.goalsOwn;

  if (match.homeTeamGoals > match.awayTeamGoals) {
    teamInfo.totalPoints += 3;
    teamInfo.totalVictories += 1;
  } else if (match.homeTeamGoals === match.awayTeamGoals) {
    teamInfo.totalPoints += 1;
    teamInfo.totalDraws += 1;
  } else {
    teamInfo.totalLosses += 1;
  }

  return teamInfo;
};

const leaderboard = (matches: MatchesNameIf[], team: TeamType): LeaderboardIf[] => {
  const updated: Record<string, LeaderboardIf> = {};

  matches.forEach((match) => {
    if (match.inProgress) return;
    const chosenTeam = match[team].teamName;

    if (!updated[chosenTeam]) {
      updated[chosenTeam] = initialTeam(chosenTeam);
    }

    const calculate = pointCalculator(updated[chosenTeam], match);
    updated[chosenTeam] = calculate;
  });

  const arr = Object.values(updated);
  return arr;
};

export default leaderboard;
