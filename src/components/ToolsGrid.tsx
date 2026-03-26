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
            className={`filter-btn ${filter === cat.key ? 'filter-btn-active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="tools-grid stagger-children">
        {filtered.map((tool: Tool) => (
          <ToolTile key={tool.id} tool={tool} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{
          textAlign: 'center',
          color: 'var(--text-tertiary)',
          padding: '60px 0'
        }}>
          No tools in this category yet. New tools are added daily!
        </p>
      )}
    </div>
  );
}
