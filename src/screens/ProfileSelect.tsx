
export default function ProfileSelect({locale='pt'}) {
  return (
    <>
      <h1>Pedro Costa</h1>
      <p>{locale === "pt" ? "Portugues" : "English"}</p>
    </>
  );
}
