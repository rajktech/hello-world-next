import {useState, useEffect} from 'react';

function Dashboard () {
  const [isLoading, setIsLoading] = useState (true);
  const [dashboardData, setDashboardData] = useState (null);

  useEffect (async () => {
    const response = await fetch ('http://localhost:4000/dashboard');
    const data = await response.json ();
    setIsLoading (false);
    setDashboardData (data);
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h3>Dashboard Data</h3>
      <div>Likes: {dashboardData.likes}</div>
      <div>followers: {dashboardData.followers}</div>
      <div>followings: {dashboardData.following}</div>
      <div>subscribe: {dashboardData.subscribe}</div>
    </div>
  );
}

export default Dashboard;
