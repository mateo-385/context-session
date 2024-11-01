import { useSession } from '../hooks/useSession'

export const HomePage = () => {
  const { logout, user } = useSession()

  const handleLogOut = () => {
    logout()
    window.location.href = '/'
  }
  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <h1 className="text-2xl m-5">Hi, {user.name}!</h1>
      <button onClick={handleLogOut} className="btn btn-secondary">
        Log Out
      </button>
    </div>
  )
}
