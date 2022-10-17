import Link from "next/link";

function Profile() {
  return (
    <div>
      <h1>This is a Profile page!</h1>
      <Link href="/profiles/alex">Go to alex profile</Link>
      <br />
      <Link href="/">Go Home</Link>
    </div>
  );
}

export default Profile;
