import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={280}
		height={500}
		viewBox="0 0 280 500"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="114" y="65" rx="0" ry="0" width="0" height="2" />
		<rect x="0" y="1" rx="8" ry="8" width="150" height="0" />
		<rect x="0" y="307" rx="8" ry="8" width="267" height="25" />
		<circle cx="136" cy="136" r="136" />
		<rect x="0" y="354" rx="25" ry="25" width="266" height="72" />
		<rect x="0" y="457" rx="11" ry="11" width="83" height="37" />
		<rect x="115" y="459" rx="11" ry="11" width="153" height="36" />
	</ContentLoader>
)

export default Skeleton