import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h1 className="text-center">Oops...</h1>
      <h2 className="text-center">That page cannot be found.</h2>
      <p className="text-center">
        Go back to the{" "}
        <Link href="/">
          <a className="underline text-blue-600">Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
