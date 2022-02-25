import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { HiChevronDoubleRight } from 'react-icons/hi'

const BreadcrumbItem = ({ url, hasChevron, children }) => {
  return (
    <li className="inline-flex items-center">
      <div className="flex items-center">
        {url && (
          <Link
            to={url}
            className="ml-1 font-bold text-sm text-gray-700 hover:text-gray-900 md:mr-2 dark:text-gray-400 dark:hover:text-white">
            {children}
          </Link>
        )}
        {!url && (
          <span className="ml-1 font-bold text-sm text-gray-500 md:mr-2 dark:text-gray-500">
            {children}
          </span>
        )}
        {hasChevron && <HiChevronDoubleRight />}
      </div>
    </li>
  )
}

export const Breadcrumb = ({ items = [], children }) => {
  const title = items.length === 0 ? null : items[items.length - 1].label

  return (
    <>
      {title && (
        <Helmet>
          <title>{title} | Connected City</title>
        </Helmet>
      )}
      <div className="flex justify-between items-center">
        <nav className="flex flex-grow py-3 text-gray-700" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {items.map(({ label, url }, i) => (
              <BreadcrumbItem key={label} url={url} hasChevron={i != items.length - 1}>
                {label}
              </BreadcrumbItem>
            ))}
          </ol>
        </nav>
        <div className="flex items-center gap-4">{children}</div>
      </div>
    </>
  )
}
