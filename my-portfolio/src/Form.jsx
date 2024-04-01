

function Form() {
    return (
        <div className="form-container">
            <h2>Contact Me</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="number">Number:</label>
                    <input type="tel" id="number" name="number" placeholder="Your phone number" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Your message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
