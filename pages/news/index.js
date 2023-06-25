import Link from 'next/link';

function News({newsObj}) {
  console.log (newsObj, 'newsObj');
  return (
    <div>
      <h1>News</h1>
      {newsObj &&
        newsObj.map (news => {
          return (
            <div key={news.id}>
              <Link href={`/news/${news.category}`}>{news.category}</Link>
            </div>
          );
        })}
    </div>
  );
}

export async function getServerSideProps () {
  const response = await fetch ('http://localhost:4000/news');
  const data = await response.json ();
  return {
    props: {
      newsObj: data,
    },
  };
}

export default News;
