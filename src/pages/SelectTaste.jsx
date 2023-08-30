import { useContext } from 'react';
import { SelectedList } from '../context/SelectedList';

//hook
import { Link } from 'react-router-dom';

const SelectTaste = () => {
	const selectionContext = useContext(SelectedList);
	const taste = selectionContext.taste;

	const setTaste = (data) => {
		if (taste.includes(data)) {
			selectionContext.setTaste({ type: 'DELETE', payload: data });
		} else {
			selectionContext.setTaste({ type: 'ADD', payload: data });
		}
	};

	const onClickTasteButtonHandler = (e) => {
		setTaste(e.target.id);
	};

	console.log(taste);

	return (
		<div>
			<button id='sweat' onClick={onClickTasteButtonHandler}>
				달달
			</button>
			<button id='bitter' onClick={onClickTasteButtonHandler}>
				씀
			</button>
			<button id='goso' onClick={onClickTasteButtonHandler}>
				고소~
			</button>

			<Link to={'/menu'}>
				<button>선택완료</button>
			</Link>
		</div>
	);
};

export default SelectTaste;
