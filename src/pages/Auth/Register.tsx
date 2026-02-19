import {useState, type SubmitEvent} from "react"
import { Link, useNavigate } from "react-router-dom";
import { EmailIcon, NameIcon, PasswordIcon } from "../../assets/icons";
import { ButtonLoading, Input, PATH } from "../../components";
import Button from "../../components/Button";
import { RegisterFn } from "../../services";

export interface RegisterDataType {
  name:string,
  email:string,
  password:string,
  avatar:string
}

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  function handleSubmit(evt: SubmitEvent<HTMLFormElement>){
    setLoading(true)
    evt.preventDefault()
    const data:RegisterDataType = {
      name:evt.target.fullName.value,
      email: evt.target.email.value,
      password: evt.target.password.value,
      avatar: "https://c.files.bbci.co.uk/F8D4/production/_94000736_homunweb2.jpg"
    }
    RegisterFn(data, navigate, setLoading)
  }
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10 
    bg-linear-to-br from-[#0a0f1f] via-[#111827] to-[#3f0d12]">

      <div className="w-full max-w-lg p-10 rounded-3xl
      bg-[#0f172a]/90 backdrop-blur-2xl
      border border-blue-900/30
      shadow-[0_0_60px_rgba(0,0,139,0.25)]">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center 
        bg-linear-to-r from-red-400 to-blue-500 
        bg-clip-text text-transparent mb-3">
          Create Account
        </h1>

          <p className="text-center text-gray-400 text-lg mb-10">Join us</p>

        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-8">
          {/* Name */}
          <div className="space-y-3">
            <label className="text-base text-blue-400 font-semibold tracking-wide">Full Name</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400">
               <NameIcon/>  
              </span>
            <Input type="text" placeholder="John Doe"
              name="fullName" extraClass="py-4 px-4 text-lg rounded-xl bg-[#111827] text-white 
              placeholder-gray-500 border border-blue-900/40 
              focus:ring-2 focus:ring-blue-600 focus:outline-none transition w-full"/>
            </div>
          </div>

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
                extraClass="pl-12 py-4 text-lg rounded-xl bg-[#111827] text-white 
                placeholder-gray-500 border border-blue-900/40 
                focus:ring-2 focus:ring-blue-600 focus:outline-none transition w-full"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-3">
            <label className="text-base text-red-400 font-semibold tracking-wide">Password</label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-red-400">
                <PasswordIcon />
              </span>

              <Input
                type="password"
                placeholder="********"
                name="password"
                extraClass="pl-12 py-4 text-lg rounded-xl bg-[#111827] text-white 
                placeholder-gray-500 border border-red-900/40 
                focus:ring-2 focus:ring-red-600 focus:outline-none transition w-full"
              />
            </div>
          </div>

          {/* Button */}
          <Button type="submit" extraClass="w-full py-4 text-lg rounded-xl font-semibold bg-linear-to-r from-blue-700 to-red-700 hover:scale-[1.02] active:scale-95 transition duration-300 shadow-lg shadow-red-900/40">{loading ? <ButtonLoading/> : "Sign up"}
          </Button>
            
          {/* Back to login */}
          <p className="text-center text-base text-gray-400 mt-6">
            Already have an account?{" "}
            <Link to={PATH.login} className="text-blue-500 hover:underline font-semibold">Sign In</Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Register;
