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

### Stages and Strategies

{% import_content "fig-stages", slug %}


Note: triggers on the following graph are currently not-quite accurate.

{% import_content "fig-strategies", slug %}

---

### Case numbers by strategy

Add vaccine phases to graph.

{% import_graph "ABM", slug %}


---

### Overall cost by strategy

#### HALYS/DALYS

Briefly describe which consequences are included.

Introduce the concept of HALYs/DALYs, and how they are estimated.

<div class="fig outset-1">
	<img src="/img/lockdown2.png" />
</div>

#### Thorny Questions

- What monetary value should be placed on a HALY?

#### Important considerations

- Regardless of policy response, there is still a pandemic. Need to compare each scenario to other ways of responding to the pandemic, not to the pre-pandemic world.

---

### Limitations

- Difficulty in estimating impacts of different restriction levels.
- This is just one way of approaching decision-making. Implies a particular ethical framework (\~utilitarianism), which may not be correct.