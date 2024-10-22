



import { Outlet } from 'react-router';



const Mainlayout = () => {
    return (
        <div className=''>
            {/* <Header  /> */}

            
            <Outlet />
        </div>
    );
};

export default Mainlayout;