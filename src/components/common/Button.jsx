/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { HashLink } from 'react-router-hash-link'

const Button = forwardRef(
  ({ color = 'primary', size = 'normal', to, children, className, onClick, ...rest }, ref) => {
    const buttonStyles = `${
      color === 'primary'
        ? `bg-primary hover:bg-primary-dark active:bg-primary-dark text-white`
        : color === 'secondary'
        ? `bg-gray-200 hover:bg-gray-300 text-gray-500 active:text-gray-700`
        : color === 'outline'
        ? `bg-transparent hover:bg-[rgba(0,0,0,.1)] border border-gray-400 text-gray-600 active:text-gray-700`
        : color === 'success'
        ? `bg-emerald-400 hover:bg-emerald-600 active:bg-primary-dark text-white`
        : color === 'danger'
        ? `bg-red-400 hover:bg-red-500 active:bg-primary-dark text-white`
        : ``
    }
    ${size === 'normal' ? `md:text-base px-8 py-3` : size === 'small' ? `md:text-sm px-4 py-2` : ``}
     flex items-center justify-center gap-4 ring-offset-4 focus:ring ring-primary-dark text-sm font-semibold text-center rounded-lg outline-none transition-all duration-200 ${className}`

    if (to)
      return (
        <HashLink ref={ref} {...rest} to={to} className={buttonStyles}>
          {children}
        </HashLink>
      )
    else
      return (
        <button ref={ref} {...rest} onClick={onClick} className={buttonStyles}>
          {children}
        </button>
      )
  },
)

export default Button
