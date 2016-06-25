module.exports = function isHeroku(){
	return 'DYNO' in process.env;
};