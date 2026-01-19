import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          res.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: any) {
          res.cookies.delete(name);
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // 🔐 Si no hay sesión → login
  if (!session) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // 🔐 Si no es admin → home
  const role = session.user.app_metadata?.role;
  if (role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

// 🔒 Protege /admin excepto /admin/login
export const config = {
  matcher: ["/admin((?!/login).*)"],
};
