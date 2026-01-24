const Title = ({ children, subtitle, badge }) => {
  return (
    <section className="relative overflow-hidden border-b border-white/30">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-400/15 rounded-full blur-3xl" />

      <div className="relative py-16">
        <div className="container mx-auto px-4">
          {badge && <span className="badge mb-4">{badge}</span>}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
            {children}
          </h2>
          {subtitle && (
            <p className="mt-4 text-gray-700 max-w-2xl text-lg font-medium leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Title;
