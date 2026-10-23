# Fluxo End-to-End · Eletra

Fluxo logístico animado Brasil ⇄ China, fases T0 a T5, com filtros por segmento, finalidade, status, group, direct, current status e data de necessidade.

**Demonstração:** https://comexeletra.github.io/DataViz_end_to_end/
Versão em chinês: https://comexeletra.github.io/DataViz_end_to_end/?lang=zh

## Arquivos

- `index.html` — página pronta (um único arquivo, sem dependências). É o que o GitHub Pages publica.
- `src/FluxoE2E.jsx` + `src/FluxoE2E.css` + `src/eletra-logo.png` — componente React para usar em outra plataforma.

## Prazos

Os prazos de cada segmento ficam no objeto `SEGS`, no topo de `src/FluxoE2E.jsx`.
Depois de alterar, gere a página de novo:

```bash
npm install
npm run build   # atualiza o index.html
```
