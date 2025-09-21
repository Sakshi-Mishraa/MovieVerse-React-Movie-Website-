import { Form } from "react-router-dom";

function Contact() {
  return(
      <div className="container my-5 offset-3">
      <h2><b>Contact Us</b></h2>
      <p>Get in touch with us. We are always here to help you.</p>
      <Form method="post" className="mt-4">
        <div className="mb-3 w-50">
          <label htmlFor="name" className="form-label">Full Name:</label>
          <input type="text" name="name" id="name" className="form-control" required />
        </div>

        <div className="mb-3 w-50">
          <label htmlFor="email" className="form-label">Email Address:</label>
          <input type="email" name="email" id="email" className="form-control" required />
        </div>

        <div className="mb-3 w-50">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea name="message" id="message" rows="5" className="form-control" required></textarea>
        </div>

        <button type="submit" className="btn btn-dark">Send Message</button>
      </Form>
    </div>
    ) 
}

export default Contact;
