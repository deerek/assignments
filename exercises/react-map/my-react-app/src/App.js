import React from "react";
import Box from "./Box"

function App() {
    const backgroundColors = ["limegreen", "grey", "purple", "yellow", "blue"];
    const boxes = backgroundColors.map((color, index) => <Box key={color + index} backgroundColor={color} />)
    return (
        <div>
            {boxes}
        </div>
    )
}

export default App;

// MAP is used for converting raw data in the form of an array into react elements OR components
// We need to provide a 'key' prop to the parent element from the callback for performance reasons

// function App() {    
//     return (
//         <div>
//             <Box backgroundColor="limegreen" />
//             <Box backgroundColor="grey" />
//             <Box backgroundColor="purple" />
//             <Box backgroundColor="yellow" />
//             <Box backgroundColor="blue" />
//         </div>
//     )
// }