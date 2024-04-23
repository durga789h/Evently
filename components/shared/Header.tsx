import image from '../../public/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import {

  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Navitems from './Navitems'
import MobileNav from './MobileNav'
 

export default function Header() {
  return (
   <header className='w-full border-b'>
   <div className='wrapper flex items-center justify-start'>
<Link href={"/"} className='w-36'> <Image src={image} width={128} height={40} alt='img'/>    </Link>
<SignedIn>
  <nav className='md:flex-between hidden w-full max-w-xs'>
    <Navitems/>
  </nav>
</SignedIn>
<div className='flex w-32 justify-end gap-3'>
<SignedIn>
       
   <UserButton afterSignOutUrl='/'/>
<MobileNav/>
   {/*this mobile app*/}
 
      </SignedIn>
<SignedOut>
    <Button asChild className='rounded-full bg-blue-500' size={"lg"}>
        <Link href={"/sign-in"}>Login</Link>
    </Button>
</SignedOut>
</div>
<div>

</div>
   </div>
   </header>
  )
}
