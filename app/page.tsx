import { Header } from '@/components/header'
import Image from 'next/image'
import sleep from 'sleep-promise';

export default async function Home() {
  const quote = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness',
    {
      headers: { "X-Api-Key": "IQc8vUEK9avNzxdEmPLakA==u3o9BVbjK3aaEwBK" }, next: {
        revalidate: 0
      }
    }).then(res => res.json()).then(sleep(2000));

  return (
    <main className="flex flex-col min-h-screen items-center p-24">
      <h1 className="text-3xl font-bold text-center">
        {quote[0].quote}
      </h1>
      <p>- {quote[0].author}</p>
    </main>
  )
}
