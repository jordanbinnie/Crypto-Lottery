import React from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'

function Loading() {
return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
        <div className="flex items-center space-x-2 mb-10">
        <img 
            src="https://media-exp1.licdn.com/dms/image/C5603AQE2yYtsE2vG_Q/profile-displayphoto-shrink_200_200/0/1662439278108?e=1671062400&v=beta&t=-X1WKqXL8W7aVeiQUhaC4dDUUQm6d6E5kxlhNHEhgVc"
            alt=""
            className="rounded-full h-20 w-20"
        />
        <h1 className="text-lg text-white font-bold">Loading the Crypto Lottery Draw</h1>
        </div>
        <PropagateLoader color="white" size={30} />
    </div>
    )
}

export default Loading