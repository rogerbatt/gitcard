import Head from 'next/head'
import { signIn } from "next-auth/client"
import 'tailwindcss/tailwind.css'
import {FaGithub, FaAngleRight} from 'react-icons/fa'

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>GitCard - by: @Rogerbatt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/github.ico" />
      </Head>
        <div className="flex justify-center flex-col min-h-screen bg-gradient-to-bl from-blue-500 to-blue-600 sm:items-center sm:pt-0">
          <div className=" rounded-2xl text-center p-10 pl-32 pr-32 bg-gray-900 bg-opacity-80 shadow-2xl"> 
            <div className="text-6xl font-extrabold">
              <span className="font-montserrat bg-clip-text text-transparent text-white">
                Welcome !
              </span>
            </div>
            <div className="flex justify-center flex-col">
              <p className="text-2xl font-bold text-gray-300">Login to see your git card</p>
              <button onClick={() => signIn('github')} className="p-2 font-montserrat font-bold rounded-lg text-white mt-10 flex flex-col items-center bg-gray-900 bg-opacity-80 transition delay-200 duration-700 hover:bg-blue-500"><FaGithub/>Login<FaAngleRight/></button>
            </div>
          </div>
        </div>     
    </div>

  )
}
