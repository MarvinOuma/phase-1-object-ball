function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
          "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
          "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
          "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
          "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
        }
      }
    };
  }
  
  
  // F numPointsScored
  function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    return null;
  }
  
  
  // F shoeSize
  function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
    return null;
  }
  
  
  // F teamColors
  function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return null;
  }
  
  
  // F teamNames
  function teamNames() {
    const game = gameObject();
    return Object.values(game).map(team => team.teamName);
  }
  
  
  // F playerNumbers
  function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
    return null;
  }
  
  
  // F playerStats
  function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
    return null;
  }
  
  
  // F bigShoeRebounds
  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoe = 0;
    let playerWithLargestShoe = null;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].shoe > largestShoe) {
          largestShoe = game[team].players[player].shoe;
          playerWithLargestShoe = player;
        }
      }
    }
  
    return game.home.players[playerWithLargestShoe]?.rebounds || game.away.players[playerWithLargestShoe]?.rebounds;
  }
  
  
  // F mostPointsScored
  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].points > maxPoints) {
          maxPoints = game[team].players[player].points;
          topPlayer = player;
        }
      }
    }
    return topPlayer;
  }
  
  
  // F winningTeam
  function winningTeam() {
    const game = gameObject();
    const scores = { home: 0, away: 0 };
  
    for (let team in game) {
      for (let player in game[team].players) {
        scores[team] += game[team].players[player].points;
      }
    }
    return scores.home > scores.away ? game.home.teamName : game.away.teamName;
  }
  
  
  // F playerWithLongestName
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  
  
  // F doesLongNameStealATon
  function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let mostSteals = 0;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].steals > mostSteals) {
          mostSteals = game[team].players[player].steals;
        }
      }
    }
  
    return game.home.players[longestName]?.steals === mostSteals || game.away.players[longestName]?.steals === mostSteals;
  }
  