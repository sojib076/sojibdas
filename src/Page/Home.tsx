
import LottieOnScroll from '../components/common/LottieOnScroll';
import Banner from '../components/home/banner';
import Success from '../components/home/Success';

const Home = () => {
    return (
        <div className='bg-black '>
            <Banner></Banner>
            <LottieOnScroll />
            <Success></Success>
           
        </div>
    );
};

export default Home;