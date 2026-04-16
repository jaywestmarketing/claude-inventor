'use client';

import { useState, useMemo } from 'react';
import { tools, Tool } from '@/data/tools';
import ToolTile from './ToolTile';

const CATEGORIES = [
  { key: 'all',          label: 'All Tools' },
  { key: 'hr',           label: '👤 HR' },
  { key: 'finance',      label: '💰 Finance' },
  { key: 'marketing',    label: '🎯 Marketing' },
  { key: 'sales',        label: '📋 Sales' },
  { key: 'operations',   label: '📊 Operations' },
  { key: 'productivity', label: '📅 Productivity' },
];

export default function ToolsGrid() {
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(
    () => filter === 'all' ? tools : tools.filter((t: Tool) => t.category === filter),
    [filter]
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: tools.length };
    for (const t of tools) map[t.category] = (map[t.category] || 0) + 1;
    return map;
  }, []);

  return (
    <div>
      {/* Category tabs */}
      <div className="category-bar" role="tablist" aria-label="Filter by category">
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            role="tab"
            aria-selected={filter === cat.key}
            onClick={() => setFilter(cat.key)}
            className={`cat-btn${filter === cat.key ? ' cat-btn-active' : ''}`}
          >
            {cat.label}
            <span style={{
              marginLeft: '5px',
              fontSize: '11px',
              background: filter === cat.key ? 'rgba(228,121,17,.15)' : '#f0f2f2',
              color: filter === cat.key ? 'var(--orange)' : '#565959',
              padding: '1px 6px',
              borderRadius: '10px',
              fontWeight: 700,
            }}>
              {counts[cat.key] ?? 0}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="tools-grid stagger-children">
        {filtered.map((tool: Tool) => (
          <ToolTile key={tool.id} tool={tool} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: 'center', color: '#8c8c8c', padding: '60px 0' }}>
          No tools in this category yet — check back tomorrow!
        </p>
      )}
    </div>
  );
}
