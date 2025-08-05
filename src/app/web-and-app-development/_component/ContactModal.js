"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ContactForm from './ContactForm'
import { IoMdClose } from "react-icons/io";


export default function MyModal({isOpen=false,setIsOpen=()=>true}) {
  


  return (
    <>
    

      <Transition appear show={isOpen} as={Fragment} >
        <Dialog as="div" className="relative z-[9999]" onClose={()=>setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
           
            <div className="fixed inset-0 bg-black/25" />
        
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              
                  <div className="mt-2">
                    <ContactForm/>
                  </div>

                  <div className="mt-4">
                    {/* <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={()=>setIsOpen(false)}
                    >
                      Got it, thanks!
                    </button> */}
                      <div onClick={()=>setIsOpen(false)} className=' cursor-pointer mb-3 absolute top-1 right-2'>
                  <IoMdClose size={30}  color='#2C3441' />
                  </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
