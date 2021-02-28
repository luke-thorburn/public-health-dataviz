// ============================================================================== //
// ============================================================================== //
// DEFINE DATA ================================================================== //
// ============================================================================== //

var strategies = {
		"Aggressive Elimination": {
			name: "Aggressive Elimination",
			description: "Aim for no community transmission, quickly.",
			transitions: [
				{ from: "1",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "1b",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "2",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "3",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "1",		to: "3", 	trigger: "7-day average > 1.5" },
				{ from: "1b",		to: "3", 	trigger: "7-day average > 1.5" },
				{ from: "2",		to: "3", 	trigger: "7-day average > 1.5" },
				{ from: "1",		to: "2", 	trigger: "2+ cases in last 14 days" },
				{ from: "1b",		to: "2", 	trigger: "2+ cases in last 14 days" },
				{ from: "1",		to: "1b", 	trigger: "any new case" },
				{ from: "4",		to: "3", 	trigger: "7-day average < 5" },
				{ from: "3",		to: "2", 	trigger: "7-day average < 1" },
				{ from: "2",		to: "1b", 	trigger: "no cases in 7 days" },
				{ from: "1b",		to: "1", 	trigger: "no cases in 28 days" },
				{ from: "1",		to: "1", 	trigger: "" },
				{ from: "1b",		to: "1b", 	trigger: "" },
				{ from: "2",		to: "2", 	trigger: "" },
				{ from: "3",		to: "3", 	trigger: "" },
				{ from: "4",		to: "4", 	trigger: "" },
			]
		},
		"Moderate Elimination": {
			name: "Moderate Elimination",
			description: "Aim for no community transmission, less quickly.",
			transitions: [
				{ from: "1",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "1b",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "2",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "3",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "1",		to: "3", 	trigger: "7-day average > 1.5" },
				{ from: "1b",		to: "3", 	trigger: "7-day average > 1.5" },
				{ from: "2",		to: "3", 	trigger: "7-day average > 1.5" },
				{ from: "1",		to: "2", 	trigger: "2+ cases in last 14 days" },
				{ from: "1b",		to: "2", 	trigger: "2+ cases in last 14 days" },
				{ from: "1",		to: "1b", 	trigger: "any new case" },
				{ from: "4",		to: "3", 	trigger: "7-day average < 5" },
				{ from: "3",		to: "2", 	trigger: "7-day average < 1" },
				{ from: "2",		to: "1b", 	trigger: "no cases in 7 days" },
				{ from: "1b",		to: "1", 	trigger: "no cases in 28 days" },
				{ from: "1",		to: "1", 	trigger: "" },
				{ from: "1b",		to: "1b", 	trigger: "" },
				{ from: "2",		to: "2", 	trigger: "" },
				{ from: "3",		to: "3", 	trigger: "" },
				{ from: "4",		to: "4", 	trigger: "" },
			]
		},
		"Tight Suppression": {
			name: "Tight Suppression",
			description: "Aim for 1-5 new cases per million people per day.",
			transitions: [
				{ from: "1",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "1b",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "2",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "3",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "1",		to: "3", 	trigger: "7-day average > 1.5" },
				{ from: "1b",		to: "3", 	trigger: "7-day average > 1.5" },
				{ from: "2",		to: "3", 	trigger: "7-day average > 1.5" },
				{ from: "1",		to: "2", 	trigger: "2+ cases in last 14 days" },
				{ from: "1b",		to: "2", 	trigger: "2+ cases in last 14 days" },
				{ from: "1",		to: "1b", 	trigger: "any new case" },
				{ from: "4",		to: "3", 	trigger: "7-day average < 5" },
				{ from: "3",		to: "2", 	trigger: "7-day average < 1" },
				{ from: "2",		to: "1b", 	trigger: "no cases in 7 days" },
				{ from: "1b",		to: "1", 	trigger: "no cases in 28 days" },
				{ from: "1",		to: "1", 	trigger: "" },
				{ from: "1b",		to: "1b", 	trigger: "" },
				{ from: "2",		to: "2", 	trigger: "" },
				{ from: "3",		to: "3", 	trigger: "" },
				{ from: "4",		to: "4", 	trigger: "" },
			]
		},
		"Loose Suppression": {
			name: "Loose Suppression",
			description: "Aim for 5-25 new cases per million people per day.",
			transitions: [
				{ from: "1",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "1b",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "2",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "3",		to: "4", 	trigger: "7-day average > 7.5" },
				{ from: "1",		to: "3", 	trigger: "7-day average > 1.5" },
				{ from: "1b",		to: "3", 	trigger: "7-day average > 1.5" },
				{ from: "2",		to: "3", 	trigger: "7-day average > 1.5" },
				{ from: "1",		to: "2", 	trigger: "2+ cases in last 14 days" },
				{ from: "1b",		to: "2", 	trigger: "2+ cases in last 14 days" },
				{ from: "1",		to: "1b", 	trigger: "any new case" },
				{ from: "4",		to: "3", 	trigger: "7-day average < 5" },
				{ from: "3",		to: "2", 	trigger: "7-day average < 1" },
				{ from: "2",		to: "1b", 	trigger: "no cases in 7 days" },
				{ from: "1b",		to: "1", 	trigger: "no cases in 28 days" },
				{ from: "1",		to: "1", 	trigger: "" },
				{ from: "1b",		to: "1b", 	trigger: "" },
				{ from: "2",		to: "2", 	trigger: "" },
				{ from: "3",		to: "3", 	trigger: "" },
				{ from: "4",		to: "4", 	trigger: "" },
			]
		}
	},
	stages = ["TRIGGER", "1", "1b", "2", "3", "4"],
	currentStrategy = "Aggressive Elimination",
	currentFrom = "2",
	currentTo = "4",
	currentX, currentY,
	currentTheta = Math.PI/2;

