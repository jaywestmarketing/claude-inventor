/**
 * AI Meeting Notes Summarizer — Browser-Based Demo
 * Uses pattern matching and NLP heuristics to extract:
 * - Key decisions
 * - Action items with assignees and deadlines
 * - Executive summary
 * - Attendee detection
 *
 * This is the demo version. Full version will use actual AI API.
 */
(function() {
  'use strict';

  // ---- Pattern Libraries ----
  const DECISION_PATTERNS = [
    /(?:let'?s|we(?:'ll| will| should)|agreed|decided|decision|approved|go with|moving forward with|confirmed|finalized?)\s+(.+?)(?:\.|$)/gi,
    /(?:i'?m comfortable|sounds good|that works|let'?s do it|approved)\b.*?$/gim
  ];

  const ACTION_PATTERNS = [
    /(\w+)[\s,]+(?:please|can you|will you|could you|should|needs? to|must)\s+(.+?)(?:\.|$)/gi,
    /(\w+)[\s,]+(?:work with|draft|submit|post|document|finalize|prepare|schedule|create|send|review|update|hire|deliver)\s+(.+?)(?:\.|$)/gi
  ];

  const DEADLINE_PATTERNS = [
    /by\s+((?:next\s+)?(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|week|month|end of (?:week|month|quarter|year)|(?:january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2}(?:st|nd|rd|th)?|\d{1,2}\/\d{1,2}(?:\/\d{2,4})?))/gi,
    /(?:due|deadline|before|until)\s+(.+?)(?:\.|,|$)/gi,
    /by\s+(end of \w+|EOD|EOW|EOM|next \w+|(?:March|April|May|June|July|August|September|October|November|December|January|February)\s*\d{0,2}\s*(?:st|nd|rd|th)?)/gi
  ];

  const SPEAKER_PATTERN = /^(\w+(?:\s\w+)?)\s*[:]\s*/gm;

  // ---- Meeting Type Templates ----
  const MEETING_TEMPLATES = {
    general: { sections: ['summary', 'decisions', 'actions', 'followups'], label: 'General Meeting' },
    standup: { sections: ['summary', 'done', 'inprogress', 'blockers', 'actions'], label: 'Daily Standup' },
    'one-on-one': { sections: ['summary', 'feedback', 'decisions', 'actions', 'goals'], label: '1-on-1 Meeting' },
    board: { sections: ['summary', 'metrics', 'decisions', 'actions', 'strategic'], label: 'Board / Planning Meeting' },
    'sales-call': { sections: ['summary', 'needs', 'objections', 'decisions', 'actions', 'nextsteps'], label: 'Sales Call' },
    client: { sections: ['summary', 'requirements', 'decisions', 'actions', 'timeline'], label: 'Client Meeting' },
    interview: { sections: ['summary', 'strengths', 'concerns', 'decisions', 'actions'], label: 'Interview' },
    'sprint-review': { sections: ['summary', 'completed', 'demos', 'feedback', 'actions'], label: 'Sprint Review' }
  };

  // ---- Core Summarization Engine ----
  function summarizeMeeting(text, meetingType, title, dateStr, attendeesStr) {
    const speakers = detectSpeakers(text);
    const attendees = attendeesStr
      ? attendeesStr.split(',').map(a => a.trim()).filter(Boolean)
      : speakers;

    const decisions = extractDecisions(text);
    const actionItems = extractActionItems(text, attendees);
    const summary = generateSummary(text, meetingType, decisions, actionItems);
    const topics = extractTopics(text);

    return {
      title: title || 'Meeting Summary',
      date: dateStr || new Date().toISOString().split('T')[0],
      type: MEETING_TEMPLATES[meetingType] || MEETING_TEMPLATES.general,
      attendees,
      summary,
      decisions,
      actionItems,
      topics
    };
  }

  function detectSpeakers(text) {
    const speakers = new Set();
    let match;
    const regex = /^(\w+(?:\s\w+)?)\s*:/gm;
    while ((match = regex.exec(text)) !== null) {
      const name = match[1].trim();
      if (name.length > 1 && name.length < 30 && !/^(note|action|decision|summary|agenda|update|status)$/i.test(name)) {
        speakers.add(name);
      }
    }
    return Array.from(speakers);
  }

  function extractDecisions(text) {
    const decisions = [];
    const sentences = text.split(/[.!]\s+/);

    sentences.forEach(sentence => {
      const clean = sentence.replace(/^\w+\s*:\s*/, '').trim();
      const lower = clean.toLowerCase();

      if (
        /\b(agreed|approved|decided|let'?s do|confirmed|go with|moving forward|finalize|let'?s|i'?m comfortable)\b/i.test(clean) &&
        clean.length > 15 && clean.length < 300
      ) {
        // Clean up speaker prefix
        const text = clean.replace(/^\w+\s*:\s*/, '');
        if (!decisions.some(d => d.toLowerCase() === text.toLowerCase())) {
          decisions.push(text);
        }
      }
    });

    return decisions;
  }

  function extractActionItems(text, attendees) {
    const items = [];
    const sentences = text.split(/[.!]\s+/);
    const attendeeLower = attendees.map(a => a.toLowerCase().split(' ')[0]);

    sentences.forEach(sentence => {
      const clean = sentence.trim();
      let assignee = null;
      let deadline = null;
      let task = null;

      // Check for action-oriented language
      if (/\b(please|can you|will you|need to|must|should|draft|submit|post|document|finalize|prepare|schedule|create|send|review|update|hire|deliver|work with)\b/i.test(clean)) {

        // Try to find assignee
        for (const name of attendees) {
          const firstName = name.split(' ')[0];
          if (clean.includes(firstName) || clean.includes(name)) {
            assignee = name;
            break;
          }
        }

        // Check for speaker addressing someone
        const speakerMatch = clean.match(/^(\w+)\s*:\s*(.+)/);
        if (speakerMatch && !assignee) {
          const afterColon = speakerMatch[2];
          for (const name of attendees) {
            const firstName = name.split(' ')[0];
            if (afterColon.includes(firstName)) {
              assignee = name;
              break;
            }
          }
          // If speaker says "I'll" or "I will"
          if (!assignee && /\b(I'?ll|I will|I'?m going to)\b/i.test(afterColon)) {
            assignee = speakerMatch[1];
            // Match to full name
            for (const name of attendees) {
              if (name.toLowerCase().startsWith(speakerMatch[1].toLowerCase())) {
                assignee = name;
                break;
              }
            }
          }
        }

        // Extract deadline
        for (const pattern of DEADLINE_PATTERNS) {
          pattern.lastIndex = 0;
          const deadlineMatch = pattern.exec(clean);
          if (deadlineMatch) {
            deadline = deadlineMatch[1].trim();
            break;
          }
        }

        // Build task text
        task = clean.replace(/^\w+\s*:\s*/, '').trim();
        if (task.length > 10 && task.length < 300) {
          // Avoid duplicates
          if (!items.some(i => i.task.toLowerCase() === task.toLowerCase())) {
            items.push({ task, assignee, deadline });
          }
        }
      }
    });

    // Also check for "Everyone" tasks
    const everyoneMatch = text.match(/everyone\s+(.+?)(?:\.|$)/gi);
    if (everyoneMatch) {
      everyoneMatch.forEach(m => {
        const task = m.replace(/^everyone\s+/i, '').trim();
        if (task.length > 5) {
          let deadline = null;
          for (const pattern of DEADLINE_PATTERNS) {
            pattern.lastIndex = 0;
            const dm = pattern.exec(m);
            if (dm) { deadline = dm[1].trim(); break; }
          }
          items.push({ task: 'Everyone: ' + task, assignee: 'All', deadline });
        }
      });
    }

    return items;
  }

  function extractTopics(text) {
    const topics = [];
    const topicPatterns = [
      /\b(revenue|sales|growth|quarter|Q[1-4]|budget|pricing|hiring|roadmap|strategy|product|marketing|engineering|customer|churn|NPS|OKR|KPI|SSO|API|mobile|podcast|webinar)\b/gi
    ];

    const found = new Set();
    topicPatterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(text)) !== null) {
        const topic = match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase();
        if (!found.has(topic.toLowerCase())) {
          found.add(topic.toLowerCase());
          topics.push(topic);
        }
      }
    });

    return topics.slice(0, 10);
  }

  function generateSummary(text, meetingType, decisions, actionItems) {
    const wordCount = text.split(/\s+/).length;
    const speakerCount = detectSpeakers(text).length;
    const template = MEETING_TEMPLATES[meetingType] || MEETING_TEMPLATES.general;

    // Extract key numbers/metrics mentioned
    const numbers = text.match(/\$[\d,.]+[MBKk]?|\d+%|\d+\.\d+[MBK]?/g) || [];

    let summary = `${template.label} with ${speakerCount} participant${speakerCount !== 1 ? 's' : ''}. `;

    if (numbers.length > 0) {
      summary += `Key metrics discussed: ${numbers.slice(0, 4).join(', ')}. `;
    }

    summary += `${decisions.length} decision${decisions.length !== 1 ? 's' : ''} were made and ${actionItems.length} action item${actionItems.length !== 1 ? 's' : ''} were identified. `;

    // Add topic overview
    const topics = extractTopics(text);
    if (topics.length > 0) {
      summary += `Topics covered include ${topics.slice(0, 5).join(', ')}.`;
    }

    return summary;
  }

  // ---- Rendering ----
  function renderSummary(result) {
    const container = document.getElementById('meeting-summary');

    const formatDate = (dateStr) => {
      if (!dateStr) return '';
      const d = new Date(dateStr + 'T00:00:00');
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    let html = `
      <div class="summary-header">
        <h2>${escapeHtml(result.title)}</h2>
        <div class="summary-meta">
          <span>📅 ${formatDate(result.date)}</span>
          <span>📋 ${result.type.label}</span>
          <span>👥 ${result.attendees.length} attendee${result.attendees.length !== 1 ? 's' : ''}</span>
        </div>
      </div>

      <!-- Attendees -->
      <div class="summary-section">
        <h3><span class="section-icon">👥</span> Attendees</h3>
        <div class="attendees-list">
          ${result.attendees.map(a => `<span class="attendee-badge">${escapeHtml(a)}</span>`).join('')}
        </div>
      </div>

      <!-- Executive Summary -->
      <div class="summary-section">
        <h3><span class="section-icon">📄</span> Executive Summary</h3>
        <p>${escapeHtml(result.summary)}</p>
      </div>

      <!-- Key Decisions -->
      <div class="summary-section">
        <h3><span class="section-icon">✅</span> Key Decisions (${result.decisions.length})</h3>
        ${result.decisions.length > 0 ? `
          <ul class="decisions-list">
            ${result.decisions.map(d => `<li class="decision-item">${escapeHtml(d)}</li>`).join('')}
          </ul>
        ` : '<p style="color:var(--color-text-muted);font-size:0.9rem;">No explicit decisions detected. Try including phrases like "agreed", "approved", or "let\'s do" in your notes.</p>'}
      </div>

      <!-- Action Items -->
      <div class="summary-section">
        <h3><span class="section-icon">🎯</span> Action Items (${result.actionItems.length})</h3>
        ${result.actionItems.length > 0 ? `
          <ul class="action-items-list">
            ${result.actionItems.map(item => `
              <li class="action-item">
                <div class="ai-checkbox" onclick="this.classList.toggle('checked')"></div>
                <div class="action-item-content">
                  <div class="action-item-text">${escapeHtml(item.task)}</div>
                  <div class="action-item-meta">
                    ${item.assignee ? `<span class="assignee">→ ${escapeHtml(item.assignee)}</span>` : ''}
                    ${item.deadline ? `<span>📅 ${escapeHtml(item.deadline)}</span>` : ''}
                  </div>
                </div>
              </li>
            `).join('')}
          </ul>
        ` : '<p style="color:var(--color-text-muted);font-size:0.9rem;">No action items detected. Try including tasks with assignees and verbs like "please", "will", or "need to".</p>'}
      </div>

      <!-- Topics -->
      ${result.topics.length > 0 ? `
        <div class="summary-section">
          <h3><span class="section-icon">🏷️</span> Topics Discussed</h3>
          <div class="attendees-list">
            ${result.topics.map(t => `<span class="attendee-badge" style="background:rgba(34,197,94,0.08);color:#15803d;">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>
      ` : ''}
    `;

    container.innerHTML = html;
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  // ---- Export Functions ----
  function getMarkdown(result) {
    let md = `# ${result.title}\n\n`;
    md += `**Date:** ${result.date} | **Type:** ${result.type.label} | **Attendees:** ${result.attendees.join(', ')}\n\n`;
    md += `## Executive Summary\n${result.summary}\n\n`;
    md += `## Key Decisions\n`;
    result.decisions.forEach((d, i) => { md += `${i + 1}. ${d}\n`; });
    md += `\n## Action Items\n`;
    result.actionItems.forEach(item => {
      md += `- [ ] ${item.task}`;
      if (item.assignee) md += ` *(${item.assignee})*`;
      if (item.deadline) md += ` — Due: ${item.deadline}`;
      md += '\n';
    });
    if (result.topics.length > 0) {
      md += `\n## Topics\n${result.topics.join(', ')}\n`;
    }
    return md;
  }

  function exportPDF(result) {
    const printWindow = window.open('', '_blank');
    const content = document.getElementById('meeting-summary').innerHTML;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${result.title} — Meeting Summary</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'Inter', sans-serif; padding: 40px; color: #1a1a2e; line-height: 1.6; font-size: 13px; }
          .summary-header { margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid #4f46e5; }
          .summary-header h2 { font-size: 20px; font-weight: 800; }
          .summary-meta { display: flex; gap: 16px; font-size: 12px; color: #555; margin-top: 6px; }
          .summary-section { margin-bottom: 20px; }
          .summary-section h3 { font-size: 14px; font-weight: 700; color: #4f46e5; margin-bottom: 8px; }
          .summary-section p { font-size: 13px; line-height: 1.7; }
          .attendees-list { display: flex; gap: 6px; flex-wrap: wrap; }
          .attendee-badge { padding: 3px 10px; background: #eef; border-radius: 12px; font-size: 11px; font-weight: 600; color: #4f46e5; }
          .decisions-list { list-style: none; }
          .decision-item { padding: 8px 12px; margin-bottom: 4px; background: rgba(34,197,94,0.04); border-left: 3px solid #22c55e; font-size: 13px; }
          .action-items-list { list-style: none; }
          .action-item { display: flex; gap: 10px; padding: 8px 12px; margin-bottom: 6px; border-left: 3px solid #4f46e5; }
          .ai-checkbox { width: 14px; height: 14px; border: 2px solid #4f46e5; border-radius: 3px; flex-shrink: 0; margin-top: 2px; }
          .action-item-text { font-size: 13px; font-weight: 500; }
          .action-item-meta { font-size: 11px; color: #888; display: flex; gap: 12px; }
          .action-item-meta .assignee { color: #4f46e5; font-weight: 600; }
          @media print { body { padding: 20px; } }
        </style>
      </head>
      <body>${content}</body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 500);
  }

  // ---- State ----
  let currentResult = null;

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', function() {
    // Set default date
    document.getElementById('meeting-date').value = new Date().toISOString().split('T')[0];

    // Summarize button
    document.getElementById('btn-summarize').addEventListener('click', function() {
      const text = document.getElementById('meeting-transcript').value.trim();
      if (!text) {
        window.showToast && window.showToast('Please paste your meeting notes first.');
        return;
      }

      const title = document.getElementById('meeting-title').value;
      const dateStr = document.getElementById('meeting-date').value;
      const meetingType = document.getElementById('meeting-type').value;
      const attendeesStr = document.getElementById('meeting-attendees').value;

      // Show loading
      document.getElementById('meeting-input-panel').style.display = 'none';
      document.getElementById('meeting-output-panel').style.display = 'block';
      document.getElementById('meeting-summary').innerHTML = `
        <div class="summarizing-indicator">
          <div class="summarizing-dots"><span></span><span></span><span></span></div>
          Analyzing meeting notes...
        </div>
      `;

      // Simulate processing delay for realism
      setTimeout(function() {
        currentResult = summarizeMeeting(text, meetingType, title, dateStr, attendeesStr);
        renderSummary(currentResult);
      }, 1200);
    });

    // Back button
    document.getElementById('btn-back').addEventListener('click', function() {
      document.getElementById('meeting-input-panel').style.display = 'block';
      document.getElementById('meeting-output-panel').style.display = 'none';
    });

    // Clear button
    document.getElementById('btn-clear').addEventListener('click', function() {
      document.getElementById('meeting-transcript').value = '';
      document.getElementById('meeting-title').value = '';
      document.getElementById('meeting-attendees').value = '';
    });

    // Copy to clipboard
    document.getElementById('btn-copy').addEventListener('click', function() {
      if (!currentResult) return;
      const md = getMarkdown(currentResult);
      navigator.clipboard.writeText(md).then(function() {
        window.showToast && window.showToast('Summary copied to clipboard as Markdown!');
      }).catch(function() {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = md;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        window.showToast && window.showToast('Summary copied to clipboard!');
      });
    });

    // Export Markdown
    document.getElementById('btn-export-md').addEventListener('click', function() {
      if (!currentResult) return;
      const md = getMarkdown(currentResult);
      const blob = new Blob([md], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = (currentResult.title || 'meeting-summary').replace(/\s+/g, '-').toLowerCase() + '.md';
      a.click();
      URL.revokeObjectURL(url);
    });

    // Export PDF
    document.getElementById('btn-export-pdf').addEventListener('click', function() {
      if (!currentResult) return;
      exportPDF(currentResult);
    });

    // Save to localStorage
    document.getElementById('btn-save-local').addEventListener('click', function() {
      if (!currentResult) return;
      const saved = JSON.parse(localStorage.getItem('automatehub_meeting_notes') || '[]');
      saved.unshift({
        ...currentResult,
        savedAt: new Date().toISOString()
      });
      // Keep last 50
      if (saved.length > 50) saved.length = 50;
      localStorage.setItem('automatehub_meeting_notes', JSON.stringify(saved));
      window.showToast && window.showToast('Meeting summary saved to browser!');
    });
  });

  // Expose showToast globally
  window.showToast = window.showToast || function(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => toast.classList.remove('show'), 4000);
  };
})();
