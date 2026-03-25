import ToolsGrid from '@/components/ToolsGrid';
import { tools } from '@/data/tools';

export default function Home() {
  return (
    <>
      <header className="hero">
        <h1>Business Automation Tools</h1>
        <p>
          Free AI-powered tools for HR, invoicing, lead generation, scheduling, and expense management.
          Built for professionals who value their time. Try any tool as a demo or join the waitlist for early access.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '28px',
          flexWrap: 'wrap'
        }}>
          <Stat value={tools.length.toString()} label="Tools Available" />
          <Stat value="Free" label="Demo Access" />
          <Stat value="Daily" label="New Tools Added" />
        </div>
      </header>

      <main className="container">
        <section>
          <div className="section-header">
            <h2>Explore Tools</h2>
            <p>
              Each tool is researched against top competitors and designed to solve their biggest pain points.
              New tools are added daily based on market demand.
            </p>
          </div>
          <ToolsGrid />
        </section>

        <section style={{ marginTop: '80px' }}>
          <div className="section-header">
            <h2>Why AutomateStack?</h2>
          </div>
          <div className="tools-grid">
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

        <section style={{ marginTop: '80px' }} id="faq">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: '720px' }}>
            <FaqItem
              question="What is AutomateStack?"
              answer="AutomateStack is a growing collection of free AI-powered business automation tools. We add new tools daily based on market research, targeting the most common workflow bottlenecks for HR managers, office managers, small business owners, and professionals."
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
          AI-powered tools for HR onboarding, invoicing, lead generation, scheduling, and expense management.
        </p>
      </footer>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontSize: '1.8rem',
        fontWeight: 800,
        background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        {value}
      </div>
      <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{label}</div>
    </div>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="tool-tile" style={{ padding: '28px' }}>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{description}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details style={{
      padding: '20px 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      cursor: 'pointer'
    }}>
      <summary style={{
        fontWeight: 600,
        fontSize: '1rem',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {question}
        <span style={{ color: 'var(--text-secondary)', marginLeft: '16px' }}>+</span>
      </summary>
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        lineHeight: 1.6,
        marginTop: '12px',
        paddingRight: '24px'
      }}>
        {answer}
      </p>
    </details>
  );
}
