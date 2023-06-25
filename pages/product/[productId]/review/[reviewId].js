import React from 'react';
import {useRouter} from 'next/router';

const ReviewDetails = () => {
  const router = useRouter ();
  const {reviewId, productId} = router.query;
  return <div>Review {reviewId} for product {productId}</div>;
};

export default ReviewDetails;
