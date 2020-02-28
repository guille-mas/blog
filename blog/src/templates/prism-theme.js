// Custom Prism Theme
var colors = {
  char: "#41b3a449",
  comment: "#888",
  keyword: "#c38d9e",
  primitive: "#ccc",
  string: "#69cfca",
  variable: "#c38d9e",
  boolean: "#e8a87c",
  punctuation: "#41b3a3",
  tag: "#c38d9e",
  function: "#e8a87c",
  className: "#e27d60",
  method: "#41b3a3",
  operator: "#c38d9e"
};
var theme = {
  plain: {
    backgroundColor: "#333",
    color: "#ffffff"
  },
  styles: [{
    types: ["attr-name"],
    style: {
      color: colors.keyword
    }
  }, {
    types: ["attr-value"],
    style: {
      color: colors.string
    }
  }, {
    types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
    style: {
      color: colors.comment
    }
  }, {
    types: ["property", "number", "function-name", "constant", "symbol", "deleted"],
    style: {
      color: colors.primitive
    }
  }, {
    types: ["boolean"],
    style: {
      color: colors.boolean
    }
  }, {
    types: ["tag"],
    style: {
      color: colors.tag
    }
  }, {
    types: ["string"],
    style: {
      color: colors.string
    }
  }, {
    types: ["punctuation"],
    style: {
      color: colors.string
    }
  }, {
    types: ["selector", "char", "builtin", "inserted"],
    style: {
      color: colors.char
    }
  }, {
    types: ["function"],
    style: {
      color: colors.function
    }
  }, {
    types: ["operator", "entity", "url", "variable"],
    style: {
      color: colors.variable
    }
  }, {
    types: ["keyword"],
    style: {
      color: colors.keyword
    }
  }, {
    types: ["at-rule", "class-name"],
    style: {
      color: colors.className
    }
  }, {
    types: ["important"],
    style: {
      fontWeight: "400"
    }
  }, {
    types: ["bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }]
};

export default theme;
