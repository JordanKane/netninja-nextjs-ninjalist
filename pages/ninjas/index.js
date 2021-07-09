import Link from "next/link";
import React from "react";
import Card from "@material-tailwind/react/Card";
import CardRow from "@material-tailwind/react/CardRow";
import CardBody from "@material-tailwind/react/CardBody";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardFooter from "@material-tailwind/react/CardFooter";

export const getStaticProps = async (context) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  console.log(ninjas);
  return (
    <div className="grid grid-cols-1">
      <h1 className="text-center tracking-wide text-4xl py-8">All Ninjas</h1>
      <main className="grid grid-cols-2 place-content-center">
        {ninjas.map((ninja) => (
          <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
            <a className="py-2 px-4 bg-white block my-5 mx-4 border-l-8 border-white hover:border-l-8 hover:border-blue-500">
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Ninjas;
