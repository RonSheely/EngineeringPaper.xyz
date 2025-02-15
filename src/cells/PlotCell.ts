import { BaseCell, type DatabasePlotCell } from "./BaseCell";
import MathCell from "./MathCell";
import { MathField } from "./MathField";


export default class PlotCell extends BaseCell {
  mathFields: MathField[];
  logX: boolean;  
  logY: boolean;

  constructor (arg?: DatabasePlotCell | MathCell) {
    if (arg === undefined) {
      super("plot");
      this.mathFields = [new MathField("", "plot"), ];
      this.logX = false;
      this.logY = false;
    } else if (arg instanceof MathCell) {
      super("plot", arg.id);
      this.mathFields = [new MathField(arg.mathField.latex, "plot"), ];
      this.logX = false;
      this.logY = false;
    } else {
      // from database
      super("plot", arg.id);
      this.mathFields = arg.latexs.map((latex) => new MathField(latex, "plot"));
      this.logX = Boolean(arg.logX);
      this.logY = Boolean(arg.logY);

      // In older versions, database will have included an empty math field at end of list
      // Remove it if it exists, don't remove if it is the first entry
      if (this.mathFields.length > 1 && this.mathFields.slice(-1)[0].latex === "" ) {
        this.mathFields = this.mathFields.slice(0,-1);
      }
    }
  } 

  serialize(): DatabasePlotCell {
    return {
      type: "plot",
      id: this.id,
      latexs: this.mathFields.map((item) => item.latex),
      logX: this.logX,
      logY: this.logY
    };
  }

  addRow() {
    this.mathFields = [...this.mathFields, new MathField('', "plot")];
  }


  deleteRow(rowIndex: number) {
    this.mathFields = [...this.mathFields.slice(0,rowIndex),
                       ...this.mathFields.slice(rowIndex+1)];
  }

}