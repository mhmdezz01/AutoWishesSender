function Footer() {
    return(
        <footer className="bg-warning text-black text-center py-3" style={{
            padding: "clamp(0.75rem, 2vw, 1.5rem)"
        }}>
            <p style={{
                fontSize: "clamp(0.75rem, 2vw, 1rem)",
                margin: "5px 0",
                padding: "0 10px",
                wordWrap: "break-word"
            }}>
                &copy; Auto Birthday wishes Sender.All Rights Reserved
            </p>
            <a href="mailto:sevice123@gmail.com" className="text-decoration-none" style={{
                fontSize: "clamp(0.8rem, 2vw, 1rem)"
            }}>
                join our team
            </a>
        </footer>
    );
}

export default Footer;