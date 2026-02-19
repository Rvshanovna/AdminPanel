import { useContext, useState, type SubmitEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EmailIcon, PasswordIcon } from "../../assets/icons";
import { ButtonLoading, Input, PATH } from "../../components";
import Button from "../../components/Button";
import { LoginFn } from "../../services";
import { Context } from "../../context/Context";

const Login = () => {
  const navigate = useNavigate()

  const {setToken} = useContext(Context)
  const [loading, setLoading] = useState<boolean>(false)

  function handleSubmit(evt:SubmitEvent<HTMLFormElement>){
    setLoading(true)
    evt.preventDefault()
    const data = {
      email:evt.target.email.value,
      password:evt.target.password.value
    }
    LoginFn(data, setLoading, setToken, navigate)
    
  }
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10 
    bg-linear-to-br from-[#0a0f1f] via-[#111827] to-[#3f0d12]">

      <div className="w-full max-w-lg p-10 rounded-3xl
      bg-[#0f172a]/90 backdrop-blur-2xl
      border border-red-900/30
      shadow-[0_0_60px_rgba(139,0,0,0.25)]">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center 
        bg-linear-to-r from-blue-400 to-red-500 
        bg-clip-text text-transparent mb-3">Welcome Back</h1>

        <p className="text-center text-gray-400 text-lg mb-10">Sign in to continue</p>
        <form autoComplete="off" onSubmit={handleSubmit} className="space-y-8">

          {/* Email */}
          <div className="space-y-3">
            <label className="text-base text-blue-400 font-semibold tracking-wide">Email</label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
                <EmailIcon />
              </span>

              <Input
                type="email"
                placeholder="you@sample.com"
                name="email"
                extraClass="pl-12 py-4 text-lg rounded-xl bg-[#111827] text-white placeholder-gray-500 border border-blue-900/40 focus:ring-2 focus:ring-blue-600 focus:outline-none transition w-full"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-3">
            <label className="text-base text-red-400 font-semibold tracking-wide">
              Password
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-red-400">
                <PasswordIcon />
              </span>

              <Input type="password" placeholder="********" name="password" extraClass="pl-12 py-4 text-lg rounded-xl bg-[#111827] text-white placeholder-gray-500 border border-red-900/40 focus:ring-2 focus:ring-red-600 focus:outline-none transition w-full"/>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-base text-gray-400">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 accent-red-600"/>Remember me
            </label>

            <a href="#" className="hover:text-red-500 transition">Forgot password?</a>
          </div>

          {/* Button */}
          <Button type="submit" extraClass="w-full py-4 text-lg rounded-xl font-semibold bg-linear-to-r from-blue-700 to-red-700 hover:scale-[1.02] active:scale-95 transition duration-300 shadow-lg shadow-red-900/40">{loading ? <ButtonLoading/> : "Sign in"}</Button>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Create account */}
          <p className="text-center text-base text-gray-400">New here?{" "}
            <Link to={PATH.register} className="text-red-500 hover:underline font-semibold">
              Create an account</Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;
