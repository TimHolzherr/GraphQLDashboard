import { getIntrospectionQuery, parse, buildClientSchema } from 'graphql'

export async function getSchema(endpoint: string) {
    const { data } = await (
        await fetch(endpoint, {
          method: 'POST',
          body: JSON.stringify({
            query: getIntrospectionQuery(),
            operationName: 'IntrospectionQuery',
            variables: {}
          }),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
      ).json()
      
    return buildClientSchema(data);
}