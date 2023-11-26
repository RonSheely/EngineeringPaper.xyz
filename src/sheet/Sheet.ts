import type { DatabaseCell } from "../cells/BaseCell"
import type { Result, FiniteImagResult, PlotResult, 
              MatrixResult, SystemResult } from "../resultTypes";

export type Sheet = {
  config?: Config; // early sheets did not have a config property
  cells: DatabaseCell[];
  title: string;
  results: (Result | FiniteImagResult | MatrixResult | PlotResult[])[];
  system_results: (SystemResult)[];
  nextId: number;
  sheetId: string;
  insertedSheets?: InsertedSheet[]; // early sheets did not have an insertedSheets property  
};

export type InsertedSheet = {
  title: string;
  url: string;
  insertion: Date;
};

export type Config = {
  mathCellConfig: MathCellConfig;
};

type Notation = "auto" | "fixed" | "exponential" | "engineering";

export type MathCellConfig = {
  symbolicOutput: boolean;
  formatOptions: FormatOptions;
};

type FormatOptions = {
  notation: Notation;
  precision: number;
  lowerExp: number;
  upperExp: number;
};

export function getDefaultConfig(): Config {
  return {
    mathCellConfig: getDefaultMathCellConfig(),
  };
}

function getDefaultMathCellConfig(): MathCellConfig {
  return {
    symbolicOutput: false,
    formatOptions: {
      notation: "auto",
      precision: 15,
      lowerExp: -3,
      upperExp: 5,
    }
  };
}

export const defaultMathConfig = getDefaultMathCellConfig();

export const mathConfigLimits = {
  precisionUpper: 64,
  lowerExpLower: -12,
  lowerExpUpper: -2,
  upperExpLower: 2,
  upperExpUpper: 12
};

export function isDefaultMathConfig(config: MathCellConfig): boolean {
  return (
    config.symbolicOutput === defaultMathConfig.symbolicOutput &&
    config.formatOptions.notation === defaultMathConfig.formatOptions.notation &&
    config.formatOptions.precision === defaultMathConfig.formatOptions.precision &&
    config.formatOptions.lowerExp === defaultMathConfig.formatOptions.lowerExp &&
    config.formatOptions.upperExp === defaultMathConfig.formatOptions.upperExp
  )
}

export function isDefaultConfig(config: Config): boolean {
  return isDefaultMathConfig(config.mathCellConfig);
}

export function copyMathConfig(input: MathCellConfig): MathCellConfig {
  if (input === null) {
    return null;
  }

  return {
    symbolicOutput: input.symbolicOutput,
    formatOptions: {...input.formatOptions}
  };
}

export function getSafeMathConfig(config: MathCellConfig): MathCellConfig {
  const safeConfig = copyMathConfig(config);

  // clamp precision
  if (config.formatOptions.precision === null) {
    safeConfig.formatOptions.precision = defaultMathConfig.formatOptions.precision;
  } else if(config.formatOptions.precision > mathConfigLimits.precisionUpper) {
    safeConfig.formatOptions.precision = mathConfigLimits.precisionUpper;
  } else if(config.formatOptions.precision < (config.formatOptions.notation === "fixed" ? 0 : 1)) {
    safeConfig.formatOptions.precision = config.formatOptions.notation === "fixed" ? 0 : 1;
  }

  // clamp lowerExp
  if (config.formatOptions.lowerExp === null) {
    safeConfig.formatOptions.lowerExp = defaultMathConfig.formatOptions.lowerExp;
  } else if(config.formatOptions.lowerExp > mathConfigLimits.lowerExpUpper) {
    safeConfig.formatOptions.lowerExp = mathConfigLimits.lowerExpUpper;
  } else if(config.formatOptions.lowerExp < mathConfigLimits.lowerExpLower) {
    safeConfig.formatOptions.lowerExp = mathConfigLimits.lowerExpLower;
  }

  // clamp upperExp
  if (config.formatOptions.upperExp === null) {
    safeConfig.formatOptions.upperExp = defaultMathConfig.formatOptions.upperExp;
  } else if(config.formatOptions.upperExp > mathConfigLimits.upperExpUpper) {
    safeConfig.formatOptions.upperExp = mathConfigLimits.upperExpUpper;
  } else if(config.formatOptions.upperExp < mathConfigLimits.upperExpLower) {
    safeConfig.formatOptions.upperExp = mathConfigLimits.upperExpLower;
  }

  return safeConfig;
}

