export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <br />
      <a href="/auth">Go to Auth app</a><br />
      <a href="/user">Go to User app</a><br />
      <a href="/book">Go to Book app</a><br />
      <a href="/transaction">Go to Transaction app</a>
    </section>
  );
}
