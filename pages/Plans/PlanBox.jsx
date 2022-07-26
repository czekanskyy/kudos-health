export default function PlanBox({planName, planColor}) {
  return (
    <div className="bg-white w-64 h-72 border border-gray-200 rounded-md flex flex-col items-center p-4">
      <h3 className={`text-2xl font-semibold text-[${planColor}]`}>{planName}</h3>
    </div>
  );
}
