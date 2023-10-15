import ItemLandingNews from './ItemLandingNews'

import blogsFiltered from '../../../core/utils/blogsFiltering.utils'

const ItemNews = () => {
  
  return (
    <>
      {
        blogsFiltered.map((element,index) => {
            return <ItemLandingNews key={index} image={element.src}/>
        })
      }

    </>
  );
};

export default ItemNews;
