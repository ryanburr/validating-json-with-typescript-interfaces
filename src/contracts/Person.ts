import { Employer } from "./Employer";

export interface Person {
  /**
   * The person's first and last name
   */
  name: string;
  /**
   * Where the person is from
   */
  hometown: string;
  /**
   * Where the person is employed
   */
  employer?: Employer;
}