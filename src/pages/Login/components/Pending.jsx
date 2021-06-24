import React, { useContext } from 'react'
import { AuthContext } from '../../../hooks/useAuth'


export default function Pending() {
	const { currentUser } = useContext(AuthContext)
	const user = currentUser
	console.log(user.role.role)
	let roleUser = user.role.role
	const [showModal, setShowModal] = React.useState(false)

	const handleCancel = async() =>{
		
	}

	return (
		<>
			<div className="min-h-screen flex items-center justify-center px-4">
    
				<div className="max-w-2xl  bg-white w-full rounded-lg shadow-xl">
					<div className="p-4 border-b bg-primary-default jus">
						<h2 className="text-2xl text-yellow-lite">
                Pending Applicant Information
						</h2>
						<p className="text-sm text-white">
                Personal details
						</p>
					</div>
					<div>
						<div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
							<p className="text-gray-600">
                    Full name
							</p>
							<p>
								{user.full_name}
							</p>
						</div>
						<div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
							<p className="text-gray-600">
                    Sex
							</p>
							<p>
								{user.sex}
							</p>
						</div>
						<div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
							<p className="text-gray-600">
                    Email Address
							</p>
							<p>
								{user.email}
							</p>
						</div>
						<div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
							<p className="text-gray-600">
                    Phone Number
							</p>
							<p>
								{user.phone_number}
							</p>
						</div>
						<div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
							<p className="text-gray-600 ">
                    National ID
							</p>
							<p>
								{user.identify_card_number}
							</p>
						</div>

						<div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
							<p className="text-gray-600">
                    Address
							</p>
							<p>
								{user.address}
							</p>
						</div>
						<div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
							<p className="text-gray-600">
                    Role
							</p>
							<p>
								{roleUser}
							</p>
						</div>
					</div> 
					<div className="hover:bg-gray-50 p-4 border-b float-right ">
						<button className='w-auto bg-green-500 hover:bg-green-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' onClick={() => setShowModal(true)}>Cancel Registration</button>
					</div>
				</div>
			</div>
			{showModal ? (
				<>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					>
						<div className="relative md:w-4/12 my-4 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg border-solid border-black-default shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start bg-primary-default justify-between p-5 text-white rounded-t">
									<h2 className="text-2xl font-semibold">
										Your data will be deleted.
									</h2>
								</div>
			
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
                                        Close
									</button>
									<button
										className=" bg-accent-yellow text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="submit"
										onClick={handleCancel}
									>
                                        Confirm
									</button>
								</div>

							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
		
	)
}
