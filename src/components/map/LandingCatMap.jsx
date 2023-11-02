import catItems from '../../core/services/landingCatDB'
const LandingCatMap = () => {
    return (
        catItems.map((el, index) => {
            return (
              <div key={index} className="transition duration-500 max-[540px]:scale-[90%] max-[400px]:scale-[80%] max-[350px]:scale-[70%]"  data-aos="flip-left" >
                <img src={el.src} className="w-28 h-28 p-2 max-[1000px]:w-24 max-[1000px]:h-24" />
                <p style={{ color: el.color }}>{el.name}</p>
              </div>
            );
        })
    )
}

export default LandingCatMap