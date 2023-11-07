import { Inter } from 'next/font/google'
import './globals.css'
import { SideBar } from './components/SideBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test Training',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='flex gap-7'>
          
            <SideBar />
          
          
          <div className='mt-10'>
            {children}
          </div>
        </main>
        
      </body>
    </html>
  )
}