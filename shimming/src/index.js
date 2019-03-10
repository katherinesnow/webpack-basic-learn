// import _ from 'lodash';
function component() {
	var element = document.createElement('div');

	// Lodash, now imported by this script
	// element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.innerHTML = join(['Hello', 'webpack'], ' ');
	console.log(join)
	// Assume we are in the context of `window`
    // this.alert('Hmmm, this probably isn\'t a great idea...')
	return element;
}

document.body.appendChild(component());