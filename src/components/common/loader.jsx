import React from 'react'
export default function loader({error}){
	return (
		<div className="min-h-screen flex flex-col justify-center items-center">
			<div className="loader p-5 rounded-full flex space-x-3">
				<div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
				<div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
				<div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
			</div>
			{
			error == true ? (
				<div role="alert">
					<div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
						Wrong Password or Email
					</div>
					<div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
						{/* <p>Please Try Again!</p> */}
						
						<button className="bg-gray-800 text-white mt-5 p-3 rounded-md w-full"
							onClick={() => window.location.reload()}
						>
							Try Again!
						</button>
					</div>
				</div>
			) : null
			}
		</div>
		
	)
}