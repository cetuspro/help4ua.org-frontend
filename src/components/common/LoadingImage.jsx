import { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'

const LoadingImage = ({ src, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <CgSpinner
            size={22}
            className="animate-spin pointer-events-none text-gray-500"
            color="currentColor"
          />
        </div>
      )}
      <img
        src={src}
        onLoad={() => setIsLoading(false)}
        className={`${className} transition-opacity object-cover w-full h-full ${
          isLoading ? 'opacity-0 transition-none' : ''
        }`}
        {...props}
      />
    </>
  )
}

export default LoadingImage
