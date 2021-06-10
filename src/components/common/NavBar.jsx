import React, {useContext} from 'react'

import googleTranslate from '@iconify-icons/mdi/google-translate'
import { InlineIcon } from '@iconify/react'
import { createPopper } from '@popperjs/core'
import { changeLanguage } from '../../hooks/useTranslation'
import ConfirmModal from './ConfirmModal'
import { AuthContext } from '../../hooks/useAuth'
import { useTranslation } from 'react-i18next'



export default function Navbar() {
	const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
	const btnDropdownRef = React.createRef()
	const popoverDropdownRef = React.createRef()
	const { t } = useTranslation()
	const { currentUser } = useContext(AuthContext)

	const openDropdownPopover = () => {
		createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
			placement: 'bottom-start'
		})
		setDropdownPopoverShow(true)
	}
	const closeDropdownPopover = () => {
		setDropdownPopoverShow(false)
	}

	return (
		<>
			{/* Navbar */}
			<nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
				<div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
					<div
						className=" text-xl uppercase hidden text-white lg:inline-block font-semibold"
						href="#"
						onClick={e => e.preventDefault()}
					>
						

					</div>
                   
					{/* User */}
					<ul className="flex-col text-2xl md:flex-row list-none space-x-3 items-center hidden md:flex">
						<li className="opacity-70 hover:opacity-100 hover:text-green-700 text-white inline-block">
							{/* <InlineIcon icon={bellOutline} /> */}
						</li>
						<li className="opacity-70 hover:opacity-100 hover:text-blue-700 text-white inline-block"
							ref={btnDropdownRef}
							onClick={() => {
								dropdownPopoverShow
									? closeDropdownPopover()
									: openDropdownPopover()
							}}
						>
							<InlineIcon icon={googleTranslate} />
							<div
								ref={popoverDropdownRef}
								className={
									(dropdownPopoverShow ? 'block ' : 'hidden ') +
                                    'bg-white w-full sm:w-6/12 md:w-2/12 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1'
								}
							>
								<button
									onClick={() => changeLanguage('en')}
									className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:underline'
								>
                                    English
								</button>
								<button
									onClick={() => changeLanguage('kh')}
									className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:underline'
								>
                                    ខ្មែរ
								</button>
							</div>
						</li>
						<li>
							<ConfirmModal
								text={t('LOGOUT')}
							>
								<div className=" m-5">
									<p>{ t('LOGOUT_WARN') }</p>
									<p>{t('CONFIRMATION_TEXT')}</p>
								</div>
							</ConfirmModal>
						</li>
					</ul>
				</div>
			</nav>
			{/* End Navbar */}
		</>
	)
}
