import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <div className="grid grid-cols-1">
        <h1 className="text-4xl font-bold tracking-wide text-center py-6">
          About
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          corporis porro et sed unde odit doloribus dolorum error eius. Magni
          accusantium eligendi corrupti alias reiciendis placeat! Quas explicabo
          distinctio sint.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          corporis porro et sed unde odit doloribus dolorum error eius. Magni
          accusantium eligendi corrupti alias reiciendis placeat! Quas explicabo
          distinctio sint.
        </p>
      </div>
    </>
  );
};

export default About;
