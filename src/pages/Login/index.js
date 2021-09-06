import React, { useState, useContext } from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../hooks/useAuth'


export default function index() {
	const { register, handleSubmit } = useForm()
	const { login } = useContext(AuthContext)
	const onSubmit = (data) => {
		login(data)
	}
	const inputStyle={
		'fontSize': '20px',
		'fontFamily': 'monospace'
	}
	return (
		<div className="flex min-h-screen mb-8">
			<div className="w-full flex-1 md:w-5/12 flex justify-center items-center flex-col md:grid place-content-center mx-auto ">
				<h1 className="text-5xl font-black uppercase text-center block">Mongkul <br/>Makra</h1>
				
				<form  onSubmit={handleSubmit(onSubmit)} className="w-11/12 mx-auto sm:w-full">
				
					<div className="mt-5 mb-5">
						<label className="block text-xl font-semibold text-gray-400" htmlFor="fullname_or_email">{'ឈ្មោះអ្នកប្រើប្រាស់'}</label>
						<input {...register('fullname_or_email')} style={inputStyle} className="border-2 w-full md:w-96 p-3 mt-1 rounded-md border-gray-800 outline-none" id="fullname_or_email" autoComplete="on"
							autoFocus/>
					</div>
					<div>
						<label className="block text-xl font-semibold text-gray-400" htmlFor="password">{'លេខសម្ងាត់'}</label>
						<input {...register('password')} className="border-2 w-full md:w-96 p-3 mt-2 rounded-md border-gray-800 outline-none" id="password" type="password" autoComplete="off" 
							autoFocus/>
					</div>
					<a href="#" className="block text-right opacity-80 hover:opacity-100 hover:underline text-blue-500 mt-3 font-semibold mr-2">{'ភ្លេចលេខសម្ងាត់?'}</a>
					<button type="submit" className="bg-gray-800 text-white mt-10 p-3 rounded-md w-full">{'ចូលប្រើប្រាស់'}</button>
					<div>	
						<Link to='/signupform'>
							<button className="bg-gray-800 text-white mt-5 p-3 rounded-md w-full">{'ចុះឈ្មោះ'}</button>
						</Link>
					</div>
					

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
