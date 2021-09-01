import React from 'react'
import { InlineIcon } from '@iconify/react'
import trashCanOutline from '@iconify-icons/mdi/trash-can-outline'
import { deletePlan } from '../../service/client/Plan'
import { deleteCommission } from '../../service/client/Commision'
import PropTypes from 'prop-types'
export default function Modal(obj) {
  const [showModal, setShowModal] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const SuccessDelete = () => {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Delete Successfully</strong>
        <span className="block sm:inline"></span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onChange={() => setSuccess(false)}>
          <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
    )
  }
  const deleteFunc = ()=>{
    
    switch(obj.page){
      case 'plan':
        deletePlan(obj.id).then(res => {
          if (!res?.data.error){
            obj.handleSelectedDelete(obj.id)
            setSuccess(true)
            setInterval(() => {
              setSuccess(false)
            }, 1000)
             setShowModal(false)
          }
        }).catch(err =>  console.log(err))
        break
      // case 'agent':
      //   deleteCommission(obj.id).then(res => {
      //     if (!res?.data.error){
      //        alert(res.data.message)
      //        setShowModal(false)
      //     }
      //   }).catch(err =>  console.log(err))
      //   break
      case 'commission':
         deleteCommission(obj.id).then(res => {
          if (!res?.data.error){
             setSuccess(true)
             setShowModal(false)
          }
        }).catch(err =>  console.log(err))
        break
        
        
    }
  
  }
  
  return (
    <>
    <button className="hover:text-red-default"
    onClick={() => setShowModal(true)}>
				<InlineIcon icon={trashCanOutline} />
		</button>
    {
      success ? (
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <SuccessDelete />
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
                    Delete
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Are you sure to delete? 
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={deleteFunc}
                  >
                    Delete
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

Modal.propTypes = {
  handleDelete: PropTypes.func
}