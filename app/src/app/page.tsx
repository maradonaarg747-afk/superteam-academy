"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  BookOpen,
  Trophy,
  Shield,
  Zap,
  Users,
  Globe,
  Code,
  Award,
  ArrowRight,
  Star,
  ChevronRight,
  Sparkles,
  GraduationCap,
  Rocket,
  Anchor,
  Palette,
  Terminal,
  Lock,
  Coins,
  CheckCircle,
  Play,
  BarChart3,
  Flame,
  Monitor,
  Cpu,
  Database,
  Boxes,
  GitBranch,
  Wifi,
  HelpCircle,
  ChevronDown,
  ArrowUpRight,
  Wallet,
  BadgeCheck,
  Layers,
  Brain,
  Target,
  TrendingUp,
} from "lucide-react";
import { TRACKS } from "@/lib/constants";
import { MOCK_COURSES } from "@/lib/mock-data";
import { useState } from "react";

const stats = [
  { value: "24+", labelKey: "courses", icon: BookOpen },
  { value: "2.5K+", labelKey: "builders", icon: Users },
  { value: "1.2K+", labelKey: "credentials", icon: Award },
  { value: "500K+", labelKey: "xpEarned", icon: Zap },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-secondary/30 transition-colors"
      >
        <span className="font-medium text-sm">{q}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed"
        >
          {a}
        </motion.div>
      )}
    </div>
  );
}

