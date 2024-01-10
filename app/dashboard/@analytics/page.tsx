export default async function AnalyticsPage() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return <div className="w-full h-screen text-white bg-green-600 grid place-items-center">Analytics Page</div>
}