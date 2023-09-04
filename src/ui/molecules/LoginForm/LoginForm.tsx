import * as styles from "./LoginForm.styles";
export default function LoginForm() {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>iCORE</div>
            <div className={styles.form}>
                <h1 className={styles.form_title}>Ingresa a tu cuenta</h1>

                <div className={styles.testdiv}>
                    <span>SPAN</span>
                    <input className={styles.form_input} type="email" placeholder="Correo electrónico"/>
                </div>
                <input className={styles.form_input} type="email" placeholder="Correo electrónico"/>
                <input className={styles.form_input} type="password" placeholder="Contraseña"/>
                {/* <span>¿Olvidaste tu contraseña?</span>
                <span>Recuerdame</span>
                <input type="checkbox" />
                <button>Ingresar</button> */}
            </div>
        </div>
    )
}