import Budjet from "./Budjet"
import Goals from "./Goals"

const Stats = () => {
  return (
    <div className="flex gap-4 items-stretch">
        {/* goals */}
        <div className="flex-[1]">
        <Goals/>
        </div>

        {/* monthly budget  */}   
        <div className="flex-[2]">
        <Budjet/>
        </div>
    </div>
  )
}

export default Stats