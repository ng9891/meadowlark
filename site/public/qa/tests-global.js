//Testing if it has a title and its not 'TODO'
suite('Global Tests', function(){
		test('page has a valid title', function(){
				assert(document.title && document.title.match(/\S/) &&
						document.title.toUpperCase() !== 'TODO');
		});
	
});
