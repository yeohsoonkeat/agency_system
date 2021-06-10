import React from 'react'

import SideBar from '../../common/SideBar'
import NavBar from '../../common/NavBar.jsx'

import PropTypes from 'prop-types'


const BaseLayout = ({ children }) => {
	return (
		<>
			<SideBar />
			<div className="relative md:ml-64 bg-gray-100 min-h-screen">
				<NavBar />
				<div className="relative bg-primary-default md:pt-32 pb-12 pt-12">
					<div className="px-4 md:px-10 mx-auto w-full"/>
				</div>
				<div className="px-4 md:px-10 mx-auto w-full -m-24">
					<div className="flex flex-wrap mt-4">
						<div className="w-full  mb-12 xl:mb-0 px-4">
							<div className="relative flex flex-col p-3 min-w-0 break-wordsw-full mb-6 rounded">
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

BaseLayout.propTypes = {
	children: PropTypes.node
}

export default BaseLayout