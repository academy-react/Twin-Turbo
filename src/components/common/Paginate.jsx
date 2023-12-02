import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router-dom';
import {setNumberCourse} from '../map/ListCousePanelMap'
import { settingPageNumber } from '../map/CoursesMap';
import { settingPageNumberBlog } from '../map/BlogsMap';

const Paginate = ({ itemsPerPage , db })=>  {
  let location = useLocation()
  

  const [itemOffset, setItemOffset] = useState(0);

  const num = itemOffset + itemsPerPage;

  const dbSliced = db.slice(itemOffset, num);
  const pageCount = Math.ceil(db.length / itemsPerPage);

  // if(location.pathname == "/blogs") setBlog(dbSliced)
  // else if(location.pathname == "/courses") addToCourse(dbSliced)
  if(location.pathname == "/panel/ListOfCourse") setNumberCourse(dbSliced)
  


  const handlePageClick = (e) => {
      const newOffset = (e.selected * itemsPerPage) % db.length; 
      setItemOffset(newOffset);  
      if(location.pathname.indexOf("/courses") !== -1) settingPageNumber(e.selected+1)
      else if(location.pathname.indexOf("/blogs") !== -1) settingPageNumberBlog(e.selected+1)
  };

  return (
    <>
      <ReactPaginate
        className='my-3 flex justify-around items-center [&>*]:p-[15px] [&>*]:rounded-[50px] [&>*]:w-[50px] [&>*]:h-[50px] [&>*>a]:px-[20px] [&>*>a]:py-[15px] [&>*>a]:rounded-3xl [&>*]:flex [&>*]:justify-center [&>*]:items-center'
        activeClassName='bg-[#a361a1] text-[#fff] hover:bg-[#a361a2]'
        pageClassName='hover:bg-[#999] hover:text-[#fff]'
        nextClassName='hover:bg-[#999] hover:text-[#fff]'
        previousClassName='hover:bg-[#999] hover:text-[#fff]'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        marginPagesDisplayed="10px"
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Paginate