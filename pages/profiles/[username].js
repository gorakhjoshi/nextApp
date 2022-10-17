import { useRouter } from "next/router";
import React from "react";

function ProfileUsername() {
  const { query } = useRouter();
  return <div>Hello from {query.username}&apos;s profile</div>;
}

export default ProfileUsername;
