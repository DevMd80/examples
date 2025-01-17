import type { FC, ReactNode } from 'react'
import Nav, { NavProps } from './nav.js'
import Vercel from './icons/vercel.js'

export interface LayoutProps extends NavProps {
  children?: ReactNode
  title?: string
  description?: string
}

const Layout: FC<LayoutProps> = ({ path, deployButton, children }) => {
  return (
    <div className="mx-auto h-screen flex flex-col">
      <Nav path={path} deployButton={deployButton} />

      <div className="px-8 bg-accents-0">{children}</div>

      <footer className="py-10 w-full mt-auto border-t flex items-center justify-center bg-accents-1 z-20">
        <span className="text-primary">Created by</span>
        <a
          href="https://vercel.com"
          aria-label="Vercel.com Link"
          target="_blank"
          rel="noreferrer"
          className="text-black"
        >
          <Vercel
            className="inline-block h-6 ml-3 text-primary"
            alt="Vercel.com Logo"
          />
        </a>
      </footer>
    </div>
  )
}

export default Layout
