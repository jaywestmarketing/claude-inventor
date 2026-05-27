export const content = `
<div class="doc-lead">
  <p>
    PayrollCalc is a free payroll calculator and pay stub generator built for small business owners, bookkeepers, and HR managers who need accurate payroll tax calculations without committing to expensive payroll software subscriptions. Running payroll means navigating federal FICA taxes, FUTA, state income tax withholding across all 50 states, and a growing list of pre-tax deductions — each with its own rules and rates. A single miscalculation can trigger IRS penalties. PayrollCalc handles the math automatically: enter an employee's pay rate, deductions, and filing status, and receive a complete pay stub with gross pay, itemized deductions, net pay, and an employer tax summary in seconds. Whether you run biweekly payroll for five employees or process one-off pay stubs for contract hires, this free payroll tax calculator saves hours and eliminates costly errors.
  </p>
</div>

<h2>Getting Started with PayrollCalc</h2>
<ol class="doc-steps">
  <li><strong>Add an employee.</strong> Enter the employee's name, filing status (single or married), number of federal and state allowances or W-4 Step 2 elections, and the state where they work. PayrollCalc uses this information to determine the correct withholding tables.</li>
  <li><strong>Set the pay rate and frequency.</strong> Enter the employee's hourly rate or annual salary, select the pay frequency (weekly, biweekly, semimonthly, or monthly), and input regular hours. For hourly employees, add any overtime hours and PayrollCalc applies the correct 1.5x multiplier automatically.</li>
  <li><strong>Enter pre-tax deductions.</strong> Add any 401(k) contribution percentage or flat amount, HSA election, FSA contribution, health insurance premium, or other pre-tax benefit. PayrollCalc applies each deduction before calculating federal and state income tax withholding, accurately reducing taxable wages.</li>
  <li><strong>Run the calculation.</strong> Click Calculate Payroll to generate the full pay stub: gross pay, each pre-tax deduction, federal income tax withheld, Social Security, Medicare, state income tax, any post-tax deductions, and net pay. The employer share of FICA, FUTA, and SUTA is shown in a separate employer tax summary panel.</li>
  <li><strong>Export the pay stub.</strong> Download the pay stub as a PDF to give to the employee, or export the payroll run as CSV for import into QuickBooks, Xero, or your accounting software. Year-to-date totals update with each pay run for W-2 preparation.</li>
</ol>

<h2>Core Features</h2>

<h3>Federal and All 50-State Payroll Tax Calculation</h3>
<p>Payroll tax compliance requires applying the correct federal withholding tables from IRS Publication 15-T, calculating the employee and employer shares of FICA (Social Security at 6.2% each up to the wage base, Medicare at 1.45% each), and then layering in the correct state income tax withholding rules — which vary significantly between states in rate, bracket structure, allowance calculation, and supplemental wage treatment.</p>
<p>PayrollCalc maintains current withholding tables for all 50 states plus Washington DC. States with no income tax (Texas, Florida, Nevada, and others) are handled correctly with zero state withholding and no prompts for inapplicable fields. States with flat tax rates, graduated brackets, and allowance-based systems are all supported.</p>
<p>Tax tables are updated each calendar year to reflect rate and bracket changes. When you open PayrollCalc, the current year rates are active by default, so your calculations are always based on current law without requiring any manual updates on your part.</p>

<h3>Pay Stub Generator with Full Deduction Breakdown</h3>
<p>A legally compliant pay stub must show employees exactly how their gross pay translates to their net paycheck. PayrollCalc generates a formatted pay stub that displays gross earnings (base pay plus overtime), each pre-tax deduction with its label and amount, federal income tax withheld, Social Security withheld, Medicare withheld, state income tax withheld, any post-tax deductions, and net pay — all on a single clean document.</p>
<p>The PDF output is formatted for standard paper and includes the employer name and address, pay period dates, employee name and last four digits of SSN if entered, and the pay date. This document meets the pay stub requirements in all states that mandate written earnings statements.</p>
<p>You can customize the employer header with your business name, address, and EIN. The PDF is generated entirely in the browser — no data is sent to a server, which makes it suitable for sensitive employee information.</p>

<h3>Salary and Hourly Wage Support with Overtime Calculation</h3>
<p>PayrollCalc handles both salary and hourly employees in the same interface. For salaried employees, enter the annual salary and pay frequency; PayrollCalc divides correctly to the per-period gross, accounting for the different number of pay periods in biweekly versus semimonthly schedules.</p>
<p>For hourly employees, enter regular hours and any overtime hours separately. PayrollCalc applies the federal FLSA overtime rate of 1.5 times the regular rate for all hours over 40 in a workweek. For states with daily overtime requirements (California requires overtime after 8 hours in a day, for example), you can select the California overtime rule from the state settings to apply the correct calculation.</p>
<p>Double-time rules for California and other states with premium overtime rates are also supported. If you are unsure which rule applies, the state selector surfaces the relevant overtime rule alongside the state income tax selection.</p>

<h3>Pre-Tax Deduction Support</h3>
<p>Pre-tax deductions reduce an employee's taxable wages before federal and state income tax withholding is calculated, which is one of the most common sources of payroll errors when done manually. PayrollCalc supports the full range of pre-tax benefit deductions: traditional 401(k) and 403(b) contributions, Health Savings Account (HSA) contributions, Flexible Spending Account (FSA) elections, employer-sponsored health insurance premiums, dental and vision premiums, and commuter benefits.</p>
<p>Each deduction type is applied correctly: 401(k) contributions reduce federal and state taxable income but not FICA wages. HSA contributions via payroll deduction are exempt from FICA as well as income tax. PayrollCalc applies each rule without requiring you to know the details — just enter the deduction amount and select the type.</p>
<p>Post-tax deductions such as Roth 401(k) contributions, garnishments, and union dues can also be entered. These are applied after all tax withholding, reducing net pay without affecting taxable wages.</p>

<h3>Employer Payroll Tax Summary</h3>
<p>Employees see their half of payroll taxes withheld from their paychecks, but employers owe an equal matching amount on top. The employer payroll tax summary in PayrollCalc shows the employer's share of Social Security (6.2% of wages up to the FICA wage base), Medicare (1.45% of all wages, plus the additional 0.9% employer share is not applicable — that is an employee-only obligation), Federal Unemployment Tax (FUTA at 0.6% of the first $7,000 of wages after the standard state credit), and State Unemployment Tax (SUTA at the employer's experience-rated percentage on the applicable state wage base).</p>
<p>The employer summary is essential for small business owners who manage their own payroll tax deposits to the IRS and state agencies. It shows exactly how much needs to be remitted with each 941 deposit and state withholding payment.</p>

<h3>Multi-State Payroll for Employees Working Across State Lines</h3>
<p>Remote work and field employees increasingly trigger multi-state payroll obligations. An employee who lives in New Jersey but works partly in New York owes income tax to both states, with a credit mechanism to prevent full double taxation. PayrollCalc's multi-state module lets you allocate a pay period's wages between a home state and a work state, applying the correct withholding rules for each allocation.</p>
<p>This feature is particularly useful for construction contractors, sales representatives covering multiple territories, and businesses with employees who split time between a home office and a client site in another state. The multi-state calculation is not a substitute for a formal nexus analysis or CPA review for complex situations, but it handles the most common split-state scenarios correctly and automatically.</p>

<h3>Year-to-Date Totals for W-2 Preparation</h3>
<p>W-2 preparation requires accurate year-to-date totals for wages paid, federal income tax withheld, Social Security wages and tax, Medicare wages and tax, state wages, and state income tax withheld. PayrollCalc maintains a running YTD ledger for each employee as you process each pay period throughout the year.</p>
<p>The YTD summary view shows all boxes needed for W-2 filing in W-2 box numbering format, making it simple to transfer figures directly to your W-2 forms or payroll software at year end. You can also use the YTD view to verify mid-year that withholding is on track — catching underpayment issues before January rather than discovering them at W-2 time.</p>

<h3>Export to CSV and PDF for Payroll Records</h3>
<p>Every pay run in PayrollCalc can be exported in two formats. The PDF export produces a formatted pay stub suitable for distribution to employees or storage in employee files. The CSV export produces a row-per-employee payroll register with all gross pay, deduction, tax, and net pay columns that maps directly to import templates in QuickBooks Online, QuickBooks Desktop, Xero, Gusto, and most general ledger systems.</p>
<p>You can export individual pay stubs or a full payroll register for an entire pay period across all employees. Payroll registers are dated and labeled with the pay period and pay date, making it straightforward to maintain organized payroll records for the required three-to-four year IRS retention period.</p>

<h2>Common Use Cases</h2>

<h3>Small Business Running Biweekly Payroll</h3>
<p>A retail shop or restaurant with five to fifteen hourly employees typically needs to process payroll every two weeks, calculate overtime for employees who worked more than 40 hours, account for varying schedules, and handle occasional mid-year changes like an employee updating their W-4 after a life event. PayrollCalc processes each employee in two to three minutes, handles overtime automatically, and re-runs correctly updated withholding the moment you change a W-4 setting. The employer tax summary tells you exactly what to deposit with the IRS and your state agency each period, eliminating the guesswork that leads to late deposit penalties.</p>

<h3>Contractor Comparing Salary vs. Hourly Offers</h3>
<p>An independent contractor or job seeker evaluating two competing offers — one salary position at $85,000 annually and one contract role at $55 per hour — needs to understand the actual take-home difference after taxes, accounting for self-employment tax on the contract income. PayrollCalc lets you model both scenarios side by side in minutes, including the impact of pre-tax deductions available in the salaried role (401k, health insurance) versus the gross income of the contract role where those benefits must be purchased out of pocket. This gives a clear apples-to-apples comparison of real net income rather than gross figures.</p>

<h3>Bookkeeper Verifying Payroll Before Submission</h3>
<p>Bookkeepers who manage payroll for multiple small business clients need a fast way to verify that the numbers produced by a client's payroll provider or manual spreadsheet are correct before approving the payroll run. PayrollCalc serves as an independent calculation layer: enter the gross pay, deductions, and withholding elections, run the calculation, and compare the result against the payroll provider's figures. Discrepancies that would otherwise go undetected — a stale tax table, a misconfigured deduction type, an incorrect state rate — surface immediately before funds are disbursed.</p>

<div class="doc-tip"><strong>Tip:</strong> Run a mid-year YTD review in June or July for each employee to verify that federal income tax withholding is on track for the full year. Employees who changed their W-4 elections, received a mid-year raise, or have uneven income across pay periods are the most likely to face an underpayment surprise in January. Catching a shortfall in July gives the employee six months to adjust withholding rather than writing a check at tax time.</div>

<h2>Frequently Asked Questions</h2>
<div class="article-faq">
  <div class="faq-item">
    <h3>Which states does PayrollCalc support for state income tax?</h3>
    <p>PayrollCalc supports income tax withholding calculations for all 50 states and Washington DC. States with no individual income tax — Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming — are handled correctly with zero state income tax withholding and no inapplicable fields displayed. States with flat tax rates, graduated bracket systems, and allowance-based withholding tables are all supported. Tax tables are updated annually. If your state changed its withholding tables or rates during the current year, the latest published rates are already reflected.</p>
  </div>
  <div class="faq-item">
    <h3>How does overtime calculation work?</h3>
    <p>For hourly employees, enter regular hours and overtime hours in the separate input fields. PayrollCalc applies the federal FLSA standard of 1.5 times the regular rate for all hours over 40 per workweek by default. If the employee works in California, you can select the California overtime rule in the state settings, which applies overtime after 8 hours in a single day as well as after 40 hours in a week, plus double time after 12 hours in a day and for all hours on the seventh consecutive day of work. The overtime pay is added to regular pay to produce gross wages before any deductions or tax calculations are applied.</p>
  </div>
  <div class="faq-item">
    <h3>How do pre-tax deductions like 401k reduce taxable income?</h3>
    <p>Traditional 401(k) contributions are deducted from gross wages before federal and state income tax withholding is calculated. This means a $500 biweekly 401(k) contribution reduces the wages subject to income tax withholding by $500, lowering the actual tax withheld each period. However, 401(k) contributions do not reduce FICA wages — Social Security and Medicare taxes are still calculated on the full gross pay. PayrollCalc applies this distinction automatically when you enter a 401(k) amount and select its type. HSA contributions via payroll deduction are exempt from both income tax and FICA, producing a larger reduction in both withholding amounts. The pay stub shows each deduction and the resulting taxable wage figure clearly.</p>
  </div>
  <div class="faq-item">
    <h3>What is the employer payroll tax summary and who needs it?</h3>
    <p>The employer payroll tax summary shows the taxes your business owes on top of the employee's gross pay — separate from anything withheld from the employee's paycheck. It includes the employer's matching share of Social Security (6.2%), employer Medicare (1.45%), Federal Unemployment Tax (FUTA, typically 0.6% on the first $7,000 of wages per employee after state credit), and State Unemployment Tax (SUTA at your state's experience rate). This summary is essential for any business owner managing their own payroll tax deposits. IRS Form 941 is filed quarterly and requires these figures. The employer summary from PayrollCalc maps directly to the 941 line items, making deposit calculations straightforward.</p>
  </div>
  <div class="faq-item">
    <h3>How do I use PayrollCalc to prepare for W-2s?</h3>
    <p>Each time you process a pay period in PayrollCalc, the year-to-date ledger for each employee updates automatically. By the end of December, the YTD summary contains all the figures needed for W-2 preparation: Box 1 (federal wages), Box 2 (federal income tax withheld), Box 3 (Social Security wages), Box 4 (Social Security tax withheld), Box 5 (Medicare wages), Box 6 (Medicare tax withheld), Box 16 (state wages), and Box 17 (state income tax withheld). Export the YTD summary for each employee as a CSV and use it to populate W-2s directly in your payroll or accounting software, or provide the file to your CPA or payroll service for final W-2 filing.</p>
  </div>
</div>
`;
