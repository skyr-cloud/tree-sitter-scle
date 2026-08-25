/// <reference types="tree-sitter-cli/dsl" />

module.exports = grammar(require("../tree-sitter-scl/grammar"), {
    name: "scle",

    rules: {
        // `import* type? body?` — the reference grammar makes both the type
        // ascription and the body optional (a missing body is a diagnostic,
        // not a parse failure), so an imports-only or empty file still parses.
        source_file: ($) =>
            seq(
                repeat($.import_statement),
                optional(choice(
                    seq(
                        field("type", $._type_expression),
                        field("body", $._expression),
                    ),
                    field("type", $._type_expression),
                    field("body", $._expression),
                )),
            ),
    },
});
