import React from 'react'
import { useTranslation } from 'react-i18next'


export default function index() {
	const { t } = useTranslation()
	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('SETTING')}</h1>
			</div>
			<div className="mt-10"/>
			<div >
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							<h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
							<p className="mt-1 text-sm text-gray-600">
								This information will be displayed publicly so be careful what you share.
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
												<input type="text" name="fullname" id="fullname" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mikasa"/>
											</div>
										</div>
									</div>
									<div className="grid grid-cols-3 gap-6">
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
												{t('SEX')}

											</label>
											<div className="mt-1 flex rounded-md shadow-sm">
												<select required className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" id="grid-state">
													<option>Male</option>
													<option>Female</option>
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
											<textarea id="about" name="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
										</div>
										<p className="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
										</p>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700">
											{t('PROFILE_PIC')}
										</label>
										<div className="mt-1 flex items-center">
											<button type="button" className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Change
											</button>
										</div>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700">
                Cover photo
										</label>
										<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
											<div className="space-y-1 text-center">
												<div className="flex text-sm text-gray-600">
													<label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
														<span>Upload a file</span>
														<input id="file-upload" name="file-upload" type="file" className="sr-only"/>
													</label>
													<p className="pl-1">or drag and drop</p>
												</div>
												<p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
												</p>
											</div>
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
