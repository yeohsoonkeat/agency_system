import React from 'react'
import OrganizationChart from '@dabeng/react-orgchart'
import './org.css'

function OrgChart() {	
	const table = [
		{ leader: 0, id: 1, name: 'a',children: [] },
		{ leader: 0, id: 2,name: 'b', children: [] },
		{ leader: 2, id: 3,name: 'c', children: [] },
	]
	const k = () => {
		let root ={ leader: null, id: 0, name: 'root',children: [] }
		var node_list = {[root.id]: root }

		for (var i = 0; i < table.length; i++) {
			node_list[table[i].id] = table[i]
			node_list[table[i].leader].children.push(node_list[table[i].id])
		}

		return root
	}

	return (
		<div >
			<OrganizationChart
				datasource={k()}
				chartClass="myChart"
			/>
		</div>
	)
}

export default OrgChart