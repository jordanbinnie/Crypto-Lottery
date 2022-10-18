import React from 'react'
import { ConnectWallet } from '@thirdweb-dev/react'

function Login() {
  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center mb-10">
            {/* <img  
                className="rounded-full h-56 w-56 mb-10"
                src="https://media-exp1.licdn.com/dms/image/C5603AQE2yYtsE2vG_Q/profile-displayphoto-shrink_200_200/0/1662439278108?e=1671062400&v=beta&t=-X1WKqXL8W7aVeiQUhaC4dDUUQm6d6E5kxlhNHEhgVc" 
                alt="" 
            /> */}
            <h1 className="text-6xl text-white font-bold">The Crypto Lottery</h1>
            <h2 className="text-white mt-5">Get started by logging in with your MetaMask</h2>

            <ConnectWallet className="mt-10" />
        </div>
    </div>
  )
}

export default Login