function Home() {
    return(
        <div className="" style={{backgroundColor:"rgb(255, 99, 71)"}}>
            <div className="container-fluid p-5 bg-primary text-black text-center" style={{
                padding: "clamp(2rem, 8vw, 3rem)"
            }}>
                <h1 className="text-warning" style={{
                    fontSize: "clamp(1.5rem, 6vw, 3.5rem)",
                    wordWrap: "break-word"
                }}>Auto Birthday Wishes Sender</h1>
                <p className="text-danger" style={{
                    fontSize: "clamp(0.9rem, 2.5vw, 1.25rem)"
                }}><b>Never say "I forgot" again!</b></p>
            </div>

            <div className="container mt-4 p-4 text-center text-danger" style={{
                padding: "clamp(1rem, 4vw, 2rem)"
            }}>
                <div className="row" style={{ 
                    backgroundColor: "#90EE90", 
                    padding: "clamp(15px, 3vw, 20px)",  
                    borderRadius: "10px", 
                    gap: "clamp(20px, 4vw, 60px)", 
                    justifyContent: "center",
                    margin: "0 auto",
                    maxWidth: "100%"
                }}>
                    <div className="col-sm-6" style={{
                        flex: "1 1 auto",
                        minWidth: "clamp(250px, 40vw, 400px)",
                        padding: "clamp(10px, 2vw, 15px)"
                    }}>
                        <h3 className="text-primary" style={{
                            fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
                            marginBottom: "clamp(10px, 2vw, 15px)"
                        }}>Our Story</h3>
                        <p style={{
                            fontSize: "clamp(0.85rem, 2vw, 1rem)",
                            lineHeight: "1.6",
                            margin: 0
                        }}>It all started with me when I wrongly forgot my best friend's birthday.
                            I got grounded...and yes, grounded...by my best friend🐸. 
                            If you have never been grounded by your friend, then believe me, you are very lucky!🫥 
                            So later on, I got an idea: why not get a tool that will automate sending wishes to my friend secretly,
                            without him knowing? That way, I could fix my situation and wait for him to forget about my birthday😈.</p>
                    </div>
                    <div className="col-sm-6" style={{
                        flex: "1 1 auto",
                        minWidth: "clamp(250px, 40vw, 400px)",
                        padding: "clamp(10px, 2vw, 15px)"
                    }}>
                        <h3 className="text-primary" style={{
                            fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
                            marginBottom: "clamp(10px, 2vw, 15px)"
                        }}>What We Do</h3>
                        <p style={{
                            fontSize: "clamp(0.85rem, 2vw, 1rem)",
                            lineHeight: "1.6",
                            margin: 0
                        }}>we all have lots of dates to remember,but some dates are special.
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