export type CustomBaseUnits = {
  mass: string;
  length: string;
  time: string;
  current: string;
  temperature: string;
  luminous_intensity: string;
  amount_of_substance: string;
  force: string;
  area: string;
  volume: string;
  energy: string;
  power: string;
  pressure: string;
  charge: string;
  capacitance: string;
  electric_potential: string;
  resistance: string;
  inductance: string;
  conductance: string;
  magnetic_flux: string;
  magnetic_flux_density: string;
  angle: string;
  information: string;
}

// the first choice in each list of choices will be used as the default
export const baseUnitChoices: {name: string, label: string, choices: string[]}[] = [
  {name: 'mass', label: 'Mass', choices: ['kg', 'g', 'mg', 'tonne', 'lbm', 'ton', 'oz'] },
  {name: 'length', label: 'Length', choices: ['m', 'mm', 'cm', 'km', 'um', 'nm', 'angstrom', 'in', 'feet', 'yard', 'mile']},
  {name: 'time', label: 'Time', choices: ['s', 'ms', 'us', 'ns', 'min', 'hour', 'day', 'week', 'month', 'year']},
  {name: 'current', label: 'Electric Current', choices: ['A', 'mA', 'uA', 'kA', 'MA']},
  {name: 'temperature', label: 'Temperature', choices: ['K', 'degC', 'degF', 'degR']},
  {name: 'luminous_intensity', label: 'Luminous Intensity', choices: ['cd', 'mcd', 'kcd']},
  {name: 'amount_of_substance', label: 'Amount of Substance', choices: ['mol', 'kmol', 'mmol']},
  {name: 'force', label: 'Force', choices: ['N', 'mN', 'kN', 'lbf', 'kip', 'dyne']},
  {name: 'area', label: 'Area', choices: ['m^2', 'cm^2', 'mm^2', 'km^2', 'hectare', 'in^2', 'feet^2', 'yard^2', 'mile^2', 'acre']},
  {name: 'volume', label: 'Volume', choices: ['m^3', 'cm^3', 'mm^3', 'km^3', 'liter', 'ml', 'in^3', 'feet^3', 'yard^3', 'mile^3', 'gallon', 'floz']},
  {name: 'energy', label: 'Energy', choices: ['J', 'mJ', 'kJ', 'MJ', 'Wh', 'kWh', 'eV', 'BTU', 'hp*hr', 'N*m', 'in*lbf', 'foot*lbf', 'erg']},
  {name: 'power', label: 'Power', choices: ['w', 'mW', 'kW', 'MW', 'hp', 'BTU/min', 'BTU/sec', 'erg/sec', 'dyne*cm/sec']},
  {name: 'pressure', label: 'Pressure', choices: ['Pa', 'kPa', 'MPa', 'psi', 'atm', 'torr', 'bar', 'mmHg', 'mmH2O', 'cmH2O']},
  {name: 'charge', label: 'Electric Charge', choices: ['C', 'mC', 'uC', 'nC', 'pC']},
  {name: 'capacitance', label: 'Capacitance', choices: ['F', 'mF', 'uF', 'nF', 'pF']},
  {name: 'electric_potential', label: 'Electric Potential', choices: ['V', 'mV', 'kV', 'uV', 'MV']},
  {name: 'resistance', label: 'Resistance', choices: ['ohm', 'mohm', 'kohm', 'Mohm', 'Gohm']},
  {name: 'inductance', label: 'Inductance', choices: ['H', 'mH', 'uH', 'nH', 'pH']},
  {name: 'conductance', label: 'Conductance', choices: ['S', 'mS', 'kS', 'uS', 'MS']},
  {name: 'magnetic_flux', label: 'Magnetic Flux', choices: ['Wb', 'mWb', 'uWb', 'nWb']},
  {name: 'magnetic_flux_density', label: 'Magnetic Flux Density', choices: ['T', 'mT', 'uT', 'nT','pT']},
  {name: 'angle', label: 'Angle', choices: ['rad', 'deg', 'grad', 'cycle', 'arcsec', 'arcmin']},
  {name: 'information', label: 'Information', choices: ['b', 'B', 'kB', 'MB', 'GB', 'TB', 'PB', 'kb', 'mb', 'Gb', 'Tb', 'Pb']},
];