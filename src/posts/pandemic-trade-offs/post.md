---json
{
	"permalink": false,
	"templateEngineOverride": "njk",
	"tags": ["post"],
	
	"section": "Coronavirus",
	"type": "Interactive",
	
	"title": "Pandemic Tradeoffs",
	"date": "2021-01-02",
	"date_updated": "2021-01-02",
	"slug": "pandemic-trade-offs",
	"description": "Balancing the benefits and harms of government restrictions as the vaccines are rolled out.",
	"katex": true,
	"hidden": false,
	"d3": true
}
---

Introduce the research.

List side-effects of restrictions, to make concrete. Both negative and positive. Lost revenue, unemployment, depression, anxiety, suicide, domestic violence, alcohol consumption, road traffic crashes, work-life balance, lost education, deferred medical treatment / screening, family time, access to green space, ...

---

## Stages and Strategies

{% import_content "fig-stages", slug %}

---

{% import_content "fig-strategies", slug %}

---

Maybe change this graph so that all 4 strategies are visible at once.

{% import_graph "ABM", slug %}



## What non-COVID consequences are included in the model? How are they quantified?

Briefly describe which consequences are included.

Introduce the concept of HALYs/DALYs, and how they are estimated.

## Main tool

Provide dropdowns/sliders for key assumptions:

- Effect of restrictions on each consequence
- In each case, default to sensible values emerging from lit review.
	- Anxiety
	- Depression
	- Unemployment
	- ...
- $/HALY
- Perspect (health system, partial-societal)

As assumptions are updated, update main graph of the probability each policy scenario is optimal. Can choose what the x-axis is (though $/HALY by default).

<div class="fig side-3">
	<img src="/img/lockdown2.png" />
</div>

### Thorny Questions

- What monetary value should be placed on a HALY?

### Important considerations

- Regardless of policy response, there is still a pandemic. Need to compare each scenario to other ways of responding to the pandemic, not to the pre-pandemic world.

### Limitations

- Difficulty in estimating impacts of different restriction levels.
- This is just one way of approaching decision-making. Implies a particular ethical framework (\~utilitarianism), which may not be correct.