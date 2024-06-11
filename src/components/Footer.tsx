/* Copyright Header Placeholder */
/* Name: Footer.tsx
 * Description: Footer component to hold app info
 * Author: Created by Alex Alden Weaver on 6-11-2024
 * Last modified: 6-11-2024 by Alex Alden Weaver
*/

import githubLogo from './../assets/github.svg'

function Footer() {
    return (
        <div className="Footer">
            <h2>Created by: </h2>
            <br/>
            
            <div className="card">
                <a className="center" href="https://github.com/alexandraweaver" target="_blank">
                    <button className="credits">
                    <img src={githubLogo} className="logo github" alt="Vite logo" />
                    <p>Alex Alden Weaver</p>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Footer