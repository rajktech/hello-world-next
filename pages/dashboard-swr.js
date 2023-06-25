import useSWR from 'swr';

const fetcher = async () => {
    const response = await fetch ('http://localhost:4000/dashboard');
    const data = await response.json ();
    return data;
}

function DashboardSWR() {
    const {data, error} = useSWR('dashboard', fetcher);
    if (error) return "An error occured";
    if (!data) return "Loading";

    return (
        <div>
          <h3>Dashboard Data with SWR</h3>
          <div>Likes: {data.likes}</div>
          <div>followers: {data.followers}</div>
          <div>followings: {data.following}</div>
          <div>subscribe: {data.subscribe}</div>
        </div>
      );
}

export default DashboardSWR;