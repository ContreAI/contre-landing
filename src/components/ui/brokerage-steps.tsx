"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Building2, Plug, GraduationCap, Users, LayoutDashboard } from "lucide-react"
import { BrokerageStepSection } from "@/components/ui/brokerage-step-section"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

/* ─── Mock Content Components ─── */

function MockSignupForm() {
  return (
    <div className="bg-[#0D1A14] rounded-2xl border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-white/[0.05] rounded-md px-3 py-1 text-xs text-slate-500 font-['Manrope'] text-center max-w-[200px] mx-auto">
            app.contre.ai/signup
          </div>
        </div>
      </div>
      <div className="p-5 md:p-6 bg-gradient-to-b from-[#112A1E] to-[#0D1A14]">
        <div className="text-xs font-['Manrope'] text-[#9DBFBF] font-semibold uppercase tracking-wider mb-5">New Brokerage Account</div>
        <div className="space-y-3">
          <div className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-3.5">
            <div className="text-[10px] text-slate-500 font-['Manrope'] uppercase tracking-wider mb-1">Brokerage Name</div>
            <div className="text-sm text-slate-300 font-['Manrope']">Acme Realty Group</div>
          </div>
          <div className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-3.5">
            <div className="text-[10px] text-slate-500 font-['Manrope'] uppercase tracking-wider mb-1">Managing Broker Email</div>
            <div className="text-sm text-slate-300 font-['Manrope']">broker@acmerealty.com</div>
          </div>
          <div className="bg-white/[0.03] rounded-xl border border-white/[0.06] p-3.5">
            <div className="text-[10px] text-slate-500 font-['Manrope'] uppercase tracking-wider mb-1">State / MLS Region</div>
            <div className="text-sm text-slate-300 font-['Manrope']">Washington — NWMLS</div>
          </div>
          <div className="w-full bg-[#9DBFBF] rounded-xl py-3.5 text-center text-sm font-semibold text-[#0D1A14] font-['Manrope'] mt-2">
            Create Account
          </div>
        </div>
      </div>
    </div>
  )
}

