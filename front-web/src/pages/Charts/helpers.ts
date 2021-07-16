import { Game } from './types';
import { RecordItem } from '../Records/types';

export const buildBarSeries = (games: Game[], records: RecordItem[]) => {
  const mappedGames = games.map(game => {
    const filteredGames = records.filter(item => {
      return item.game_title === game.title && item.game_platform === game.platform
    });

    return {
      x: `${game.title} | ${game.platform}`,
      y: filteredGames.length
    }
    
  });

  const sortedGames = mappedGames.sort((a, b) => {
    return b.y - a.y;
  });

  return sortedGames.slice(0, 8);
};

export const getPlatformChartData = (records: RecordItem[]) => {
  const platforms = ["PC", "PLAYSTATION", "XBOX"];

  const series = platforms.map(platform => {
    const filtedGames = records.filter(item => {
      return platform === item.game_platform;
    })

    return filtedGames.length;
  });

  return {
    labels: platforms,
    series,
  };
};

export const getGenderChartData = (records: RecordItem[]) => {
   const genderByAmount = records.reduce((accumulator, currentValue) => {
     if (accumulator[currentValue.genre_name] !== undefined) {
       accumulator[currentValue.genre_name] += 1;
     } else {
      accumulator[currentValue.genre_name] = 1;
     }

     return accumulator;
   }, {} as Record<string, number>);

   const labels = Object.keys(genderByAmount);
   const series = Object.values(genderByAmount);

  return {
    labels,
    series
  };
};