export const dataScientistData = {
  id: 'datascientist',
  title: 'Data Scientist',
  description: 'Master data analysis and predictive systems: write SQL queries, analyze datasets using Python Pandas, build machine learning models, and create visualizations.',
  category: 'role',
  icon: 'LineChart',
  stats: {
    duration: '10-12 months',
    difficulty: 'Advanced',
    topics: 11
  },
  phases: [
    {
      id: 'ds-phase-1',
      title: '1. Quantitative Foundations',
      description: 'Master mathematical concepts and database query engines.',
      nodes: [
        {
          id: 'stats-math',
          label: 'Probability & Statistics',
          importance: 'critical',
          description: 'Learn foundational math: probability rules, distributions (normal, binomial), hypothesis testing, and p-values.',
          objectives: [
            'Explain mean, median, variance, and standard deviation.',
            'Perform statistical hypothesis testing (t-tests, ANOVA).',
            'Understand probability distributions and correlation coefficients.'
          ],
          bestPractices: [
            'Always inspect dataset variances before training models.',
            'Maintain a clear audit trail of statistical assumptions.'
          ],
          mistakes: [
            'Assuming correlation implies causation without thorough analysis.'
          ],
          tips: 'Use Python SciPy library to calculate p-values and verify distributions.',
          project: {
            name: 'A/B Test Outcome Analyzer',
            desc: 'Analyze user conversion logs from an online portal, verify p-values, and write a summary.'
          },
          interview: [
            {
              q: 'What is a p-value?',
              a: 'A p-value measures the probability of obtaining test results at least as extreme as the observed results, assuming the null hypothesis is true. A lower p-value (typically < 0.05) indicates strong evidence to reject the null hypothesis.'
            }
          ],
          resources: [
            { title: 'Khan Academy Statistics (Link)', url: 'https://www.khanacademy.org/math/statistics-probability', type: 'link' }
          ]
        }
      ]
    },
    {
      id: 'ds-phase-2',
      title: '2. Python Data Analysis',
      description: 'Load datasets, clean columns, and create analytical plots.',
      nodes: [
        {
          id: 'pandas-numpy',
          label: 'Data Analysis (Pandas & NumPy)',
          importance: 'critical',
          description: 'Master Python libraries: loading files, slicing columns, filtering rows, handling missing values, and plotting charts.',
          objectives: [
            'Load CSV/JSON data into Pandas DataFrames.',
            'Clean data, handling missing cells or duplicate rows.',
            'Transform data columns and merge datasets.'
          ],
          bestPractices: [
            'Use vectorized Pandas operations instead of writing raw loops, accelerating execution times.',
            'Document data cleaning steps.'
          ],
          mistakes: [
            'Ignoring NaN (null) values, which causes runtime errors during model training.'
          ],
          tips: 'Use Jupyter Notebooks to prototype data transformations interactively.',
          project: {
            name: 'Housing Market Profiler',
            desc: 'Load a real estate dataset, clean missing fields, calculate average prices by zip code, and plot distributions.'
          },
          interview: [
            {
              q: 'What is a DataFrame in Pandas?',
              a: 'A DataFrame is a two-dimensional, size-mutable, and tabular data structure with labeled axes (rows and columns), similar to an Excel sheet.'
            }
          ],
          dependsOn: ['stats-math'],
          resources: [
            { title: 'Pandas Official Tutorial (Link)', url: 'https://pandas.pydata.org/docs/user_guide/10min.html', type: 'link' }
          ]
        }
      ]
    }
  ]
};
