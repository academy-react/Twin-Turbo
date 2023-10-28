import courseDB from '../services/courseDB'
import { addToCourse } from '../../components/map/CoursesMap'
const sortCourse = (e) => {

    radio1.onclick = ()=> {
        setTimeout(() => {addToCourse([])}, 1);
        setTimeout(() => {addToCourse(courseDB.sort((a,b)=> a.price - b.price))}, 2);
    }   
    radio2.onclick = ()=> {
        setTimeout(() => {addToCourse([])}, 1);
        setTimeout(() => {addToCourse(courseDB.sort((a,b)=> a.quantityStudent - b.quantityStudent))}, 2);
    } 
    radio3.onclick = ()=> {
        setTimeout(() => {addToCourse([])}, 1);
        setTimeout(() => {addToCourse(courseDB.sort((a,b)=> a.discount - b.discount))}, 2);
    }
    radio4.onclick = ()=> {
        setTimeout(() => {addToCourse([])}, 1);
        setTimeout(() => {addToCourse(courseDB.sort((a,b)=> a.fullStorage - b.fullStorage))}, 2);
    }
    radio5.onclick = ()=> {
        setTimeout(() => {addToCourse([])}, 1);
        setTimeout(() => {addToCourse(courseDB.sort((a,b)=> a.id - b.id))}, 2);
    }

}

export default sortCourse