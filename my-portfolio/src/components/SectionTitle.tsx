interface Props {
  title: string;
  number: string;
}

export default function SectionTitle({ title, number }: Props) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="text-cyan-500 font-mono text-xl">{number}.</span>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
    </div>
  );
}