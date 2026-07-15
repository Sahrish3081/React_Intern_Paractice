
export default  function Star(props){
 
    
    return(
         <button
                        onClick={props.handleClick}
                        aria-pressed={false}
                       className={`favorite-button ${
    props.isFilled ? "favorite" : ""
}`}
                    >
                       
                    </button>
    );
    }