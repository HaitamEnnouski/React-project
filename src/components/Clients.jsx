import { clients } from "../constants"
import styles from "../style"

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`} >
      {clients.map((client) => (
        <div className={`flex-1 ${styles.flexCenter}`}>
          <img key={client.id} src={client.logo} alt={client.name} className={`sm:w-[192px] w-[100px] object-contain ${styles.clientsLogo} hover:scale-110 transition duration-300`} />
        </div>
          ))}
    </div>
  </section>
)

export default Clients