import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear(); 

    return <footer>
        <p>Copyright © {currentYear} Prangya Jyoti Dakua</p>
     </footer>
}

export default Footer ;