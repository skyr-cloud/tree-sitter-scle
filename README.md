# tree-sitter-scle

Tree-sitter grammar for **SCLE** (SCL Expression), a value format based on the SCL language. An SCLE file (`.scle`) contains an optional sequence of imports, an optional type expression declaring the expected type, and a body expression — each optional at the grammar level, as in the reference parser (a missing body is a diagnostic there, not a parse failure). This grammar inherits all rules from [tree-sitter-scl](https://github.com/skyr-cloud/tree-sitter-scl) and overrides only the root `source_file` rule.

The committed `src/parser.c` is what editors and bindings consume, and it works
standalone. Regenerating it (`tree-sitter generate`) requires the parent
`tree-sitter-scl` grammar as a sibling checkout, which is how the grammars are
laid out in the Skyr monorepo where they are developed — regeneration happens
there, not in this mirror.

## Read-only mirror

This repository is a read-only mirror. The grammar is developed in the Skyr
monorepo and published here automatically; changes pushed directly to this
mirror will be overwritten. Please file issues and open pull requests against
the monorepo instead.

## License

MIT — see [LICENSE](LICENSE).
