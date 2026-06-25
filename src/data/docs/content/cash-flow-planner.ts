export const content = `
<div class="doc-lead">
  <p>CashFlowPlanner is a free cash flow forecasting tool built for small business owners, operations managers, and finance leads who need a clear view of liquidity without buying enterprise treasury software. It generates a rolling 13-week cash flow forecast broken down by week, so you can see exactly when your account drops below zero — weeks before it happens. CashFlowPlanner covers accounts receivable aging, payroll and rent scheduling, quarterly tax payment planning, and best/expected/worst-case scenario modeling. This documentation explains how to set up your opening position, configure inflows and outflows, build scenarios, and read your runway output. See the <a href="/blog/13-week-cash-flow-forecast-guide">complete guide to 13-week cash flow forecasting</a> for methodology background.</p>
</div>

<h2>Getting Started with CashFlowPlanner</h2>
<ol class="doc-steps">
  <li><strong>Enter your opening bank balance.</strong> Navigate to Setup and enter your current checking account balance as of today. This is the starting point for all projections. If you maintain multiple accounts, enter the combined operating balance — the forecast models total liquidity, not individual account movements.</li>
  <li><strong>Set up your inflows.</strong> Add recurring revenue sources under Inflows: customer payments, retainer deposits, subscription billings, and any one-time expected receipts. For each inflow, set the expected weekly amount and the typical payment lag from invoice to collection. CashFlowPlanner applies your collection rate to account for invoices that pay late or not at all.</li>
  <li><strong>Map your outflows.</strong> Add every recurring expense — payroll, rent, vendor invoices, loan payments, software subscriptions — under Outflows. Assign each item an exact payment date within the month. Rent on the first, payroll on the fifteenth and thirtieth, and estimated taxes on their quarterly due dates all get mapped here so the weekly projection reflects actual cash movement.</li>
  <li><strong>Configure your scenarios.</strong> Switch to the Scenarios tab and set the adjustment parameters for your best-case and worst-case versions. Typical inputs include collection rate variance (best: 95% collected, worst: 65% collected), revenue growth or contraction percentage, and one-time expense additions (equipment purchase, legal fees). The expected scenario uses your base inputs as entered.</li>
  <li><strong>Review your forecast output.</strong> The 13-week table shows beginning balance, inflows, outflows, and ending balance for each week. Weeks where ending balance drops below your minimum operating threshold are highlighted in amber or red. The runway calculator below the table shows how many months of operations your current cash balance supports at your current average weekly burn rate.</li>
</ol>

<h2>Core Features</h2>

<h3>Rolling 13-Week Cash Flow Forecast with Weekly Projections</h3>
<p>The 13-week window is the industry standard for operational cash management because it covers one full business quarter — long enough to catch seasonal dips and tax deadlines, short enough that your data stays accurate. CashFlowPlanner generates a week-by-week table with beginning balance, total inflows, total outflows, and ending balance for each of the 13 weeks.</p>
<p>The forecast rolls forward automatically. Each week, the prior week's ending balance becomes the new opening balance, and the inflow/outflow schedule shifts one week forward. You update actuals once per week, the model recalculates, and you always have a live 13-week view from today forward. This is how CFOs at larger companies run cash management — CashFlowPlanner brings the same discipline to small business teams without a CFO on staff.</p>

<h3>AR Aging Dashboard with Weighted Collection Rate Calculator</h3>
<p>Most cash flow forecasts fail because they assume 100% of invoices will be collected on time. The accounts receivable aging dashboard in CashFlowPlanner shows your outstanding invoices bucketed by age: 0-30 days, 31-60 days, 61-90 days, and 90+ days. Each bucket carries a default collection probability based on typical small business AR data.</p>
<p>The weighted collection rate calculator lets you override these defaults with your own historical rates. If your business collects 98% of invoices under 30 days but only 55% of invoices over 60 days, enter those numbers and the forecast adjusts inflow projections to reflect actual expected cash — not invoice face value. The difference between invoice value and weighted expected cash is your real receivables risk, shown as a line item so you can manage it actively.</p>

<h3>Best/Expected/Worst-Case Scenario Planning</h3>
<p>CashFlowPlanner maintains three simultaneous forecast versions: best case, expected case, and worst case. Each version shares the same base outflow structure but applies different assumptions to revenue timing, collection rates, and one-time costs. This lets you answer the question every business owner needs answered: "If my two biggest clients pay 45 days late and revenue drops 20%, do I make payroll in week 9?"</p>
<p>Scenario planning is not pessimism — it is preparation. Businesses that model worst-case scenarios in advance can arrange a line of credit, delay discretionary spending, or accelerate collections before the crunch arrives. Businesses that do not model scenarios discover the problem at the point of crisis, when options are fewest.</p>

<h3>Cash Runway Calculator Showing Months of Runway at Current Burn Rate</h3>
<p>The runway calculator takes your current cash balance and divides it by your average weekly net burn rate (total outflows minus recurring inflows) to produce a months-of-runway figure. For startups and early-stage businesses, this is the single most important number to track. For established businesses in seasonal downturns, it quantifies how long the slow period can run before intervention is required.</p>
<p>CashFlowPlanner updates the runway figure each time you update actuals, so the number always reflects current reality. If you have 4.2 months of runway today and your fundraising timeline is 5 months, the gap is visible immediately — not discovered during a board review three months from now.</p>

<h3>Payroll and Rent Scheduling with Exact Payment Date Mapping</h3>
<p>Payroll and rent are typically the two largest outflows for small businesses, and both are date-certain — they do not float. CashFlowPlanner maps each payroll run and rent payment to its exact calendar date, then places the cash outflow in the correct week of the forecast rather than spreading it evenly across the month. A business with bi-weekly payroll on the 1st and 15th and rent on the 1st will see week 1 of each month showing significantly higher outflows than other weeks — which is accurate, and critical for managing the balance at that point.</p>
<p>This date-level precision prevents the most common small business forecasting error: showing "average" monthly expenses spread evenly across weeks, then being surprised when the first week of the month is a cash-heavy week. Surprises in cash management are almost always bad.</p>

<h3>Quarterly Tax Payment Planner (Often Forgotten, Destroys Forecasts)</h3>
<p>Estimated quarterly tax payments — federal and state — are the most commonly omitted item in small business cash flow forecasts. They are not monthly, so they do not appear in routine accounting views. They are large, typically ranging from 25% to 35% of quarterly profit. And they are due on fixed dates: mid-April, mid-June, mid-September, and mid-January.</p>
<p>CashFlowPlanner pre-populates the four quarterly tax due dates in the forecast timeline and prompts you to enter your estimated payment amounts. If you are unsure of the amount, the tool provides a simple estimator based on prior-year tax liability divided by four. Once entered, tax payments appear as scheduled outflows in the appropriate weeks — weeks that will otherwise look like normal operating weeks until the payment clears.</p>

<h3>One-Click Scenario Toggle to Switch Between Forecast Versions</h3>
<p>Switching between best, expected, and worst-case scenarios requires one click on the scenario selector above the forecast table. The entire 13-week table, runway calculator, and AR aging summary update instantly to reflect the selected scenario's assumptions. There is no recalculation delay and no need to maintain separate spreadsheet tabs.</p>
<p>During a board presentation or lender meeting, you can toggle between scenarios in real time to illustrate the range of outcomes. During a weekly cash review, you can check whether actuals are tracking closer to best or worst case and adjust the expected scenario inputs accordingly. The one-click toggle makes scenario analysis a routine part of weekly review rather than a quarterly exercise.</p>

<h3>Export to CSV for Accounting Software Handoff</h3>
<p>The full 13-week forecast — including all three scenarios, the AR aging table, payroll and tax schedules, and the runway calculation — exports to CSV from the Export button in the top navigation. The CSV output is formatted for direct import into QuickBooks, Xero, FreshBooks, and Excel without column remapping.</p>
<p>Exporting weekly before your bookkeeper or accountant reviews actuals creates a clean record of what was forecast versus what actually occurred. The variance between forecast and actual, tracked over time, tells you whether your inflow assumptions are consistently optimistic (a collection rate problem) or whether outflows are unpredictably variable (a vendor cost control problem). Both are actionable findings.</p>

<h2>Common Use Cases</h2>

<h3>Professional Services Firm Managing Retainer and Project Revenue</h3>
<p>A marketing agency, law firm, or consulting practice typically runs two revenue streams simultaneously: predictable monthly retainers and unpredictable project billings. CashFlowPlanner handles both by letting you enter retainers as fixed recurring weekly inflows and project revenue as variable inflows with individual collection lag settings. The AR aging dashboard tracks which project invoices are aging past 30 days so you can prioritize collections before the forecast shows a shortfall. Quarterly tax payments are particularly important for professional services firms structured as S-corps or partnerships, where owners pay taxes on distributed profit rather than withholding.</p>

<h3>Product Business with Seasonal Demand</h3>
<p>A wholesale distributor, e-commerce brand, or manufacturer faces cash flow stress when inventory purchases for peak season happen weeks or months before the revenue arrives. Use CashFlowPlanner's worst-case scenario to model delayed revenue alongside peak inventory spend. Map supplier payment dates exactly — net-30 terms on a large inventory purchase land in a specific week, not averaged across the month. The 13-week window typically captures the full cycle from inventory purchase through peak sales collection, making the cash gap visible and quantifiable before it becomes a crisis.</p>

<h3>Startup Tracking Runway Against Fundraising Timeline</h3>
<p>Pre-revenue and early-revenue startups use CashFlowPlanner primarily for runway management. Enter current cash on hand, all operating expenses with their exact payment dates, and any expected revenue as conservative inflows. The runway calculator shows months of runway at current burn. Compare that number to your fundraising timeline — time to close a seed round typically runs 3-6 months from first meeting to wire. If runway is 5 months and fundraising takes 5 months, you have zero buffer. The forecast makes that math explicit so founders can either reduce burn, accelerate fundraising, or pursue bridge options before the window closes.</p>

<div class="doc-tip">
  <strong>Tip:</strong> Update CashFlowPlanner every Monday morning with actual balances from the prior week before reviewing the forward forecast. Teams that enter actuals weekly have forecasts that stay within 8-12% of actual outcomes. Teams that update monthly drift 30-40% by week 10 because compounding assumption errors go uncorrected for too long.
</div>

<h2>Frequently Asked Questions</h2>
<div class="article-faq">
  <div class="faq-item">
    <h3>How do I enter my opening bank balance?</h3>
    <p>Go to Setup and find the Opening Balance field at the top of the page. Enter your current combined operating account balance as of today's date. CashFlowPlanner uses this as the week 1 beginning balance and calculates all subsequent weeks from that starting point. If your actual balance changes before you enter it — for example, a large payment clears overnight — update the opening balance before running the forecast to ensure week 1 is accurate. You can update the opening balance at any time from the Setup tab without losing your inflow and outflow configurations.</p>
  </div>
  <div class="faq-item">
    <h3>What is the difference between the expected and worst-case scenarios?</h3>
    <p>The expected scenario uses your base inputs exactly as entered: your stated collection rate, your current revenue level, and your scheduled outflows. It represents your most likely outcome assuming nothing changes significantly. The worst-case scenario applies negative adjustments you define in the Scenarios tab — typically a lower collection rate (invoices pay slower or not at all), a revenue reduction percentage (a client pauses, a deal falls through), and optionally an additional one-time expense. The worst case is not a prediction; it is a stress test. Its purpose is to show you the minimum cash position you might face so you can prepare a response before the scenario actually unfolds.</p>
  </div>
  <div class="faq-item">
    <h3>How do I account for accounts receivable that might not all be collected?</h3>
    <p>Open the AR Aging dashboard and enter your outstanding invoices by age bucket: 0-30 days, 31-60 days, 61-90 days, and 90 or more days. Each bucket has a collection probability — you can use the defaults or override them with your own historical rates. CashFlowPlanner multiplies each bucket's total by its collection probability to calculate weighted expected cash. That weighted figure, not the invoice face value, flows into your inflow projections. This means your forecast reflects what you will likely collect, not what you have billed — a critical distinction for businesses with slow-paying clients or high invoice volumes.</p>
  </div>
  <div class="faq-item">
    <h3>How often should I update the forecast?</h3>
    <p>Update CashFlowPlanner once per week, ideally Monday morning. Enter the prior week's actual ending bank balance as the new week 1 opening balance, mark any inflows or outflows that did not occur as scheduled, and adjust forward assumptions if anything material changed (a client paused, a new contract signed, an unexpected expense occurred). The weekly update takes 10-15 minutes and keeps your forward 13 weeks accurate. Monthly updates allow forecast drift that compounds week over week — by week 8 of a monthly-updated forecast, the beginning balance error alone can be large enough to mask a real cash shortfall.</p>
  </div>
  <div class="faq-item">
    <h3>What is the cash runway calculator and how does it work?</h3>
    <p>The runway calculator appears below the 13-week forecast table. It divides your current cash balance by your average weekly net burn rate — total outflows minus recurring inflows, averaged across the 13-week period — and converts the result to months of runway. For example, if you have $120,000 in cash and your average weekly net burn is $10,000, your runway is approximately 12 weeks or 3 months. The calculator updates every time you change inputs or enter actuals. If your runway shows fewer months than your next major funding milestone or your business's natural revenue inflection point, that gap is your most important financial problem to address.</p>
  </div>
</div>
`;
