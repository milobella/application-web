/**
 * Configuration of one Milobella activity.
 */
export class Ability {
  id?: string;
  name: string;
  intents: string[];
  host: string;
  port: number;
}

/**
 * Configuration of all the Milobella activities stored by origin location.
 */
export class Abilities {
  cache: Ability[];
  database: Ability[];
  config: Ability[];
}
