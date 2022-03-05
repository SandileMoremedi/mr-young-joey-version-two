export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form action="https://formsubmit.co/sandilemoremedi070501@gmail.com">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Please add your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Please add your email" />

        <label htmlFor="comment">Add A Comment</label>
        <textarea
          id="comment"
          cols="30"
          rows="10"
          placeholder="Please add your comment"
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
