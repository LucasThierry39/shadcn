import Image from 'next/image'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className="text-primary">Hello World!</h1>
    <Alert className='bg-blue-200'>
      <AlertTitle className='text-blue-700 text-center text-xl'>Deu ruim</AlertTitle>
      <AlertDescription>
        <p className='text-blue-600 text-center'>O pc vai explodir!</p>
      </AlertDescription>
    </Alert>
    </main>
  )
}
