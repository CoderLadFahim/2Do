function TodoTypeSelector({ activeViewType, viewTypeUpdater }) {
	return (
		<ul onClick={(e) => viewTypeUpdater(e.target.textContent.toLowerCase())}>
			<li>All</li>
			<li>Done</li>
			<li>Left</li>
		</ul>
	);
}

export default TodoTypeSelector;
