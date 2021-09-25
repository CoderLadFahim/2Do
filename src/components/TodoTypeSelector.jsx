function TodoTypeSelector({ activeViewType, viewTypeUpdater }) {
	return (
		<ul
			className="flex list-none w-1/2 py-2 bg-red-300"
			data-testid="type-selector"
			onClick={(e) => viewTypeUpdater(e.target.textContent.toLowerCase())}
		>
			<li className="flex-1 text-center">All</li>
			<li className="flex-1 text-center">Done</li>
			<li className="flex-1 text-center">Left</li>
		</ul>
	);
}

export default TodoTypeSelector;
