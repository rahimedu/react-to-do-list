import React from 'react';

	return (
		<div className='header'>
			<h1>My.ToDo</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle
			</button>
		</div>
	);
};

export default Header;
