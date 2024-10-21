



import { Outlet } from 'react-router';
import Header from '../common/Header';


const Mainlayout = () => {
    return (
        <div className=''>
            <Header  />

            
            <Outlet />
        </div>
    );
};

export default Mainlayout;