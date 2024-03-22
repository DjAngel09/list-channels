import React from 'react'

export const ModalComponent = ({ children, open = false, setOpenModal }) => {
    return (
        <>
            {open ? (
                <div className="">
                    <button
                        onClick={() => setOpenModal(false)}
                        className='fixed top-4 text-white cursor-pointer right-4 z-20 text-2xl'
                    >
                        X
                    </button>
                    {/*content*/}
                    <div className="">
                        {children}
                    </div>
                </div>
            ) : null}
        </>
    )
}
