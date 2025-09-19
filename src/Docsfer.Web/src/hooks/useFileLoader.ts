import { requireAuth } from "./useRequireAuth";

export async function filesLoader() {
  await requireAuth();
  return { files: [] };
}
