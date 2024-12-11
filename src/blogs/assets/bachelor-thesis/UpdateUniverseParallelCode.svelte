<p class="mt-0">new_lattices = new Lattices(old_lattices.parameters)</p>

<b class="kw">Foreach</b> (agent_node, marker_node, index) <b class="kw">in</b> old_lattices.iter()
<div class="comment">
	# Move agents out by storing the newly distributed agents in this agent node
</div>
<div class="indent">
	<p>
		neighbour_markers = marker_node.neighbours() <br />
		prng = new PRNG(index, iteration); <br />
		agents_out = {'{'}top:0,right:0,front:0,bottom:0,left:0,back:0{'}'}
	</p>

	<b class="kw">Foreach</b> red_agent <b class="kw">in</b> agent_node.red_agents.iter()
	<div class="indent">
		<div class="comment"># Set of blue strength for each neighbouring node</div>
		<p>
			blue_strengths = neighbour_markers.blue_strengths <br />
			dir = pick_weighted(prng, blue_strengths)<br />
			agents_out[dir] += 1
		</p>
	</div>

	<div class="comment">
		# Write the number of agents that will go to each neighbour to own (index) of the new agent node
	</div>
	<p>new_lattices.agent_nodes[index].red_agents_out(agents_out)</p>

	<b class="kw">Foreach</b> (agent_node, index) <b class="kw">in</b> new_lattices.iter()
	<div class="comment">
		# Read agents from neighbouring nodes and move to this node. For instance, get top neighbours
		agents that should move down (i.e. to this node).
	</div>
	<div class="indent">
		<p>
			neighbour_agents = agent_node.neighbours() <br />
			total_red_agents = 0
		</p>

		<b class="kw">Foreach</b> dir <b class="kw">in</b> neighbour_agents.iter()
		<div class="indent">
			<div class="comment"># Set of all agents in the neighbour at dir (top, right, etc)</div>
			<p>red_agents_dir = neighbour_agents[dir].red_agents_out</p>

			<div class="comment"># Add red agents from dir.opposite (top -> bottom, right -> left)</div>
			<p>total_red_agents += red_agents_dir[dir.opposite]</p>
		</div>

		<div class="comment"># Set red agents that this node gets from all neighbours</div>
		<p>agent_node.red_agents(total_red_agents)</p>
	</div>
</div>
