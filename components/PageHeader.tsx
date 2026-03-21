export function PageHeader({
  label,
  heading,
  subtitle,
}: {
  label: string;
  heading: string;
  subtitle: string;
}) {
  return (
    <div className="pt-[180px] pb-12 px-6 md:px-20 max-w-[1200px] mx-auto w-full">
      <p className="tracking-[6px] text-xs text-gold opacity-80 mb-3">
        {label}
      </p>
      <h1 className="text-4xl md:text-5xl font-medium mb-4">{heading}</h1>
      <p className="opacity-60 leading-relaxed max-w-[500px]">{subtitle}</p>
    </div>
  );
}
