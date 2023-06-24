//set our init state
let initState = 0
const tracker = [1,2,3,4,5,6,7]

//if no or none index reset to zero
if ( 0 <  initState || NaN === trackersIndex ) {
    initState = 0
}

//on click increment the tracker next current index state 
initState += trackersIndex

//on click decrease the tracker previous current state 
initState -= trackersIndex

//check where you are then toggle the active class 

tracker.forEach((el , i) => {
    el.toggleClasslist("active").onlyif(
        i === tracker
    )
})