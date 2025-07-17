import { advices } from "../utils/data"
import AdviceCard from "./AdviceCard"

const Advices = () => {
  return (
    <section className="mt-16 relative py-12">
      <div className="absolute bg-linear-to-r from-gradient-1 to-gradient-2 top-0 left-0 w-full -z-10 h-full opacity-25" />

      <div className="container flex flex-col gap-10 lg:flex-row lg:justify-between">
        {
          advices.map(advice => (
            <AdviceCard advice={advice}/>
          ))
        }
      </div>
    </section>
  )
}
export default Advices