function MockIntegrations() {
  const prefersReduced = useReducedMotion()

  return (
    <div className="bg-[#0D1A14] rounded-2xl border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-white/[0.05] rounded-md px-3 py-1 text-xs text-slate-500 font-['Manrope'] text-center max-w-[200px] mx-auto">
            app.contre.ai/integrations
          </div>
        </div>
      </div>
      <div className="p-5 md:p-6 bg-gradient-to-b from-[#112A1E] to-[#0D1A14]">
        <div className="text-xs font-['Manrope'] text-[#9DBFBF] font-semibold uppercase tracking-wider mb-6">Integrations</div>
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white/[0.03] rounded-xl border border-white/[0.06] p-4">
            <div className="flex items-center gap-3">
              <Image src="/skyslope-logo.png" alt="SkySlope" width={100} height={24} className="h-5 w-auto brightness-0 invert opacity-80" />
            </div>
            <span className="text-xs font-['Manrope'] font-semibold text-[#9DBFBF] bg-[#9DBFBF]/[0.10] px-3 py-1 rounded-full">Connected</span>
          </div>
          <div className="flex items-center justify-between bg-white/[0.03] rounded-xl border border-white/[0.06] p-4">
            <div className="flex items-center gap-3">
              <Image src="/LW logo.png" alt="Lone Wolf" width={100} height={24} className="h-5 w-auto brightness-0 invert opacity-80" />
            </div>
            <span className="text-xs font-['Manrope'] font-semibold text-[#9DBFBF] bg-[#9DBFBF]/[0.10] px-3 py-1 rounded-full">Connected</span>
          </div>
          <div className="flex items-center justify-between bg-white/[0.03] rounded-xl border border-dashed border-white/[0.12] p-4 opacity-50">
            <span className="text-sm text-slate-500 font-['Manrope']">+ Add another integration</span>
            <span className="text-xs font-['Manrope'] text-slate-600 bg-white/[0.03] px-3 py-1 rounded-full">Coming Soon</span>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 font-['Manrope']">
          <motion.span
            animate={prefersReduced ? undefined : { opacity: [0.3, 1, 0.3] }}
            transition={prefersReduced ? { duration: 0 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#9DBFBF]"
          >
            ●
          </motion.span>
          Syncing 247 documents automatically
        </div>
      </div>
    </div>
  )
}

function MockTraining() {
  const prefersReduced = useReducedMotion()
  const items = [
    { name: "Purchase Agreements", docs: "12 docs" },
    { name: "State Addendums", docs: "8 docs" },
    { name: "HOA Requirements", docs: "15 docs" },
    { name: "Internal Policies", docs: "6 docs" },
    { name: "MLS Rules", docs: "4 docs" },
  ]

  return (
    <div className="bg-[#0D1A14] rounded-2xl border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-white/[0.05] rounded-md px-3 py-1 text-xs text-slate-500 font-['Manrope'] text-center max-w-[200px] mx-auto">
            app.contre.ai/training
          </div>
        </div>
      </div>
      <div className="p-5 md:p-6 bg-gradient-to-b from-[#112A1E] to-[#0D1A14]">
        <div className="flex items-center justify-between mb-5">
          <div className="text-xs font-['Manrope'] text-[#9DBFBF] font-semibold uppercase tracking-wider">BrokerageCore Training</div>
          <div className="text-xs font-['Manrope'] text-[#9DBFBF] bg-[#9DBFBF]/[0.10] px-3 py-1 rounded-full">5 of 5 Complete</div>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm font-['Manrope'] mb-1.5">
                <span className="text-slate-300">{item.name}</span>
                <span className="text-[#9DBFBF] text-xs">{item.docs} · Trained</span>
              </div>
              <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#9DBFBF] to-[#9DBFBF]/60 rounded-full"
                  initial={prefersReduced ? { width: "100%" } : { width: "0%" }}
                  whileInView={prefersReduced ? undefined : { width: "100%" }}
                  viewport={{ once: true }}
                  transition={prefersReduced ? { duration: 0 } : { duration: 1.2, delay: i * 0.2, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center text-sm text-slate-500 font-['Manrope']">
          <span className="text-[#9DBFBF] font-semibold">47</span> documents trained · <span className="text-[#9DBFBF] font-semibold">12</span> custom rules active
        </div>
      </div>
    </div>
  )
}

function MockTeamPanel() {
  const agents = [
    { name: "Sarah Chen", role: "Top Producer", deals: 8 },
    { name: "Marcus Johnson", role: "Agent", deals: 4 },
    { name: "Emily Rodriguez", role: "New Agent", deals: 2 },
    { name: "James Park", role: "Agent", deals: 5 },
  ]

  return (
    <div className="bg-[#0D1A14] rounded-2xl border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-white/[0.05] rounded-md px-3 py-1 text-xs text-slate-500 font-['Manrope'] text-center max-w-[200px] mx-auto">
            app.contre.ai/team
          </div>
        </div>
      </div>
      <div className="p-5 md:p-6 bg-gradient-to-b from-[#112A1E] to-[#0D1A14]">
        <div className="flex items-center justify-between mb-5">
          <div className="text-xs font-['Manrope'] text-[#9DBFBF] font-semibold uppercase tracking-wider">Your Team</div>
          <div className="text-xs font-['Manrope'] text-slate-500">{agents.length} agents active</div>
        </div>
        <div className="space-y-3">
          {agents.map((agent, i) => (
            <div key={i} className="flex items-center justify-between bg-white/[0.03] rounded-xl border border-white/[0.06] p-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9DBFBF] to-[#264E36] flex items-center justify-center">
                  <span className="text-[10px] font-['Manrope'] font-bold text-white">{agent.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <div className="text-sm font-['Manrope'] font-semibold text-slate-200">{agent.name}</div>
                  <div className="text-xs font-['Manrope'] text-slate-500">{agent.role} · {agent.deals} active deals</div>
                </div>
              </div>
              <span className="text-xs font-['Manrope'] font-semibold text-[#9DBFBF]">Active</span>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-white/[0.03] rounded-xl border border-dashed border-white/[0.12] p-3 text-center text-sm text-slate-500 font-['Manrope'] cursor-pointer hover:bg-white/[0.06] transition-colors">
          + Invite Agent
        </div>
      </div>
    </div>
  )
}

function MockDashboard() {
  const prefersReduced = useReducedMotion()

  return (
    <div className="bg-[#0D1A14] rounded-2xl border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-white/[0.05] rounded-md px-3 py-1 text-xs text-slate-500 font-['Manrope'] text-center max-w-[200px] mx-auto">
            dashboard.contre.ai
          </div>
        </div>
      </div>
      <div className="p-4 md:p-5 bg-gradient-to-b from-[#112A1E] to-[#0D1A14]">
        {/* Dashboard header */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-['Manrope'] text-slate-200 font-semibold">Transaction Overview</div>
          <motion.div
            animate={prefersReduced ? undefined : { opacity: [0.5, 1, 0.5] }}
            transition={prefersReduced ? { duration: 0 } : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs font-['Manrope'] text-slate-500"
          >
            Live · Updated just now
          </motion.div>
        </div>

        {/* Mini stat row */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: "Active", value: "14", color: "text-[#9DBFBF]" },
            { label: "Flagged", value: "3", color: "text-amber-400" },
            { label: "Due Soon", value: "7", color: "text-[#9DBFBF]" },
            { label: "Closed", value: "42", color: "text-[#607D3B]" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/[0.03] rounded-lg border border-white/[0.06] p-2 text-center">
              <div className={`font-['Bebas_Neue'] text-xl ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] text-slate-500 font-['Manrope']">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Transaction list */}
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-white/[0.03] rounded-lg border border-white/[0.06] p-2.5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div>
                <div className="text-xs font-['Manrope'] font-semibold text-slate-200">456 Oak Ave</div>
                <div className="text-[10px] font-['Manrope'] text-slate-500">M. Johnson · 2 flags</div>
              </div>
            </div>
            <div className="text-[10px] font-['Manrope'] text-amber-400">Due Tomorrow</div>
          </div>
          <div className="flex items-center justify-between bg-white/[0.03] rounded-lg border border-white/[0.06] p-2.5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#9DBFBF]" />
              <div>
                <div className="text-xs font-['Manrope'] font-semibold text-slate-200">123 Main St</div>
                <div className="text-[10px] font-['Manrope'] text-slate-500">S. Chen · All clear</div>
              </div>
            </div>
            <div className="text-[10px] font-['Manrope'] text-[#9DBFBF]">Closing Fri</div>
          </div>
          <div className="flex items-center justify-between bg-white/[0.03] rounded-lg border border-white/[0.06] p-2.5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div>
                <div className="text-xs font-['Manrope'] font-semibold text-slate-200">789 Pine Dr</div>
                <div className="text-[10px] font-['Manrope'] text-slate-500">E. Rodriguez · 1 flag</div>
              </div>
            </div>
            <div className="text-[10px] font-['Manrope'] text-amber-400">Needs Action</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Steps Orchestrator ─── */

export function BrokerageSteps() {
  return (
    <>
      <BrokerageStepSection
        stepNumber="01"
        sectionId="step-01"
        headline="Create Your Brokerage Account"
        icon={Building2}
        layout="left"
        bgVariant={0}
        howDescription="Simple signup. Set up your brokerage profile, add your company details, and define your team structure. Takes about 5 minutes."
        whyDescription="This is your command center for every transaction across your entire team. One login gives you oversight of every document, every deadline, every agent — from day one."
        mockContent={<MockSignupForm />}
      />

      <BrokerageStepSection
        stepNumber="02"
        sectionId="step-02"
        headline="Connect Your Transaction Management System"
        icon={Plug}
        layout="right"
        bgVariant={1}
        howDescription="Connect SkySlope, LoneWolf, or your preferred TMS with a few clicks. Documents flow in automatically from every transaction your agents create."
        howBullets={[
          "One-click OAuth integration",
          "Documents sync automatically",
          "No manual uploads required",
          "Works alongside your existing workflow",
        ]}
        whyDescription="Zero adoption barriers. Your agents don't change anything about how they work. Documents flow to Contre automatically — no training, no friction, no 'I forgot to upload it.'"
        mockContent={<MockIntegrations />}
      />

      <BrokerageStepSection
        stepNumber="03"
        sectionId="step-03"
        headline="Train Your AI on YOUR Standards"
        icon={GraduationCap}
        layout="left"
        bgVariant={2}
        howDescription="Upload your company documents: purchase agreements, addendums, MLS rules, state-specific forms, internal policies, TC checklists. The AI learns what 'good' looks like at your brokerage."
        howBullets={[
          "Your specific contract clauses and requirements",
          "Your required deadlines and timelines",
          "Your compliance checklists and procedures",
          "Your quality standards — not generic templates",
        ]}
        whyDescription="Every document gets reviewed against YOUR brokerage's standards, not generic real estate rules. A first-year agent's contracts get the same scrutiny as your top producer's. New agents perform like veterans from day one."
        mockContent={<MockTraining />}
      />

      <BrokerageStepSection
        stepNumber="04"
        sectionId="step-04"
        headline="Add Your Agents. Zero Friction."
        icon={Users}
        layout="right"
        bgVariant={3}
        howDescription="Invite agents by email. They get instant access. No training sessions, no learning curve — Contre works inside the tools they already use every day."
        whyDescription="Agents get enterprise-level document protection without changing how they work. No app to download, no new process to learn. They keep doing their job — and Contre watches every document behind the scenes."
        mockContent={<MockTeamPanel />}
      />

      <BrokerageStepSection
        stepNumber="05"
        sectionId="step-05"
        headline="See Everything. Miss Nothing."
        icon={LayoutDashboard}
        layout="left"
        bgVariant={4}
        howDescription="Real-time dashboard showing every active transaction across your brokerage. Flagged issues, approaching deadlines, agent performance — all in one view."
        howBullets={[
          "Every active transaction at a glance",
          "Flagged issues across all agents",
          "Approaching deadline alerts",
          "Agent performance metrics",
        ]}
        whyDescription="No more finding out about problems when an agent panic-calls you at 9pm on a Friday. You see issues the moment they appear. You resolve conflicts before they become crises. You run your brokerage proactively, not reactively."
        mockContent={<MockDashboard />}
      />
    </>
  )
}
