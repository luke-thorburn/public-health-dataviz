---json
{
	"permalink": false,
	"templateEngineOverride": false,
	"tags": ["post"],
	"title": "Generic template post",
	"date": "2021-01-02",
	"date_updated": "2021-01-02",
	"slug": "template",
	"cover": "/img/placeholder.png",
	"description": "This is a template post, with which to refine the stylesheets for posts in general.",
	"authors": [
		{
			"name": { "first": "Luke", "last": "Thorburn", "url": "https://lukethorburn.com" },
			"affiliation": { "text": "University of Melbourne", "url": "https://unimelb.edu.au" }
		},
		{
			"name": { "first": "Liam", "last": "Carroll" },
			"affiliation": { "text": "Buckley's Chance", "url": "/" }
		}
	],
	"acknowledgements": "Thanks to Joe Blow and Mary Doe.",
	"katex": true,
	"hidden": false
}
---


   <script>
      // Assign the specification to a local variable vlSpec.
      var vlSpec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
        data: {
          values: [
            {a: 'C', b: 2},
            {a: 'C', b: 7},
            {a: 'C', b: 4},
            {a: 'D', b: 1},
            {a: 'D', b: 2},
            {a: 'D', b: 6},
            {a: 'E', b: 8},
            {a: 'E', b: 4},
            {a: 'E', b: 7}
          ]
        },
        mark: 'bar',
        encoding: {
          y: {field: 'a', type: 'nominal'},
          x: {
            aggregate: 'average',
            field: 'b',
            type: 'quantitative',
            axis: {
              title: 'Average of b'
            }
          }
        }
      };

      // Embed the visualization in the container with id `vis`
      vegaEmbed('#graph', vlSpec);
    </script>