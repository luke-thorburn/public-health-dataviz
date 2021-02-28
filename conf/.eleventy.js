module.exports = function(eleventyConfig) {

	// Add stringify filter.
	
	eleventyConfig.addFilter("stringify", function(obj) {
		return JSON.stringify(obj);
	})

	// Add filter to extract toggle specification from graph specification.
	
	const fs = require('fs');
	eleventyConfig.addFilter("get_graph_toggles", function(name, slug) {

		let spec = fs.readFileSync(`../src/posts/${slug}/graph-${name}.json`).toString(),
			toggles = JSON.parse(spec)['uom-toggles']['toggle-groups'];

		return toggles;

	})

	eleventyConfig.addFilter("get_graph_title", function(name, slug) {

		let spec = fs.readFileSync(`../src/posts/${slug}/graph-${name}.json`).toString(),
			title = JSON.parse(spec)['uom-title'];

		return title;

	})


	// Add shortcode to import custom elements (d3 graphs, tables etc.).
	eleventyConfig.addShortcode("import_content", function(name, slug) {

		let html = fs.readFileSync(`../src/posts/${slug}/${name}.html`).toString();

		// Load CSS, if it exists.
		try {
			if (fs.existsSync(`../src/posts/${slug}/${name}.css`)) {
				html += `<script type="text/javascript">
					loadCSS("/posts/${slug}/${name}.css");
				</script>`;
			}
		} catch(error) {
			console.error(error);
		}

		// Load javascript, if it exists.
		try {
			if (fs.existsSync(`../src/posts/${slug}/${name}.js`)) {
				html += `<script src="/posts/${ slug }/${ name }.js"></script>`
			}
		} catch(error) {
			console.error(error);
		}

		return html;

	})


	// Add shortcode to generate Vega dashboard-style graphs.

	eleventyConfig.addShortcode("import_graph", function(name, slug) {
		

		let title = `${eleventyConfig.getFilter("get_graph_title")(name, slug)}`;

		let toggle_specs = eleventyConfig.getFilter("get_graph_toggles")(name, slug),
			toggles = ``;

		for (let toggle_group of toggle_specs) {
			
			let toggle_group_contents = ``;
			for (let toggle of toggle_group.toggles) {

				toggle_group_contents += `<div class="toggle-box">
					<div class="name">${ toggle.name }</div>
					<div class="description">${ toggle.description }</div>`;
							
				if (toggle.type == "range") {
					
					toggle_group_contents += `<input type="range" name="a" id="a" min="1" max="3" step="1" value="2">`;
					// custom input slider: https://codepen.io/trevanhetzel/pen/rOVrGK

				} else if (toggle.type == "select") {
					
					let slug = eleventyConfig.getFilter('slug');

					toggle_group_contents += `<select name="${ slug(toggle.name) }" id="select-${name}-${ slug(toggle.name) }">
						${toggle.values.map(value => `<option value="${value}">${value}</option>`).join('\n')}
					</select>`
					// https://joshuajohnson.co.uk/Choices/

				}

				toggle_group_contents += `</div>`;

			}

			toggles += `<div class="toggle-group">
				<div class="group-details">
					<div class="group-name">${toggle_group.name}</div>
				</div>
				<div class="group-contents">
					${toggle_group_contents}
				</div>
			</div>`;
		}

		return `<div class="graph-with-toggles">
			<aside>
				<div class="about">
					<h1>${title}</h1>
				</div>
				<div class="toggles">
					${toggles}
				</div>
			</aside>
			<div class="graph">
				<div id="graph-container-${name}"></div>
			</div>
		</div>
		<script type="text/javascript">
			graphs.push("${name}")
		</script>
		`;
	});
	

	// Add markdown filter.
	var options = {
		html: true,
		typographer: true
	};
	var md = require('markdown-it')(options);
	
	eleventyConfig.addFilter("markdown", function(rawString) {
		return md.render(rawString);
	});

	// Add filter to remove hidden posts from collections.post.
	eleventyConfig.addFilter("removeHiddenPostsAndPages", function(collection) {
		let rval = [];
		for (let p of collection) {
			if (!p.data.hasOwnProperty('hidden') || !p.data.hidden) {
				if (!p.data.tags.includes('page')) {
					rval.push(p);
				}
			}
		}
		return rval;
	});

	// Add filter to group posts by section.
	eleventyConfig.addFilter("groupBySection", function(collection) {
		let rval = [],
			sections = [...new Set(collection.map(post => post.data.section))];

		sections.forEach(function(section, idx) {
			rval.push({
				name: section,
				index: idx + 1,
				posts: collection.filter(d => d.data.section == section)
			})
		})

		return rval;
	})

	// Add filter to group posts by tag.
	eleventyConfig.addFilter("groupByType", function(collection) {
		let rval = [],
			types = [...new Set(collection.map(post => post.data.type))];

		let colours = ["green", "bronze", "silver", "blue", "yellow"];

		types.forEach(function(type, idx) {
			rval.push({
				name: type,
				index: idx + 1,
				colour: colours[idx % colours.length],
				posts: collection.filter(d => d.data.type == type)
			})
		})

		return rval;
	})


	// Add date format filter.
	eleventyConfig.addFilter("readable_date", function(value) {
		if (value === undefined) {
			return '';
		}

		var d = (new Date(value)),
			months = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			];

		var date = d.getDate();

		return(`${date}&nbsp;${months[d.getMonth()].substr(0,3)}&nbsp;${d.getFullYear()}`);
	});

	// Add year filter for dates.
	eleventyConfig.addFilter("get_year", function(value) {
		if (value === undefined) {
			return '';
		}

		var d = (new Date(value));

		return(`${d.getFullYear()}`);
	});

	// Add markdown filter.
	var options = {
		html: true,
		typographer: true
	};
	var md = require('markdown-it')(options)
		.use(require('markdown-it-footnote'))
		.use(require('markdown-it-deflist'))
		.use(require('markdown-it-attribution'));
		// .use(require("markdown-it-anchor"))
		// .use(require("markdown-it-toc-done-right"));
	
	md.renderer.rules.footnote_ref = (tokens, idx, options, env, slf) => {
		var id      = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
		var caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
		var refid   = id;

		if (tokens[idx].meta.subId > 0) {
		refid += ':' + tokens[idx].meta.subId;
		}

		// return '<sup class="footnote-ref"><a href="#fn' + id + '" id="fnref' + refid + '">' + caption + '</a></sup>';
		// return '<a href="#fn' + id + '" class="footnote-ref" id="fnref' + refid + '" role="doc-noteref"><sup>' + caption + '</sup></a>';
		return `<label id="fnref${id}" for="sn-${id}" class="margin-toggle sidenote-number"></label>
			<input type="checkbox" id="sn-${id}" class="margin-toggle"/>
			<span id="#sidenote-${id}" class="sidenote"></span>
		`;
	};
	md.renderer.rules.footnote_block_open = () => (
		'<div class="footnotes">\n' +
		'<ol class="footnotes-list">\n'
	);
	md.renderer.rules.footnote_block_close = () => (
		'</ol>\n' +
		'</div>\n'
	);

	eleventyConfig.addFilter("markdown", function(rawString) {
		return md.render(rawString);
	});

	// Add filter to convert footnotes to sidenotes.

	eleventyConfig.addFilter("footnotes_to_sidenotes", function(html) {

		let new_html = html;

		// Extract index and html for each of the footnotes.
		let regex = /<li id="fn\d+" class="footnote-item"><p>((.|\n)*?)<\/p>\n<\/li>/g;
		let footnotes = Array.from(html.matchAll(regex), m => m[1]);
		footnotes = footnotes.map(function(fn) {
			let idx = fn.match(/#fnref(\d+)/g)[0].replace(/#fnref/g, ''),
				text = fn.replace(/ <a href="#fnref\d+" class="footnote-backref">↩︎<\/a>/g, '');
				side = text[0];
			text = text.replace(/^(R|L) /g, '');
			return { idx, side, text };
		});

		// Insert html into sidenotes.
		footnotes.forEach(function(fn) {

			let sidenote_html = `<span id="#sidenote-${fn.idx}" class="sidenote ${fn.side}">${fn.text}</span>`,
				regex = `<span id="#sidenote-${fn.idx}" class="sidenote"><\/span>`;
			regex = new RegExp(regex, "g");
			new_html = new_html.replace(regex, sidenote_html);

		})


		// Strip footnotes list from end of post.
		new_html = new_html.replace(/<div class="footnotes">(.|\n)*<\/div>/g, '');

		return new_html;
	});

	// Add filter to format authors for BibTeX.
	eleventyConfig.addFilter("bibtex_authors", function(authors) {
		if (authors === undefined) {
			return '';
		}

		return authors
			.map(a => `${a.name.last}, ${a.name.first}`)
			.join(' and ');
	});

	// Add plugins to markdown processor.
	var markdownIt = require("markdown-it");
	var markdownItFootnote = require("markdown-it-footnote");
	// var markdownItAnchor = require("markdown-it-anchor");
	// var markdownItTOC = require("markdown-it-toc-done-right");
	var options = {
		html: true,
		typographer: true
	};
	var markdownLib = markdownIt(options)
		.use(require('markdown-it-deflist'))
		.use(markdownItFootnote);
		// .use(markdownItAnchor);
		// .use(markdownItTOC, {
		// 	callback: function(html, ast) {
		// 		return(html);
		// 	}
		// });

	markdownLib.renderer.rules.footnote_block_open = () => (
		'<div class="footnotes">\n' +
		'<ol class="footnotes-list">\n'
	);
	markdownLib.renderer.rules.footnote_block_close = () => (
		'</ol>\n' +
		'</div>\n'
	);

	eleventyConfig.setLibrary("md", markdownLib);

	return {

		dir: {
			input: "../src",
			output: "../docs",
			includes: "_includes"
		},

		templateFormats: [
			"html",
			"css",
			"njk",
			"md",
			"js",
			"png",
			"jpg",
			"svg",
			"woff",
			"woff2",
			"ttf",
			"ico",
			"csv",
			"json",
			"pdf",
			"txt",
			"htaccess"
		]

	}
};

