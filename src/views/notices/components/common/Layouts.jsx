export const NoticeLayout = ({ children, ...props }) => {
  return (
    <div
      className="text-sm text-center bg-white dark:bg-gray-900 text-black dark:text-gray-400 rounded shadow mb-4 pt-7 pb-3 px-7"
      {...props}>
      {children}
    </div>
  )
}

export const ParentRowLayout = ({ children, ...props }) => {
  return (
    <div className="flex flex-col text-left lg:flex-row lg:mb-10" {...props}>
      {children}
    </div>
  )
}

export const ChildrenLayout = ({ children, side, ...props }) => {
  return (
    <div
      className={`w-full ${side === 'left' ? 'lg:w-1/3 lg:mr-5' : 'lg:w-4/6'} mb-5 lg:mb-0`}
      {...props}>
      {children}
    </div>
  )
}

export const BottomChildrenLayout = ({ children, ...props }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between text-gray-400" {...props}>
      {children}
    </div>
  )
}
