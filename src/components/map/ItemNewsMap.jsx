import ItemLandingNews from '../landing/news/ItemLandingNews'
import blogsFiltered from '../../core/utils/blogsFiltering.utils'

const ItemNewsMap = () => {
  
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

export default ItemNewsMap;
