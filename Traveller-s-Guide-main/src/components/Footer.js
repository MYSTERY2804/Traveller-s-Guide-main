import "./FooterStyles.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Traveller's Guide</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div>
                    <a href="https://github.com/Tanvichn">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="https://github.com/Tanvichn">
                        <i class="fa-brands fa-instagram-square" aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/Tanvichn">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="https://github.com/Tanvichn">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="mailto:tanvichn@gmail.com">Support</a>
                    <a href="mailto:tanvichn@gmail.com">Troubleshhoting</a>
                    <a href="mailto:tanvichn@gmail.com">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
            <div className="last-text">
                <h3>Traveller's Guide 2023 &copy; All Rights Reserved.</h3>
            </div>
        </div>
    );
};

export default Footer;