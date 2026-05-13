'use client';

import { ArrowRight, ShieldCheck, Cpu, Globe, Zap, Smartphone, Lock, MessageCircle, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            QuickQ
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#advantages" className="hover:text-indigo-400 transition">优势</a>
            <a href="#tech" className="hover:text-indigo-400 transition">技术</a>
            <a href="#reviews" className="hover:text-indigo-400 transition">评价</a>
            <a href="#faq" className="hover:text-indigo-400 transition">常见问题</a>
          </div>
          <a href="#download" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full transition">
            下载客户端
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            下一代智能 <span className="text-indigo-500">VPN</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
            全球超快节点，一键连接保护隐私。无论游戏、影音还是办公，享受无感安全体验。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#download" className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded-full transition text-lg">
              立即免费体验 <ArrowRight size={24} />
            </a>
            <a href="#advantages" className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-10 rounded-full transition text-lg">
              了解更多
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-400" /> 99.9% 可用率
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-400" /> 130+ 全球节点
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-400" /> 24/7 智能客服
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-20 bg-gray-900">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">为什么选择 QuickQ</h2>
            <p className="text-gray-400">极速、安全、简单 —— 专为现代互联世界设计</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap size={48} className="text-yellow-400" />, title: "极速连接", desc: "基于自研协议，带宽无损耗，4K秒开，游戏延迟降低50%" },
              { icon: <ShieldCheck size={48} className="text-indigo-400" />, title: "银行级加密", desc: "AES-256 加密 + 无日志政策，保护您的每一次访问" },
              { icon: <Globe size={48} className="text-cyan-400" />, title: "全球智能路由", desc: "130+ 国家地区，动态优选线路，突破地理限制" }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Highlights */}
      <section id="tech" className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">尖端科技亮点</h2>
            <p className="text-gray-400">重新定义VPN体验，智能与速度的完美融合</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Cpu />, title: "智能分流引擎", desc: "国内/海外流量自动分流，不影响本地应用速度，更聪明更省心。" },
              { icon: <Smartphone />, title: "一键加速模式", desc: "游戏 / 流媒体专属通道，一键开启低延迟狂欢。" },
              { icon: <Lock />, title: "隐私保护升级", desc: "防DNS泄露，IP遮蔽，反追踪技术，上网匿名无忧。" },
              { icon: <Globe />, title: "实时网络监控", desc: "可视化延迟与流量统计，线路状况一目了然。" }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 p-6">
                <div className="bg-indigo-600/10 p-4 rounded-xl h-fit text-indigo-400">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-gray-900">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">全球用户口碑</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "用过最稳定的VPN，看Netflix 4K完全不缓冲，节点切换几乎无感，QuickQ确实厉害！", name: "Jason", role: "科技博主" },
              { quote: "出差海外经常需要访问国内资源，QuickQ的智能分流帮了大忙，速度飞快！客服响应也及时。", name: "李女士", role: "跨国公司" },
              { quote: "学生党打游戏必备，延迟从200ms降到50ms，界面简洁干净，隐私保护也让我很放心。", name: "陈同学", role: "游戏玩家" }
            ].map((review, index) => (
              <div key={index} className="bg-gray-950 p-8 rounded-2xl border border-gray-800">
                <div className="mb-4 text-indigo-400 flex gap-1">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="mb-6 text-gray-300">"{review.quote}"</p>
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">常见问题</h2>
          <div className="max-w-3xl mx-auto divide-y divide-gray-800">
            {[
              { q: "QuickQ 免费吗？如何收费？", a: "QuickQ提供免费试用额度，付费套餐从月付到年付多种选择，性价比极高。" },
              { q: "支持哪些平台设备？", a: "支持 Windows, macOS, iOS, Android 全平台，最多同时连接5台设备。" },
              { q: "是否记录用户日志？", a: "QuickQ严格执行无日志策略，绝不记录用户的上网活动。" },
              { q: "如何下载 QuickQ 电脑版？", a: "您可以直接访问本站“下载页”点击Windows/Mac版本安装包。" }
            ].map((item, index) => (
              <div key={index} className="py-6">
                <h3 className="text-lg font-bold mb-2 text-indigo-400">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Download */}
      <section id="download" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-gray-950 opacity-40 -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">即刻开启安全高速之旅</h2>
          <p className="text-xl text-gray-300 mb-10">下载 QuickQ，享受不限速的全球网络体验。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-full transition">
              下载 Windows 版
            </a>
            <a href="#" className="flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition">
              下载 Android 版
            </a>
          </div>
          <div className="mt-8 grid grid-cols-4 gap-4 max-w-sm mx-auto opacity-60">
            <div className="bg-gray-700 h-10 rounded"></div>
            <div className="bg-gray-700 h-10 rounded"></div>
            <div className="bg-gray-700 h-10 rounded"></div>
            <div className="bg-gray-700 h-10 rounded"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-500">
          <p>&copy; 2026 QuickQ Clone Demo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
