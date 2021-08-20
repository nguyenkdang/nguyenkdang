import React from 'react'

const medalIcon = ({width, height}) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
                <path className="cls-1" d="M12 14c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm0-2c-3.314 0-6 2.687-6 6s2.686 6 6 6 6-2.687 6-6-2.686-6-6-6zm1.236 6.452l1.264-1.214-1.736-.239-.764-1.577-.764 1.577-1.736.239 1.264 1.214-.308 1.725 1.544-.826 1.544.827-.308-1.726zm1.368-9.258l5.396-6.194-2-3h-12l-2 3 6 7h3.958l-5.958-7h8l-3.377 3.869 1.981 2.325z"/>
            </svg>
        </div>
    )
}

export default medalIcon
