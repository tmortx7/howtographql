import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Link } from "../entities/Link";

@InputType()
class LinkInput {
  @Field()
  url: string;
  @Field()
  description: string;
}

@Resolver()
export class LinkResolver {
  @Query(() => [Link])
  async links(): Promise<Link[]> {
    return Link.find();
  }

  @Mutation(() => Link)
  async createLink(@Arg("input") input: LinkInput): Promise<Link> {
    return Link.create({
      ...input,
    }).save();
  }
}
