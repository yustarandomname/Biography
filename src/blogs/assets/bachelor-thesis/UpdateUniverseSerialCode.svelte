<b class="kw">Foreach</b> (agent_node, marker_node, index) <b class="kw">in</b> old_lattices.iter()
<div class="indent">
	<p class="comment"># Loop over every agent and marker node in the old lattices</p>

	<div class="comment">
		# Setup a pseudorandom number generator (PRNG). The seed should depend on the index and
		iteration amount, as well as a global seed provided by the user.
	</div>
	<p>prng = new PRNG(index, iteration, seed);</p>

	<div class="comment"># Get the 6 neighbours of this marker node</div>
	<p>
		neighbour_markers = marker_node.neighbours() <br /> blue_strength = []
		<span class="comment"> # Store push strengths of all neighbours </span>
	</p>

	<b class="kw">Foreach</b> marker <b class="kw">in</b> neighbour_markers.iter()

	<div class="indent">
		<span class="comment"># Append the blue strength for each marker defined in equation</span>
		<p>blue_strengths.push(pow(e, -beta x marker.blue_value))</p>
	</div>

	<b class="kw">Foreach</b> red_agent <b class="kw">in</b> agent_node.red_agents.iter()
	<div class="indent">
		<div class="comment mb-2">
			# Loop over each red_agent and move it to one of its neighbours according to the strengths of
			the blue markers
		</div>

		<div class="comment">
			# Pick one of the neighbours and return the chosen direction to move in (Top, Left, Front,
			etc.). More info about the method in appendix A
		</div>
		<p>direction = PICK_WEIGHTED(prng, blue_strengths)</p>

		<div class="comment"># Get the neighbours index from the direction</div>
		<p>new_index = agent_node.index_from_dir(direction)</p>

		<div class="comment">
			# Increment the new lattice with agent nodes at the position of new_index by one
		</div>
		<p>new_lattices.agent_nodes.add_red_agent(new_index)</p>
	</div>
</div>

<style>
	.indent {
		@apply border-l-2 border-gray-800 pl-4;
	}

	.kw {
		@apply text-red-400;
	}

	p {
		@apply mt-0.5;
	}

	.comment {
		@apply text-sm leading-none text-green-400/70;
	}
</style>
