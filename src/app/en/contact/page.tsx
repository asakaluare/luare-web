import Navbar from "@/components/Navbar";
import FooterEn from "@/components/en/FooterEn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Luare Consulting",
  description: "Contact us for a free consultation. Please feel free to inquire about your accounting and financial structure. The initial consultation is free.",
  alternates: {
    canonical: "https://luare-consulting.com/en/contact",
    languages: {
      "x-default": "https://luare-consulting.com/contact",
      ja: "https://luare-consulting.com/contact",
      en: "https://luare-consulting.com/en/contact",
      "zh-CN": "https://luare-consulting.com/zh/contact",
    },
  },
};

export default function ContactPageEn() {
  return (
    <>
      <Navbar theme="dark" solid={true} />
      
      <main className="flex-1 pt-24 pb-24 lg:pt-32 lg:pb-32 bg-brand-offwhite" lang="en">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 fade-in-section">
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-brand-navy mb-6 tracking-wider">
              Free Consultation & Inquiries
            </h1>
            <p className="text-sm md:text-base text-brand-slate tracking-wide leading-relaxed">
              Please feel free to contact us regarding your accounting and finance structure.<br className="hidden sm:block" />
              The initial consultation is free.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white p-8 md:p-12 shadow-xl border border-brand-silver/20 fade-in-section" style={{ animationDelay: "0.2s" }}>
            <form
              action="https://formspree.io/f/mojppoor"
              method="POST"
              className="space-y-10"
            >
              
              {/* 基本情報セクション */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-brand-navy border-b border-brand-silver/30 pb-2 uppercase tracking-widest mb-6">
                  Customer Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 会社名 */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      Company Name <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">Required</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full border border-brand-silver/40 p-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50"
                      placeholder="Luare Consulting Co., Ltd."
                      required
                    />
                  </div>

                  {/* お名前 */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      Name <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">Required</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full border border-brand-silver/40 p-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50"
                      placeholder="Taro Yamada"
                      required
                    />
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      Email Address <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">Required</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full border border-brand-silver/40 p-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50"
                      placeholder="info@example.com"
                      required
                    />
                  </div>

                  {/* 電話番号（任意） */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      Phone Number <span className="text-[10px] text-brand-silver font-normal ml-1 bg-brand-silver/10 px-1 py-0.5">Optional</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full border border-brand-silver/40 p-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50"
                      placeholder="+81-3-1234-5678"
                    />
                  </div>
                </div>
              </div>

              {/* 企業属性セクション */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-brand-navy border-b border-brand-silver/30 pb-2 uppercase tracking-widest mb-6">
                  Company Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 会社種別 */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      Company Type <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">Required</span>
                    </label>
                    <div className="relative">
                      <select
                        name="company_type"
                        defaultValue=""
                        className="w-full border border-brand-silver/40 p-3 text-sm appearance-none focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50"
                        required
                      >
                        <option value="" disabled>Please select</option>
                        <option value="国内企業">Domestic Company</option>
                        <option value="外資系日本法人">Foreign Subsidiary in Japan</option>
                        <option value="海外企業（日本進出予定）">Foreign Company (Planning to enter Japan)</option>
                        <option value="その他">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-navy">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* 会社規模 */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      Company Size <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">Required</span>
                    </label>
                    <div className="relative">
                      <select
                        name="company_size"
                        defaultValue=""
                        className="w-full border border-brand-silver/40 p-3 text-sm appearance-none focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50"
                        required
                      >
                        <option value="" disabled>Please select</option>
                        <option value="1～10名">1 - 10 employees</option>
                        <option value="11～50名">11 - 50 employees</option>
                        <option value="51～100名">51 - 100 employees</option>
                        <option value="101～300名">101 - 300 employees</option>
                        <option value="301名以上">Over 300 employees</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-navy">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 相談内容セクション */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-brand-navy border-b border-brand-silver/30 pb-2 uppercase tracking-widest mb-6">
                  Inquiry Details
                </h3>

                {/* 現在の経理体制 */}
                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                    Current Accounting Team <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">Required</span>
                  </label>
                  <div className="relative md:w-1/2">
                    <select
                      name="accounting_team"
                      defaultValue=""
                      className="w-full border border-brand-silver/40 p-3 text-sm appearance-none focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50"
                      required
                    >
                      <option value="" disabled>Please select</option>
                      <option value="経理担当者なし">No accounting staff</option>
                      <option value="経理担当者1名">1 accounting staff</option>
                      <option value="2〜5名">2 - 5 staff</option>
                      <option value="6名以上">6 or more staff</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-navy">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
                
                {/* 複数選択項目 */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-brand-navy mb-4 tracking-wide">
                    Consultation Type (Multiple selections allowed)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {[
                      { value: "採用の代替を探している", label: "Looking for an alternative to hiring" },
                      { value: "経理業務を効率化したい", label: "Want to streamline accounting operations" },
                      { value: "月次決算を改善したい", label: "Want to improve monthly closing" },
                      { value: "内部統制を整備したい", label: "Want to establish internal controls" },
                      { value: "外資系日本法人の支援を探している", label: "Looking for support for a foreign subsidiary" },
                      { value: "その他", label: "Other" },
                    ].map((item) => (
                      <label key={item.value} className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 border border-brand-silver/60 bg-brand-offwhite/50 group-hover:border-brand-navy transition-colors">
                          <input type="checkbox" name="consultation_type" className="peer absolute opacity-0 w-full h-full cursor-pointer" value={item.value} />
                          <svg className="w-3 h-3 text-brand-navy opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-brand-slate group-hover:text-brand-navy transition-colors select-none">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 自由記述欄 */}
                <div className="pt-4">
                  <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                    Details of your inquiry or concerns <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">Required</span>
                  </label>
                  <textarea
                    name="message"
                    className="w-full border border-brand-silver/40 p-4 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50 min-h-[160px] resize-y"
                    placeholder="Please describe your situation, such as upcoming resignation of accounting staff, hiring difficulties, delays in monthly closing, reporting to overseas headquarters, etc."
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-brand-navy text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 hover:bg-brand-darknavy w-full sm:w-auto min-w-[300px]"
                >
                  Submit
                </button>
                <p className="text-[10px] text-brand-silver mt-4 tracking-wider">
                  By clicking submit, you agree to our Privacy Policy.
                </p>
              </div>

            </form>
          </div>
          
        </div>
      </main>

      <FooterEn />
    </>
  );
}
