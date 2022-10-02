export interface Employer {
  /**
   * The name of the employer
   * @minLength 3
   * @maxLength 256
   */
  name: string;
  /**
   * The place the employer is headquartered
   * @minLength 1
   * @maxLength 256
   */
  location: string;
  /**
   * Your role in the company
   */
  title: 'Software Engineer' | 'Product Manager' | 'Designer';
  /**
   * You start date at the company
   * @format date
   */
  start_date: string;
}