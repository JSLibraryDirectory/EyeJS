describe(name, callback) {
	const start = process.hrtime();
	console.log(`→ Testing ${name}`.bold)
	console.log("\n");
	console.group();
	callback();
	console.groupEnd();
	const end = process.hrtime(this.time);
	const time = Math.round((end[0] * 1000) + (end[1] / 1000000))
	console.log(`\nDone in ${time > 1000 ? time / 1000 + "s" : time + "ms"}\n`.bold)
}
