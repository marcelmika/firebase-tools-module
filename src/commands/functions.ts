// Firebase Tools
import client from "firebase-tools";

export interface FunctionsConfigOptions {
  /**
   * Name of the project
   */
  project: string;
}

export const functions = {
  config: {
    /**
     * Retrieve existing configuration values for the given project's Cloud Functions.
     * @param path - Path to the value
     * @param options - Options
     */
    get: async (
      path: string,
      options: FunctionsConfigOptions
    ): Promise<string | undefined> => {
      return client.functions.config.get(path, options);
    },
    /**
     * Retrieve all existing configuration values for the given project's Cloud Functions.
     * @param options - Options
     */
    list: async (
      options: FunctionsConfigOptions
    ): Promise<Record<string, string> | undefined> => {
      return client.functions.config.get(undefined, options);
    },
    /**
     * Store runtime configuration values for the given project's Cloud Functions.
     * @param vars - Record of values in a form of { key: value };
     * @param options - Options
     */
    set: async (
      vars: Record<string, string>,
      options: FunctionsConfigOptions
    ): Promise<void> => {
      const values = Object.keys(vars).map(
        (key: string) => `${key}=${vars[key]}`
      );
      await client.functions.config.set(values, options);
    },
    /**
     * Remove values from the given project's runtime configuration.
     * @param keys - List of values to remove
     * @param options - Options
     */
    unset: async (
      keys: Array<string>,
      options: FunctionsConfigOptions
    ): Promise<void> => {
      await client.functions.config.unset(keys, options);
    },
  },
};
