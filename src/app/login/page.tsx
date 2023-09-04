'use client';
import { LoginStyles } from "@styles";
import backgroundImg from "@images/login/background.png";
import { LoginForm } from "@molecules";
type LoginProps = {};
export default function Login() {
    return(
        <div className={LoginStyles.container}>
            <div className={LoginStyles.left_section}>
               <LoginForm />
            </div>
            <div className={LoginStyles.right_section(backgroundImg.src)}></div>
        </div>
    )
}