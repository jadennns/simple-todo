import GradientButton from "components/buttons/GradientButton";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Step3({ data }: { data: any }) {
  const onDrop = useCallback(([file]: File[]) => {
    file.size;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      data.setThumbnail(reader.result);
    };
  }, []);

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/png": [".png", ".jpeg", ".jpg"],
    },
    noDrag: false,
  });

  return (
    <div className="flex flex-col items-center space-y-4 animate-in slide-in-from-right-4 lg:slide-in-from-right-10 duration-1000">
      <h1 className="text-white font-bold text-3xl">Todo List Thumbnail</h1>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <GradientButton
          from="from-gray-500"
          via="via-gray-600"
          to="to-gray-700"
          className="p-2 rounded-md text-white"
        >
          Choose File
        </GradientButton>
      </div>
      {data.thumbnail && (
        <img src={data.thumbnail} alt="Logo" className="h-52 mb-5 rounded-lg" />
      )}
      <div className="flex items-center space-x-2">
        <GradientButton
          from="from-rose-500"
          via="via-rose-600"
          to="to-rose-700"
          className="p-2 rounded-md text-white disabled:cursor-not-allowed"
          onClick={() => data.setStep(2)}
        >
          Go Back
        </GradientButton>
        <GradientButton
          from="from-green-500"
          via="via-green-600"
          to="to-green-700"
          className="p-2 rounded-md text-white disabled:cursor-not-allowed"
          onClick={data.onFinish}
          disabled={data.thumbnail ? false : true}
        >
          Finish
        </GradientButton>
      </div>
    </div>
  );
}
