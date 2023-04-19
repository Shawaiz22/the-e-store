import React from 'react';

function Foot(props) {
    return (
        <footer className='bg-secondary' style={{ height: '20vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <br />
            <h6 className="text-center">Copyright &copy; The-E-Store </h6>
            <p className='text-center'> <b>Site Developed with ❤ by - Shawaiz Ali Siddiqui</b> </p>
            <h6 className='text-center'> <b> CONNECT</b> </h6>

            <div className="icons" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

                <a rel="noreferrer" href="https://www.linkedin.com/in/shawaiz-siddiqui-615a271a8/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="blue"
                        className="bi bi-linkedin icon" viewBox="0 0 16 16">
                        <path
                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg></a>

                <a rel="noreferrer" href="https://www.github.com/Shawaiz22" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="17px" viewBox="0 0 32 32" style={{ background: 'white', marginLeft: '15px' }}>
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                    </svg>
                </a>

                <a href="https://www.hackerrank.com/shawaizsidd22" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="17px" width="1.5em" style={{ backgroundColor: 'black', marginLeft: '15px'  }}>
                        <path fill="#2FC363"
                            d="M11.999 0C10.626 0 2.195 4.818 1.513 6c-.682 1.182-.686 10.819 0 12 .686 1.181 9.115 6 10.486 6 1.371 0 9.8-4.824 10.487-6 .686-1.176.686-10.83 0-12-.687-1.17-9.115-6-10.487-6zm2.841 19.415v.002c-.188 0-1.939-1.677-1.8-1.814.041-.041.296-.069.832-.086 0-1.23.028-3.215.045-4.046.002-.095-.021-.161-.021-.274h-3.787c0 .333-.022 1.697.065 3.416.011.213-.075.279-.272.278-.48-.001-.96-.005-1.44-.004-.194 0-.278-.072-.272-.286.043-1.567.14-3.938-.007-9.969v-.149c-.46-.016-.778-.045-.82-.086C7.225 6.26 9 4.583 9.187 4.583c.187 0 1.951 1.677 1.813 1.814-.041.041-.374.07-.795.086v.148c-.114 1.207-.096 3.731-.124 4.94h3.803c0-.213.018-1.628-.057-3.921-.005-.159.046-.242.199-.244.525-.004 1.049-.006 1.575-.003.164.001.216.081.213.252-.173 8.967-.031 8.341-.031 9.86.42.016.797.045.838.086.136.136-1.593 1.814-1.781 1.814z" />
                    </svg>
                </a>

            </div>
        </footer>
    );
}

export default Foot;