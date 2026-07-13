export default function AIReport({ report }) {

  if (!report) return null;

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">

        🤖 AI Health Report

      </h2>

      <p className="mb-6">
        {report.summary}
      </p>

      <h3 className="font-bold text-lg">
        Possible Causes
      </h3>

      <ul className="list-disc ml-6 mb-6">

        {report.possible_causes?.map((item, index)=>(

          <li key={index}>{item}</li>

        ))}

      </ul>

      <h3 className="font-bold text-lg">
        Precautions
      </h3>

      <ul className="list-disc ml-6 mb-6">

        {report.precautions?.map((item,index)=>(

          <li key={index}>{item}</li>

        ))}

      </ul>

      <h3 className="font-bold text-lg">
        Recommended Food
      </h3>

      <ul className="list-disc ml-6 mb-6">

        {report.recommended_food?.map((item,index)=>(

          <li key={index}>{item}</li>

        ))}

      </ul>

    </div>

  );

}