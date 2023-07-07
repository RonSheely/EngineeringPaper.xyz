// Generated from LatexLexer.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class LatexLexer extends Lexer {
	public static readonly L_BRACKET = 1;
	public static readonly ALT_L_BRACKET = 2;
	public static readonly SEMICOLON = 3;
	public static readonly L_BRACE = 4;
	public static readonly R_BRACE = 5;
	public static readonly L_PAREN = 6;
	public static readonly R_PAREN = 7;
	public static readonly VBAR = 8;
	public static readonly UNDERSCORE = 9;
	public static readonly PI = 10;
	public static readonly CMD_INT = 11;
	public static readonly CMD_INT_UNDERSCORE = 12;
	public static readonly CMD_INT_UNDERSCORE_SINGLE_CHAR_NUMBER = 13;
	public static readonly CMD_INT_UNDERSCORE_SINGLE_CHAR_ID = 14;
	public static readonly CMD_MATHRM = 15;
	public static readonly CMD_FRAC = 16;
	public static readonly CMD_FRAC_INTS = 17;
	public static readonly CMD_CDOT = 18;
	public static readonly CMD_SQRT = 19;
	public static readonly CMD_SQRT_INT = 20;
	public static readonly CMD_SIM = 21;
	public static readonly CMD_APPROX = 22;
	public static readonly BACKSLASH = 23;
	public static readonly CMD_SIN = 24;
	public static readonly CMD_COS = 25;
	public static readonly CMD_TAN = 26;
	public static readonly CMD_COT = 27;
	public static readonly CMD_SEC = 28;
	public static readonly CMD_CSC = 29;
	public static readonly CMD_ARCSIN = 30;
	public static readonly CMD_ARCCOS = 31;
	public static readonly CMD_ARCTAN = 32;
	public static readonly CMD_SINH = 33;
	public static readonly CMD_COSH = 34;
	public static readonly CMD_TANH = 35;
	public static readonly CMD_COTH = 36;
	public static readonly CMD_LN = 37;
	public static readonly CMD_LOG = 38;
	public static readonly CMD_SLASH_LOG_UNDERSCORE = 39;
	public static readonly CMD_SLASH_LOG_UNDERSCORE_SINGLE_CHAR_NUMBER = 40;
	public static readonly CMD_SLASH_LOG_UNDERSCORE_SINGLE_CHAR_ID = 41;
	public static readonly COMMENT = 42;
	public static readonly CMD_LEFT = 43;
	public static readonly CMD_RIGHT = 44;
	public static readonly DOUBLE_DOLLAR_SIGN = 45;
	public static readonly ADD = 46;
	public static readonly SUB = 47;
	public static readonly CARET = 48;
	public static readonly EQ = 49;
	public static readonly LT = 50;
	public static readonly GT = 51;
	public static readonly LTE = 52;
	public static readonly GTE = 53;
	public static readonly COMMA = 54;
	public static readonly CARET_SINGLE_CHAR_NUMBER = 55;
	public static readonly CARET_SINGLE_CHAR_ID = 56;
	public static readonly NUMBER = 57;
	public static readonly BEGIN_MATRIX = 58;
	public static readonly END_MATRIX = 59;
	public static readonly AMPERSAND = 60;
	public static readonly DOUBLE_BACKSLASH = 61;
	public static readonly UNDERSCORE_SUBSCRIPT = 62;
	public static readonly CARET_SINGLE_CHAR_ID_UNDERSCORE_SUBSCRIPT = 63;
	public static readonly ID = 64;
	public static readonly WS = 65;
	public static readonly SLASH_SPACE = 66;
	public static readonly SLASH_COLON = 67;
	public static readonly ERROR_CHAR = 68;
	public static readonly R_BRACKET = 69;
	public static readonly ALT_R_BRACKET = 70;
	public static readonly U_CMD_FRAC = 71;
	public static readonly U_CMD_FRAC_INTS = 72;
	public static readonly U_CMD_CDOT = 73;
	public static readonly U_CMD_TIMES = 74;
	public static readonly U_CMD_SQRT = 75;
	public static readonly U_COMMA = 76;
	public static readonly U_CARET = 77;
	public static readonly U_NAME = 78;
	public static readonly U_L_PAREN = 79;
	public static readonly U_R_PAREN = 80;
	public static readonly U_L_BRACE = 81;
	public static readonly U_R_BRACE = 82;
	public static readonly U_ONE = 83;
	public static readonly U_NUMBER = 84;
	public static readonly U_CMD_LEFT = 85;
	public static readonly U_CMD_RIGHT = 86;
	public static readonly U_WS = 87;
	public static readonly U_SLASH_SPACE = 88;
	public static readonly U_ERROR_CHAR = 89;
	public static readonly EOF = Token.EOF;
	public static readonly UNITS = 1;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, "'['", "'\\lbrack'", 
                                                   "';'", null, null, null, 
                                                   null, "'|'", "'_'", "'\\pi'", 
                                                   "'\\int'", null, null, 
                                                   null, "'\\mathrm'", null, 
                                                   null, null, null, null, 
                                                   "'\\sim'", "'\\approx'", 
                                                   "'\\'", "'sin'", "'cos'", 
                                                   "'tan'", "'cot'", "'sec'", 
                                                   "'csc'", "'arcsin'", 
                                                   "'arccos'", "'arctan'", 
                                                   "'sinh'", "'cosh'", "'tanh'", 
                                                   "'coth'", "'ln'", "'log'", 
                                                   null, null, null, null, 
                                                   null, null, "'$$'", "'+'", 
                                                   "'-'", null, "'='", "'<'", 
                                                   "'>'", "'\\le'", "'\\ge'", 
                                                   null, null, null, null, 
                                                   "'\\begin{bmatrix}'", 
                                                   "'\\end{bmatrix}'", "'&'", 
                                                   "'\\\\'", null, null, 
                                                   null, null, null, "'\\:'", 
                                                   null, "']'", "'\\rbrack'", 
                                                   null, null, null, "'\\times'", 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   "'1'" ];
	public static readonly symbolicNames: string[] = [ null, "L_BRACKET", "ALT_L_BRACKET", 
                                                    "SEMICOLON", "L_BRACE", 
                                                    "R_BRACE", "L_PAREN", 
                                                    "R_PAREN", "VBAR", "UNDERSCORE", 
                                                    "PI", "CMD_INT", "CMD_INT_UNDERSCORE", 
                                                    "CMD_INT_UNDERSCORE_SINGLE_CHAR_NUMBER", 
                                                    "CMD_INT_UNDERSCORE_SINGLE_CHAR_ID", 
                                                    "CMD_MATHRM", "CMD_FRAC", 
                                                    "CMD_FRAC_INTS", "CMD_CDOT", 
                                                    "CMD_SQRT", "CMD_SQRT_INT", 
                                                    "CMD_SIM", "CMD_APPROX", 
                                                    "BACKSLASH", "CMD_SIN", 
                                                    "CMD_COS", "CMD_TAN", 
                                                    "CMD_COT", "CMD_SEC", 
                                                    "CMD_CSC", "CMD_ARCSIN", 
                                                    "CMD_ARCCOS", "CMD_ARCTAN", 
                                                    "CMD_SINH", "CMD_COSH", 
                                                    "CMD_TANH", "CMD_COTH", 
                                                    "CMD_LN", "CMD_LOG", 
                                                    "CMD_SLASH_LOG_UNDERSCORE", 
                                                    "CMD_SLASH_LOG_UNDERSCORE_SINGLE_CHAR_NUMBER", 
                                                    "CMD_SLASH_LOG_UNDERSCORE_SINGLE_CHAR_ID", 
                                                    "COMMENT", "CMD_LEFT", 
                                                    "CMD_RIGHT", "DOUBLE_DOLLAR_SIGN", 
                                                    "ADD", "SUB", "CARET", 
                                                    "EQ", "LT", "GT", "LTE", 
                                                    "GTE", "COMMA", "CARET_SINGLE_CHAR_NUMBER", 
                                                    "CARET_SINGLE_CHAR_ID", 
                                                    "NUMBER", "BEGIN_MATRIX", 
                                                    "END_MATRIX", "AMPERSAND", 
                                                    "DOUBLE_BACKSLASH", 
                                                    "UNDERSCORE_SUBSCRIPT", 
                                                    "CARET_SINGLE_CHAR_ID_UNDERSCORE_SUBSCRIPT", 
                                                    "ID", "WS", "SLASH_SPACE", 
                                                    "SLASH_COLON", "ERROR_CHAR", 
                                                    "R_BRACKET", "ALT_R_BRACKET", 
                                                    "U_CMD_FRAC", "U_CMD_FRAC_INTS", 
                                                    "U_CMD_CDOT", "U_CMD_TIMES", 
                                                    "U_CMD_SQRT", "U_COMMA", 
                                                    "U_CARET", "U_NAME", 
                                                    "U_L_PAREN", "U_R_PAREN", 
                                                    "U_L_BRACE", "U_R_BRACE", 
                                                    "U_ONE", "U_NUMBER", 
                                                    "U_CMD_LEFT", "U_CMD_RIGHT", 
                                                    "U_WS", "U_SLASH_SPACE", 
                                                    "U_ERROR_CHAR" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", "UNITS", ];

	public static readonly ruleNames: string[] = [
		"L_BRACKET", "ALT_L_BRACKET", "SEMICOLON", "L_BRACE", "R_BRACE", "L_PAREN", 
		"R_PAREN", "VBAR", "UNDERSCORE", "PI", "CMD_INT", "CMD_INT_UNDERSCORE", 
		"CMD_INT_UNDERSCORE_SINGLE_CHAR_NUMBER", "CMD_INT_UNDERSCORE_SINGLE_CHAR_ID", 
		"CMD_MATHRM", "CMD_FRAC", "CMD_FRAC_INTS", "CMD_CDOT", "CMD_SQRT", "CMD_SQRT_INT", 
		"CMD_SIM", "CMD_APPROX", "BACKSLASH", "CMD_SIN", "CMD_COS", "CMD_TAN", 
		"CMD_COT", "CMD_SEC", "CMD_CSC", "CMD_ARCSIN", "CMD_ARCCOS", "CMD_ARCTAN", 
		"CMD_SINH", "CMD_COSH", "CMD_TANH", "CMD_COTH", "CMD_LN", "CMD_LOG", "CMD_SLASH_LOG_UNDERSCORE", 
		"CMD_SLASH_LOG_UNDERSCORE_SINGLE_CHAR_NUMBER", "CMD_SLASH_LOG_UNDERSCORE_SINGLE_CHAR_ID", 
		"COMMENT", "CMD_LEFT", "CMD_RIGHT", "DOUBLE_DOLLAR_SIGN", "ADD", "SUB", 
		"CARET", "EQ", "LT", "GT", "LTE", "GTE", "COMMA", "CARET_SINGLE_CHAR_NUMBER", 
		"CARET_SINGLE_CHAR_ID", "NUMBER", "DIGIT", "IDENTIFIER", "EXP", "GREEK_CHAR", 
		"BEGIN_MATRIX", "END_MATRIX", "AMPERSAND", "DOUBLE_BACKSLASH", "UNDERSCORE_SUBSCRIPT", 
		"CARET_SINGLE_CHAR_ID_UNDERSCORE_SUBSCRIPT", "ID", "WS", "SLASH_SPACE", 
		"SLASH_COLON", "ERROR_CHAR", "R_BRACKET", "ALT_R_BRACKET", "U_CMD_FRAC", 
		"U_CMD_FRAC_INTS", "U_CMD_CDOT", "U_CMD_TIMES", "U_CMD_SQRT", "U_COMMA", 
		"U_CARET", "U_NAME", "U_L_PAREN", "U_R_PAREN", "U_L_BRACE", "U_R_BRACE", 
		"U_ONE", "U_NUMBER", "U_DIGIT", "U_CMD_LEFT", "U_CMD_RIGHT", "U_WS", "U_SLASH_SPACE", 
		"U_ERROR_CHAR",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, LatexLexer._ATN, LatexLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "LatexLexer.g4"; }

	public get literalNames(): (string | null)[] { return LatexLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return LatexLexer.symbolicNames; }
	public get ruleNames(): string[] { return LatexLexer.ruleNames; }

	public get serializedATN(): number[] { return LatexLexer._serializedATN; }

	public get channelNames(): string[] { return LatexLexer.channelNames; }

	public get modeNames(): string[] { return LatexLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,89,944,6,-1,6,-1,
	2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,
	2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,
	7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,
	23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,
	2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,
	38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
	7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
	52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,
	2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,
	67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,
	7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,
	81,2,82,7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,
	2,89,7,89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,1,0,1,0,1,0,1,0,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,
	6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,
	11,1,11,1,11,1,11,5,11,234,8,11,10,11,12,11,237,9,11,1,11,1,11,1,12,1,12,
	1,12,1,12,1,12,1,12,5,12,247,8,12,10,12,12,12,250,9,12,1,12,1,12,1,12,1,
	13,1,13,1,13,1,13,1,13,1,13,5,13,261,8,13,10,13,12,13,264,9,13,1,13,1,13,
	1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,
	15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,5,16,290,8,16,10,16,12,16,293,9,16,
	1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,
	18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,5,19,317,8,19,10,19,12,19,320,9,19,
	1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,
	21,1,22,1,22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,
	1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,29,1,29,1,
	29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,
	1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,
	34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,37,1,37,
	1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,5,38,417,8,38,10,38,12,38,420,9,
	38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,5,39,430,8,39,10,39,12,39,433,
	9,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,5,40,444,8,40,10,40,12,
	40,447,9,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,5,41,
	460,8,41,10,41,12,41,463,9,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,
	42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,44,
	1,44,1,44,1,44,1,45,1,45,1,46,1,46,1,47,1,47,1,48,1,48,1,49,1,49,1,50,1,
	50,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,53,1,53,1,54,1,54,1,54,1,55,
	1,55,1,55,1,56,4,56,520,8,56,11,56,12,56,521,1,56,1,56,5,56,526,8,56,10,
	56,12,56,529,9,56,1,56,3,56,532,8,56,1,56,1,56,4,56,536,8,56,11,56,12,56,
	537,1,56,3,56,541,8,56,1,56,4,56,544,8,56,11,56,12,56,545,1,56,3,56,549,
	8,56,3,56,551,8,56,1,57,1,57,1,58,1,58,5,58,557,8,58,10,58,12,58,560,9,
	58,1,59,1,59,3,59,564,8,59,1,59,4,59,567,8,59,11,59,12,59,568,1,60,1,60,
	1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,
	60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,
	1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,
	60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,
	1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,
	60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,
	1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,
	60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,
	1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,
	60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,3,60,711,8,60,1,61,1,61,1,61,1,61,
	1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,
	62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,64,
	1,64,1,64,1,65,5,65,749,8,65,10,65,12,65,752,9,65,1,65,1,65,1,65,1,65,4,
	65,758,8,65,11,65,12,65,759,1,65,1,65,5,65,764,8,65,10,65,12,65,767,9,65,
	1,65,1,65,3,65,771,8,65,1,66,1,66,1,66,1,66,1,67,1,67,3,67,779,8,67,1,67,
	3,67,782,8,67,1,68,4,68,785,8,68,11,68,12,68,786,1,68,1,68,1,69,1,69,1,
	69,1,69,1,69,1,70,1,70,1,70,1,70,1,70,1,71,1,71,1,72,1,72,1,72,1,72,1,73,
	1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,
	74,1,75,1,75,1,75,1,75,1,75,1,75,1,75,5,75,830,8,75,10,75,12,75,833,9,75,
	1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,
	77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,79,1,80,1,80,1,81,1,81,5,81,
	863,8,81,10,81,12,81,866,9,81,1,82,1,82,1,83,1,83,1,84,1,84,1,85,1,85,1,
	86,1,86,1,87,3,87,879,8,87,1,87,4,87,882,8,87,11,87,12,87,883,1,87,1,87,
	5,87,888,8,87,10,87,12,87,891,9,87,1,87,3,87,894,8,87,1,87,1,87,4,87,898,
	8,87,11,87,12,87,899,1,87,3,87,903,8,87,1,87,4,87,906,8,87,11,87,12,87,
	907,3,87,910,8,87,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,90,
	1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,91,4,91,932,8,91,11,91,12,91,
	933,1,91,1,91,1,92,1,92,1,92,1,92,1,92,1,93,1,93,1,461,0,94,2,1,4,2,6,3,
	8,4,10,5,12,6,14,7,16,8,18,9,20,10,22,11,24,12,26,13,28,14,30,15,32,16,
	34,17,36,18,38,19,40,20,42,21,44,22,46,23,48,24,50,25,52,26,54,27,56,28,
	58,29,60,30,62,31,64,32,66,33,68,34,70,35,72,36,74,37,76,38,78,39,80,40,
	82,41,84,42,86,43,88,44,90,45,92,46,94,47,96,48,98,49,100,50,102,51,104,
	52,106,53,108,54,110,55,112,56,114,57,116,0,118,0,120,0,122,0,124,58,126,
	59,128,60,130,61,132,62,134,63,136,64,138,65,140,66,142,67,144,68,146,69,
	148,70,150,71,152,72,154,73,156,74,158,75,160,76,162,77,164,78,166,79,168,
	80,170,81,172,82,174,83,176,84,178,0,180,85,182,86,184,87,186,88,188,89,
	2,0,1,7,1,0,32,32,1,0,48,57,2,0,65,90,97,122,3,0,48,57,65,90,97,122,2,0,
	69,69,101,101,2,0,43,43,45,45,3,0,9,10,13,13,32,32,1009,0,2,1,0,0,0,0,4,
	1,0,0,0,0,6,1,0,0,0,0,8,1,0,0,0,0,10,1,0,0,0,0,12,1,0,0,0,0,14,1,0,0,0,
	0,16,1,0,0,0,0,18,1,0,0,0,0,20,1,0,0,0,0,22,1,0,0,0,0,24,1,0,0,0,0,26,1,
	0,0,0,0,28,1,0,0,0,0,30,1,0,0,0,0,32,1,0,0,0,0,34,1,0,0,0,0,36,1,0,0,0,
	0,38,1,0,0,0,0,40,1,0,0,0,0,42,1,0,0,0,0,44,1,0,0,0,0,46,1,0,0,0,0,48,1,
	0,0,0,0,50,1,0,0,0,0,52,1,0,0,0,0,54,1,0,0,0,0,56,1,0,0,0,0,58,1,0,0,0,
	0,60,1,0,0,0,0,62,1,0,0,0,0,64,1,0,0,0,0,66,1,0,0,0,0,68,1,0,0,0,0,70,1,
	0,0,0,0,72,1,0,0,0,0,74,1,0,0,0,0,76,1,0,0,0,0,78,1,0,0,0,0,80,1,0,0,0,
	0,82,1,0,0,0,0,84,1,0,0,0,0,86,1,0,0,0,0,88,1,0,0,0,0,90,1,0,0,0,0,92,1,
	0,0,0,0,94,1,0,0,0,0,96,1,0,0,0,0,98,1,0,0,0,0,100,1,0,0,0,0,102,1,0,0,
	0,0,104,1,0,0,0,0,106,1,0,0,0,0,108,1,0,0,0,0,110,1,0,0,0,0,112,1,0,0,0,
	0,114,1,0,0,0,0,124,1,0,0,0,0,126,1,0,0,0,0,128,1,0,0,0,0,130,1,0,0,0,0,
	132,1,0,0,0,0,134,1,0,0,0,0,136,1,0,0,0,0,138,1,0,0,0,0,140,1,0,0,0,0,142,
	1,0,0,0,0,144,1,0,0,0,1,146,1,0,0,0,1,148,1,0,0,0,1,150,1,0,0,0,1,152,1,
	0,0,0,1,154,1,0,0,0,1,156,1,0,0,0,1,158,1,0,0,0,1,160,1,0,0,0,1,162,1,0,
	0,0,1,164,1,0,0,0,1,166,1,0,0,0,1,168,1,0,0,0,1,170,1,0,0,0,1,172,1,0,0,
	0,1,174,1,0,0,0,1,176,1,0,0,0,1,180,1,0,0,0,1,182,1,0,0,0,1,184,1,0,0,0,
	1,186,1,0,0,0,1,188,1,0,0,0,2,190,1,0,0,0,4,194,1,0,0,0,6,204,1,0,0,0,8,
	206,1,0,0,0,10,208,1,0,0,0,12,210,1,0,0,0,14,212,1,0,0,0,16,214,1,0,0,0,
	18,216,1,0,0,0,20,218,1,0,0,0,22,222,1,0,0,0,24,227,1,0,0,0,26,240,1,0,
	0,0,28,254,1,0,0,0,30,268,1,0,0,0,32,276,1,0,0,0,34,282,1,0,0,0,36,297,
	1,0,0,0,38,303,1,0,0,0,40,309,1,0,0,0,42,323,1,0,0,0,44,328,1,0,0,0,46,
	336,1,0,0,0,48,338,1,0,0,0,50,342,1,0,0,0,52,346,1,0,0,0,54,350,1,0,0,0,
	56,354,1,0,0,0,58,358,1,0,0,0,60,362,1,0,0,0,62,369,1,0,0,0,64,376,1,0,
	0,0,66,383,1,0,0,0,68,388,1,0,0,0,70,393,1,0,0,0,72,398,1,0,0,0,74,403,
	1,0,0,0,76,406,1,0,0,0,78,410,1,0,0,0,80,423,1,0,0,0,82,437,1,0,0,0,84,
	451,1,0,0,0,86,468,1,0,0,0,88,476,1,0,0,0,90,485,1,0,0,0,92,490,1,0,0,0,
	94,492,1,0,0,0,96,494,1,0,0,0,98,496,1,0,0,0,100,498,1,0,0,0,102,500,1,
	0,0,0,104,502,1,0,0,0,106,506,1,0,0,0,108,510,1,0,0,0,110,512,1,0,0,0,112,
	515,1,0,0,0,114,550,1,0,0,0,116,552,1,0,0,0,118,554,1,0,0,0,120,561,1,0,
	0,0,122,570,1,0,0,0,124,712,1,0,0,0,126,728,1,0,0,0,128,742,1,0,0,0,130,
	744,1,0,0,0,132,770,1,0,0,0,134,772,1,0,0,0,136,778,1,0,0,0,138,784,1,0,
	0,0,140,790,1,0,0,0,142,795,1,0,0,0,144,800,1,0,0,0,146,802,1,0,0,0,148,
	806,1,0,0,0,150,816,1,0,0,0,152,822,1,0,0,0,154,837,1,0,0,0,156,843,1,0,
	0,0,158,850,1,0,0,0,160,856,1,0,0,0,162,858,1,0,0,0,164,860,1,0,0,0,166,
	867,1,0,0,0,168,869,1,0,0,0,170,871,1,0,0,0,172,873,1,0,0,0,174,875,1,0,
	0,0,176,909,1,0,0,0,178,911,1,0,0,0,180,913,1,0,0,0,182,921,1,0,0,0,184,
	931,1,0,0,0,186,937,1,0,0,0,188,942,1,0,0,0,190,191,5,91,0,0,191,192,1,
	0,0,0,192,193,6,0,0,0,193,3,1,0,0,0,194,195,5,92,0,0,195,196,5,108,0,0,
	196,197,5,98,0,0,197,198,5,114,0,0,198,199,5,97,0,0,199,200,5,99,0,0,200,
	201,5,107,0,0,201,202,1,0,0,0,202,203,6,1,0,0,203,5,1,0,0,0,204,205,5,59,
	0,0,205,7,1,0,0,0,206,207,5,123,0,0,207,9,1,0,0,0,208,209,5,125,0,0,209,
	11,1,0,0,0,210,211,5,40,0,0,211,13,1,0,0,0,212,213,5,41,0,0,213,15,1,0,
	0,0,214,215,5,124,0,0,215,17,1,0,0,0,216,217,5,95,0,0,217,19,1,0,0,0,218,
	219,5,92,0,0,219,220,5,112,0,0,220,221,5,105,0,0,221,21,1,0,0,0,222,223,
	5,92,0,0,223,224,5,105,0,0,224,225,5,110,0,0,225,226,5,116,0,0,226,23,1,
	0,0,0,227,228,5,92,0,0,228,229,5,105,0,0,229,230,5,110,0,0,230,231,5,116,
	0,0,231,235,1,0,0,0,232,234,7,0,0,0,233,232,1,0,0,0,234,237,1,0,0,0,235,
	233,1,0,0,0,235,236,1,0,0,0,236,238,1,0,0,0,237,235,1,0,0,0,238,239,5,95,
	0,0,239,25,1,0,0,0,240,241,5,92,0,0,241,242,5,105,0,0,242,243,5,110,0,0,
	243,244,5,116,0,0,244,248,1,0,0,0,245,247,7,0,0,0,246,245,1,0,0,0,247,250,
	1,0,0,0,248,246,1,0,0,0,248,249,1,0,0,0,249,251,1,0,0,0,250,248,1,0,0,0,
	251,252,5,95,0,0,252,253,7,1,0,0,253,27,1,0,0,0,254,255,5,92,0,0,255,256,
	5,105,0,0,256,257,5,110,0,0,257,258,5,116,0,0,258,262,1,0,0,0,259,261,7,
	0,0,0,260,259,1,0,0,0,261,264,1,0,0,0,262,260,1,0,0,0,262,263,1,0,0,0,263,
	265,1,0,0,0,264,262,1,0,0,0,265,266,5,95,0,0,266,267,7,2,0,0,267,29,1,0,
	0,0,268,269,5,92,0,0,269,270,5,109,0,0,270,271,5,97,0,0,271,272,5,116,0,
	0,272,273,5,104,0,0,273,274,5,114,0,0,274,275,5,109,0,0,275,31,1,0,0,0,
	276,277,5,92,0,0,277,278,5,102,0,0,278,279,5,114,0,0,279,280,5,97,0,0,280,
	281,5,99,0,0,281,33,1,0,0,0,282,283,5,92,0,0,283,284,5,102,0,0,284,285,
	5,114,0,0,285,286,5,97,0,0,286,287,5,99,0,0,287,291,1,0,0,0,288,290,7,0,
	0,0,289,288,1,0,0,0,290,293,1,0,0,0,291,289,1,0,0,0,291,292,1,0,0,0,292,
	294,1,0,0,0,293,291,1,0,0,0,294,295,7,1,0,0,295,296,7,1,0,0,296,35,1,0,
	0,0,297,298,5,92,0,0,298,299,5,99,0,0,299,300,5,100,0,0,300,301,5,111,0,
	0,301,302,5,116,0,0,302,37,1,0,0,0,303,304,5,92,0,0,304,305,5,115,0,0,305,
	306,5,113,0,0,306,307,5,114,0,0,307,308,5,116,0,0,308,39,1,0,0,0,309,310,
	5,92,0,0,310,311,5,115,0,0,311,312,5,113,0,0,312,313,5,114,0,0,313,314,
	5,116,0,0,314,318,1,0,0,0,315,317,7,0,0,0,316,315,1,0,0,0,317,320,1,0,0,
	0,318,316,1,0,0,0,318,319,1,0,0,0,319,321,1,0,0,0,320,318,1,0,0,0,321,322,
	7,1,0,0,322,41,1,0,0,0,323,324,5,92,0,0,324,325,5,115,0,0,325,326,5,105,
	0,0,326,327,5,109,0,0,327,43,1,0,0,0,328,329,5,92,0,0,329,330,5,97,0,0,
	330,331,5,112,0,0,331,332,5,112,0,0,332,333,5,114,0,0,333,334,5,111,0,0,
	334,335,5,120,0,0,335,45,1,0,0,0,336,337,5,92,0,0,337,47,1,0,0,0,338,339,
	5,115,0,0,339,340,5,105,0,0,340,341,5,110,0,0,341,49,1,0,0,0,342,343,5,
	99,0,0,343,344,5,111,0,0,344,345,5,115,0,0,345,51,1,0,0,0,346,347,5,116,
	0,0,347,348,5,97,0,0,348,349,5,110,0,0,349,53,1,0,0,0,350,351,5,99,0,0,
	351,352,5,111,0,0,352,353,5,116,0,0,353,55,1,0,0,0,354,355,5,115,0,0,355,
	356,5,101,0,0,356,357,5,99,0,0,357,57,1,0,0,0,358,359,5,99,0,0,359,360,
	5,115,0,0,360,361,5,99,0,0,361,59,1,0,0,0,362,363,5,97,0,0,363,364,5,114,
	0,0,364,365,5,99,0,0,365,366,5,115,0,0,366,367,5,105,0,0,367,368,5,110,
	0,0,368,61,1,0,0,0,369,370,5,97,0,0,370,371,5,114,0,0,371,372,5,99,0,0,
	372,373,5,99,0,0,373,374,5,111,0,0,374,375,5,115,0,0,375,63,1,0,0,0,376,
	377,5,97,0,0,377,378,5,114,0,0,378,379,5,99,0,0,379,380,5,116,0,0,380,381,
	5,97,0,0,381,382,5,110,0,0,382,65,1,0,0,0,383,384,5,115,0,0,384,385,5,105,
	0,0,385,386,5,110,0,0,386,387,5,104,0,0,387,67,1,0,0,0,388,389,5,99,0,0,
	389,390,5,111,0,0,390,391,5,115,0,0,391,392,5,104,0,0,392,69,1,0,0,0,393,
	394,5,116,0,0,394,395,5,97,0,0,395,396,5,110,0,0,396,397,5,104,0,0,397,
	71,1,0,0,0,398,399,5,99,0,0,399,400,5,111,0,0,400,401,5,116,0,0,401,402,
	5,104,0,0,402,73,1,0,0,0,403,404,5,108,0,0,404,405,5,110,0,0,405,75,1,0,
	0,0,406,407,5,108,0,0,407,408,5,111,0,0,408,409,5,103,0,0,409,77,1,0,0,
	0,410,411,5,92,0,0,411,412,5,108,0,0,412,413,5,111,0,0,413,414,5,103,0,
	0,414,418,1,0,0,0,415,417,7,0,0,0,416,415,1,0,0,0,417,420,1,0,0,0,418,416,
	1,0,0,0,418,419,1,0,0,0,419,421,1,0,0,0,420,418,1,0,0,0,421,422,5,95,0,
	0,422,79,1,0,0,0,423,424,5,92,0,0,424,425,5,108,0,0,425,426,5,111,0,0,426,
	427,5,103,0,0,427,431,1,0,0,0,428,430,7,0,0,0,429,428,1,0,0,0,430,433,1,
	0,0,0,431,429,1,0,0,0,431,432,1,0,0,0,432,434,1,0,0,0,433,431,1,0,0,0,434,
	435,5,95,0,0,435,436,7,1,0,0,436,81,1,0,0,0,437,438,5,92,0,0,438,439,5,
	108,0,0,439,440,5,111,0,0,440,441,5,103,0,0,441,445,1,0,0,0,442,444,7,0,
	0,0,443,442,1,0,0,0,444,447,1,0,0,0,445,443,1,0,0,0,445,446,1,0,0,0,446,
	448,1,0,0,0,447,445,1,0,0,0,448,449,5,95,0,0,449,450,7,2,0,0,450,83,1,0,
	0,0,451,452,5,92,0,0,452,453,5,116,0,0,453,454,5,101,0,0,454,455,5,120,
	0,0,455,456,5,116,0,0,456,457,5,123,0,0,457,461,1,0,0,0,458,460,9,0,0,0,
	459,458,1,0,0,0,460,463,1,0,0,0,461,462,1,0,0,0,461,459,1,0,0,0,462,464,
	1,0,0,0,463,461,1,0,0,0,464,465,5,125,0,0,465,466,1,0,0,0,466,467,6,41,
	1,0,467,85,1,0,0,0,468,469,5,92,0,0,469,470,5,108,0,0,470,471,5,101,0,0,
	471,472,5,102,0,0,472,473,5,116,0,0,473,474,1,0,0,0,474,475,6,42,1,0,475,
	87,1,0,0,0,476,477,5,92,0,0,477,478,5,114,0,0,478,479,5,105,0,0,479,480,
	5,103,0,0,480,481,5,104,0,0,481,482,5,116,0,0,482,483,1,0,0,0,483,484,6,
	43,1,0,484,89,1,0,0,0,485,486,5,36,0,0,486,487,5,36,0,0,487,488,1,0,0,0,
	488,489,6,44,1,0,489,91,1,0,0,0,490,491,5,43,0,0,491,93,1,0,0,0,492,493,
	5,45,0,0,493,95,1,0,0,0,494,495,5,94,0,0,495,97,1,0,0,0,496,497,5,61,0,
	0,497,99,1,0,0,0,498,499,5,60,0,0,499,101,1,0,0,0,500,501,5,62,0,0,501,
	103,1,0,0,0,502,503,5,92,0,0,503,504,5,108,0,0,504,505,5,101,0,0,505,105,
	1,0,0,0,506,507,5,92,0,0,507,508,5,103,0,0,508,509,5,101,0,0,509,107,1,
	0,0,0,510,511,5,44,0,0,511,109,1,0,0,0,512,513,5,94,0,0,513,514,7,1,0,0,
	514,111,1,0,0,0,515,516,5,94,0,0,516,517,7,2,0,0,517,113,1,0,0,0,518,520,
	3,116,57,0,519,518,1,0,0,0,520,521,1,0,0,0,521,519,1,0,0,0,521,522,1,0,
	0,0,522,523,1,0,0,0,523,527,5,46,0,0,524,526,3,116,57,0,525,524,1,0,0,0,
	526,529,1,0,0,0,527,525,1,0,0,0,527,528,1,0,0,0,528,531,1,0,0,0,529,527,
	1,0,0,0,530,532,3,120,59,0,531,530,1,0,0,0,531,532,1,0,0,0,532,551,1,0,
	0,0,533,535,5,46,0,0,534,536,3,116,57,0,535,534,1,0,0,0,536,537,1,0,0,0,
	537,535,1,0,0,0,537,538,1,0,0,0,538,540,1,0,0,0,539,541,3,120,59,0,540,
	539,1,0,0,0,540,541,1,0,0,0,541,551,1,0,0,0,542,544,3,116,57,0,543,542,
	1,0,0,0,544,545,1,0,0,0,545,543,1,0,0,0,545,546,1,0,0,0,546,548,1,0,0,0,
	547,549,3,120,59,0,548,547,1,0,0,0,548,549,1,0,0,0,549,551,1,0,0,0,550,
	519,1,0,0,0,550,533,1,0,0,0,550,543,1,0,0,0,551,115,1,0,0,0,552,553,7,1,
	0,0,553,117,1,0,0,0,554,558,7,2,0,0,555,557,7,3,0,0,556,555,1,0,0,0,557,
	560,1,0,0,0,558,556,1,0,0,0,558,559,1,0,0,0,559,119,1,0,0,0,560,558,1,0,
	0,0,561,563,7,4,0,0,562,564,7,5,0,0,563,562,1,0,0,0,563,564,1,0,0,0,564,
	566,1,0,0,0,565,567,3,116,57,0,566,565,1,0,0,0,567,568,1,0,0,0,568,566,
	1,0,0,0,568,569,1,0,0,0,569,121,1,0,0,0,570,710,5,92,0,0,571,572,5,97,0,
	0,572,573,5,108,0,0,573,574,5,112,0,0,574,575,5,104,0,0,575,711,5,97,0,
	0,576,577,5,98,0,0,577,578,5,101,0,0,578,579,5,116,0,0,579,711,5,97,0,0,
	580,581,5,103,0,0,581,582,5,97,0,0,582,583,5,109,0,0,583,584,5,109,0,0,
	584,711,5,97,0,0,585,586,5,100,0,0,586,587,5,101,0,0,587,588,5,108,0,0,
	588,589,5,116,0,0,589,711,5,97,0,0,590,591,5,101,0,0,591,592,5,112,0,0,
	592,593,5,115,0,0,593,594,5,105,0,0,594,595,5,108,0,0,595,596,5,111,0,0,
	596,711,5,110,0,0,597,598,5,122,0,0,598,599,5,101,0,0,599,600,5,116,0,0,
	600,711,5,97,0,0,601,602,5,101,0,0,602,603,5,116,0,0,603,711,5,97,0,0,604,
	605,5,116,0,0,605,606,5,104,0,0,606,607,5,101,0,0,607,608,5,116,0,0,608,
	711,5,97,0,0,609,610,5,105,0,0,610,611,5,111,0,0,611,612,5,116,0,0,612,
	711,5,97,0,0,613,614,5,107,0,0,614,615,5,97,0,0,615,616,5,112,0,0,616,617,
	5,112,0,0,617,711,5,97,0,0,618,619,5,108,0,0,619,620,5,97,0,0,620,621,5,
	109,0,0,621,622,5,98,0,0,622,623,5,100,0,0,623,711,5,97,0,0,624,625,5,109,
	0,0,625,711,5,117,0,0,626,627,5,110,0,0,627,711,5,117,0,0,628,629,5,120,
	0,0,629,711,5,105,0,0,630,631,5,114,0,0,631,632,5,104,0,0,632,711,5,111,
	0,0,633,634,5,115,0,0,634,635,5,105,0,0,635,636,5,103,0,0,636,637,5,109,
	0,0,637,711,5,97,0,0,638,639,5,116,0,0,639,640,5,97,0,0,640,711,5,117,0,
	0,641,642,5,117,0,0,642,643,5,112,0,0,643,644,5,115,0,0,644,645,5,105,0,
	0,645,646,5,108,0,0,646,647,5,111,0,0,647,711,5,110,0,0,648,649,5,112,0,
	0,649,650,5,104,0,0,650,711,5,105,0,0,651,652,5,99,0,0,652,653,5,104,0,
	0,653,711,5,105,0,0,654,655,5,112,0,0,655,656,5,115,0,0,656,711,5,105,0,
	0,657,658,5,111,0,0,658,659,5,109,0,0,659,660,5,101,0,0,660,661,5,103,0,
	0,661,711,5,97,0,0,662,663,5,71,0,0,663,664,5,97,0,0,664,665,5,109,0,0,
	665,666,5,109,0,0,666,711,5,97,0,0,667,668,5,68,0,0,668,669,5,101,0,0,669,
	670,5,108,0,0,670,671,5,116,0,0,671,711,5,97,0,0,672,673,5,84,0,0,673,674,
	5,104,0,0,674,675,5,101,0,0,675,676,5,116,0,0,676,711,5,97,0,0,677,678,
	5,76,0,0,678,679,5,97,0,0,679,680,5,109,0,0,680,681,5,98,0,0,681,682,5,
	100,0,0,682,711,5,97,0,0,683,684,5,88,0,0,684,711,5,105,0,0,685,686,5,80,
	0,0,686,711,5,105,0,0,687,688,5,83,0,0,688,689,5,105,0,0,689,690,5,103,
	0,0,690,691,5,109,0,0,691,711,5,97,0,0,692,693,5,85,0,0,693,694,5,112,0,
	0,694,695,5,115,0,0,695,696,5,105,0,0,696,697,5,108,0,0,697,698,5,111,0,
	0,698,711,5,110,0,0,699,700,5,80,0,0,700,701,5,104,0,0,701,711,5,105,0,
	0,702,703,5,80,0,0,703,704,5,115,0,0,704,711,5,105,0,0,705,706,5,79,0,0,
	706,707,5,109,0,0,707,708,5,101,0,0,708,709,5,103,0,0,709,711,5,97,0,0,
	710,571,1,0,0,0,710,576,1,0,0,0,710,580,1,0,0,0,710,585,1,0,0,0,710,590,
	1,0,0,0,710,597,1,0,0,0,710,601,1,0,0,0,710,604,1,0,0,0,710,609,1,0,0,0,
	710,613,1,0,0,0,710,618,1,0,0,0,710,624,1,0,0,0,710,626,1,0,0,0,710,628,
	1,0,0,0,710,630,1,0,0,0,710,633,1,0,0,0,710,638,1,0,0,0,710,641,1,0,0,0,
	710,648,1,0,0,0,710,651,1,0,0,0,710,654,1,0,0,0,710,657,1,0,0,0,710,662,
	1,0,0,0,710,667,1,0,0,0,710,672,1,0,0,0,710,677,1,0,0,0,710,683,1,0,0,0,
	710,685,1,0,0,0,710,687,1,0,0,0,710,692,1,0,0,0,710,699,1,0,0,0,710,702,
	1,0,0,0,710,705,1,0,0,0,711,123,1,0,0,0,712,713,5,92,0,0,713,714,5,98,0,
	0,714,715,5,101,0,0,715,716,5,103,0,0,716,717,5,105,0,0,717,718,5,110,0,
	0,718,719,5,123,0,0,719,720,5,98,0,0,720,721,5,109,0,0,721,722,5,97,0,0,
	722,723,5,116,0,0,723,724,5,114,0,0,724,725,5,105,0,0,725,726,5,120,0,0,
	726,727,5,125,0,0,727,125,1,0,0,0,728,729,5,92,0,0,729,730,5,101,0,0,730,
	731,5,110,0,0,731,732,5,100,0,0,732,733,5,123,0,0,733,734,5,98,0,0,734,
	735,5,109,0,0,735,736,5,97,0,0,736,737,5,116,0,0,737,738,5,114,0,0,738,
	739,5,105,0,0,739,740,5,120,0,0,740,741,5,125,0,0,741,127,1,0,0,0,742,743,
	5,38,0,0,743,129,1,0,0,0,744,745,5,92,0,0,745,746,5,92,0,0,746,131,1,0,
	0,0,747,749,7,0,0,0,748,747,1,0,0,0,749,752,1,0,0,0,750,748,1,0,0,0,750,
	751,1,0,0,0,751,753,1,0,0,0,752,750,1,0,0,0,753,754,5,95,0,0,754,755,5,
	123,0,0,755,757,1,0,0,0,756,758,7,3,0,0,757,756,1,0,0,0,758,759,1,0,0,0,
	759,757,1,0,0,0,759,760,1,0,0,0,760,761,1,0,0,0,761,771,5,125,0,0,762,764,
	7,0,0,0,763,762,1,0,0,0,764,767,1,0,0,0,765,763,1,0,0,0,765,766,1,0,0,0,
	766,768,1,0,0,0,767,765,1,0,0,0,768,769,5,95,0,0,769,771,7,3,0,0,770,750,
	1,0,0,0,770,765,1,0,0,0,771,133,1,0,0,0,772,773,5,94,0,0,773,774,7,2,0,
	0,774,775,3,132,65,0,775,135,1,0,0,0,776,779,3,118,58,0,777,779,3,122,60,
	0,778,776,1,0,0,0,778,777,1,0,0,0,779,781,1,0,0,0,780,782,3,132,65,0,781,
	780,1,0,0,0,781,782,1,0,0,0,782,137,1,0,0,0,783,785,7,6,0,0,784,783,1,0,
	0,0,785,786,1,0,0,0,786,784,1,0,0,0,786,787,1,0,0,0,787,788,1,0,0,0,788,
	789,6,68,1,0,789,139,1,0,0,0,790,791,5,92,0,0,791,792,5,32,0,0,792,793,
	1,0,0,0,793,794,6,69,1,0,794,141,1,0,0,0,795,796,5,92,0,0,796,797,5,58,
	0,0,797,798,1,0,0,0,798,799,6,70,1,0,799,143,1,0,0,0,800,801,9,0,0,0,801,
	145,1,0,0,0,802,803,5,93,0,0,803,804,1,0,0,0,804,805,6,72,2,0,805,147,1,
	0,0,0,806,807,5,92,0,0,807,808,5,114,0,0,808,809,5,98,0,0,809,810,5,114,
	0,0,810,811,5,97,0,0,811,812,5,99,0,0,812,813,5,107,0,0,813,814,1,0,0,0,
	814,815,6,73,2,0,815,149,1,0,0,0,816,817,5,92,0,0,817,818,5,102,0,0,818,
	819,5,114,0,0,819,820,5,97,0,0,820,821,5,99,0,0,821,151,1,0,0,0,822,823,
	5,92,0,0,823,824,5,102,0,0,824,825,5,114,0,0,825,826,5,97,0,0,826,827,5,
	99,0,0,827,831,1,0,0,0,828,830,7,0,0,0,829,828,1,0,0,0,830,833,1,0,0,0,
	831,829,1,0,0,0,831,832,1,0,0,0,832,834,1,0,0,0,833,831,1,0,0,0,834,835,
	7,1,0,0,835,836,7,1,0,0,836,153,1,0,0,0,837,838,5,92,0,0,838,839,5,99,0,
	0,839,840,5,100,0,0,840,841,5,111,0,0,841,842,5,116,0,0,842,155,1,0,0,0,
	843,844,5,92,0,0,844,845,5,116,0,0,845,846,5,105,0,0,846,847,5,109,0,0,
	847,848,5,101,0,0,848,849,5,115,0,0,849,157,1,0,0,0,850,851,5,92,0,0,851,
	852,5,115,0,0,852,853,5,113,0,0,853,854,5,114,0,0,854,855,5,116,0,0,855,
	159,1,0,0,0,856,857,5,44,0,0,857,161,1,0,0,0,858,859,5,94,0,0,859,163,1,
	0,0,0,860,864,7,2,0,0,861,863,7,3,0,0,862,861,1,0,0,0,863,866,1,0,0,0,864,
	862,1,0,0,0,864,865,1,0,0,0,865,165,1,0,0,0,866,864,1,0,0,0,867,868,5,40,
	0,0,868,167,1,0,0,0,869,870,5,41,0,0,870,169,1,0,0,0,871,872,5,123,0,0,
	872,171,1,0,0,0,873,874,5,125,0,0,874,173,1,0,0,0,875,876,5,49,0,0,876,
	175,1,0,0,0,877,879,5,45,0,0,878,877,1,0,0,0,878,879,1,0,0,0,879,881,1,
	0,0,0,880,882,3,178,88,0,881,880,1,0,0,0,882,883,1,0,0,0,883,881,1,0,0,
	0,883,884,1,0,0,0,884,885,1,0,0,0,885,889,5,46,0,0,886,888,3,178,88,0,887,
	886,1,0,0,0,888,891,1,0,0,0,889,887,1,0,0,0,889,890,1,0,0,0,890,910,1,0,
	0,0,891,889,1,0,0,0,892,894,5,45,0,0,893,892,1,0,0,0,893,894,1,0,0,0,894,
	895,1,0,0,0,895,897,5,46,0,0,896,898,3,178,88,0,897,896,1,0,0,0,898,899,
	1,0,0,0,899,897,1,0,0,0,899,900,1,0,0,0,900,910,1,0,0,0,901,903,5,45,0,
	0,902,901,1,0,0,0,902,903,1,0,0,0,903,905,1,0,0,0,904,906,3,178,88,0,905,
	904,1,0,0,0,906,907,1,0,0,0,907,905,1,0,0,0,907,908,1,0,0,0,908,910,1,0,
	0,0,909,878,1,0,0,0,909,893,1,0,0,0,909,902,1,0,0,0,910,177,1,0,0,0,911,
	912,7,1,0,0,912,179,1,0,0,0,913,914,5,92,0,0,914,915,5,108,0,0,915,916,
	5,101,0,0,916,917,5,102,0,0,917,918,5,116,0,0,918,919,1,0,0,0,919,920,6,
	89,1,0,920,181,1,0,0,0,921,922,5,92,0,0,922,923,5,114,0,0,923,924,5,105,
	0,0,924,925,5,103,0,0,925,926,5,104,0,0,926,927,5,116,0,0,927,928,1,0,0,
	0,928,929,6,90,1,0,929,183,1,0,0,0,930,932,7,6,0,0,931,930,1,0,0,0,932,
	933,1,0,0,0,933,931,1,0,0,0,933,934,1,0,0,0,934,935,1,0,0,0,935,936,6,91,
	1,0,936,185,1,0,0,0,937,938,5,92,0,0,938,939,5,32,0,0,939,940,1,0,0,0,940,
	941,6,92,1,0,941,187,1,0,0,0,942,943,9,0,0,0,943,189,1,0,0,0,41,0,1,235,
	248,262,291,318,418,431,445,461,521,527,531,537,540,545,548,550,558,563,
	568,710,750,759,765,770,778,781,786,831,864,878,883,889,893,899,902,907,
	909,933,3,2,1,0,6,0,0,2,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LatexLexer.__ATN) {
			LatexLexer.__ATN = new ATNDeserializer().deserialize(LatexLexer._serializedATN);
		}

		return LatexLexer.__ATN;
	}


	static DecisionsToDFA = LatexLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}