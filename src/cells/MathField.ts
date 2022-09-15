import type { SvelteComponent } from "svelte";

import antlr4 from "antlr4";
import LatexLexer from "../parser/LatexLexer.js";
import LatexParser from "../parser/LatexParser.js";
import { LatexToSympy, LatexErrorListener } from "../parser/LatexToSympy.js";

export type Statement = {
  type: "query" | "assignment" | "equality",
  id: number,
  isRange: boolean,
  units: string,
  units_valid: boolean,
  unitsLatex: string
  input_units: string
}

type FieldTypes = "math" | "plot" | "parameter" | "units" | "expression" | "number" | 
                  "condition" | "piecewise" | "expression_no_blank";

export class MathField {
  latex: string;
  type: FieldTypes;
  id: number;
  static nextId = 0; 
  parsingError = true;
  parsingErrorMessage = "Invalid Syntax";
  statement: Statement | null = null;
  element: SvelteComponent | null = null;
  pendingNewLatex = false;
  newLatex = [];

  constructor (latex = "", type: FieldTypes ="math") {
    this.latex = latex;
    this.type = type;
    this.id = MathField.nextId++;
  };


  setPendingLatex(): void {
    if (this.pendingNewLatex) {
      this.element.setLatex(this.newLatex);
      this.pendingNewLatex = false;
    }
  }


  parseLatex(latex: string, subId = 0) {
    this.latex = latex;

    // A blank cell needs to be handled differently to provide a useful error message
    if (latex.replaceAll('\\','').trim() === "") {
      this.pendingNewLatex = false;
      this.parsingError = false;
      this.parsingErrorMessage = "";
      this.statement = null;
      this.newLatex = [];

      if (this.type === "math") {
        this.parsingError = true;
        this.parsingErrorMessage = "This field must contain an assignment, query, or equality statement type, delete unneeded cells using the trash can on the right.";
      } else if (this.type === "plot") {
        this.parsingError = true;
        this.parsingErrorMessage = "This field must contain a valid plot range query. To remove this plot field, delete the plot fields below this one.";
      } else if (this.type === "parameter") {
        this.parsingError = true;
        this.parsingErrorMessage = "A variable name is required in this field.";
      } else if (this.type === "expression_no_blank") {
        this.parsingError = true;
        this.parsingErrorMessage = "This field may only contain a valid expression or number without an equals sign.";
      } else if (this.type === "condition") {
        this.parsingError = true;
        this.parsingErrorMessage = "This field may only contain a condition statement such as x>1. The expression corresponding to the first satisfied condition will be used.";
      }

      return;
    }

    this.pendingNewLatex = false;
  
    const input = new antlr4.InputStream(latex);
    const lexer = new LatexLexer(input);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new LatexParser(tokens);
  
    parser.removeErrorListeners(); // remove ConsoleErrorListener
    parser.addErrorListener(new LatexErrorListener());
  
    parser.buildParseTrees = true;
  
    const tree = parser.statement();
  
    let parsingError = parser._listeners[0].count > 0;
  
    if (!parsingError) {
      this.parsingError = false;
      this.parsingErrorMessage = '';
  
      const visitor = new LatexToSympy(latex , this.id, subId, this.type);
  
      this.statement = visitor.visit(tree);
  
      if (visitor.parsingError) {
        this.parsingError = true;
        this.parsingErrorMessage = visitor.parsingErrorMessage;
      }
  
      if (visitor.insertions.length > 0) {
        visitor.insertions.sort((a,b) => a.location - b.location);
        const segments = [];
        let previousInsertLocation = 0;
        visitor.insertions.forEach( (insert) => {
          segments.push(latex.slice(previousInsertLocation, insert.location) + insert.text);
          previousInsertLocation = insert.location;
        });
        segments.push(latex.slice(previousInsertLocation));
        const newLatex = segments.reduce( (accum, current) => accum+current, '');
        this.pendingNewLatex = true;
        this.newLatex = newLatex;
      }
    } else {
      this.statement = null;
      this.parsingError = true;
      this.parsingErrorMessage = "Invalid Syntax";
    }
  }; 
}