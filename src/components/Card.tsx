type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-4xl bg-card border border-white/10  backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.45)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
