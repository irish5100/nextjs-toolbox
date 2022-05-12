export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p>
        Hi 👋! This site allows you to view some known hackers our team has detected online.
      </p>

      <p>
      You can report a hacker by filling in the form at the bottom of the page or joining our <a href="https://nextjs.org/">discord server</a>.

        Stay Safe!
      </p>
    </>
  );
}