// Generate ID and direction for each transition.

for (let strategy of Object.keys(strategies)) {
	strategies[strategy].transitions.forEach(function(d) {
		d.id = `${d.from}-${d.to}`;

		if (stages.indexOf(d.from) < stages.indexOf(d.to)) {
			d.direction = 'tighten';
		} else if (stages.indexOf(d.from) > stages.indexOf(d.to)) {
			d.direction = 'ease';
		} else {
			d.direction = 'none';
		}
	})
}

// ============================================================================== //
// ============================================================================== //
// SETUP ======================================================================== //
// ============================================================================== //

var width = document.querySelector("#fig-strategies").clientWidth,
	ratio = .75,
	height = 300, //ratio * width,
	m = [0, 120, 40, 120],
	w = width - m[1] - m[3],
	h = height - m[0] - m[2],

	yScale,
	xScale,
	bw, ybw,
	aw = 40,

	bracketL, backetM, bracketR,
	bracketTextBackgroundL, bracketTextBackgroundM, bracketTextBackgroundR,
	bracketTextL, bracketTextM, bracketTextR;

var svg = d3.select("#fig-strategies");

svg.attr("height", height);

function redraw() {
	d3.selectAll(".alt-view").remove();
	draw();
}

d3.select(window)
	.on("resize", function() {
		
		width = document.querySelector("#fig-strategies").clientWidth;
		// height = 600, // ratio * width;
		w = width - m[1] - m[3];
		h = height - m[0] - m[2];
		
		svg.attr("height", height);
		
		redraw();
	});

var xScale, yScale;

// ============================================================================== //
// ============================================================================== //
// DRAW ========================================================================= //
// ============================================================================== //

// for (let s1 of stages) {
// 	for (let s2 of stages) {
// 		if (s1 != s2) {
// 			transitions.push({from: s1, to: s2, id: `${s1}-${s2}`});
// 		}
// 	}
// }

// let As = [];
// for (let t of transitions) {
// 	t.arrows.forEach(function(d) {
// 		d.group = t.group;
// 		d.width = t.width;
// 	})
// 	As = As.concat(t.arrows);
// 	As.push({id: `spacer-${t.group}`});
// }
// As.pop();

var stageCols = {
	"1": 	"#f0f9e8",
	"1b": 	"#bae4bc",
	"2": 	"#7bccc4",
	"3": 	"#43a2ca",
	"4": 	"#0868ac",
	"TRIGGER": "transparent"
}

