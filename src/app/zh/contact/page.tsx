import Navbar from "@/components/Navbar";
import FooterZh from "@/components/zh/FooterZh";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 | Luare Consulting",
  description: "免费咨询与联系。欢迎随时就企业财务体制进行咨询。首次咨询免费。",
  alternates: {
    canonical: "https://luare-consulting.com/zh/contact",
    languages: {
      "x-default": "https://luare-consulting.com/contact",
      ja: "https://luare-consulting.com/contact",
      en: "https://luare-consulting.com/en/contact",
      "zh-CN": "https://luare-consulting.com/zh/contact",
    },
  },
};

export default function ContactPageZh() {
  return (
    <>
      <Navbar theme="dark" solid={true} />
      
      <main className="flex-1 pt-24 pb-24 lg:pt-32 lg:pb-32 bg-brand-offwhite" lang="zh-CN">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 fade-in-section">
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-brand-navy mb-6 tracking-wider">
              免费咨询与联系
            </h1>
            <p className="text-sm md:text-base text-brand-slate tracking-wide leading-relaxed">
              欢迎随时就财务体制及相关业务进行咨询。<br className="hidden sm:block" />
              首次咨询免费。
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
                  客户信息
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 会社名 */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      公司名称 <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">必填</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full border border-brand-silver/40 p-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50"
                      placeholder="Luare Consulting株式会社"
                      required
                    />
                  </div>

                  {/* お名前 */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      姓名 <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">必填</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full border border-brand-silver/40 p-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50"
                      placeholder="王 明"
                      required
                    />
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      电子邮箱 <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">必填</span>
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
                      联系电话 <span className="text-[10px] text-brand-silver font-normal ml-1 bg-brand-silver/10 px-1 py-0.5">选填</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full border border-brand-silver/40 p-3 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50"
                      placeholder="138-0000-0000"
                    />
                  </div>
                </div>
              </div>

              {/* 企業属性セクション */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-brand-navy border-b border-brand-silver/30 pb-2 uppercase tracking-widest mb-6">
                  企业信息
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 会社種別 */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      公司类型 <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">必填</span>
                    </label>
                    <div className="relative">
                      <select
                        name="company_type"
                        defaultValue=""
                        className="w-full border border-brand-silver/40 p-3 text-sm appearance-none focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50"
                        required
                      >
                        <option value="" disabled>请选择</option>
                        <option value="国内企业">日本国内企业</option>
                        <option value="外资在日法人">外资在日法人</option>
                        <option value="海外企业（计划进驻日本）">海外企业（计划进驻日本）</option>
                        <option value="其他">其他</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-navy">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* 会社規模 */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                      公司规模 <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">必填</span>
                    </label>
                    <div className="relative">
                      <select
                        name="company_size"
                        defaultValue=""
                        className="w-full border border-brand-silver/40 p-3 text-sm appearance-none focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50"
                        required
                      >
                        <option value="" disabled>请选择</option>
                        <option value="1～10人">1～10人</option>
                        <option value="11～50人">11～50人</option>
                        <option value="51～100人">51～100人</option>
                        <option value="101～300人">101～300人</option>
                        <option value="301人以上">301人以上</option>
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
                  咨询内容
                </h3>

                {/* 現在の経理体制 */}
                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-2 tracking-wide">
                    现有财务体制 <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">必填</span>
                  </label>
                  <div className="relative md:w-1/2">
                    <select
                      name="accounting_team"
                      defaultValue=""
                      className="w-full border border-brand-silver/40 p-3 text-sm appearance-none focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50"
                      required
                    >
                      <option value="" disabled>请选择</option>
                      <option value="无专职财务">无专职财务</option>
                      <option value="1名财务人员">1名财务人员</option>
                      <option value="2〜5名">2〜5名</option>
                      <option value="6名以上">6名以上</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-navy">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
                
                {/* 複数選択項目 */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-brand-navy mb-4 tracking-wide">
                    咨询类型（可多选）
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {[
                      { value: "寻找招聘替代方案", label: "寻找招聘替代方案" },
                      { value: "希望提高财务工作效率", label: "希望提高财务工作效率" },
                      { value: "希望改善月度决算流程", label: "希望改善月度决算流程" },
                      { value: "希望建立内部控制体系", label: "希望建立内部控制体系" },
                      { value: "寻找外资在日法人的财务支持", label: "寻找外资在日法人的财务支持" },
                      { value: "其他", label: "其他" },
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
                    当前面临的痛点或具体咨询内容 <span className="text-[10px] text-red-600 font-normal ml-1 bg-red-50 px-1 py-0.5">必填</span>
                  </label>
                  <textarea
                    name="message"
                    className="w-full border border-brand-silver/40 p-4 text-sm focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors bg-brand-offwhite/50 min-h-[160px] resize-y"
                    placeholder="请填写您的具体情况，如：财务人员即将离职 / 招聘困难 / 月度决算延迟 / 应对海外母公司的报告要求等。"
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
                  提交免费咨询
                </button>
                <p className="text-[10px] text-brand-silver mt-4 tracking-wider">
                  点击提交按钮即表示您同意我们的隐私政策。
                </p>
              </div>

            </form>
          </div>
          
        </div>
      </main>

      <FooterZh />
    </>
  );
}
