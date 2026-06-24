export default function PainPointsZh() {
  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
            Pain Points
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-brand-navy mt-4 mb-6">
            海外本社が直面する2つの大きな壁
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Card 1 */}
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">参入とコンプライアンスの壁</h3>
            <p className="text-brand-slate leading-relaxed">
              日本特有の複雑な商習慣や、銀行口座開設における厳格なAML（マネーロンダリング防止）審査など、参入時のハードルが極めて高く、進出そのものに大きなリスクが伴います。
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">不透明なガバナンス</h3>
            <p className="text-brand-slate leading-relaxed">
              現地法人の実務が不透明化（ブラックボックス化）しやすく、海外本社（HQ）の管理部門とローカル実務の間に情報の分断が生じ、迅速な経営判断を妨げる要因となっています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
