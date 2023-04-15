import {useState} from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <div class="absolute bg-support inset-0 h-screen overflow-hidden bg-opacity-50">
        <svg
          class="absolute  opacity-70 top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-primary [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="100%" y="-1">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="flex min-h-full  items-center justify-center px-4 py-12 sm:px-6 lg:px-8 drop-shadow-[0_0px_90px_rgba(207,77,114,0.35)]">
        <div className="w-full max-w-md space-y-8 drop-shadow-[_30px_40px_rgba(207,77,114,0.15)] mt-24 bg-primary bg-opacity-60 backdrop-blur-sm border-2 p-10  rounded-2xl">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-support">
              Register
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or {"   "}
              <a href="#" className="font-medium text-support ">
                {"   "} start your 14-day free trial
              </a>
            </p>
          </div>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="name" className="sr-only">
                Username
              </label>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                autoComplete="username"
                required
                className="relative block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 f sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                autoComplete="current-password"
                required
                className="relative block p-3 my-3 w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* <div className="flex items-center justify-end">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-primary hover:text-secondary"
              >
                Forgot your password?
              </a>
            </div>
          </div> */}
          <div>
            <button
              type="submit"
              className="w-56 absolute  mt-4  mx-16 rounded-md bg-rose-100 py-6 text-sm font-semibold text-primary hover:bg-rose-300 "
            >
              Register
            </button>
          </div>
        </div>
      </div>
      {/* <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      /> */}
      {/* <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      /> */}
    </form>
  );
}