import axios from 'axios';
import * as route from './route';

export const fetchLeaderboard = async () => {
  try {
    const url = route.leaderboard;
    const response = await axios({
      method: 'get',
      url
    });
    return response.data;
  }
  catch (error) {
    console.log(error);
  }
}