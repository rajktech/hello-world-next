import Link from 'next/link';
import {useRouter} from 'next/router';

function Home () {
  const router = useRouter ();
  const handleClick1 = () => {
    router.push ('/product');
  };
  const handleClick2 = () => {
    router.replace ('/product');
  };
  return (
    <div>
      <div className="nav">
      <Link href="/about">
          About us with only footer
        </Link>
        ||
        <Link href="/imageshow">
          Images
        </Link>
        ||
        <Link href="/blog">
          Blog
        </Link>
        ||
        <Link href="/product">
          Products
        </Link>
        ||
        <Link href="/posts">
          Posts
        </Link>
        ||
        <Link href="/news">
          News
        </Link>
        ||
        <Link href='/dashboard'>Dashboard with simple client fetching</Link>||
        <Link href='/dashboard-swr'>Dashboard with SWR</Link>
      </div>
      Home page

      <button onClick={handleClick1}>Place your order without replace</button>
      <button onClick={handleClick2}>Place your order with replace</button>
    </div>
  );
}

export default Home;
