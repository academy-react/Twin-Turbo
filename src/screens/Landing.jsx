import Services from '../components/Services'
import Category from '../components/Category'
import TopLanding from './TopLanding'
const Landing = () => {

  return (
    <div className="w-[1280px] mx-auto my-0 overflow-hidden border border-[green]">

        <TopLanding />
        <Services />
        <Category />

    </div>
  )

}

export default Landing