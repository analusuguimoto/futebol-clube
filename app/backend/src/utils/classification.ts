import LeaderboardIf from '../Interfaces/LeaderboardIf';

const teamClassification = (info: LeaderboardIf[]): LeaderboardIf[] => {
  const classification = info.sort((home, away) => {
    if (home.totalPoints !== away.totalPoints) {
      return away.totalPoints - home.totalPoints;
    }

    if (home.totalVictories !== away.totalVictories) {
      return away.totalVictories - home.totalVictories;
    }

    if (home.goalsBalance !== away.goalsBalance) {
      return away.goalsBalance - home.goalsBalance;
    }

    if (home.goalsFavor !== away.goalsFavor) {
      return away.goalsFavor - home.goalsFavor;
    }

    return 0;
  });

  return classification;
};

export default teamClassification;
