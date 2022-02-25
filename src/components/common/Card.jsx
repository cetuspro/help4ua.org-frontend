const Card = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={
        'bg-white dark:bg-gray-900 text-black dark:text-gray-400 rounded p-4 shadow ' + className
      }>
      {children}
    </div>
  )
}

export default Card
