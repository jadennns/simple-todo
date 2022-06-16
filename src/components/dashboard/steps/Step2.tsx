import GradientButton from "components/buttons/GradientButton";

export default function Step2({ data }: { data: any }) {
  return (
    <div className="flex flex-col items-center space-y-2 animate-in slide-in-from-right-4 lg:slide-in-from-right-10 duration-1000">
      <h1 className="text-white font-bold text-3xl">Todo List Description</h1>
      <textarea
        className="outline-none w-[20rem] lg:w-[40rem] h-24 lg:h-full text-base  p-1"
        placeholder="Ex: My school home that I need to do this week"
        value={data.description}
        onChange={(e) => data.setDescription(e.target.value)}
      />
      <br />
      <div className="flex items-center space-x-2">
        <GradientButton
          from="from-rose-500"
          via="via-rose-600"
          to="to-rose-700"
          className="p-2 rounded-md text-white disabled:cursor-not-allowed"
          onClick={() => data.setStep(1)}
        >
          Go Back
        </GradientButton>
        <GradientButton
          from="from-green-500"
          via="via-green-600"
          to="to-green-700"
          className="p-2 rounded-md text-white disabled:cursor-not-allowed"
          onClick={() => data.setStep(3)}
          disabled={data.description ? false : true}
        >
          Next Step
        </GradientButton>
      </div>
    </div>
  );
}
