import blogs from '../../core/services/blogDB'
let blogsFiltered = blogs.filter(element => {
    return element.id < 4
})
export default blogsFiltered