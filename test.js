const Flow = require('flowpipes')

function myControl(input) {
	if (input > 19) {
		return true
	} else {
		return false
	}
}

function myPipe(data) {
	return Flow.InputPipe(data+1)(Flow.OutputValve)(Flow.OutputValve)
}

const result = Flow.Loop(0)(myControl)(myPipe)

console.log(result)