
import AuthForm from './auth-form'

export default function Home() {
  return (
    <div className="column flex justify-center items-center">
      <div className="col-6 ">
        <h1 className="header ">Supabase Login </h1>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  )
}