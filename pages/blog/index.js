import React from 'react';

function Blog () {
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
    return <div>Blogs page</div>;
  }
  
  export default Blog;
  