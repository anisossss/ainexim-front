import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
// import { clearAuth } from "../path/to/authSlice";

export { RouteGuard };

function RouteGuard({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setLoading(true);
    router.events.on("routeChangeStart", hideContent);

    router.events.on("routeChangeComplete", authCheck);

    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [router, isAuthenticated]);
  function authCheck(url) {
    const publicPaths = [
      "/",
      "/pricing",
      "/auth/login",
      "/auth/register",
      "/contact-us",
      "/waitlist",
      "/auth/forget-password",
      "/auth/reset-password",
      "/privacy-policy",
      "/terms-of-service",
    ];

    const isPathPublic = publicPaths.includes(url);

    if (!isAuthenticated && !isPathPublic) {
      router.push("/auth/login", { shallow: true });
      setAuthorized(false);
    } else {
      setLoading(false);
      setAuthorized(true);
    }
  }

  return loading ? null : authorized ? children : null;
}
