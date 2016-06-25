module.exports = () => {
	return 'DYNO' in process.env;
};