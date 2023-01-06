import React from "react";

const Footer = () => {
    return (
        <footer class="bg-light text-center text-lg-start">
            <div class="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2);"}}>
                © 2020 Copyright:
                <p class="text-dark"> Laundry Management System { new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;