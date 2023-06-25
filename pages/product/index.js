import React from 'react';
import Link from 'next/link';

const Product = () => {
  return (
    <div>this is product page

        <br/>
        <h4><Link href='product/1'>Product1</Link></h4>
        <h4><Link href='product/2' replace>Product2</Link></h4>
        <h4><Link href='product/3'>Product3</Link></h4>

    </div>
  )
}

export default Product;
