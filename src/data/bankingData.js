export const bankingData = {
  id: 'banking',
  title: 'Banking Exams',
  description: 'Structured exam preparation route for Nepal Rastra Bank (NRB), Rastriya Banijya Bank (RBB), Agricultural Development Bank (ADBL), and Nepal Bank Limited (NBL).',
  category: 'sarkari',
  icon: 'Landmark',
  badge: 'Sarkari / Lok Sewa',
  tagline: 'Nepal Rastra Bank & A-class banks',
  stats: {
    duration: '6-9 months',
    difficulty: 'Intermediate',
    topics: 8
  },
  phases: [
    {
      id: 'bk-phase-1',
      title: '1. Financial & Banking Fundamentals',
      description: 'Master central banking, monetary policies, accounting principles, and financial ratios.',
      nodes: [
        {
          id: 'nrb-act',
          label: 'Banking Laws & NRB Directives',
          importance: 'critical',
          description: 'Study Nepal Rastra Bank Act 2058, BAFIA Act 2073, Anti-Money Laundering (AML) Act, and Unified Directives.',
          objectives: [
            'Understand NRB functions, monetary policy instruments, and bank licensing classifications (A, B, C, D class).',
            'Master Basel III capital adequacy frameworks and non-performing loan (NPL) regulations.',
            'Memorize statutory liquidity ratios (SLR) and cash reserve ratios (CRR).'
          ],
          bestPractices: [
            'Refer directly to the latest NRB Annual Reports and Unified Directives.',
            'Stay updated with monthly banking system liquidity updates.'
          ],
          mistakes: [
            'Confusing commercial bank functions with central bank supervisory directives.'
          ],
          tips: 'Memorize key section numbers of NRB Act and BAFIA for extra marks in subjective exams.',
          project: {
            name: 'Bank Regulation Matrix',
            desc: 'Create a comparative breakdown of A, B, C, and D class financial institutions under BAFIA 2073.'
          },
          interview: [
            {
              q: 'What is the role of Nepal Rastra Bank as the central bank?',
              a: 'NRB formulates monetary and foreign exchange policies, regulates and supervises banks, maintains financial stability, acts as banker to the government, and issues legal currency.'
            }
          ],
          resources: [
            { title: 'Nepal Rastra Bank Official Portal', url: 'https://nrb.org.np', type: 'link' }
          ]
        },
        {
          id: 'accounting-finance',
          label: 'Financial Accounting & Math',
          importance: 'critical',
          description: 'Master double-entry bookkeeping, balance sheet analysis, profit & loss statements, cash flow, and financial math.',
          objectives: [
            'Prepare trial balances, income statements, and balance sheets under NFRS standards.',
            'Calculate financial ratios: liquidity, profitability, leverage, and asset turnover.',
            'Solve interest rate calculations, present value, and annuity problems.'
          ],
          bestPractices: [
            'Practice journal entries for complex transaction scenarios.',
            'Always show clear calculation steps in math paper answers.'
          ],
          mistakes: [
            'Neglecting Nepal Financial Reporting Standards (NFRS) terminology.'
          ],
          tips: 'Use ratio analysis formula cheat-sheets during revision.',
          project: {
            name: 'Financial Statement Analyzer',
            desc: 'Analyze annual financial reports of major A-class commercial banks and calculate NPL & Capital Adequacy ratios.'
          },
          interview: [
            {
              q: 'What is Non-Performing Loan (NPL)?',
              a: 'An NPL is a loan where the borrower has defaulted and not made scheduled payments for principal or interest for a specified period (typically 90+ days).'
            }
          ],
          dependsOn: ['nrb-act'],
          resources: [
            { title: 'NRB Financial Reports', url: 'https://nrb.org.np', type: 'link' }
          ]
        }
      ]
    }
  ]
};