function generateSignpost(xPos, yPos, theta) {
	let sWidth = ybw * .15,
		sHalfWidth = sWidth/2,
		A0y = yPos + ybw/2,
		l = xPos - ybw,
		r = xPos - 10,
		t = A0y - sHalfWidth,
		b = A0y + sHalfWidth,
		A1x = r + 10,
		A1y = A0y,
		DIRx = Math.cos(theta),
		DIRy = Math.sin(theta),
		ORTHx = DIRy,
		ORTHy = DIRx,
		r1 = 10,
		r2 = .8*ybw - 2.5*sHalfWidth,
		r3 = .8*ybw,
		A2x = A1x + r2*DIRx,
		A2y = A1y + r2*DIRy;

	function q(h, x1, y1, x2, y2) {
		let m = (y2 - y1) / (x2 - x1);
		return ( (h - y1) / m ) + x1;
	}

	let q1 = q(t, A1x + r1*DIRx + sHalfWidth*ORTHx, A1y + r1*DIRy - sHalfWidth*ORTHy, A2x + sHalfWidth*ORTHx, A2y - sHalfWidth*ORTHy),
		q2 = q(b, A2x - sHalfWidth*ORTHx, A2y + sHalfWidth*ORTHy, A1x + r1*DIRx - sHalfWidth*ORTHx, A1y + r1*DIRy + sHalfWidth*ORTHy);

	if (isNaN(q1)) {
		q1 = A1x;
	}
	if (isNaN(q2)) {
		q2 = A1x;
	}

	let pth = `M ${l} ${t} ` + // A
			`L ${r} ${t} ` + // B
			`Q ${q1} ${t}, ${A1x + r1*DIRx + sHalfWidth*ORTHx} ${A1y + r1*DIRy - sHalfWidth*ORTHy} ` + // C
			`L ${A2x + sHalfWidth*ORTHx} ${A2y - sHalfWidth*ORTHy} ` + // D
			`L ${A2x + 2.5*sHalfWidth*ORTHx} ${A2y - 2.5*sHalfWidth*ORTHy} ` + // E
			`L ${A1x + r3*DIRx} ${A1y + r3*DIRy} ` + // F
			`L ${A2x - 2.5*sHalfWidth*ORTHx} ${A2y + 2.5*sHalfWidth*ORTHy} ` + // G
			`L ${A2x - sHalfWidth*ORTHx} ${A2y + sHalfWidth*ORTHy} ` + // H
			`L ${A1x + r1*DIRx - sHalfWidth*ORTHx} ${A1y + r1*DIRy + sHalfWidth*ORTHy} ` + // I
			`Q ${q2} ${b}, ${r} ${b} ` + // J
			`L ${l} ${b} ` + // K
			`Z`;
	
	return pth;
}

function interpolateSignpost(d, startX, startY, startTheta) {
	
	let endX = xScale(d.id) + bw/2,
		endY = yScale(d.from),
		endTheta = (d.direction == "tighten") ? Math.PI/2 : ( (d.direction == "ease") ? -1*Math.PI/2 : 0 );
	
	return function(t) {
		
		currentX = startX + t*(endX - startX),
		currentY = startY + t*(endY - startY),
		currentTheta = endTheta;
		
		return generateSignpost(
			currentX,
			currentY,
			startTheta + t*(endTheta-startTheta)
		)
	}
}

