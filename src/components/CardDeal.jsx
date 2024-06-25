import { card } from '../assets'
import styles,{layout} from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" />
        in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in egestas, dolor sit amet, consectetur
        adipiscing elit. Quisque quis nulla vel dolor dignissim
        vestibulum.
      </p>
  <Button/>
    </div>
    <div className={`${layout.sectionInfo} relative`}>
      <img src={card} alt="card" className="w-[100%] h-100%]" />
    </div>
  
  </section>
)
export default CardDeal