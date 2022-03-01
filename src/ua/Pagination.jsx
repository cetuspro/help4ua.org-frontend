import React, {useEffect} from "react";
import styled from 'styled-components'
import classnames from 'classnames'
import {ChevronLeft, ChevronRight, ThreeDots} from "react-bootstrap-icons";
import { Link, useNavigate } from 'react-router-dom'

const StyledItem = styled.button`
  width: 2.75em;
  height: 2.75em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.25rem;
  border-radius: 25%;
  transition: background-color 0.2s ease;
  border: 0;
  color: inherit;
  &:not(.bg-primary):hover {
    background-color: rgba(0, 0, 0, 0.1) !important;
  }
`

export const Pagination = ({ pageNumber, pages, rootUrl }) => {
  
  const navigate = useNavigate();
  const setPage = (page) => {
    if(page) navigate(rootUrl + '?page=' +page);
    else navigate(rootUrl);
  }
  // console.log('PAGINATION')
  useEffect(() => {
    if (pages > 0 && pageNumber > pages) setPage(pages);
    else if (pageNumber < 1) setPage();
  }, [pageNumber, pages])

  if(!pageNumber) return null;
  if (pages < 2) return null

  let ICON_SIZE_MD;
  const IconItem = ({ page, children, icon: Icon }) => (
    <StyledItem className="cursor-pointer bg-transparent" onClick={() => setPage(page)}>
      {children}
      <Icon size={ICON_SIZE_MD} strokeWidth={3} />
    </StyledItem>
  )

  const Item = ({ page }) => {
    const active = pageNumber === page
    return (
      <StyledItem
        onClick={() => !active && setPage(page)}
        className={classnames({
          'font-weight-bold shadow-sm': true,
          'bg-theme cursor-pointer': !active,
          'bg-primary text-white cursor-default': active,
        })}
      >
        {page}
      </StyledItem>
    )
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex space-x-2">
        <li>
          <ItemLink
            active={pageNumber === page}
          >
            
          </ItemLink>
          <Link
            to={}
            className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
          >
            
          </Link>
        </li>
        <li>
          <button
            className="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">1
          </button>
        </li>
        <li>
          <button
            className="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">2
          </button>
        </li>
        <li>
          <button
            className="w-10 h-10 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 rounded-full focus:shadow-outline">3
          </button>
        </li>
        <li>
          <button
            className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100"
          >
            
          </button>
        </li>
      </ul>
    </nav>
  )
  
  return (
    <div className="d-flex justify-content-center mt-2 zindex-3">
      {/* arrow prev */}
      {pageNumber > 1 && <IconItem page={pageNumber - 1} icon={ChevronLeft} />}

      {/* first page */}
      <Item page={1} />

      {/* prev ellipsis */}
      {pageNumber > 1 + 2 && pages > 4 && (
        <IconItem page={Math.floor(pageNumber / 2)} icon={ThreeDots} />
      )}

      {/* third prev, when at last page */}
      {pageNumber === pages && pageNumber - 2 > 1 && <Item page={pageNumber - 2} />}

      {/* current, prev and next page */}
      {pageNumber - 1 > 1 && <Item page={pageNumber - 1} />}
      {pageNumber > 1 && pageNumber < pages && <Item page={pageNumber} />}
      {pageNumber + 1 < pages && <Item page={pageNumber + 1} />}

      {/* third next, when at first page */}
      {pageNumber === 1 && pageNumber + 2 < pages && <Item page={pageNumber + 2} />}

      {/* next ellipsis */}
      {pageNumber < pages - 2 && pages > 4 && (
        <IconItem page={Math.ceil((pageNumber + 1 + pages) / 2)} icon={ThreeDots} />
      )}

      {/* last page */}
      <Item page={pages} />

      {/* arrow next */}
      {pageNumber < pages && <IconItem page={pageNumber + 1} icon={ChevronRight} />}
    </div>
  )
}

const ItemLink = ({active, children}) => {
  return (
    <Link
      className={classnames({
        'w-10 h-10 rounded-full flex items-center justify-center': true,
        'transition-colors duration-150 focus:shadow-outline': true,
        'text-indigo-600 hover:bg-indigo-100 bg-white': !active,
        '': true,
        'text-white bg-indigo-600 border border-r-0 border-indigo-600': active,
      })}
    >
      {children}
    </Link>
  )
}
          