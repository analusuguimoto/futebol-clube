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

const awayPointCalculator = (team: LeaderboardIf, match: MatchesNameIf) => {
  const teamInfo = { ...team };
  teamInfo.totalGames += 1;
  teamInfo.goalsFavor += match.awayTeamGoals;
  teamInfo.goalsOwn += match.homeTeamGoals;
  teamInfo.goalsBalance = teamInfo.goalsFavor - teamInfo.goalsOwn;

  if (match.awayTeamGoals > match.homeTeamGoals) {
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

export const leaderboardHome = (matches: MatchesNameIf[], team: TeamType): LeaderboardIf[] => {
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

export const leaderboardAway = (matches: MatchesNameIf[], team: TeamType): LeaderboardIf[] => {
  const updated: Record<string, LeaderboardIf> = {};

  matches.forEach((match) => {
    if (match.inProgress) return;
    const chosenTeam = match[team].teamName;

    if (!updated[chosenTeam]) {
      updated[chosenTeam] = initialTeam(chosenTeam);
    }

    const calculate = awayPointCalculator(updated[chosenTeam], match);
    updated[chosenTeam] = calculate;
  });

  const arr = Object.values(updated);
  return arr;
};

export const fullLeaderboard = (matches: MatchesNameIf[]): LeaderboardIf[] => {
  const updated: Record<string, LeaderboardIf> = {};

  matches.forEach((match) => {
    const { homeTeam, awayTeam, inProgress } = match;
    if (inProgress) return;
    if (!updated[homeTeam.teamName]) {
      updated[homeTeam.teamName] = initialTeam(homeTeam.teamName);
    }

    if (!updated[awayTeam.teamName]) {
      updated[awayTeam.teamName] = initialTeam(awayTeam.teamName);
    }
    const homeTeamInfo = updated[homeTeam.teamName];
    const awayTeamInfo = updated[awayTeam.teamName];

    const calculateHome = pointCalculator(homeTeamInfo, match);
    const calculateAway = awayPointCalculator(awayTeamInfo, match);

    updated[homeTeam.teamName] = calculateHome;
    updated[awayTeam.teamName] = calculateAway;
  });
  return Object.values(updated);
};
