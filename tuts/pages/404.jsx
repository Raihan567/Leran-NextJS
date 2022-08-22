import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Error = () => {
  const router = useRouter();
  const handleInput = () => {
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  
  return (
    <>
      <div className="padding">
        <h1>404! page not found</h1>
        <p>
          The page you are looking for might have been removed had its name
          changed or is unavailable.
        </p>
        {/* <Link href="/">
          <a style={{ fontWeight: "bold" }}>Back to the home.</a>
        </Link> */}
        <a
          style={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={handleInput}
        >
          Back to home
        </a>
      </div>
    </>
  );
};

export default Error;
