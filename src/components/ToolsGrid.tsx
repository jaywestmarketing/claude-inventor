'use client';

import { useState } from 'react';
import { tools, Tool } from '@/data/tools';
import ToolTile from './ToolTile';

const categories = [
  { key: 'all', label: 'All Tools' },
  { key: 'hr', label: 'HR' },
  { key: 'finance', label: 'Finance' },
  { key: 'marketing', label: 'Marketing' },
  { key: 'sales', label: 'Sales' },
  { key: 'operations', label: 'Operations' },
  { key: 'productivity', label: 'Productivity' },
];

export default function ToolsGrid() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? tools
    : tools.filter(t => t.category === filter);

  return (
    <div>
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '28px',
        flexWrap: 'wrap'
      }}>
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: filter === cat.key ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.1)',
              background: filter === cat.key ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.04)',
              color: filter === cat.key ? 'var(--accent-blue)' : 'var(--text-secondary)',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="tools-grid">
        {filtered.map((tool: Tool) => (
          <ToolTile key={tool.id} tool={tool} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          padding: '60px 0'
        }}>
          No tools in this category yet. New tools are added daily!
        </p>
      )}
    </div>
  );
}
