const likeUp = (e,db,dislike,setLike,url) => {

    if(!dislike) {
        let num = e.target.getAttribute("data-id")
        db[url.id-1].comment[num].like = db[url.id-1].comment[num].like + 1
        num = Math.ceil(e.target.parentNode.children[0].innerHTML) + 1
        e.target.parentNode.children[0].innerHTML = num;
        setLike(true)
    }
}
const likeDown = (e,db,dislike,setLike,url) => {
    if(!dislike){
        let num = e.target.getAttribute("data-id")
        db[url.id-1].comment[num].like = db[url.id-1].comment[num].like - 1
        num = Math.ceil(e.target.parentNode.children[0].innerHTML) - 1
        e.target.parentNode.children[0].innerHTML = num;
        setLike(false)
    }
}
const disLikeUp = (e,db,like,setDisLike,url) => {

    if(!like) {
        let num = e.target.getAttribute("data-id")
        db[url.id-1].comment[num].dislike = db[url.id-1].comment[num].dislike + 1
        num = Math.ceil(e.target.parentNode.children[0].innerHTML) + 1
        e.target.parentNode.children[0].innerHTML = num;
        setDisLike(true)
    }
}
const disLikeDown = (e,db,like,setDisLike,url) => {
    if(!like){
        let num = e.target.getAttribute("data-id")
        db[url.id-1].comment[num].dislike = db[url.id-1].comment[num].dislike - 1
        num = Math.ceil(e.target.parentNode.children[0].innerHTML) - 1
        e.target.parentNode.children[0].innerHTML = num;
        setDisLike(false)
    }
}

export { likeUp , likeDown , disLikeUp , disLikeDown }