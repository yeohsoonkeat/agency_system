import React from 'react'
import { InlineIcon } from '@iconify/react'
import trashCanOutline from '@iconify-icons/mdi/trash-can-outline'
import pencilOutline from '@iconify-icons/mdi/pencil-outline'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { editRealEstate } from '../../service/client/RealEstate'
import { useParams } from 'react-router-dom'

import PropTypes from 'prop-types'
export default function RealEstateEditModa(data) {
    const { t } = useTranslation()
    console.log(data)
  const [showModal, setShowModal] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const history = useHistory()
  const {register,handleSubmit} = useForm()
  const {id} = useParams() 
	const onSubmit = async (realestate)=>{
		console.log(realestate)
		console.log(data.id)
		editRealEstate(realestate,data.data.id).then(res => {
			console.log(res)
			if (!res?.data.error){
				if(res.data.created == true){
                    setShowModal(false)
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                        history.push('/plan')

                    },500)
				}else{
					alert(res.data.message)
				}
			}
		}).catch(err =>  {
			console.log(err)})
	}

  const SuccessEdit = () => {
    return (
      <div className="bg-red-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Edit Successfully</strong>
        <span className="block sm:inline"></span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onChange={() => setSuccess(false)}>
          <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
    )
  }
  
  return (
    <>
    <button className="hover:text-red-default"
    onClick={() => setShowModal(true)}>
				<InlineIcon icon={pencilOutline} />
		</button>
    {
      success ? (
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <SuccessEdit />
            </div>
        
        </div>
      ) : null
    }
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Edit
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7 px-10">
										<div className="grid grid-cols-1">
												<label className=" text-left uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Real Estate Name')}</label>
												<input {...register('realestate_name')} defaultValue={data.data.realestate_name} required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="text" placeholder="Name"/>
										</div>
									</div>	
                                    <div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7 px-10 py-4">
										<div className="grid grid-cols-1">
												<h1 className="uppercase md:text-sm text-xs text-primary-default text-light text-left font-semibold">{t('PRICE')}</h1>
												<input {...register('realestate_price')} defaultValue={data.data.realestate_price} required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="number" placeholder="price"/>
										</div>
									</div>	
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
                  </form>
                </div>
                {/*footer*/}
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

RealEstateEditModa.propTypes = {
  handleDelete: PropTypes.func
}