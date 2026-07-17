interface Props {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}

export default function Stats({
  icon,
  value,
  label,
  className = "",
}: Props) {
  return (
    <div
      className={`flex flex-col justify-center p-4 transition-all duration-300 hover:bg-muted/30 ${className}`}
    >
      <div className="mb-3 text-muted-foreground">
        {icon}
      </div>

      <span className="dauphin text-4xl leading-none">
        {value}
      </span>

      <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
