import Image from 'next/image';
import img from '../public/1.jpg';

function ImageShow() {
    return (
        <>
            <Image src={img} placeholder='blur' alt='pet' width='300' height='300' />
            <div>
                {['1', '2', '3', '4', '5'].map(path => {
                    return (
                        <div key={path}>
                            <Image src={`/${path}.jpg`} alt='Loading' width='300' height='300' />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ImageShow;