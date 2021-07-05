import React from 'react'
import { useTranslation } from 'react-i18next'

function NewAgent() {
	const { t } = useTranslation()

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('NEW_AGENT')}</h1>
			</div>
			<div className="mt-10"/>
			<div >
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							<h3 className="text-lg font-medium leading-6 text-gray-900">AGENT</h3>
							<p className="mt-1 text-sm text-gray-600">
								Agent details
							</p>
						</div>
					</div>
					<div className="mt-5 md:mt-0 md:col-span-2">
						<form >
							<div className="shadow sm:rounded-md sm:overflow-hidden">
								<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
									<div className="grid grid-cols-3 gap-6">
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
												{t('FULLNAME')}
											</label>
											<div className="mt-1 flex rounded-md shadow-sm">
												<input type="text" name="fullname" id="fullname" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 p-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mikasa"/>
											</div>
										</div>
									</div>
									<div className="grid grid-cols-3 gap-6">
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
												{t('PHONE')}
											</label>
											<div className="mt-1 flex rounded-md shadow-sm">
												<input type="text" name="phone" id="phone" className="focus:ring-indigo-500 focus:border-indigo-500 p-1 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="+855962446773"/>
											</div>
										</div>
									</div>
									<div className="grid grid-cols-3 gap-6">
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
												{t('GENDER')}

											</label>
											<div className="mt-1 flex rounded-md shadow-sm">
												<select required className="focus:ring-indigo-500 focus:border-indigo-500 p-1 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" id="grid-state">
													<option>Male</option>
													<option>Female</option>
													<option>Other</option>
												</select>
											</div>
										</div>
										
									</div>
									<div className="grid grid-cols-3 gap-6">
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
												{t('POSITION')}

											</label>
											<div className="mt-1 flex rounded-md shadow-sm">
												<select required className="focus:ring-indigo-500 focus:border-indigo-500 p-1 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" id="grid-state">
													<option>Admin</option>
													<option>Sale</option>
													<option>Other</option>
												</select>
											</div>
										</div>
									</div>
									<div>
										<label htmlFor="about" className="block text-sm font-medium text-gray-700">
											{t('DESCRIPTION')}
										</label>
										<div className="mt-1">
											<textarea id="about" name="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-1 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="detail"></textarea>
										</div>
									</div>
								</div>
								<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
									<button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
										Save
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewAgent