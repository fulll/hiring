# Decisions

Architecture and tooling decisions in lightweight ADR form, applied to both
exercises:
1. FizzBuzz (`Algo`)
2. Fleet (`Backend`)

Each entry records the context, the decision, and the reasoning so the
trade-offs can be discussed during the interview.

Guiding principles:
- keep each exercise self-contained
- hold both to the same quality bar
- add no over-engineering beyond what the problem needs

---

## 1. One Composer project per exercise

**Context:** The two exercises are evaluated independently. A reviewer may open
either one on its own.

**Decision:** Each exercise owns its `composer.json`, its autoload and its
tooling configuration. No root-level `composer.json` ties them together.

**Rationale:**
- A shared root project would couple two deliverables that have nothing to do
  with each other, and would force a single autoload mixing both domains.
- Per-exercise projects stay independently installable and reviewable.
- The cost is a small amount of duplicated config (a few lines each), which is
  honest: these really are two separate projects.

---

## 2. Same quality bar on both exercises, including FizzBuzz

**Context:** Only the Fleet exercise obviously calls for Composer. The question
was whether wiring quality tooling into FizzBuzz amounts to over-engineering.

**Decision:** Both exercises use the same 3 tools: PHPUnit, PHPStan (level 8)
and PHP-CS-Fixer (PSR-12). FizzBuzz declares **dev dependencies only**.
It ships zero production dependencies.

**Rationale:**
- "Good practices" include tests, static analysis and unit testing.
- Over-engineering would be disproportionate design, not standard tools.
- Limitation to only 3 tools. No mutation testing, no custom build scripts,
  no pre-commit scaffolding.

---

## 3. A single shared Docker image, not one per exercise

**Context:** Both exercises run on the same PHP 8.5 runtime with no conflicting
extensions.
Exercise 1 needs no infrastructure, but exercise 2 will need PostgreSQL.

**Decision:** One root `docker-compose.yml` with a single `app` service
(`php:8.5-cli` + Composer) mounting the whole repository.
Quality tools are run per exercise via the working directory:
```
docker compose exec -w /app/Algo app composer quality
```
The PostgreSQL service will be added only when exercise 2 introduces persistence.

**Rationale:**
- Two Dockerfiles for the same runtime would be pure duplication with no benefit.
  Per-project images would only be justified by diverging runtimes, which is not
  the case here.
- We are not building a container *for* exercise 1. We are providing one PHP dev
  environment for the repository, used to run quality checks of both exercises.
- Deferring PostgreSQL keeps the image minimal until persistence is actually
  required.
