import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

interface UserData {
  username: string;
  email: string;
}

export interface StatisticsData {
    month: string;
    quantity: number;
    totalSale: number;
  }
  

export async function login(username: string, password: string): Promise<UserData | null> {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      username,
      password
    });

    const userData: UserData = response.data;
    localStorage.setItem('userData', JSON.stringify(userData)); 
    return userData;
  } catch (error) {
    console.error('Error during login:', error);
    return null;
  }
}

export async function getStatistics(token: string): Promise<StatisticsData[] | null> {
    try {
      const response = await axios.get(`${BASE_URL}/auth/statistics`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      return response.data;
    } catch (error) {
      console.error('Error fetching statistics:', error);
      return null;
    }
  }
  


