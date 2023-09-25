import classes from './loading.module.scss';
import BLOCK from './blocks.svg';

export const Loading =()=>{


    return (
        <div className={classes.loading_container}>
            {/* <div> <span>Alejandro</span> <span>Gonzalez</span>  <span>Almazan</span></div> */}
            <div>
            <img src={BLOCK} alt="Loading spiner" />
            </div>
        </div>
    )
}