import { auth, provider } from '../firebase'

export default function Login() {
    
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={signIn}>Google</button>
        </div>
    )
}