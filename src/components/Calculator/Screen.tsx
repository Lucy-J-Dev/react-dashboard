type ScreenProps = {
  input: string;
};

const Screen = ({ input = "0" }: ScreenProps) => {
  return (
    <div className="h-16 w-full flex items-center justify-end text-3xl font-semibold px-2 m-2 bg-rose-200 rounded-lg border-spacing-2 border-4 border-rose-600 text-rose-600">
      {input}
    </div>
  );
};

export default Screen;
