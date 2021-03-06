import Head from "next/head";
import Link from "next/link";
import Button from "@material-tailwind/react/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <div className="grid grid-cols-1">
        <h1 className="text-[#333] pb-5 text-center text-4xl font-bold tracking-wide">
          Homepage
        </h1>
        <p className="text-[#777]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          corporis porro et sed unde odit doloribus dolorum error eius. Magni
          accusantium eligendi corrupti alias reiciendis placeat! Quas explicabo
          distinctio sint.
        </p>
        <p className="text-[#777]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          corporis porro et sed unde odit doloribus dolorum error eius. Magni
          accusantium eligendi corrupti alias reiciendis placeat! Quas explicabo
          distinctio sint.
        </p>
        <div className="place-self-center mt-8">
          <Button
            color="lightBlue"
            buttonType="filled"
            size="lg"
            rounded={true}
            block={false}
            iconOnly={false}
            ripple="light"
          >
            <Link href="/ninjas">
              <a>See Ninja Listing</a>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
