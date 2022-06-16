import GradientButton from "components/buttons/GradientButton";

export default function Step1({ data }: { data: any }) {
  return (
    <div className="flex flex-col items-center space-y-2 animate-in slide-in-from-top-10 lg:slide-in-from-top-[5rem] duration-1000">
      <h1 className="text-white font-bold text-3xl">Todo List Title</h1>
      <input
        type="text"
        className="text-base px-1 outline-none py-1 w-[20rem] lg:w-[30rem]"
        placeholder="Ex: School Homework"
        value={data.name}
        onChange={(e) => data.setName(e.target.value)}
      />
      <br />
      <GradientButton
        from="from-green-500"
        via="via-green-600"
        to="to-green-700"
        className="p-2 rounded-md text-white disabled:cursor-not-allowed"
        onClick={() => data.setStep(2)}
        disabled={data.name ? false : true}
      >
        Next Step
      </GradientButton>
    </div>
  );
}
