export default function InputBox() {
  return (
    <section className="bg-blue-500 w-[42rem] rounded-xl shadow-lg text-white flex flex-col items-center p-8 gap-4 scroll-smooth">
      <h2 className="text-2xl font-semibold">Choose your subscription package</h2>
      <hr className="w-1/4 mt-2 border-t-2 border-white" />
      <p className="text-sm text-gray-50">How many Employee do you want to give access to programme</p>
      <input
        type="number"
        name="numEmployees"
        id="numEmployees"
        className="w-2/5 p-2 bg-transparent outline-none border border-white rounded-md text-center placeholder:text-white transition-all focus:w-72"
        placeholder="Enter here"
      />
      <a href="#features" className="text-xs mt-2">
        See features avalible in plans
      </a>
    </section>
  );
}
