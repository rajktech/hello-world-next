import { useRouter } from 'next/router';

function ItemDetail({ item }) {
    // const router = useRouter();
    // if (router.isFallback) {
    //     return (<h1>Loading...</h1>);
    // }
    return (<>
    <h4>{item.id}. {item.title}</h4>
    <h3>{item.price}</h3>
    </>);
}

export async function getStaticPaths() {
    const response = await fetch('http://localhost:4000/products');
    const data = await response.json();
    return {
        paths: [
            {
                params: {itemId: '1'}
            }
        ],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { params } = context; 
    const response = await fetch(`http://localhost:4000/products/${params.itemId}`);
    const data = await response.json();
    if (!data.id) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            item: data
        }
    }
}

export default ItemDetail;