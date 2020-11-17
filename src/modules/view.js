

export function changeView() {
    let f = document.getElementById("1");
    let s = document.getElementById("2");
    f.onclick = function () {
        document.body.style.backgroundColor = "red";
    };
    s.onclick = function () {
        document.body.style.backgroundColor = "blue";
    }
}

//
// const styles = {
//     wrapper: {
//         backgroundColor: 'black'
//     },
//     title: {
//         backgroundColor: 'white'
//     }
// };
//     <div className={classes.wrapper}>
//     <h1 className={classes.title}>
//     Hello JSS-React!
// </h1>
// </div>