function draw() {

	let transitions = strategies[currentStrategy]
						.transitions
						.filter(d => d.from == currentFrom);

	// Define scales.

	yScale = d3.scaleBand()
		.domain(stages)
		.range([m[0], h+m[0]]);

	xScale = d3.scaleBand()
		.domain(transitions.map(d => d.id))
		.range([m[3], width - yScale.bandwidth()/2 - m[1]])
		.paddingInner(.1)
		.paddingOuter(.1)

	ybw = yScale.bandwidth();
	bw = xScale.bandwidth();

	currentX = xScale(`${currentFrom}-${currentTo}`) + bw/2;
	currentY = yScale(currentFrom);


	// Draw TIGHTENING / EASING brackets.

	let b = yScale.range()[1] + 10,
		t = yScale.range()[1] + m[2]/2,
		show1 = transitions.map(d => d.direction).includes('tighten'),
		l1 = show1 ? xScale(transitions.filter(d => d.direction == 'tighten')[0].id) : 0,
		r1 = show1 ? xScale(transitions.filter(d => d.direction == 'tighten').slice(-1)[0].id) + bw : 0,
		show2 = transitions.map(d => d.direction).includes('ease'),
		l2 = show2 ? xScale(transitions.filter(d => d.direction == 'ease')[0].id) : 0,
		r2 = show2 ? xScale(transitions.filter(d => d.direction == 'ease').slice(-1)[0].id) + bw : 0,
		show3 = transitions.map(d => d.direction).includes('none'),
		l3 = show3 ? xScale(transitions.filter(d => d.direction == 'none')[0].id) : 0,
		r3 = show3 ? xScale(transitions.filter(d => d.direction == 'none').slice(-1)[0].id) + bw : 0;

	bracketL = svg.append("path")
		.attr("class", "alt-view")
		.attr("d", `M ${l1} ${b} L ${l1} ${t} L ${r1} ${t} L ${r1} ${b}`)
		.attr("stroke", "#000000")
		.attr("fill", "transparent")
		.attr("opacity", show1 ? 1 : 0);

	bracketM = svg.append("path")
		.attr("class", "alt-view")
		.attr("d", `M ${l2} ${b} L ${l2} ${t} L ${r2} ${t} L ${r2} ${b}`)
		.attr("stroke", "#000000")
		.attr("fill", "transparent")
		.attr("opacity", show2 ? 1 : 0);

	bracketR = svg.append("path")
		.attr("class", "alt-view")
		.attr("d", `M ${l3} ${b} L ${l3} ${t} L ${r3} ${t} L ${r3} ${b}`)
		.attr("stroke", "#000000")
		.attr("fill", "transparent")
		.attr("opacity", show3 ? 1 : 0);

	bracketTextBackgroundL = svg.append("text")
		.attr("class","alt-view")
		.attr("x", (l1+r1)/2)
		.attr("y", yScale.range()[1] + m[2]/2)
		.text("TIGHTENING")
		.attr("alignment-baseline", "middle")
		.attr("text-anchor", "middle")
		.attr("fill", "#fff")
		.attr("stroke", "#fff")
		.attr("stroke-width", 10)
		.attr("opacity", show1 ? 1 : 0);

	bracketTextL = svg.append("text")
		.attr("class","alt-view")
		.attr("x", (l1+r1)/2)
		.attr("y", yScale.range()[1] + m[2]/2)
		.text("TIGHTENING")
		.attr("alignment-baseline", "middle")
		.attr("text-anchor", "middle")
		.attr("fill", "#000000")
		.attr("opacity", show1 ? 1 : 0);

	bracketTextBackgroundM = svg.append("text")
		.attr("class","alt-view")
		.attr("x", (l2+r2)/2)
		.attr("y", yScale.range()[1] + m[2]/2)
		.text("EASING")
		.attr("alignment-baseline", "middle")
		.attr("text-anchor", "middle")
		.attr("fill", "#fff")
		.attr("stroke", "#fff")
		.attr("stroke-width", 10)
		.attr("opacity", show2 ? 1 : 0);

	bracketTextM = svg.append("text")
		.attr("class","alt-view")
		.attr("x", (l2+r2)/2)
		.attr("y", yScale.range()[1] + m[2]/2)
		.text("EASING")
		.attr("alignment-baseline", "middle")
		.attr("text-anchor", "middle")
		.attr("fill", "#000")
		.attr("opacity", show2 ? 1 : 0);

	bracketTextBackgroundR = svg.append("text")
		.attr("class","alt-view")
		.attr("x", (l3+r3)/2)
		.attr("y", yScale.range()[1] + m[2]/2)
		.text("NO CHANGE")
		.attr("alignment-baseline", "middle")
		.attr("text-anchor", "middle")
		.attr("fill", "#fff")
		.attr("stroke", "#fff")
		.attr("stroke-width", 10)
		.attr("opacity", show3 ? 1 : 0);

	bracketTextR = svg.append("text")
		.attr("class","alt-view")
		.attr("x", (l3+r3)/2)
		.attr("y", yScale.range()[1] + m[2]/2)
		.text("NO CHANGE")
		.attr("alignment-baseline", "middle")
		.attr("text-anchor", "middle")
		.attr("fill", "#000")
		.attr("opacity", show3 ? 1 : 0);

	// Draw washed-out background rows.

	rows = svg.append("g")
		.attr("class","rows alt-view")
		.selectAll("path");
	rows
		.data(stages.filter(d => d != "TRIGGER"))
		.enter()
		.append("path")
		.attr("class", d => `alt-view row row-${d}`)
		.attr("d", d => {
			let y = yScale(d),
				l = xScale.range()[0],
				r = xScale.range()[1];
			return `M ${l} ${y} L ${r - ybw/4} ${y} L ${r} ${y + ybw/2} L ${r - ybw/4} ${y + ybw} L ${l} ${y + ybw} L ${l + ybw/4} ${y + ybw/2} Z`;
		})
		.attr("fill", d => stageCols[d])
		.attr("opacity", 0.2);

	// Draw white boundary lines between triggers.
	boundaries = svg.append("g")
		.attr("class", "boundaries alt-view")
		.selectAll("path");
	boundaries
		.data([...Array(10).keys()])
		.enter()
		.append("path")
		.attr("class", "alt-view")
		.attr("d", (d, i) => {
			let x;
			if (i < transitions.length - 1) {
				d = transitions[i];
				x = xScale(d.id) + bw + xScale.step()*xScale.paddingInner()*.5;
			} else {
				x = xScale.range()[1];
			}
			return `M ${x} ${yScale("1")} L ${x} ${yScale("4") + ybw}`;
		})
		.attr("stroke", "#fff")
		.attr("fill", "transparent")
		.attr("stroke-width", 4)
		.attr("opacity", (d, i) => {
			return (i < transitions.length - 1) ? 1 : 0
		});

	// Draw currently active path.

	partialRowLeft = svg.append("g")
		.attr("class","partial-row-left alt-view")
		.selectAll("path");
	partialRowLeft
		.data(transitions.filter(d => d.from == currentFrom & d.to == currentTo))
		.enter()
		.append("path")
		.attr("class", d => `alt-view partial-row`)
		.attr("d", d => {
			let y = yScale(d.from),
				x = xScale(d.id) + (bw/2) - (aw/2) + 2,
				l = xScale.range()[0],
				r = xScale.range()[1];
			return `M ${l} ${y} ` +
				`L ${x} ${y} ` +
				`L ${x} ${y + ybw} ` +
				`L ${l} ${y + ybw} ` +
				`L ${l + ybw/4} ${y + ybw/2} ` +
				`Z`;
		})
		.attr("fill", d => stageCols[d.from]);

	partialRowRight = svg.append("g")
		.attr("class","partial-row-right alt-view")
		.selectAll("path");
	partialRowRight
		.data(transitions.filter(d => d.from == currentFrom & d.to == currentTo))
		.enter()
		.append("path")
		.attr("class", d => `alt-view partial-row`)
		.attr("d", d => {
			let y = yScale(d.to),
				x = xScale(d.id) + (bw/2) + (aw/2) - 2,
				l = xScale.range()[0],
				r = xScale.range()[1];
			return `M ${x} ${y} ` +
				`L ${r - ybw/4} ${y} ` +
				`L ${r} ${y + ybw/2} ` +
				`L ${r - ybw/4} ${y + ybw} ` +
				`L ${x} ${y + ybw} ` +
				`Z`;
		})
		.attr("fill", d => stageCols[d.to]);

	gradient = svg.append("defs")
			.attr("class", "alt-view")
		.append("linearGradient")
			.attr("class", "alt-view")
			.attr("id", "transitionGradient")
			.attr("x1", 0)
			.attr("x2", .1)
			.attr("y1", .1)
			.attr("y2", .9)
		.selectAll("stop");
	gradient
		.data([
			{ offset: "0%", colour: stageCols[currentFrom] },
			{ offset: "100%", colour: stageCols[currentTo] }
		])
		.enter()
		.append("stop")
		.attr("offset", d => d.offset)
		.attr("stop-color", d=> d.colour);

	arrow = svg.append("g")
		.attr("class", "arrow alt-view")
		.selectAll("path");
	arrow
		.data(transitions.filter(d => d.from == currentFrom & d.to == currentTo))
		.enter()
		.append("path")
		.attr("class", d => `alt-view arrow`)
		.attr("d", d => {
			
			let l = xScale(d.id) + bw/2 - aw/2,
				r = l + aw,

				st = yScale(d.from),
				sb = yScale(d.from) + ybw,
				et = yScale(d.to),
				eb = yScale(d.to) + ybw;

			return `M ${l} ${st} ` + // A
				`L ${l} ${Math.min(st,eb)} ` + // B
				`Q ${d.direction == "tighten" ? r : l} ${Math.min(st,et)}, ${r} ${Math.min(sb,et)} ` + // C
				`L ${r} ${et} ` + // D
				`L ${r} ${eb} ` + // E
				`L ${r} ${Math.max(eb,st)} ` + // F
				`Q ${d.direction == "tighten" ? l : r} ${Math.max(eb,sb)}, ${l} ${Math.max(et,sb)} ` + // G
				`L ${l} ${sb} ` + // H
				`Z `;

		})
		.attr("fill", d => `url(#transitionGradient)`);

	// Draw row text.

	rowText = svg.append("g")
		.attr("class","rowText alt-view")
		.selectAll("text");
	rowText
		.data([{ from: currentFrom }])
		.enter()
		.append("text")
		.attr("class","alt-view")
		.attr("x", 0)
		.attr("y", d => yScale(d.from) + yScale.bandwidth() / 2)
		.text(d => `Current Stage ${d.from}`)
		.attr("alignment-baseline", "central")
		.attr("fill", "#000");
	
	// Draw signpost arrows.

	signpost = svg.append("g")
		.attr("class", "signpost alt-view")
		.selectAll("path");
	signpost
		.data(transitions.filter(d => d.from == currentFrom & d.to == currentTo))
		.enter()
		.append("path")
		.attr("class", d => `alt-view direction direction-${d.id}`)
		.attr("d", d => generateSignpost(xScale(d.id) + bw/2, yScale(d.from), currentTheta))
		.attr("stroke", "#000000")
		.attr("fill", "#ffffff");
	
	// Draw invisible hover targets.

	hoverTargets = svg.append("g")
		.attr("class","hover-targets alt-view")
		.selectAll("path");
	hoverTargets
		.data(transitions)
		.enter()
		.append("path")
		.attr("class","alt-view hover-target")
		.attr("d", (d, idx) => {
			let x1, x2,
				y1 = yScale.range()[0],
				y2 = yScale.range()[1];

			if (idx == 0) {
				x1 = xScale.range()[0];
				x2 = xScale(d.id) + bw + xScale.step()*xScale.paddingInner()*.5;
			} else if (idx == transitions.length -1) {
				x1 = xScale(d.id) - xScale.step()*xScale.paddingInner()*.5;
				x2 = xScale.range()[1];
			} else {
				x1 = xScale(d.id) - xScale.step()*xScale.paddingInner()*.5;
				x2 = xScale(d.id) + bw + xScale.step()*xScale.paddingInner()*.5;
			}

			return `M ${x1} ${y1} L ${x1} ${y2} L ${x2} ${y2} L ${x2} ${y1} Z`;
		})
		.attr("opacity", 0)
		.on("mouseover", function(d) {
			currentTo = d.to;
			update();
		});

	rowHoverTargets = svg.append("g")
		.attr("class","row-hover-targets alt-view")
		.selectAll("path");
	rowHoverTargets
		.data(stages.filter(d => d !== "TRIGGER"))
		.enter()
		.append("path")
		.attr("class","alt-view hover-row")
		.attr("d", d => {
			let l = 0,
				r = xScale.range()[0],
				t = yScale(d),
				b = yScale(d) + ybw;

			return `M ${l} ${t} L ${r} ${t} L ${r} ${b} L ${l} ${b} Z`;
		})
		.attr("opacity", 0)
		.on("mouseover", function(d) {
			currentFrom = d;
			currentTo = strategies[currentStrategy]
						.transitions
						.filter(d => d.from == currentFrom)[0].to;
			update(currentFromChanged = true);
		});


	// Draw triggers.

	triggers = svg.append("g")
		.attr("class","triggers alt-view")
		.selectAll("text");
	triggers
		.data(transitions)
		.enter()
		.append("text")
		.attr("class","alt-view")
		.attr("x", d => xScale(d.id) + bw/2)
		.attr("y", yScale("TRIGGER") + ybw/2)
		.text(d => d.trigger)
		.attr("alignment-baseline", "central")
		.attr("text-anchor", "middle");
}

