import React from 'react'
import { InlineIcon } from '@iconify/react'
import trashCanOutline from '@iconify-icons/mdi/trash-can-outline'
import pencilOutline from '@iconify-icons/mdi/pencil-outline'
import { useTranslation } from 'react-i18next'
import { set, useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { editRealEstate } from '../../service/client/RealEstate'
import { useParams } from 'react-router-dom'

import PropTypes from 'prop-types'
export default function ModalChangePassword(data) {
    const { t } = useTranslation()
    console.log(data)
    const [showModal, setShowModal] = React.useState(false)
    const [password, setPassword] = React.useState([])
    const [comfirPassword, setComfirmPassword] = React.useState([])
    const [error,setError] = React.useState(false)
    const [showErrorText, setShowErrorText] = React.useState()
    const ChangePassword =  ()=>{
       if(password.length == 0 || comfirPassword.length == 0){
         console.log(1)
        setShowErrorText('Password and Comfirm Password can not be empty !')
         setError(true)  
         return
       }
      // lastest version of frontend
       if(password != comfirPassword) {
        console.log(2)
        setShowErrorText('Password and Comfirm Password are not matching !')
        setError(true)
        return
       }
       setShowModal(false)
       data.setNewPassword(password)

	}
  const AlertMessage = () => {
		return(
			<div role="alert" className="mb-5">
				<div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
					Alert!
				</div>
				<div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
					<p>{showErrorText}</p>
				</div>
			</div>
		)
	}
 
    return (
    <>
    <button 
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setShowModal(true)}>
				Reset Password
	</button>
    {showModal ? (
        <>
             
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">  
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {error ? <AlertMessage/> : null}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <p className="text-3xl font-semibold">
                    New Password
                  </p>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7 px-10">
					<div className="grid grid-cols-1">
						<label className=" text-left uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Password')}</label>
						<input onChange={e=> setPassword(e.target.value)} required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="text" placeholder="Password"/>
					</div>
				</div>	
                <div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7 px-10 py-4">
					<div className="grid grid-cols-1">
						<h1 className="uppercase md:text-sm text-xs text-primary-default text-light text-left font-semibold">{t('Comfirm Password')}</h1>
						<input onChange={e=> setComfirmPassword(e.target.value)}  required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="text" placeholder="comfirm-password"/>
					</div>
				</div>	
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setError(false)
                      setShowModal(false)}}
                  >
                    Close
                </button>
                <button
                    className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={ChangePassword}
                >
                    Reset
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

ModalChangePassword.propTypes = {
  handleDelete: PropTypes.func
}