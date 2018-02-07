Starter Workflow Template
========================

This is just a template I made to start off. It uses gulp and webpack to:

1. Browser-sync - Allowing you to test your files in different browsers, and mobile at once.
2. Uglify your js in the final output
3. Use Sass and have the output a css file
4. Use ES6 (I added jquery just to test, you can delete if you want)

Getting Started
===============
1. Clone
2. Run yarn or npm install to get the dev-dependencies
3. Run gulp watch to start browser-sync and file watching
4. Once you save changes in the src file, the dist file will automatically be created
5. The index.html file included has reference to the dist, so as soon as you make your changes, 
they will appear in the browser
