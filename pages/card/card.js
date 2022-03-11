import Head from 'next/head'
import { useSession, signOut } from "next-auth/client"
import 'tailwindcss/tailwind.css'
import {FaGithub, FaAngleLeft} from 'react-icons/fa'


export default function Card() {
  const [session, loading] = useSession();
  const user = session?.user;
  
  console.log(session);
    return (
    <div>
      <Head>
        <title>GitCard - {user?.name}</title>
        <link rel="icon" href="/github.ico" />
      </Head>

      <nav className="flex absolute right-0 m-5">
        <div className="absolute bg-gradient-to-r from-blue-500 to-indigo-400 rounded-lg filter blur-sm -inset-0.5"></div>

        <button onClick={() => signOut()} className="relative p-2 pl-8 pr-8 font-montserrat font-bold bg-black rounded-lg text-white flex flex-col items-center transition delay-200 duration-700 hover:bg-opacity-20"><FaGithub/>Exit<FaAngleLeft/></button>
      </nav>      
      
      <div className="flex justify-center min-h-screen bg-gradient-to-tr from-blue-500 to-blue-600 sm:items-center">
        <div className="rounded-2xl p-8 pl-20 pr-20 bg-gray-900 bg-opacity-80 transition delay-200 duration-700 hover:bg-opacity-90"> 
        
          <div className="font-bold text-gray-300 flex items-center justify-center">
            <img src={user?.image} className="w-44 rounded-full shadow-2xl mr-20"/>
            <div>
              <p className="text-2xl">{user?.name}</p>
              <p className="italic">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
