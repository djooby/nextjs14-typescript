import Axios from "axios";
import sleep from "sleep-promise";

export default async function Facts() {
  const facts = await fetch("https://api.api-ninjas.com/v1/facts?limit=" + 5, {
    headers: { "X-Api-Key": "IQc8vUEK9avNzxdEmPLakA==u3o9BVbjK3aaEwBK" },
    next: {
      //   revalidate: 0
    },
  })
    .then((res) => res.json())
    .then(sleep(2000));

  const { data } = await Axios.get("https://api.api-ninjas.com/v1/facts", {
    params: {
      limit: 5,
    },
    headers: { "X-Api-Key": "IQc8vUEK9avNzxdEmPLakA==u3o9BVbjK3aaEwBK" },
  });

  return (
    <main className="flex flex-col items-center p-5">
      <div className="">
        {facts.map((fact: any, index: number) => (
          <div
            key={index}
            className="p-5 rounded-lg flex items-center border-2 bg-gray-800 text-white"
          >
            <p>{fact.fact}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
