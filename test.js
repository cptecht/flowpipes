const Flow = require('flowpipes')

function myControl(input) {
	if (input > 19) {
		return true
	} else {
		return false
	}
}

function myIncrement(number) {
	return number+1
}

function myPipe(data) {
	return Flow.InputPipe(data)(myIncrement)(Flow.OutputValve)
}

const result = Flow.Loop(0)(myControl)(myPipe)

console.log(result)