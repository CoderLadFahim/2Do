function TodoTypeSelector({ activeViewType, viewTypeUpdater }) {
	return (
		<ul className="flex list-none w-1/2 py-2" data-testid="type-selector">
			<li
				onClick={(e) => viewTypeUpdater(e.target.textContent.toLowerCase())}
				className={`${
					activeViewType === 'all' ? 'bg-blue-400' : ''
				}  flex-1 text-center h-full`}
			>
				All
			</li>
			<li
				onClick={(e) => viewTypeUpdater(e.target.textContent.toLowerCase())}
				className={`${
					activeViewType === 'done' ? 'bg-green-400' : ''
				}  flex-1 text-center h-full`}
			>
				Done
			</li>
			<li
				onClick={(e) => viewTypeUpdater(e.target.textContent.toLowerCase())}
				className={`${
					activeViewType === 'left' ? 'bg-red-400' : ''
				}  flex-1 text-center h-full`}
			>
				Left
			</li>
		</ul>
	);
}

export default TodoTypeSelector;
