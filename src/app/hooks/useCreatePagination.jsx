import {useMemo} from "react";

export const PAGINATION_ITEM_TYPE_NUMBER  = 'number';
export const PAGINATION_ITEM_TYPE_FIRST   = 'first';
export const PAGINATION_ITEM_TYPE_PREV    = 'prev';
export const PAGINATION_ITEM_TYPE_NEXT    = 'next';
export const PAGINATION_ITEM_TYPE_LAST    = 'last';
export const PAGINATION_ITEM_TYPE_DOTS    = 'dots';
export const PAGINATION_ITEM_TYPE_CURRENT = 'current';

export const PAGINATION_SET_PAGE_TYPE_URL   = 'url';
export const PAGINATION_SET_PAGE_TYPE_STATE = 'state';

export const useCreatePagination = (params, {mode, setPager, getUrl}, range = 3) => {

  const pages        = 9;//isNaN(parseInt(params?.pages))        ? 1  : parseInt(params?.pages);
  const CurrentPage   = 10;//isNaN(parseInt(params?.CurrentPage))   ? 1  : Math.min(pages, parseInt(params?.CurrentPage));
  const PerPage     = 15;//isNaN(parseInt(params?.PerPage))     ? 10 : parseInt(params?.PerPage);
  const resultsCount = 1000;//isNaN(parseInt(params?.resultsCount)) ? 0  : parseInt(params?.resultsCount);
  const lastPage = Math.max(pages, 1); // set lastPage to MINIMUM 1

  const pagination = useMemo(() => {

    let items = [];

    const createItem = (type, val) => {
      items.push({
        key: `${type}_${val}`,
        type,
        value: val,
        url: getUrl(val, PerPage),
        setPage: () => setPager(val, PerPage),
      });
    }

    // first page
    createItem(PAGINATION_ITEM_TYPE_FIRST, 1);

    //prev page
    if(CurrentPage>1) {
      createItem(PAGINATION_ITEM_TYPE_PREV, CurrentPage-1);
    }

    // [CurrentPage-range]
    if(CurrentPage>range) {
      createItem(PAGINATION_ITEM_TYPE_DOTS, CurrentPage-range);
    }

    // [currentPage-range......currentPage-1]
    for(let i=CurrentPage-range+1; i<CurrentPage; i++) {
      if(i>=1) {
        createItem(PAGINATION_ITEM_TYPE_NUMBER, i);
      }
    }

    // current page
    createItem(PAGINATION_ITEM_TYPE_CURRENT, CurrentPage);

    // [currentPage+1......currentPage+range]
    for(let i=CurrentPage+1; i<=CurrentPage+range-1; i++) {
      if(i<pages) {
        createItem(PAGINATION_ITEM_TYPE_NUMBER, i);
      }
    }


    // CurrentPage+range
    if(lastPage-CurrentPage>=range) {
      createItem(PAGINATION_ITEM_TYPE_DOTS, CurrentPage+range);
    }

    // next page
    if(lastPage-CurrentPage>=1) {
      createItem(PAGINATION_ITEM_TYPE_NEXT, CurrentPage+1);
    }

    // last page
    createItem(PAGINATION_ITEM_TYPE_LAST, lastPage);

    return items;
  }, [CurrentPage, lastPage, PerPage, resultsCount]);

  return {
    pagination,
    CurrentPage,
    lastPage,
    PerPage,
    resultsCount,
    mode,
    // from,
    // to,
  }

}
