// classes
import classes from './LoadingPage.module.css';

// images
import Button from '../assets/temperature_button.png';

//firebase
import { db } from '../services/firebase.config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { SelectedList } from '../context/SelectedList';

const LoadingPage = () => {
<<<<<<< Updated upstream
  return (
    <div className={classes["page-container"]}>
      <div className={classes["title"]}>Recosk</div>
      {/* temp image */}
      <img src={Button} alt="" />
      <div className={classes["description"]}>
        추천드릴 메뉴를 찾고 있습니다.
        <br />
        잠시만 기다려주세요.
      </div>
    </div>
  );
=======
	const [menus, setMenus] = useState([]);
	const selectionContext = useContext(SelectedList);
	const category = selectionContext.category;
	const ingredients = selectionContext.ingredients;
	const fruits = selectionContext.fruits;

	useEffect(() => {
		console.log(category);
		console.log(ingredients);
		console.log(fruits);
		const dataRef = collection(db, 'menus');
		const queryData = query(
			dataRef,
			where('category', '==', category),
			where('ingredients', 'not in', ingredients),
			where('fruits', 'not in', fruits)
		);

		const getMenus = async () => {
			const snapshot = await getDocs(queryData);
			const data = snapshot.docs.map((doc) => doc.data());
			setMenus(data);
		};
		getMenus();
	}, []);

	console.log(menus);
	return (
		<div className={classes['page-container']}>
			<div className={classes['title']}>Recosk</div>
			{/* temp image */}
			<img src={Button} alt='' />
			<div className={classes['description']}>
				추천드릴 메뉴를 찾고 있습니다. 잠시만 기다려주세요.
			</div>
		</div>
	);
>>>>>>> Stashed changes
};

// const loader = () => {
//   const category = selectionContext.category;
//   const dataRef = collection(db, "menus");
//   const queryData = query(dataRef, where("category", "==", ));
// }

export default LoadingPage;
