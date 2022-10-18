import React from 'react'
import { ConnectWallet } from '@thirdweb-dev/react'

function Login() {
  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center mb-10">
            <h1 className="text-6xl text-white font-bold">The Crypto Lottery</h1>
            <h2 className="text-white mt-5">Get started by logging in with an existing wallet</h2>

            <ConnectWallet className="mt-10" />
        </div>
    </div>
  )
}

export default Login