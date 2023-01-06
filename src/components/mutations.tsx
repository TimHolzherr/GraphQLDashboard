import { useEffect, useState } from "react";
import { GraphQLField } from "graphql";
import { getSchema } from "../schema/GetSchema";
import CommandBubble from "./commandBubble";

export default function Mutations() {
  const [mutations, setMutations] = useState<GraphQLField<any, any, any>[]>([]);

  useEffect(() => {
    const load = async () => {
      const schema = await getSchema("/graphql");
      // TODO: Check for errors
      const mutations = schema?.getMutationType()?.getFields();      
      setMutations(Object.values(mutations!));
    };

    load().catch(console.error);
  }, []);

  console.log(mutations);
  return (
    <>
      <h1>Mutations:</h1>
      {mutations.map((m) => <CommandBubble title={m.name} description={m.description} titleWidthInCh={13} key={m.name} input={m.args} />)}
    </>
  );
}
