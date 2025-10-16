"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const routes = ["/proyectos", "/contacto"];

export default function RoutePreloader() {
  const router = useRouter();

  useEffect(() => {
    // Preload routes in the background
    routes.forEach((route) => {
      router.prefetch(route);
    });
  }, [router]);

  return null;
}
