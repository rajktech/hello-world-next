import React from 'react';
import Footer from '../components/footer';

function About () {
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
    return <div>about us page</div>;
  }
  
  export default About;

  About.getLayout = function PageLayout(page) {
    return (
        <>
        <div>Hii</div>
        <Footer />
        </>
    );
}
  