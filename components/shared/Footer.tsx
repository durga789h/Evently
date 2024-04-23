import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image from '../../public/assets/images/logo.svg'

export default function Footer() {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href={"/"}>
          <Image src={image} width={120} height={45} alt="logo"/>
        </Link>
        <p>2024 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}
