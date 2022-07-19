import React, { FC, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './PaginationPageStyle.scss';
import { useAction } from '../../hooks/useAction';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// const PaginationPage: FC = () => {
//   return <></>;
// };

// export default PaginationPage;

const PaginationPage: FC = () => {
  const { getPagePokemonsFetch } = useAction();

  function PaginatedItems({ itemsPerPage }: any) {
    const [currentItems, setCurrentItems]: any = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
    };

    return (
      <div className="wrapper-pagination">
        <ReactPaginate
          breakLabel="..."
          previousLabel="< prev"
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          // renderOnZeroPageCount={null}
        />
      </div>
    );
  }

  return <PaginatedItems itemsPerPage={3} />;
};

export default PaginationPage;
