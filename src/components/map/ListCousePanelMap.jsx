import courseDB from '../../core/services/courseDB'

var myobj = [];

const ListCousePanelMap = () => {
  let sliced = courseDB.slice(0,6)

  const findItem = (e)=> {

    let index =  e.target.parentNode.getAttribute("data-id")
    let obj = courseDB.find((element)=> element.id == index)
    let findItem = myobj.findIndex((element)=> element.id == obj.id)

    let id = obj.id
    let src = obj.src
    let name = obj.name
    let content = obj.content
    let courseName = obj.courseName

    if(findItem !== -1){
        // myobj
    }
    else {
        myobj.push({id,name,src,courseName,courseName})
    }

    localStorage.setItem("course",JSON.stringify(myobj))

  }


  return (
    sliced.map((element,index)=> {
        return (
            <div key={index} className='h-[80px] bg-[#f8f6f6] my-[7px] rounded-[25px] flex items-center justify-around [&>span]:w-[110px] px-[10px] [&>span]:text-center' data-id={`${index+1}`} >

                <img src="../src/assets/images/add.png" alt="" className='cursor-pointer' onClick={(e)=> findItem(e)}/>

                <span dir='rtl'>{element.price}  تومان  </span>
                <span dir='rtl'>{element.endTime}</span>
                <span dir='rtl'>{element.startTime}</span>
                <span dir='rtl'>{element.courseName}</span>
                <span dir='rtl'>{element.masterName}</span>
                <span dir='rtl'>{element.name}</span>

                <img src={"../src/assets/images/courses/" + element.src} alt="" className='w-[90px] h-[80%] rounded-[15px]' />
            </div>
        )
    })
  )
}

export default ListCousePanelMap