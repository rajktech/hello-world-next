import Link from 'next/link';

function Post({ posts }) {
    return (<div>{posts.map((item) => {
        return(
            <>
            <Link href={`posts/${item.id}`}>
                <h4>{item.id}. {item.title}</h4>
            </Link>
            <hr />
            </>
        );
    })}</div>);
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        props: {
            posts: data
        }
    }
}

export default Post;