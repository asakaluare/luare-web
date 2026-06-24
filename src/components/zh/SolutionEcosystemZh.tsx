export default function SolutionEcosystemZh() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
            Ecosystem
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-brand-navy mt-4 mb-6">
            Luareの「経営处理器」エコシステム
          </h2>
          <p className="text-brand-slate leading-relaxed">
            日本進出における複雑な実務を、Luareが中央のハブとしてすべて統括。
            海外本社は、透明性が高く監査に即応できる（Audit-Readyな）データのみを受け取ります。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-8 max-w-5xl mx-auto relative">
          
          {/* Connector Lines for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[20%] right-[20%] h-[2px] bg-brand-gold/30 -translate-y-1/2 z-0" />

          {/* Left: HQ */}
          <div className="flex-1 bg-slate-50 border border-slate-200 p-8 rounded-xl z-10 flex flex-col items-center justify-center text-center relative shadow-sm">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-slate-100">
              <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-bold text-brand-navy text-lg mb-2">海外本社 (HQ)</h3>
            <p className="text-sm text-brand-slate">
              透明で「Audit-Ready（監査対応可能）」なデータをシームレスに受領。日本側での負担はゼロに。
            </p>
          </div>

          {/* Center: Luare */}
          <div className="flex-1 bg-brand-navy border border-brand-navy p-8 rounded-xl z-10 flex flex-col items-center justify-center text-center relative shadow-xl transform scale-105">
            <div className="absolute -top-3 -right-3 bg-brand-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Hub
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Luare Consulting</h3>
            <p className="text-sm text-white/80">
              「経営处理器（オペレーション・プロセッサー）」。複雑な実務を完全に統括・コントロール。
            </p>
          </div>

          {/* Right: Japan Ecosystem */}
          <div className="flex-1 bg-slate-50 border border-slate-200 p-8 rounded-xl z-10 flex flex-col items-center justify-center text-center relative shadow-sm">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-slate-100">
              <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-brand-navy text-lg mb-2">日本の専門家エコシステム</h3>
            <p className="text-sm text-brand-slate">
              税理士、社労士、司法書士など、現地の複雑な専門家ネットワークをLuareが一括管理。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
