import React from 'react'
import '../styles/global.css'
import Nav from '@/components/Nav'
export const metdata={
    title:'Promptopia',
    description:'Discover and share the AI Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'>

                </div>
                <main className='app'>
                    <Nav/>
                    {children}
                </main>

            </div>
        </body>

    </html>
  )
}

export default RootLayout;
