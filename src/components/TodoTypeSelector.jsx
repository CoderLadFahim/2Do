function TodoTypeSelector({ activeViewType, viewTypeUpdater }) {
	const selectorClasses = 'flex-1 text-center py-2';

	return (
		<ul
			className="flex list-none w-4/6  bg-gray-700 nunito rounded-lg shadow-md sm:w-1/3
			overflow-hidden"
			data-testid="type-selector"
		>
			<li
				onClick={(e) => viewTypeUpdater(e.target.textContent.toLowerCase())}
				className={`${
					activeViewType === 'all' ? 'bg-blue-400 font-bold' : ''
				}  ${selectorClasses}`}
			>
				All
			</li>
			<li
				onClick={(e) => viewTypeUpdater(e.target.textContent.toLowerCase())}
				className={`${
					activeViewType === 'done' ? 'bg-green-400 font-bold' : ''
				}  ${selectorClasses}`}
			>
				Done
			</li>
			<li
				onClick={(e) => viewTypeUpdater(e.target.textContent.toLowerCase())}
				className={`${
					activeViewType === 'left' ? 'bg-red-400 font-bold' : ''
				}  ${selectorClasses}`}
			>
				Left
			</li>
		</ul>
	);
}

export default TodoTypeSelector;