export default function HomePage() {
  const t = useTranslations();

  const features = [
    {
      icon: Code,
      title: t("landing.interactiveCoding"),
      description: t("landing.interactiveCodingDesc"),
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: Shield,
      title: t("landing.onChainCredentials"),
      description: t("landing.onChainCredentialsDesc"),
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Trophy,
      title: t("landing.gamifiedLearning"),
      description: t("landing.gamifiedLearningDesc"),
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: Globe,
      title: t("landing.globalCommunity"),
      description: t("landing.globalCommunityDesc"),
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  const testimonials = [
    {
      name: "Rafael Torres",
      role: "Solana Developer @ Marinade Finance",
      text: t("landing.testimonial1"),
      avatar: "RT",
      gradient: "from-purple-600 to-blue-500",
    },
    {
      name: "Isabella Souza",
      role: "Founder, SolBR Protocol",
      text: t("landing.testimonial2"),
      avatar: "IS",
      gradient: "from-emerald-600 to-teal-500",
    },
    {
      name: "Diego Martinez",
      role: "Security Auditor",
      text: t("landing.testimonial3"),
      avatar: "DM",
      gradient: "from-amber-600 to-orange-500",
    },
  ];

  const howItWorks = [
    { step: "01", icon: Wallet, title: t("landing.step1Title") || "Connect Your Wallet", desc: t("landing.step1Desc") || "Sign in with Phantom, Solflare, or any Solana wallet in one click." },
    { step: "02", icon: BookOpen, title: t("landing.step2Title") || "Choose a Course", desc: t("landing.step2Desc") || "Pick from curated learning paths — from Solana basics to advanced DeFi." },
    { step: "03", icon: Code, title: t("landing.step3Title") || "Code & Learn", desc: t("landing.step3Desc") || "Write real Solana programs in our embedded code editor with live feedback." },
    { step: "04", icon: BadgeCheck, title: t("landing.step4Title") || "Earn Credentials", desc: t("landing.step4Desc") || "Get soulbound NFT credentials and XP tokens on Solana devnet." },
  ];

  const techStack = [
    { name: "Next.js 14", icon: Monitor, desc: "App Router" },
    { name: "TypeScript", icon: Code, desc: "Strict Mode" },
    { name: "Tailwind CSS", icon: Palette, desc: "Design System" },
    { name: "Solana Web3", icon: Cpu, desc: "On-Chain" },
    { name: "Anchor", icon: Anchor, desc: "Programs" },
    { name: "Metaplex", icon: Boxes, desc: "NFT Core" },
    { name: "Token-2022", icon: Coins, desc: "XP Tokens" },
    { name: "Monaco Editor", icon: Terminal, desc: "Code IDE" },
    { name: "Framer Motion", icon: Sparkles, desc: "Animations" },
    { name: "next-intl", icon: Globe, desc: "i18n 3 langs" },
    { name: "Helius DAS", icon: Database, desc: "Indexer" },
    { name: "Vercel", icon: Wifi, desc: "Edge Deploy" },
  ];

  const xpTable = [
    { action: t("landing.xpLesson") || "Complete Lesson", xp: "10–50", icon: BookOpen },
    { action: t("landing.xpChallenge") || "Complete Challenge", xp: "25–100", icon: Code },
    { action: t("landing.xpCourse") || "Complete Course", xp: "500–2,000", icon: GraduationCap },
    { action: t("landing.xpStreak") || "Daily Streak Bonus", xp: "+10", icon: Flame },
    { action: t("landing.xpFirst") || "First of the Day", xp: "+25", icon: Star },
  ];

  const faqs = [
    { q: t("landing.faq1Q") || "Do I need crypto experience?", a: t("landing.faq1A") || "No! Our courses start from zero. We teach you everything from setting up a wallet to deploying production dApps on Solana." },
    { q: t("landing.faq2Q") || "Is the platform free?", a: t("landing.faq2A") || "Yes, all courses are completely free. You only need a Solana wallet with a small amount of devnet SOL for on-chain interactions." },
    { q: t("landing.faq3Q") || "What languages are supported?", a: t("landing.faq3A") || "The platform supports English, Portuguese (PT-BR), and Spanish (ES). All UI elements, navigation, and descriptions are fully translated." },
    { q: t("landing.faq4Q") || "What are on-chain credentials?", a: t("landing.faq4A") || "They are soulbound NFTs (non-transferable) minted on Solana that prove your course completion. They evolve as you progress through a learning track." },
    { q: t("landing.faq5Q") || "Can I use any Solana wallet?", a: t("landing.faq5A") || "Yes! We support Phantom, Solflare, Backpack, and any wallet compatible with the Solana Wallet Adapter standard." },
  ];

  return (
    <div className="overflow-hidden">
      {/* ═══════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#080810]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-emerald-900/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/5 to-emerald-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "6s" }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 text-sm text-gray-300 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t("common.poweredBy")}
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]"
          >
            {t("hero.title")}
            <br />
            <span className="gradient-text">{t("hero.subtitle")}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/courses" className="group flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-500 hover:to-emerald-400 transition-all shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5">
              {t("hero.cta")} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/courses" className="flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-white/80 border border-white/10 hover:bg-white/5 transition-all hover:-translate-y-0.5">
              {t("hero.secondary")}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.labelKey} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                <stat.icon className="w-5 h-5 mx-auto mb-2 text-purple-400/60" />
                <div className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{t(`hero.stats.${stat.labelKey}`)}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* HOW IT WORKS */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-4">
              <Play className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-muted-foreground">{t("landing.howBadge") || "Simple Process"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("landing.howTitle") || "How It"} <span className="gradient-text">{t("landing.howTitleHighlight") || "Works"}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{t("landing.howDescription") || "From zero to on-chain credentials in four simple steps."}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-purple-500/30 via-emerald-500/30 to-purple-500/30" />
            {howItWorks.map((item, i) => (
              <motion.div key={item.step} {...fadeUp} transition={{ delay: i * 0.12 }} className="relative text-center group">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-purple-600/10 to-emerald-600/10 border border-border flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/30 transition-all relative z-10 bg-background">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-xs font-bold text-purple-400 mb-2">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* LEARNING PATHS */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-4">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-muted-foreground">6 {t("common.coursesAvailable")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t("landing.choosePath")} <span className="gradient-text">{t("landing.learningPath")}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("landing.pathDescription")}</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRACKS.map((track, i) => {
              const trackIcons: Record<string, React.ReactNode> = {
                "solana-fundamentals": <BookOpen className="w-6 h-6" />,
                "anchor-development": <Anchor className="w-6 h-6" />,
                "defi-developer": <Coins className="w-6 h-6" />,
                "nft-creator": <Palette className="w-6 h-6" />,
                "security-auditor": <Shield className="w-6 h-6" />,
                "full-stack-solana": <Terminal className="w-6 h-6" />,
              };
              const trackDescs: Record<string, string> = {
                "solana-fundamentals": "Accounts, Transactions, Programs",
                "anchor-development": "Rust, PDAs, Testing, Deploy",
                "defi-developer": "AMMs, Lending, Yield Vaults",
                "nft-creator": "Metaplex, Collections, Metadata",
                "security-auditor": "Vulnerabilities, Audits, Fuzzing",
                "full-stack-solana": "React, Next.js, Wallet Adapter",
              };
              const courseCount = MOCK_COURSES.filter((c) => c.track.toLowerCase().includes(track.id.split("-")[0])).length;
              return (
                <motion.div key={track.id} {...fadeUp} transition={{ delay: i * 0.08 }}>
                  <Link href={`/courses?track=${track.id}`} className="group block p-6 rounded-2xl card-hover relative overflow-hidden h-full" style={{ background: `linear-gradient(135deg, ${track.color}08 0%, ${track.color}03 100%)`, border: `1px solid ${track.color}20` }}>
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-[0.07] group-hover:opacity-[0.15] transition-opacity" style={{ backgroundColor: track.color }} />
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: `${track.color}15`, color: track.color }}>
                        {trackIcons[track.id]}
                      </div>
                      <span className="text-xs font-medium px-2 py-1 rounded-md" style={{ backgroundColor: `${track.color}15`, color: track.color }}>
                        {courseCount} {courseCount === 1 ? "curso" : "cursos"}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{track.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4 font-mono">{trackDescs[track.id]}</p>
                    <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      {t("common.startLearningPath")} <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* LIVE CODE PREVIEW */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-4">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-muted-foreground">{t("landing.codePreviewBadge") || "Monaco Editor"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t("landing.codePreviewTitle") || "Write Real"} <span className="gradient-text">{t("landing.codePreviewHighlight") || "Solana Code"}</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{t("landing.codePreviewDesc") || "Our embedded Monaco Editor gives you a full IDE experience. Write Rust and TypeScript with syntax highlighting, autocompletion, and real-time error feedback."}</p>
              <ul className="space-y-3 mb-8">
                {[
                  t("landing.codeFeature1") || "Rust & TypeScript syntax highlighting",
                  t("landing.codeFeature2") || "Real-time compilation and error display",
                  t("landing.codeFeature3") || "Pass/fail test cases with visual feedback",
                  t("landing.codeFeature4") || "Pre-populated starter code for each challenge",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                {t("landing.tryEditor") || "Try the editor"} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Code editor mockup */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="relative">
              <div className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-purple-500/5">
                {/* Editor title bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#1e1e2e] border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs text-gray-500 ml-2">transfer_sol.rs</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-gray-600">
                    <span>Rust</span>
                    <span>UTF-8</span>
                  </div>
                </div>
                {/* Code */}
                <div className="bg-[#1e1e2e] p-5 font-mono text-[13px] leading-6 overflow-x-auto">
                  <div><span className="text-purple-400">use</span> <span className="text-emerald-400">anchor_lang</span>::<span className="text-emerald-400">prelude</span>::*;</div>
                  <div className="mt-1"><span className="text-purple-400">use</span> <span className="text-emerald-400">anchor_spl</span>::<span className="text-emerald-400">token</span>::{`{self, Transfer}`};</div>
                  <div className="mt-3"><span className="text-gray-500">{"// Transfer SOL between two accounts"}</span></div>
                  <div><span className="text-purple-400">pub fn</span> <span className="text-amber-400">transfer_sol</span>(</div>
                  <div className="pl-6"><span className="text-cyan-400">ctx</span>: <span className="text-emerald-400">Context</span>&lt;<span className="text-emerald-400">TransferSol</span>&gt;,</div>
                  <div className="pl-6"><span className="text-cyan-400">amount</span>: <span className="text-emerald-400">u64</span>,</div>
                  <div>) -&gt; <span className="text-emerald-400">Result</span>&lt;()&gt; {`{`}</div>
                  <div className="pl-6"><span className="text-purple-400">let</span> ix = <span className="text-emerald-400">system_instruction</span>::<span className="text-amber-400">transfer</span>(</div>
                  <div className="pl-10">&amp;<span className="text-cyan-400">ctx</span>.accounts.from.key(),</div>
                  <div className="pl-10">&amp;<span className="text-cyan-400">ctx</span>.accounts.to.key(),</div>
                  <div className="pl-10"><span className="text-cyan-400">amount</span>,</div>
                  <div className="pl-6">);</div>
                  <div className="pl-6 mt-1"><span className="text-emerald-400">Ok</span>(())</div>
                  <div>{`}`}</div>
                </div>
                {/* Test results bar */}
                <div className="bg-[#1a1a2e] px-4 py-2.5 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-emerald-400">3/3 tests passed</span>
                  </div>
                  <span className="text-xs text-gray-500">+50 XP</span>
                </div>
              </div>
              {/* Floating glow */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* FEATURES — Why Superteam Academy */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-muted-foreground">{t("landing.web3Platform")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("landing.whyTitle")} <span className="gradient-text">{t("landing.whyHighlight")}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("landing.whyDescription")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div key={feature.title} {...fadeUp} transition={{ delay: i * 0.1 }}
                className="group p-7 rounded-2xl glass card-hover relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition-opacity bg-gradient-to-br from-purple-500 to-emerald-500" />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* XP & GAMIFICATION */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-950/5 to-background" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* XP Table */}
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <div className="rounded-2xl glass overflow-hidden">
                <div className="px-6 py-4 border-b border-border flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold text-sm">{t("landing.xpRewardsTitle") || "XP Rewards Table"}</span>
                </div>
                {xpTable.map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-3.5 border-b border-border last:border-0 hover:bg-secondary/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <span className="text-sm">{item.action}</span>
                    </div>
                    <span className="text-sm font-bold text-emerald-400">+{item.xp} XP</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-4">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-muted-foreground">{t("landing.gamificationBadge") || "Gamification"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t("landing.gamificationTitle") || "Level Up with"} <span className="gradient-text">{t("landing.gamificationHighlight") || "Real XP"}</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("landing.gamificationDesc") || "Earn soulbound XP tokens (Token-2022, non-transferable) as you complete lessons and challenges. Your level is calculated on-chain: Level = floor(sqrt(XP / 100)). Compete on the leaderboard and unlock achievements."}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Flame, label: t("landing.gamStreaks") || "Daily Streaks", value: "7/30/100d" },
                  { icon: Target, label: t("landing.gamAchievements") || "Achievements", value: "25+ badges" },
                  { icon: TrendingUp, label: t("landing.gamLevels") || "Levels", value: "√(XP/100)" },
                  { icon: BarChart3, label: t("landing.gamLeaderboard") || "Leaderboard", value: "Global Ranking" },
                ].map((g, i) => (
                  <div key={i} className="p-3 rounded-xl glass text-center">
                    <g.icon className="w-5 h-5 mx-auto mb-1.5 text-amber-400" />
                    <div className="text-xs font-bold">{g.value}</div>
                    <div className="text-[10px] text-muted-foreground">{g.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/leaderboard" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                {t("landing.viewLeaderboard") || "View Leaderboard"} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* FEATURED COURSES */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-3">
              <Rocket className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-muted-foreground">{t("landing.topRated")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              {t("landing.featuredTitle")} <span className="gradient-text">{t("landing.featuredCourses")}</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_COURSES.slice(0, 3).map((course, i) => (
              <motion.div key={course.id} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Link href={`/courses/${course.slug}`} className="group block rounded-2xl overflow-hidden glass card-hover h-full">
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${course.trackColor}40 0%, ${course.trackColor}10 100%)` }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-14 h-14 opacity-20" style={{ color: course.trackColor }} />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${course.difficulty === "beginner" ? "bg-emerald-500/20 text-emerald-400" : course.difficulty === "intermediate" ? "bg-amber-500/20 text-amber-400" : "bg-red-500/20 text-red-400"}`}>
                        {course.difficulty}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-1 text-xs bg-black/30 text-white px-2 py-1 rounded-md backdrop-blur-sm">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      {course.rating}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-xs font-medium mb-1" style={{ color: course.trackColor }}>{course.track}</div>
                    <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{course.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                      <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {course.lessonCount} {t("courses.lessons")}</span>
                      <span className="flex items-center gap-1 font-medium text-emerald-400"><Zap className="w-3 h-3" /> +{course.xpReward}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center mt-10">
            <Link href="/courses" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-border hover:bg-secondary/50 transition-all hover:-translate-y-0.5">
              {t("common.viewAll")} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* TECH STACK */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-4">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-muted-foreground">{t("landing.techBadge") || "Production-Ready Stack"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("landing.techTitle") || "Built With"} <span className="gradient-text">{t("landing.techHighlight") || "Best-in-Class Tech"}</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, i) => (
              <motion.div key={tech.name} {...fadeUp} transition={{ delay: i * 0.04 }}
                className="group p-4 rounded-xl glass text-center card-hover"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <tech.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="text-xs font-semibold">{tech.name}</div>
                <div className="text-[10px] text-muted-foreground">{tech.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* TESTIMONIALS */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-3">
              <Users className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-muted-foreground">{t("landing.builders")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              {t("landing.trustTitle")} <span className="gradient-text">{t("landing.trustHighlight")}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{t("landing.trustSubtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <motion.div key={item.name} {...fadeUp} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl glass relative overflow-hidden group hover:bg-white/[0.03] transition-colors"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition-opacity bg-gradient-to-br from-purple-500 to-emerald-500" />
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {item.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.role}</div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">&ldquo;{item.text}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* ON-CHAIN CREDENTIALS */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-950/5 to-background" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-4">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-muted-foreground">{t("landing.credentialBadge") || "Soulbound NFTs"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t("landing.credentialTitle") || "Verifiable"} <span className="gradient-text">{t("landing.credentialHighlight") || "On-Chain Proof"}</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("landing.credentialDesc") || "Every course completion mints a soulbound Metaplex Core NFT to your wallet. These credentials are non-transferable and evolve as you progress — no wallet clutter, just real proof of skill."}
              </p>
              <ul className="space-y-3">
                {[
                  t("landing.credFeature1") || "Soulbound (PermanentFreezeDelegate) — cannot be sold or transferred",
                  t("landing.credFeature2") || "One NFT per track that upgrades in place as you level up",
                  t("landing.credFeature3") || "On-chain attributes: track, level, courses completed, total XP",
                  t("landing.credFeature4") || "Verifiable on Solana Explorer — share your proof with employers",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* NFT mockup */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-96 rounded-2xl overflow-hidden border border-border shadow-2xl shadow-emerald-500/5 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] p-6 flex flex-col items-center justify-center text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-emerald-600/5" />
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-emerald-500 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-purple-500/20">
                      <GraduationCap className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-white font-bold text-lg mb-1">Solana Developer</div>
                    <div className="text-emerald-400 text-xs font-mono mb-4">Level 5 · 2,400 XP</div>
                    <div className="text-[10px] text-gray-500 space-y-1">
                      <div>Track: Solana Fundamentals</div>
                      <div>Courses: 3/6 completed</div>
                      <div>Mint: So1an...aDev</div>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-medium">
                      <Lock className="w-3 h-3" />
                      Soulbound · Non-Transferable
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl" />
                <div className="absolute -top-3 -left-3 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* FAQ */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-muted-foreground">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">
              {t("landing.faqTitle") || "Frequently Asked"} <span className="gradient-text">{t("landing.faqHighlight") || "Questions"}</span>
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CTA SECTION */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-emerald-500 to-purple-600 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
            <div className="m-[2px] rounded-[22px] relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-emerald-600/10" />
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} />
              <div className="relative px-8 py-16 sm:px-12 sm:py-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 text-sm text-gray-300">
                  <Rocket className="w-4 h-4 text-emerald-400" />
                  {t("common.free")}
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight">{t("landing.readyTitle")}</h2>
                <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg leading-relaxed">{t("landing.readyDescription")}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/courses" className="group flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-500 hover:to-emerald-400 transition-all shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5">
                    {t("common.startLearning")}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/leaderboard" className="flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-white/80 border border-white/10 hover:bg-white/5 transition-all">
                    <Trophy className="w-5 h-5 text-amber-400" />
                    {t("nav.leaderboard")}
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-6 mt-10 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> {t("landing.onChainCredentials")}</div>
                  <div className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /> 3 {t("common.language")}s</div>
                  <div className="flex items-center gap-1.5"><Code className="w-3.5 h-3.5" /> Open Source</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
