import React from 'react'

export const ModalComponent = ({ children, open = false }) => {
    return (
        <>
            {open ? (
                <>
                    <div
                        className=""
                    >
                        <div className="">
                            {/*content*/}
                            <div className="">
                                {children}
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    )
}
