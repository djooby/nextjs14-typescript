export default async function TeamPage(){
    await new Promise(r => setTimeout(r, 2000));
    return <div className="w-full h-screen text-white bg-red-600 grid place-items-center">Team Page</div>
}