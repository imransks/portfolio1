import styles from "./ContactStyle.module.css"

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
       <h1 className="sectionTitle">Contact</h1>
       <form action="">
        <div className="formGroup">
            <label htmlFor="" hidden>
                Name
            </label>
            <input type="text" 
            name="name" 
            id="name" 
            placeholder="Name" 
            required />
        </div>

        <div className="formGroup">
            <label htmlFor="" hidden>
                Email
            </label>
            <input type="text"
             name="email"
             id="email"
            placeholder="Email" 
            required />
        </div>

        <div className="formGroup">
            <label htmlFor="" hidden>
                Message
            </label>
            <textarea 
            name="message" 
            id="message"
            placeholder="Message" 
            required>
            </textarea>
        </div>

        <input 
        type="submit" 
        className="hover btn" 
        value='Submit' />

       </form>
    </section>
  )
}

export default Contact