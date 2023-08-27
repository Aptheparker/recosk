import classes from './SelectionBar.module.css';

const SelectionBar = () => {
    return (
        <div className={classes['selection-bar']}>
            <button className={classes.button}>커피</button>
            <button className={classes.button}>차&주스</button>
            <button className={classes.button}>케이크</button>
            <button className={classes.button}>빙수&아이스크림</button>
        </div>
    )
}

export default SelectionBar;