draw();

function update(currentFromChanged = false) {

	let transitions = strategies[currentStrategy]
						.transitions
						.filter(d => d.from == currentFrom);

	// Update scales.

	xScale.domain(transitions.map(d => d.id));
	bw = xScale.bandwidth();

	// Update white boundary lines.

	boundaries = svg.selectAll("g.boundaries path");
	boundaries
		.data([...Array(10).keys()])
		.transition()
		.attr("d", (d, i) => {
			let x;
			if (i < transitions.length - 1) {
				d = transitions[i];
				x = xScale(d.id) + bw + xScale.step()*xScale.paddingInner()*.5;
			} else {
				x = xScale.range()[1];
			}
			return `M ${x} ${yScale("1")} L ${x} ${yScale("4") + ybw}`;
		})
		.attr("opacity", (d, i) => {
			return (i < transitions.length - 1) ? 1 : 0
		});

	// Update TIGHTENING / EASING brackets.

	let b = yScale.range()[1] + 10,
		t = yScale.range()[1] + m[2]/2,
		show1 = transitions.map(d => d.direction).includes('tighten'),
		l1 = show1 ? xScale(transitions.filter(d => d.direction == 'tighten')[0].id) : 0,
		r1 = show1 ? xScale(transitions.filter(d => d.direction == 'tighten').slice(-1)[0].id) + bw : 0,
		show2 = transitions.map(d => d.direction).includes('ease'),
		l2 = show2 ? xScale(transitions.filter(d => d.direction == 'ease')[0].id) : 0,
		r2 = show2 ? xScale(transitions.filter(d => d.direction == 'ease').slice(-1)[0].id) + bw : 0,
		show3 = transitions.map(d => d.direction).includes('none'),
		l3 = show3 ? xScale(transitions.filter(d => d.direction == 'none')[0].id) : 0,
		r3 = show3 ? xScale(transitions.filter(d => d.direction == 'none').slice(-1)[0].id) + bw : 0;

	bracketL
		.transition()
		.attr("d", `M ${l1} ${b} L ${l1} ${t} L ${r1} ${t} L ${r1} ${b}`)
		.attr("opacity", show1 ? 1 : 0);

	bracketM
		.transition()
		.attr("d", `M ${l2} ${b} L ${l2} ${t} L ${r2} ${t} L ${r2} ${b}`)
		.attr("opacity", show2 ? 1 : 0);

	bracketR
		.transition()
		.attr("d", `M ${l3} ${b} L ${l3} ${t} L ${r3} ${t} L ${r3} ${b}`)
		.attr("opacity", show3 ? 1 : 0);

	bracketTextBackgroundL
		.transition()
		.attr("x", (l1+r1)/2)
		.attr("opacity", show1 ? 1 : 0);

	bracketTextL
		.transition()
		.attr("x", (l1+r1)/2)
		.attr("opacity", show1 ? 1 : 0);

	bracketTextBackgroundM
		.transition()
		.attr("x", (l2+r2)/2)
		.attr("opacity", show2 ? 1 : 0);

	bracketTextM
		.transition()
		.attr("x", (l2+r2)/2)
		.attr("opacity", show2 ? 1 : 0);

	bracketTextBackgroundR
		.transition()
		.attr("x", (l3+r3)/2)
		.attr("opacity", show3 ? 1 : 0);

	bracketTextR
		.transition()
		.attr("x", (l3+r3)/2)
		.attr("opacity", show3 ? 1 : 0);

	// Update active path.

	partialRowLeft = svg.selectAll("g.partial-row-left path")
	partialRowLeft
		.data(transitions.filter(d => d.from == currentFrom & d.to == currentTo))
		.transition()
		.attr("d", d => {
			let y = yScale(d.from),
				x = xScale(d.id) + (bw/2) - (aw/2) + 2,
				l = xScale.range()[0],
				r = xScale.range()[1];
			return `M ${l} ${y} ` +
				`L ${x} ${y} ` +
				`L ${x} ${y + ybw} ` +
				`L ${l} ${y + ybw} ` +
				`L ${l + ybw/4} ${y + ybw/2} ` +
				`Z`;
		})
		.attr("fill", d => stageCols[d.from]);

	partialRowRight = svg.selectAll("g.partial-row-right path")
	partialRowRight
		.data(transitions.filter(d => d.from == currentFrom & d.to == currentTo))
		.transition()
		.attr("d", d => {
			let y = yScale(d.to),
				x = xScale(d.id) + (bw/2) + (aw/2) - 2,
				l = xScale.range()[0],
				r = xScale.range()[1];
			return `M ${x} ${y} ` +
				`L ${r - ybw/4} ${y} ` +
				`L ${r} ${y + ybw/2} ` +
				`L ${r - ybw/4} ${y + ybw} ` +
				`L ${x} ${y + ybw} ` +
				`Z`;
		})
		.attr("fill", d => stageCols[d.to]);

	gradient = svg.selectAll("defs linearGradient stop");
	gradient
		.data([
			{ offset: "0%", colour: stageCols[stages.indexOf(currentFrom) < stages.indexOf(currentTo) ? currentFrom : currentTo] },
			{ offset: "100%", colour: stageCols[stages.indexOf(currentFrom) < stages.indexOf(currentTo) ? currentTo : currentFrom] }
		])
		.transition()
		.attr("stop-color", d=> d.colour);

	arrow = svg.selectAll("g.arrow path")
	arrow
		.data(transitions.filter(d => d.from == currentFrom & d.to == currentTo))
		.transition()
		.attr("d", d => {
			
			let l = xScale(d.id) + bw/2 - aw/2,
				r = l + aw,

				st = yScale(d.from),
				sb = yScale(d.from) + ybw,
				et = yScale(d.to),
				eb = yScale(d.to) + ybw;

			return `M ${l} ${st} ` + // A
				`L ${l} ${Math.min(st,eb)} ` + // B
				`Q ${d.direction == "tighten" ? r : l} ${Math.min(st,et)}, ${r} ${Math.min(sb,et)} ` + // C
				`L ${r} ${et} ` + // D
				`L ${r} ${eb} ` + // E
				`L ${r} ${Math.max(eb,st)} ` + // F
				`Q ${d.direction == "tighten" ? l : r} ${Math.max(eb,sb)}, ${l} ${Math.max(et,sb)} ` + // G
				`L ${l} ${sb} ` + // H
				`Z `;

		});

	// Update signpost arrow.

	signpost = svg.selectAll("g.signpost path");
	signpost
		.data(transitions.filter(d => d.from == currentFrom & d.to == currentTo))
		.transition()
		.attrTween("d", function(d) {
			return interpolateSignpost(d, currentX, currentY, currentTheta)
		});



	// Update row text.

	rowText = svg.selectAll("g.rowText text");
	rowText
		.data([{ from: currentFrom }])
		.transition()
		.attr("y", d => yScale(d.from) + yScale.bandwidth() / 2)
		.text(d => `Current Stage ${d.from}`);

	// Redraw hover targets.

	if (currentFromChanged) {
		hoverTargets = svg.selectAll("g.hover-targets").remove();
		hoverTargets = svg.append("g")
			.attr("class","hover-targets alt-view")
			.selectAll("path");
		hoverTargets
			.data(transitions)
			.enter()
			.append("path")
			.attr("class","alt-view hover-target")
			.attr("d", (d, idx) => {
				let x1, x2,
					y1 = yScale.range()[0],
					y2 = yScale.range()[1];

				if (idx == 0) {
					x1 = xScale.range()[0];
					x2 = xScale(d.id) + bw + xScale.step()*xScale.paddingInner()*.5;
				} else if (idx == transitions.length -1) {
					x1 = xScale(d.id) - xScale.step()*xScale.paddingInner()*.5;
					x2 = xScale.range()[1];
				} else {
					x1 = xScale(d.id) - xScale.step()*xScale.paddingInner()*.5;
					x2 = xScale(d.id) + bw + xScale.step()*xScale.paddingInner()*.5;
				}

				return `M ${x1} ${y1} L ${x1} ${y2} L ${x2} ${y2} L ${x2} ${y1} Z`;
			})
			.attr("opacity", 0)
			.on("mouseover", function(d) {
				currentTo = d.to;
				update();

				// d3.selectAll(`.direction`).attr('opacity', 0);
				// d3.selectAll(`.direction-${d.id}`).attr('opacity', 1);
			});
	}

	// Update triggers.
	triggers = svg.selectAll("g.triggers text");
	triggers
		.data(transitions)
		.transition()
		.attr("x", d => xScale(d.id) + bw/2)
		.text(d => d.trigger);

}


// // ########################################################################## //
// // ########################################################################## //
// // ########################################################################## //

// page.update = function() {
// 	update[page.params.graphType]();
// }

// // ########################################################################## //
// // ########################################################################## //
// // ########################################################################## //




// console.log(svg)