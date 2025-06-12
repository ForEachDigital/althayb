

/** Simple helper – joins all truthy strings with a space. */
export default function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
