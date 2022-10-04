export function properCase(source: string): string {
  return source.charAt(0).toUpperCase() + source.slice(1, source.length);
}