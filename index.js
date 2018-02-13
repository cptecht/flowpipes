function funcAdvPipe(input) {
	return function(output) {
		return function(pipe) {
			return pipe(
				output(input)
			)
		}
	}
}


function funcInputPipe(input) {
	return function(output) {
		return funcOutputPipe(
			output(input)
		)
	}
}

function funcOutputPipe(input) {
	return function(output) {
		return output(input)
	}
}

function funcOutputValve(pipe) {
	return pipe
}

function funcInputY(input1) {
	return function(input2) {
		return function(output) {
			return funcOutputPipe(
				output(input1)(input2)
			)
		}
	}
}

function funcOutputY(input) {
	return function(output1) {
		return function(output2) {
			return [output1(input), output2(input)]
		}
	}
}

function funcFactory(Input) {
	return function(Break) {
		return function(Pipe) {
			const output = Pipe(Input)
			if (Break(output) === true) {
				return output
			} else {
				return funcFactory(output)(Break)(Pipe)
			}
		}
	}
}

const Exported = {
	AdvPipe: funcAdvPipe,
	InputPipe: funcInputPipe,
	OutputValve: funcOutputValve,
	InputY: funcInputY,
	OutputY: funcOutputY,
	Factory: funcFactory
}

module.exports = Exported