import { useSession } from './hooks/useSession'

import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'

const App = () => {
  const { session, loading } = useSession()

  if (loading) {
    return (
      <div className="h-screen flex justify-center align-middle">
        <span className="loading loading-spinner loading-lg  "></span>
      </div>
    )
  }
  return <div>{session ? <HomePage /> : <LoginPage />}</div>
}

export default App
