module.exports = function(eleventyConfig) {

	
	// refs = JSON.parse(refs);

	// Add filter to extract toggle specification from graph specification.
	const fs = require('fs');
	eleventyConfig.addFilter("get_graph_toggles", function(postData) {

		let spec = fs.readFileSync(`../src/posts/${postData.slug}/${postData.vega_graph_spec}`).toString(),
			toggles = JSON.parse(spec)['uom-toggles']['toggle-groups'];

		return toggles;

	})

	eleventyConfig.addFilter("get_graph_title", function(postData) {

		let spec = fs.readFileSync(`../src/posts/${postData.slug}/${postData.vega_graph_spec}`).toString(),
			title = JSON.parse(spec)['uom-title'];

		return title;

	})


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

	// Add filter to format authors for BibTeX.
	eleventyConfig.addFilter("bibtex_authors", function(authors) {
		if (authors === undefined) {
			return '';
		}

		return authors
			.map(a => `${a.name.last}, ${a.name.first}`)
			.join(' and ');
	});

	eleventyConfig.addFilter("homepage_authors", function(authors) {
		if (authors === undefined) {
			return '';
		}

		let txt = '';
		for (let k = 0; k < authors.length; k++) {
			if (k < authors.length - 2) {
				txt += `${authors[k].name.first}&nbsp;${authors[k].name.last}, `;
			} else if (k == authors.length - 2) {
				txt += `${authors[k].name.first}&nbsp;${authors[k].name.last} &amp; `;
			} else if (k == authors.length - 1) {
				txt += `${authors[k].name.first}&nbsp;${authors[k].name.last}`;
			}
		}
		return txt;
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

	eleventyConfig.addFilter("citation_authors", function(authors) {
		if (authors === undefined) {
			return '';
		}

		let txt = '';
		for (let k = 0; k < authors.length; k++) {
			if (k < authors.length - 2) {
				txt += `${authors[k].name.last}, `;
			} else if (k == authors.length - 2) {
				txt += `${authors[k].name.last} and `;
			} else if (k == authors.length - 1) {
				txt += `${authors[k].name.last}`;
			}
		}
		return txt;
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

