export default function SkillBadge({ name }: { name: string }) {
  return (
    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all cursor-default">
      {name}
    </span>
  );
}