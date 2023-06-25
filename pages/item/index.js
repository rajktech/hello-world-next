import Link from 'next/link';

function Item({ items }) {
    return (<div>{items.map((item) => {
        return(
            <>
            <Link href={`item/${item.id}`}>
                <h4>{item.id}. {item.title}</h4>
                <h3>{item.price}</h3>
            </Link>
            <hr />
            </>
        );
    })}</div>);
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/products');
    const data = await response.json();
    return {
        props: {
            items: data
        }
    }
}

export default Item;