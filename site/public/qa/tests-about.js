//Testing if in About page there is a contact link
suite('"About" Page Tests', function(){
		test('page should contain link to contact page', function(){
				assert($( 'a[href="/contact"]' ).length);
		});
});