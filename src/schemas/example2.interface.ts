export interface Example2Payload {
  /**
   * The person talk being described
   */
  person: Person;
}

interface Employer {
  /**
   * The name of the employer
   */
  name: string;
  /**
   * The place the employer is headquartered
   */
  location: string;
}

interface Person {
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
