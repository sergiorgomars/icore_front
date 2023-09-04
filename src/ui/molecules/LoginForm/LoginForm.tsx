import * as styles from "./LoginForm.styles";

import { Input } from "@atoms";

export default function LoginForm() {

    return(
        <div className={styles.container}>
            <div className={styles.logo}>iCORE</div>
            <div className={styles.form}>
                <h1 className={styles.form_title}>Ingresa a tu cuenta</h1>
                <Input iconType="none" placeholder="Correo electrónico" type="text"/>
                <Input iconType="eye" placeholder="Contraseña" type="password"/>
                <a className={styles.text_forgot_pass}>¿Olvidaste tu contraseña?</a>
                
                <div className={styles.rememberme_container}>
                    <span>Recuerdame</span>
                    <input type="checkbox" />
                </div>
                <button className={styles.button}>Ingresar</button>
            </div>
        </div>
    )
}