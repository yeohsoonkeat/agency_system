/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
	return(
		<div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
			<div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
   				<div className="max-w-md">
      				<div className="text-5xl font-dark font-bold">404</div>
            		<p className="text-2xl md:text-3xl font-light leading-normal"> Sorry we couldnt find this page. </p> <br/>
          			<button
					   className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
						<Link to='/' /> back to homepage 
					</button>
    			</div>
				<div className="max-w-lg hidden md:block w-5/12">
					<aside><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png" alt="404 Image" /> </aside>
				</div>
			</div>
		</div>
	)
}