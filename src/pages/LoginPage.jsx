import { useSession } from '../hooks/useSession'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../schemas/sessionSchema'

export const LoginPage = () => {
  const { login, errors: loginErrors = [] } = useSession()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data) => login(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-screen w-full max-w-xs mx-auto justify-center  gap-2"
    >
      <label className="form-control ">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="text"
          required={true}
          placeholder="example@email.com"
          className="input input-bordered w-full max-w-xs"
          {...register('email', { required: true })}
        />
      </label>
      <p className="text-error text-sm">{errors.email?.message}</p>
      <label className="form-control ">
        <div className="label">
          <span className="label-text">Password</span>
        </div>
        <input
          type="password"
          required={true}
          placeholder="********"
          className="input input-bordered w-full max-w-xs"
          {...register('password', { required: true })}
        />
      </label>
      <p className="text-error text-sm">{errors.password?.message}</p>
      {loginErrors.map((error, i) => (
        <p className="text-sm text-error" key={i}>
          {error}
        </p>
      ))}
      <button type="submit" className="btn btn-primary mt-3">
        Log In
      </button>
    </form>
  )
}
