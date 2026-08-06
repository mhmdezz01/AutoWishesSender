function Home() {
    return(
        <div className="" style={{backgroundColor:" rgb(255, 99, 71)"}}>
            <div className="container-fluid p-5 bg-primary text-black text-center">
                <h1 className="text-warning">Auto Bithday Wishes Sender</h1>
                <p className="text-danger"><b>Never say "I forgot" again!</b></p>
            </div>

            <div className="container mt-4 p-4 text-center text-danger">
                <div className="row" style={{ backgroundColor: "#90EE90", padding: "20px",  borderRadius: "10px", gap: "60px", justifyContent: "center"}}>
                    <div className="col-sm-6">
                        <h3 className="text-primary">Our Story</h3>
                        <p>It all started with me when I wrongly forgot my best friend's birthday.
                            I got grounded...and yes, grounded...by my best friend🐸. 
                            If you have never been grounded by your friend, then believe me, you are very lucky!🫥 
                            So later on, I got an idea: why not get a tool that will automate sending wishes to my friend secretly,
                            without him knowing? That way, I could fix my situation and wait for him to forget about my birthday😈.</p>
                    </div>
                    <div className="col-sm-6">
                        <h3 className="text-primary">What We Do</h3>
                        <p>we all have lots of dates to remember,but some dates are special.
                           So we came up with an idea where we help people all over the world
                           to manage our beloved ones birthdays
                           so we do not worry about remembering dates any more!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;