import { GraphQLArgument, GraphQLInputObjectType, GraphQLNonNull, GraphQLScalarType } from "graphql";

interface ScalarInput {
    name: string;
}

interface ComplexInput {
    name: string;
    fields: InputType[]
}


type InputType = ScalarInput | ComplexInput;

function argumentToInputType(arg: GraphQLArgument): InputType {    
    let type = arg.type;

    if (type instanceof GraphQLNonNull) {
        type = type.ofType;
    }
    
    if (type instanceof GraphQLScalarType) {
        return {name: arg.name}
    }
    if (type instanceof GraphQLInputObjectType) {
        return {name: arg.name, fields: Object.values(type.getFields()).map(f => argumentToInputType(f))}
    }
    throw new Error("unexpected type");    
}

function argumentsToInputType(args: readonly GraphQLArgument[]): InputType | null {
    if (args.length == 0) {
        return null;
    }
    if (args.length > 1) {
        return {name: "input", fields: args.map(a => argumentToInputType(a))}
    }    
    return argumentToInputType(args[0]);
}

export type {InputType, ComplexInput};
export {argumentsToInputType};