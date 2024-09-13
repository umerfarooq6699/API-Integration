import React, { useEffect } from 'react';

const QuickView = ({ object, setview }) => {
    const remove = () => {
        setview(""); 
    };

    const handleOverlay = (event) => {
        if (event.target.classList.contains("overlay")) {
            setview("");  
        }
    };

    
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div onClick={handleOverlay} className='w-full h-full cursor-crosshair overlay px-3 bg-[rgb(0,0,0,0.7)] fixed top-0 left-0 flex justify-center items-center'>
            <div className='w-[100%] md:w-[40%] lg:w-[30%] relative py-5 cursor-auto bg-white rounded-xl p-3'>
                <div onClick={remove} className='absolute top-2 right-2 cursor-pointer bg-black text-white w-[30px] h-[30px] hover:bg-[rgb(44,42,42)] rounded-full flex justify-center items-center'>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <h1 className='mt-4 font-[500]'>Name: {object.name}</h1>
                <h1 className='mt-4 font-[500]'>Email: {object.email}</h1>
                <h1 className='mt-4 font-[500]'>Age: {object.age}</h1>
                <h1 className='mt-4 font-[500]'>City: {object.city}</h1>
                <h1 className='mt-4 font-[500]'>Country: {object.country}</h1>
                <h1 className='mt-4 font-[500]'>Gender: {object.gender}</h1>
            </div>
        </div>
    );
};

export default QuickView;
