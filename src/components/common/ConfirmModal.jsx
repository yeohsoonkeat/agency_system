import React from 'react'

import PropTypes from 'prop-types'


export default function ConfirmModal({ text, children, confirm }) {
	const [showModal, setShowModal] = React.useState(false)
	const onConfirm = () => {
		setShowModal(false)
		confirm()
	}

	return (
		<>
			<button
				className=" opacity-70 hover:opacity-90 text-white inline-block"
				type="button"
				onClick={() => setShowModal(true)}
			>
				{text}
			</button>
			{showModal ? (
				<>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					>
						<div className="relative md:w-6/12 my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg border-solid border-black-default shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start bg-primary-default justify-between p-5 text-white rounded-t">
									<h3 className="text-3xl font-semibold">
										{text}
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="text-white text-sm block outline-none focus:outline-none">
                                            X
										</span>
									</button>
								</div>
								{children}
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
										onClick={onConfirm}
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

ConfirmModal.propTypes = {
	text: PropTypes.string,
	children: PropTypes.node,
	confirm: PropTypes.func
}
