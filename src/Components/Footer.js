function Footer() {
    return(
        <div  className="bg-warning text-black text-center py-3" style={{
            padding: "clamp(0.75rem, 2vw, 1.5rem)"
        }}>
           <footer>
            <p>
                &copy; Auto Birthday wishes Sender.All Rights Reserved
            </p>
            <a href="mailto:sevice123@gmail.com" className="text-decoration-none">
                join our team
            </a>
        </footer> 
        </div>
        
    );
}

export default Footer;