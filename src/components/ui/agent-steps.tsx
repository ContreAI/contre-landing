"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Upload, FileSearch, MessageCircle, ShieldCheck } from "lucide-react"
import { BrokerageStepSection } from "@/components/ui/brokerage-step-section"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

/* ─── Mock Content Components ─── */

function MockDocumentUpload() {
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
            app.contre.ai/upload
          </div>
        </div>
      </div>
      <div className="p-5 md:p-6 bg-gradient-to-b from-[#112A1E] to-[#0D1A14]">
        <div className="text-xs font-['Manrope'] text-[#9DBFBF] font-semibold uppercase tracking-wider mb-5">Upload Documents</div>

        {/* Drop zone */}
        <div className="border-2 border-dashed border-white/[0.12] rounded-xl p-6 text-center mb-5 hover:border-[#9DBFBF]/30 transition-colors">
          <div className="text-sm text-slate-400 font-['Manrope'] mb-1">Drag &amp; drop files here</div>
          <div className="text-xs text-slate-600 font-['Manrope']">or click to browse</div>
        </div>

        {/* File list */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between bg-white/[0.03] rounded-xl border border-white/[0.06] p-3">
            <div className="flex items-center gap-2.5">
              <span className="text-[#9DBFBF] text-xs" aria-hidden="true">✓</span>
              <span className="text-sm text-slate-300 font-['Manrope']">Purchase_Agreement.pdf</span>
            </div>
            <span className="text-xs text-slate-500 font-['Manrope']">2.4 MB</span>
          </div>
          <div className="flex items-center justify-between bg-white/[0.03] rounded-xl border border-white/[0.06] p-3">
            <div className="flex items-center gap-2.5">
              <span className="text-[#9DBFBF] text-xs" aria-hidden="true">✓</span>
              <span className="text-sm text-slate-300 font-['Manrope']">Inspection_Report.pdf</span>
            </div>
            <span className="text-xs text-slate-500 font-['Manrope']">1.8 MB</span>
          </div>
          <div className="flex items-center justify-between bg-white/[0.03] rounded-xl border border-white/[0.06] p-3">
            <div className="flex items-center gap-2.5">
              <motion.span
                animate={prefersReduced ? undefined : { opacity: [0.3, 1, 0.3] }}
                transition={prefersReduced ? { duration: 0 } : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-[#9DBFBF] text-xs"
                aria-hidden="true"
              >
                ●
              </motion.span>
              <span className="text-sm text-slate-300 font-['Manrope']">Seller_Disclosure.pdf</span>
            </div>
            <span className="text-xs text-slate-500 font-['Manrope']">Uploading...</span>
          </div>
          <div className="flex items-center justify-between bg-white/[0.03] rounded-xl border border-white/[0.06] p-3">
            <div className="flex items-center gap-2.5">
              <span className="text-[#9DBFBF] text-xs" aria-hidden="true">✓</span>
              <span className="text-sm text-slate-300 font-['Manrope']">Title_Commitment.pdf</span>
            </div>
            <span className="text-xs text-slate-500 font-['Manrope']">3.1 MB</span>
          </div>
        </div>

        <div className="mt-5 text-center text-sm text-slate-500 font-['Manrope']">
          <span className="text-[#9DBFBF] font-semibold">3 of 4</span> uploaded · Analyzing...
        </div>
      </div>
    </div>
  )
}

function MockAnalysisReport() {
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
            app.contre.ai/report
          </div>
        </div>
      </div>
      <div className="p-5 md:p-6 bg-gradient-to-b from-[#112A1E] to-[#0D1A14]">
        <div className="flex items-center justify-between mb-5">
          <div className="text-xs font-['Manrope'] text-[#9DBFBF] font-semibold uppercase tracking-wider">Transaction Analysis</div>
          <div className="text-xs font-['Manrope'] text-slate-500">742 Evergreen Terrace · 5 docs</div>
        </div>

        {/* Key dates */}
        <div className="mb-5">
          <div className="text-xs font-['Manrope'] text-slate-400 uppercase tracking-wider mb-3">Key Dates</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 text-sm font-['Manrope']">
              <span className="text-slate-500">├</span>
              <span className="text-slate-300">Inspection deadline</span>
              <span className="text-[#9DBFBF] ml-auto">Mar 5</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm font-['Manrope']">
              <span className="text-slate-500">├</span>
              <span className="text-slate-300">Financing contingency</span>
              <span className="text-[#9DBFBF] ml-auto">Mar 12</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm font-['Manrope']">
              <span className="text-slate-500">└</span>
              <span className="text-slate-300">Closing date</span>
              <span className="text-[#9DBFBF] ml-auto">Mar 28</span>
            </div>
          </div>
        </div>

        {/* Issues found */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs font-['Manrope'] text-amber-400 uppercase tracking-wider mb-3">
            <span aria-hidden="true">⚠</span> 2 Issues Found
          </div>
          <div className="space-y-2.5">
            <div className="bg-amber-400/[0.06] border border-amber-400/[0.12] rounded-xl p-3">
              <div className="text-sm font-['Manrope'] text-slate-200">Seller disclosure missing lead paint acknowledgment</div>
              <div className="text-xs font-['Manrope'] text-slate-500 mt-1">Source: Seller Disclosure, p. 4</div>
            </div>
            <div className="bg-amber-400/[0.06] border border-amber-400/[0.12] rounded-xl p-3">
              <div className="text-sm font-['Manrope'] text-slate-200">HOA dues increase noted in amendment, not in main agreement</div>
              <div className="text-xs font-['Manrope'] text-slate-500 mt-1">Source: HOA Addendum, p. 2 vs Purchase Agreement, p. 8</div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-slate-500 font-['Manrope']">
          <span className="text-[#9DBFBF]">✓</span> <span className="text-[#9DBFBF] font-semibold">18</span> items reviewed · <span className="text-[#9DBFBF] font-semibold">47</span> pages analyzed
        </div>
      </div>
    </div>
  )
}

function MockChatbot() {
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
            chat.contre.ai
          </div>
        </div>
      </div>
      <div className="p-5 md:p-6 bg-gradient-to-b from-[#112A1E] to-[#0D1A14]">
        <div className="flex items-center justify-between mb-5">
          <div className="text-xs font-['Manrope'] text-[#9DBFBF] font-semibold uppercase tracking-wider">Client Portal</div>
          <div className="text-xs font-['Manrope'] text-slate-500">742 Evergreen Terrace</div>
        </div>

        {/* Chat messages */}
        <div className="space-y-4">
          {/* Client message */}
          <div className="flex justify-end">
            <div className="bg-white/[0.06] rounded-xl rounded-tr-sm p-3 max-w-[75%]">
              <div className="text-sm font-['Manrope'] text-slate-200">&ldquo;When is the inspection deadline?&rdquo;</div>
              <div className="text-[10px] font-['Manrope'] text-slate-500 mt-1 text-right">Client · 11:42 PM</div>
            </div>
          </div>

          {/* Bot response */}
          <div className="flex justify-start">
            <div className="bg-[#9DBFBF]/[0.08] border border-[#9DBFBF]/[0.12] rounded-xl rounded-tl-sm p-3 max-w-[85%]">
              <div className="text-sm font-['Manrope'] text-slate-200">Your inspection deadline is <span className="text-[#9DBFBF] font-semibold">March 5, 2026</span>. You have 8 days remaining. The inspection report was received on Feb 20.</div>
              <div className="text-[10px] font-['Manrope'] text-[#9DBFBF]/60 mt-1.5">📎 Source: Purchase Agreement, p. 3</div>
            </div>
          </div>

          {/* Client message 2 */}
          <div className="flex justify-end">
            <div className="bg-white/[0.06] rounded-xl rounded-tr-sm p-3 max-w-[75%]">
              <div className="text-sm font-['Manrope'] text-slate-200">&ldquo;What appliances are included?&rdquo;</div>
              <div className="text-[10px] font-['Manrope'] text-slate-500 mt-1 text-right">Client · 11:43 PM</div>
            </div>
          </div>

          {/* Bot response 2 */}
          <div className="flex justify-start">
            <div className="bg-[#9DBFBF]/[0.08] border border-[#9DBFBF]/[0.12] rounded-xl rounded-tl-sm p-3 max-w-[85%]">
              <div className="text-sm font-['Manrope'] text-slate-200">Per the purchase agreement, included appliances: <span className="text-[#9DBFBF] font-semibold">refrigerator, stove, dishwasher, washer, dryer</span>.</div>
              <div className="text-[10px] font-['Manrope'] text-[#9DBFBF]/60 mt-1.5">📎 Source: Purchase Agreement, p. 7</div>
            </div>
          </div>
        </div>

        {/* Input area */}
        <div className="mt-4 bg-white/[0.03] rounded-xl border border-white/[0.06] p-3 flex items-center">
          <span className="text-sm text-slate-500 font-['Manrope'] flex-1">Type a question...</span>
          <div className="w-7 h-7 rounded-full bg-[#9DBFBF]/20 flex items-center justify-center">
            <span className="text-[#9DBFBF] text-xs" aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function MockIssueTracker() {
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
            app.contre.ai/alerts
          </div>
        </div>
      </div>
      <div className="p-5 md:p-6 bg-gradient-to-b from-[#112A1E] to-[#0D1A14]">
        <div className="flex items-center justify-between mb-5">
          <div className="text-xs font-['Manrope'] text-[#9DBFBF] font-semibold uppercase tracking-wider">Issue Monitor</div>
          <div className="flex items-center gap-2">
            <motion.span
              animate={prefersReduced ? undefined : { opacity: [0.3, 1, 0.3] }}
              transition={prefersReduced ? { duration: 0 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#9DBFBF] text-xs"
            >
              ●
            </motion.span>
            <span className="text-xs font-['Manrope'] text-slate-500">Active</span>
          </div>
        </div>

        {/* High priority */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs font-['Manrope'] text-amber-400 uppercase tracking-wider mb-3">
            <span aria-hidden="true">⚠</span> High Priority
          </div>
          <div className="bg-amber-400/[0.06] border border-amber-400/[0.12] rounded-xl p-3.5">
            <div className="text-sm font-['Manrope'] font-semibold text-slate-200 mb-1">Inspection response due in 3 days</div>
            <div className="text-xs font-['Manrope'] text-slate-400">Response not yet received from listing agent</div>
            <div className="text-xs font-['Manrope'] text-amber-400/80 mt-2">Action: Follow up with listing agent</div>
          </div>
        </div>

        {/* Conflict detected */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs font-['Manrope'] text-amber-400 uppercase tracking-wider mb-3">
            <span aria-hidden="true">⚡</span> Conflict Detected
          </div>
          <div className="bg-amber-400/[0.06] border border-amber-400/[0.12] rounded-xl p-3.5">
            <div className="text-sm font-['Manrope'] font-semibold text-slate-200 mb-1">Closing date mismatch</div>
            <div className="text-xs font-['Manrope'] text-slate-400">Purchase agreement states Mar 28 — lender commitment states Mar 25</div>
            <div className="text-xs font-['Manrope'] text-amber-400/80 mt-2">Action: Verify with lender and update if needed</div>
          </div>
        </div>

        <div className="text-center text-sm text-slate-500 font-['Manrope']">
          <span className="text-[#9DBFBF]">✓</span> <span className="text-[#9DBFBF] font-semibold">12</span> items clear · <span className="text-amber-400 font-semibold">2</span> need action
        </div>
      </div>
    </div>
  )
}

/* ─── Steps Orchestrator ─── */

export function AgentSteps() {
  return (
    <>
      <BrokerageStepSection
        stepNumber="01"
        sectionId="step-01"
        headline="Upload Documents or Connect Your TMS"
        icon={Upload}
        layout="left"
        bgVariant={0}
        howDescription="Drag and drop your transaction documents directly, or connect SkySlope or LoneWolf for automatic sync. Purchase agreements, disclosures, inspection reports, HOA docs — upload anything and everything."
        howBullets={[
          "Direct upload — drag, drop, done in 30 seconds",
          "SkySlope & LoneWolf auto-sync available",
          "Supports PDFs, scanned images, and multi-page documents",
          "Upload as many documents per transaction as you need",
        ]}
        whyDescription="No matter how thorough you are, you can't catch what you don't have time to read. Get every document into one place and let AI do the heavy lifting — so nothing on page 47 catches you off guard."
        mockContent={<MockDocumentUpload />}
      />

      <BrokerageStepSection
        stepNumber="02"
        sectionId="step-02"
        headline="Get Your Complete Analysis in 60 Seconds"
        icon={FileSearch}
        layout="right"
        bgVariant={1}
        howDescription="Contre reads every page of every document and delivers a one-page summary: key dates, red flags, conflicting terms, missing items, and action items — all in under a minute."
        howBullets={[
          "One-page summary of your entire transaction",
          "Every deadline extracted and tracked automatically",
          "Red flags and conflicting terms highlighted",
          "Action items prioritized by urgency",
        ]}
        whyDescription="You know every detail of every deal. You speak with confidence because you've actually got the answers. No more 'I think it says...' — you know exactly what it says, and you found it before anyone else did."
        mockContent={<MockAnalysisReport />}
      />

      <BrokerageStepSection
        stepNumber="03"
        sectionId="step-03"
        headline="Your Clients Get Answers at 2 AM — Without Texting You"
        icon={MessageCircle}
        layout="left"
        bgVariant={2}
        howDescription="Share a secure chatbot link with your clients. They ask questions anytime — 'When's the inspection?' 'What appliances stay?' — and get instant, accurate answers sourced from their actual transaction documents."
        howBullets={[
          "Branded with YOUR name — clients think you're the most organized agent ever",
          "24/7 availability — no more midnight texts",
          "Answers sourced directly from transaction documents",
          "Share polished summary reports with one click",
        ]}
        whyDescription="Your clients get more transparency than they've ever had from any agent. That's not just good service — that's a reputation that compounds. Happy clients tell their friends. Referrals come to agents who make people feel informed and cared for."
        mockContent={<MockChatbot />}
      />

      <BrokerageStepSection
        stepNumber="04"
        sectionId="step-04"
        headline="Stop Wondering. Start Knowing."
        icon={ShieldCheck}
        layout="right"
        bgVariant={3}
        howDescription="Contre continuously monitors your transaction for conflicts, missing documents, approaching deadlines, and terms that don't match across documents. You get alerts before small issues become deal-killers."
        howBullets={[
          "Automatic conflict detection across all documents",
          "Deadline alerts before they sneak up on you",
          "Missing document identification",
          "Terms cross-referenced across purchase agreement, disclosures, and addendums",
        ]}
        whyDescription="1 in 6 deals falls apart. When it's yours, it's not a statistic — it's a lost commission, an awkward conversation, and a client who won't be referring you. Contre makes sure you're never the agent who missed something buried on page 47."
        mockContent={<MockIssueTracker />}
      />
    </>
  )
}
