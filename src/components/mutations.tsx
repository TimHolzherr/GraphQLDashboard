import { useEffect, useState } from "react";
import { getSchema } from "../schema/GetSchema";

export default function Mutations() {
  const [mutations, setMutations] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      const schema = await getSchema("/graphql");
      // TODO: Check for errors
      const mutations = schema?.getMutationType()?.getFields();
      console.log(mutations); // TODO: Remove console.log
      setMutations(Object.keys(mutations!));
    };

    load().catch(console.error);
  }, []);

  return (
    <>
      <h1>Mutations:</h1>
      {mutations.map((m) => (
        <p>{m}</p>
      ))}
    </>
  );
}
