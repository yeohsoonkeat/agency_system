import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'


export default function index() {

	return (
		<div className="flex min-h-screen mb-8">
			<div className="w-full md:w-5/12 flex justify-center items-center flex-col md:grid place-content-center mx-auto ">
				<h1 className="text-5xl font-black uppercase text-center block">Mongkul <br/>Makra</h1>
				
				<p className="text-red-400 text-center max-w-sm  break-words p-3 mt-5 mb-5 bg-red-50 border-l-4"></p>
				<form className="w-11/12 mx-auto sm:w-full">
				
					<div className="mt-5 mb-5">
						<label className="block text-xl font-semibold text-gray-400" htmlFor="username">{'ឈ្មោះអ្នកប្រើប្រាស់'}</label>
						<input className="border-2 w-full md:w-96 p-3 mt-1 rounded-md border-gray-800 outline-none" id="username" autoComplete="off" name="email"
							autoFocus/>
					</div>
					<div>
						<label className="block text-xl font-semibold text-gray-400" htmlFor="password">{'លេខសម្ងាត់'}</label>
						<input className="border-2 w-full md:w-96 p-3 mt-2 rounded-md border-gray-800 outline-none" id="password" type="password" autoComplete="off" name="password"
							autoFocus/>
					</div>
					<a href="#" className="block text-right opacity-80 hover:opacity-100 hover:underline text-blue-500 mt-3 font-semibold mr-2">{'ភ្លេចលេខសម្ងាត់?'}</a>
					<button className="bg-gray-800 text-white mt-10 p-3 rounded-md w-full">{'ចូលប្រើប្រាស់'}</button>

					<button className="bg-white-800 text-gray-800 mt-10 p-3 rounded-md w-full flex items-center justify-between hover:shadow-lg transition ring-primary-default ring-1">

						<span className="flex-1 text-center">
							{'ចូលប្រើប្រាស់'} 
						</span>
					</button>
				</form>
				
			</div>
			<div className="flex-1 bg-gray-800 hidden xl:block">
				<div className="h-screen grid place-content-center">
					<img src={logo} width="300px" className="mx-auto"/>
					<h1 className="text-5xl mt-5" style={{color:'#D3AC49'}}>{'ក្រុមហ៊ុន មង្គល មករា​ រៀលធី'}</h1>
				</div>
			</div>
			
		</div>
	)
}
