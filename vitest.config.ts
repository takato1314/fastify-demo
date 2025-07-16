import { defineConfig, configDefaults } from 'vitest/config';

const baseExclude = [
  ...configDefaults.exclude,
  'src/app.ts',
  'src/server.ts',
  '**/*.bench.ts',
  'packages/template/*',
  'reports/**',
];

export default defineConfig({
  test: {
    dir: './test',
    include: ['./tests/**/*.spec.ts'],
    exclude: [...baseExclude],
    reporters: ['verbose', 'json', 'html'],
    outputFile: {
      json: './reports/test-results/report.json',
      html: './reports/test-results/report.html',
    },
    benchmark: {
      include: ['test/benchmark/**/*.bench.ts'],
      exclude: [...baseExclude],
      reporters: ['verbose'],
      outputJson: './reports/benchmark/report.json',
    },
    coverage: {
      all: true,
      enabled: true,
      clean: true,
      cleanOnRerun: true,
      exclude: [...baseExclude, ...configDefaults.coverage.exclude!],
      reporter: [...configDefaults.coverage.reporter!],
      reportsDirectory: './reports/coverage',
      reportOnFailure: true,
      thresholds: {
        functions: 90,
      },
    },
    typecheck: {
      enabled: true,
      include: [...configDefaults.typecheck.include],
      exclude: [...configDefaults.typecheck.exclude],
      tsconfig: './tsconfig.json',
    },
    slowTestThreshold: 250,
  },
});
