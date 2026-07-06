# ratchet-demo

Live demo for the **[*-ratchet family](https://github.com/motchalini-llc)** — three zero-config PR gates that catch a CI made green by cheating.

👉 **See [PR #1](https://github.com/motchalini-llc/ratchet-demo/pull/1)** — a single "quick fix" commit that silences the type checker (`as any`), skips a test (`it.skip` / `it.only`) and mutes the linter (`eslint-disable`). All three gates go red, with inline annotations on the offending lines.

[![Demo: one 'quick fix' PR trips all three ratchet gates](docs/ratchet-demo.gif)](https://github.com/motchalini-llc/ratchet-demo/pull/1)

| Gate | Catches |
|---|---|
| [Type Ratchet](https://github.com/marketplace/actions/type-ratchet) | `any` / `as any` / `@ts-ignore` / `# type: ignore` |
| [Test Ratchet](https://github.com/marketplace/actions/test-ratchet) | `it.skip` / `.only` / `@pytest.mark.skip` |
| [Suppress Ratchet](https://github.com/marketplace/actions/suppress-ratchet) | `eslint-disable` / `biome-ignore` / `# noqa` |

This repository is intentionally tiny: the gates are grep-based and need no dependencies, no config, no build.
