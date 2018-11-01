//\b Matches, without consuming any characters, immediately between a character matched by \w and a character not matched by \w (in either order). It cannot be used to separate non words from words

//Matches anything other than non-whitespace character. ~ Negated version of /\s/g

//Using ~ with indexOf() "coerces" (actually just transforms) the value to be appropriately boolean-coercible.. The ~ operator first "coerces" to a 32-bit number value, and then performs a bitwise negation (flipping each bit's parity)

//When you want to know whether a pattern is found and also its index in a string use search() (if you only want to know if it exists, use the similar test() method on the RegExp prototype, which returns a boolean); for more information (but slower execution) use match() (similar to the regular expression exec() method).

function parseExpression(program) {
  program = skipSpace(program);
  let match, expr;
  if (match = /^"([^"]*)"/.exec(program)) {
	expr = {type: "value", value: match[1]};
  } else if (match = /^\d+\b/.exec(program)) {
	expr = {type: "value", value: Number(match[0])};
  } else if (match = /^[^\s(),#"]+/.exec(program)) {
	expr = {type: "word", name: match[0]};
  } else {
	throw new SyntaxError("Unexpected syntax: " + program);
  }
  return parseApply(expr, program.slice(match[0].length));
}

function skipSpace(string) {
  let first = string.search(/\S/); 
  if (!~first == -1) return ""; 
  return string.slice(first);
}

function parseApply(expr, program) {
  program = skipSpace(program);
  if (program[0] != "(") {
   return {expr: expr, rest: program};
  }
  program = skipSpace(program.slice(1));
  expr = {type: "apply", operator: expr, args: []};
  while (program[0] != ")") {
	let arg = parseExpression(program);
	expr.args.push(arg.expr);
	program = skipSpace(arg.rest);
	if (program[0] == ",") {
	  program = skipSpace(program.slice(1));
	} else if (program[0] != ")") {
		throw new SyntaxError("Expected ',' or ')'");
	}
  }
  return parseApply(expr, program.slice(1));
}

function parse(program) {
  let {expr, rest} = parseExpression(program);
  if (skipSpace(rest).length > 0) {
    throw new SyntaxError("Unexpected text after program");
  }
  return expr;
}

console.log(parse("  define  (   x, 10)"));
