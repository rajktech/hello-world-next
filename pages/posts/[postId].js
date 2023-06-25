import { useRouter } from 'next/router';

function PostDetail({ post }) {
    // const router = useRouter();
    // if (router.isFallback) {
    //     return (<h1>Loading...</h1>);
    // }
    return (<>
    <h4>{post.id}. {post.title}</h4>
    <h3>{post.body}</h3>
    </>);
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    //console.log(data,'data');
    // const paths = data.map((post) => {
    //     return {
    //         params: {
    //             postId: `${post.id}`
    //         }
    //     }
    // })
    return {
        paths: [
            {
                params: {postId: '1'}
            },
            {
                params: {postId: '2'}
            },
            {
                params: {postId: '3'}
            }
        ],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { params } = context; 
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();
    if (!data.id) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            post: data
        }
    }
}

export default PostDetail;