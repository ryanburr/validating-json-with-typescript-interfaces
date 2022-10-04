export interface Employer {
  /**
   * The name of the employer
   */
  name: string;
  /**
   * The place the employer is headquartered
   */
  location: string;
  /**
   * Your role in the company
   */
  title: 'Software Engineer' | 'Product Manager' | 'Designer';
}