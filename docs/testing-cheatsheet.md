# Testing (Jest)

Quick commands:

- npm test
- npm run test:watch
- npm run test:coverage

CI: npm run test:ci
Watch mode: npm run test:watch
Coverage: npm run test:coverage (thresholds 80/70/50/80)
Open report: coverage\\lcov-report\\index.html

Debug: In VS Code, use the **Debug Jest Tests** launch to set breakpoints in tests.

Common assertions:

- expect(x).toBe(y)
- expect(obj).toEqual({ a:1 })
- expect(arr).toContain(item)
- await expect(promise).resolves.toBe(value)
- await expect(promise).rejects.toThrow()

supertest pattern:
const res = await request(app).get('/api/health');
expect(res.status).toBe(200);
expect(res.body).toEqual({ ok: true });

> \_Automated blunt-force pass
