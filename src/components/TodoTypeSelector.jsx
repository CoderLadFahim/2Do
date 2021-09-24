function TodoTypeSelector({ activeViewType, viewTypeUpdater }) {
	return (
		<ul data-testid="type-selector"  onClick={(e) => viewTypeUpdater(e.target.textContent.toLowerCase())}>
			<li>All</li>
			<li>Done</li>
			<li>Left</li>
		</ul>
	);
}

export default TodoTypeSelector;
