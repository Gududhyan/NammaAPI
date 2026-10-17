// Who sees what on the Admin page. The vendor's login response carries three flags: `isAdmin`,
// `isAccountant` and `isSuperAccess`. Client-safe: the UI uses it to pick what to show, and the
// server routes use it (on the session cookie's flags) for the check that actually counts.

export type AdminFlags = { isAdmin?: boolean; isAccountant?: boolean; isSuperAccess?: boolean };

/**
 * - `full`: the whole Admin page (admins and accountants).
 * - `bul`: only the BUL total card with its accounts (super access).
 * - `none`: no Admin page.
 */
export type AdminAccess = "full" | "bul" | "none";

export function adminAccess(flags: AdminFlags | null | undefined): AdminAccess {
  if (flags?.isAdmin === true || flags?.isAccountant === true) return "full";
  if (flags?.isSuperAccess === true) return "bul";
  return "none";
}
