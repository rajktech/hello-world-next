import React from 'react';

function NewsCategory({newsObj, category}) {
  return (
    <div>
      <h3>Filtered news for category {category}</h3>
      {newsObj.map(news => {
        return (
          <div key={news.id}>
            {news.id}. {news.name}<br/>
            {news.desc}
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps (context) {
  const { params } = context;
  const { newscategory } = params;
  const response = await fetch (`http://localhost:4000/news?category=${newscategory}`);
  const data = await response.json ();
  return {
    props: {
      newsObj: data,
      category: newscategory
    },
  };
}

export default NewsCategory;
