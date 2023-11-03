import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { addToCourse } from '../map/CoursesMap'
import {setBlog} from '../map/BlogsMap'
import { useLocation } from 'react-router-dom';
import {setNumberCourse} from '../map/ListCousePanelMap'
const Paginate = ({ itemsPerPage , db })=>  {
  let location = useLocation()
  

  const [itemOffset, setItemOffset] = useState(0);

  const num = itemOffset + itemsPerPage;

  const dbSliced = db.slice(itemOffset, num);
  const pageCount = Math.ceil(db.length / itemsPerPage);

  if(location.pathname == "/blogs") setBlog(dbSliced)
  else if(location.pathname == "/courses") addToCourse(dbSliced)
  else if(location.pathname == "/panel/ListOfCourse") setNumberCourse(dbSliced)
  


  const handlePageClick = (e) => {
      const newOffset = (e.selected * itemsPerPage) % db.length; 
      setItemOffset(newOffset);  
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