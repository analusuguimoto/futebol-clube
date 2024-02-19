const matchesList = [
  {
    "id": 3,
    "homeTeamId": 1,
    "homeTeamGoals": 4,
    "awayTeamId": 7,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Corinthians"
    }
  },
  {
    "id": 6,
    "homeTeamId": 4,
    "homeTeamGoals": 2,
    "awayTeamId": 3,
    "awayTeamGoals": 3,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Flamengo"
    },
    "awayTeam": {
      "teamName": "Fluminense"
    }
  }
]

const inProgressMatch = [
  {
    "id": 6,
    "homeTeamId": 4,
    "homeTeamGoals": 2,
    "awayTeamId": 3,
    "awayTeamGoals": 3,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Flamengo"
    },
    "awayTeam": {
      "teamName": "Fluminense"
    }
  }
]

const endedMatches = [
  {
    "id": 3,
    "homeTeamId": 1,
    "homeTeamGoals": 4,
    "awayTeamId": 7,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Corinthians"
    }
  }
]

export { 
  matchesList, 
  inProgressMatch,
  endedMatches,
};