import ToolsGrid from '@/components/ToolsGrid';
import { tools } from '@/data/tools';

export default function Home() {
  return (
    <>
      <header className="hero">
        <h1>Business Automation Tools</h1>
        <p>
          Free tools for HR, invoicing, lead generation, scheduling, and expense management.
          Built for professionals who value their time. Try any tool or join the waitlist for early access.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginTop: '32px',
          flexWrap: 'wrap',
          animation: 'fadeInUp 0.6s ease-out 0.2s both'
        }}>
          <Stat value={tools.length.toString()} label="Tools Available" />
          <Stat value="Free" label="Demo Access" />
          <Stat value="Daily" label="New Tools Added" />
        </div>
      </header>

      <main className="container" style={{ paddingTop: '48px' }}>
        <section className="animate-fade-in">
          <div className="section-header">
            <h2>Explore Tools</h2>
            <p>
              Each tool is researched against top competitors and designed to solve their biggest pain points.
              New tools are added daily based on market demand.
            </p>
          </div>
          <ToolsGrid />
        </section>

        <section style={{ marginTop: '72px' }} className="animate-fade-in">
          <div className="section-header">
            <h2>Why AutomateStack?</h2>
          </div>
          <div className="tools-grid stagger-children">
            <ValueCard
              title="Built From Real Pain Points"
              description="Every tool is designed by analyzing thousands of negative reviews from competitors on G2, Capterra, and Reddit. We fix what others ignore."
            />
            <ValueCard
              title="No Setup Headaches"
              description="All tools work directly in your browser. No downloads, no IT department needed, no consultant fees. Set up in minutes, not weeks."
            />
            <ValueCard
              title="Transparent Pricing"
              description="Generous free tiers with no hidden fees, no per-seat traps, and no enterprise-only features. Built for real businesses, not just enterprise budgets."
            />
          </div>
        </section>

        <section style={{ marginTop: '72px' }} id="faq" className="animate-fade-in">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: '720px' }}>
            <FaqItem
              question="What is AutomateStack?"
              answer="AutomateStack is a growing collection of free business automation tools. We add new tools daily based on market research, targeting the most common workflow bottlenecks for HR managers, office managers, small business owners, and professionals."
            />
            <FaqItem
              question="Are these tools free?"
              answer="Yes! All tools have free demo access. Join the waitlist to get early access when the full version launches. We believe in transparent, affordable pricing with generous free tiers."
            />
            <FaqItem
              question="How are tools selected?"
              answer="We research competitor tools earning $5,000+/month, analyze their negative reviews, and build alternatives that fix the top complaints. Each tool targets real market demand validated by search volume and user pain points."
            />
            <FaqItem
              question="Can I suggest a tool?"
              answer="Absolutely! We prioritize tools based on waitlist demand. The more people who join a waitlist, the faster that tool gets built and launched."
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>AutomateStack &mdash; Free business automation tools, added daily.</p>
        <p style={{ marginTop: '8px', fontSize: '0.8rem' }}>
          Tools for HR onboarding, invoicing, lead generation, scheduling, and expense management.
        </p>
      </footer>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="value-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details>
      <summary>
        {question}
        <span className="faq-icon">+</span>
      </summary>
      <p className="faq-answer">{answer}</p>
    </details>
  );
}
