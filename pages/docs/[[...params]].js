import React from 'react';
import {useRouter} from 'next/router';

const DocLink = () => {
  const router = useRouter ();
  const {params = []} = router.query;
  console.log (params, 'params');
  if (params.length === 2) {
    return <div>Feature no {params[0]} and concept no {params[1]}</div>;
  }
  return <div>DOC details page</div>;
};

export default DocLink;
