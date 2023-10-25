import { landingCourseSelector } from '../../core/utils/landingCourseSelector.utils'
import courseDB from '../../core/services/courseDB'

const RecommandsCourses = ({className , info}) => {
  return (
    <>
        <img src={"../src/assets/images/courses/" + courseDB[0].src} alt="" className={className} data-id="1" onClick={(e)=> landingCourseSelector(e,info.bigPic.current,info.title.current,info.master.current,info.content.current,info.landingCourse.current,info.setNum)}/>
        <img src={"../src/assets/images/courses/" + courseDB[1].src} alt="" className={className} data-id="2" onClick={(e)=> landingCourseSelector(e,info.bigPic.current,info.title.current,info.master.current,info.content.current,info.landingCourse.current,info.setNum)}/>
        <img src={"../src/assets/images/courses/" + courseDB[2].src} alt="" className={className} data-id="3" onClick={(e)=> landingCourseSelector(e,info.bigPic.current,info.title.current,info.master.current,info.content.current,info.landingCourse.current,info.setNum)}/>
    </>
  )
}

export default RecommandsCourses