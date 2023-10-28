import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import blogs from "../../core/services/blogDB";
import {setBlog} from '../map/BlogsMap';

const Paginate = ({ itemsPerPage })=>  {

    const [itemOffset, setItemOffset] = useState(0);

    const num = itemOffset + itemsPerPage;

    const dbSliced = blogs.slice(itemOffset, num);
    const pageCount = Math.ceil(blogs.length / itemsPerPage);
    
      setBlog(dbSliced)


    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % blogs.length; 
        setItemOffset(newOffset);

     };

  return (
    <>
      <ReactPaginate
        className='flex  justify-around items-center [&>*]:p-[15px] [&>*]:rounded-[50px] [&>*]:w-[50px] [&>*]:h-[50px] [&>*]:flex [&>*]:justify-center [&>*]:items-center'
        activeClassName='bg-[#a361a1] text-[#fff]'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Paginate