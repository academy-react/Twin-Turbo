import catItems from '../../core/services/landingCatDB'
const LandingCat = () => {
    return (
        catItems.map((el, index) => {
            return (
              <div key={index}>
                <img src={el.src} className="w-28 h-28 p-2" />
                <p style={{ color: el.color }}>{el.name}</p>
              </div>
            );
        })
    )
}

export default LandingCat