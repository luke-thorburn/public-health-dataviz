---json
{
	"permalink": false,
	"templateEngineOverride": "njk",
	"tags": ["post"],
	
	"section": "COVID-19 Pandemic",
	"type": "Interactive",
	
	"title": "Pandemic Trade-offs",
	"description": "A tool for exploring the costs and benefits of policy decisions in the context of the SARS-CoV-2 vaccine rollout.",
	"date": "2021-03-11",
	"date_updated": "2021-03-12",
	"slug": "pandemic-trade-offs",
	"katex": true,
	"hidden": true,
	"d3": true,

	"skipToLinks": [
		{
			"targetID": "graph-ABM",
			"text": "Infections",
			"image": "preview-ABM.svg"
		},
		{
			"targetID": "graph-PMSLT-HALY",
			"text": "Health outcomes",
			"image": "preview-PMSLT-HALY.svg"
		},
		{
			"targetID": "graph-PMSLT-prob",
			"text": "Minimising harms",
			"image": "preview-PMSLT-prob.svg"
		}
	],

	"contributors": [
		{ "name": "Patrick Abraham" },		
		{ "name": "Driss Ait Ouakrim" },
		{ "name": "Laxman Bablani" },
		{ "name": "Tony Blakely" },
		{ "name": "Grace Dong" },
		{ "name": "Nathan Grills" },
		{ "name": "Ameera Katar" },
		{ "name": "Melissa Makin" },
		{ "name": "Luke Thorburn", "link": "https://lukethorburn.com" },
		{ "name": "Tim Wilson" }
	]
}
---

This webpage allows you to compare COVID-19 policy responses (e.g. vaccination coverage and effectiveness, impacts of lockdowns on conditions other than SARS-CoV-2 infection rates).  We have run 600+ scenarios, 100 iterations each, through an agent-based model to estimate SARS-CoV-2 infection rates, then run each of these scenarios and iterations through an integrated epidemiological and economic model to estimate health loss (in health adjusted life years; HALYs; coming soon), health expenditure and GDP costs – with the proportion of times each scenario is optimal from either a health or partial societal perspective (including GDP).

<a href="/pandemic-trade-offs-detail/" class="button-small with-arrow" target="_blank" rel="noopener noreferrer">View modelling details</a>

---

Introduce the research.

List side-effects of restrictions, to make concrete. Both negative and positive. Lost revenue, unemployment, depression, anxiety, suicide, domestic violence, alcohol consumption, road traffic crashes, work-life balance, lost education, deferred medical treatment / screening, family time, access to green space, ...

---

## Case numbers by strategy

Add vaccine phases to graph.

{% import_graph "ABM", slug %}


---

## Unintended consequences

#### HALYS/DALYS

Briefly describe which consequences are included.

Introduce the concept of HALYs/DALYs, and how they are estimated.

{% import_graph "PMSLT-HALY", slug %}

{% import_graph "PMSLT-prob", slug %}

#### Thorny Questions

- What monetary value should be placed on a HALY?

#### Important considerations

- Regardless of policy response, there is still a pandemic. Need to compare each scenario to other ways of responding to the pandemic, not to the pre-pandemic world.

---

## Limitations

- Difficulty in estimating impacts of different restriction levels.
- This is just one way of approaching decision-making. Implies a particular ethical framework (\~utilitarianism), which may not be correct.

---

Add links to papers/preprints.