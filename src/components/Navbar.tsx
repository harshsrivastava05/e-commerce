import Link from "next/link";
import Maxwidthwrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import Navitems from "./Navitems";
import { buttonVariants } from "./ui/button";
import Cart from "./cart";

const Navbar = () => {
  const user = null;

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <Maxwidthwrapper>
          <div className="border-b border-gray-200">
            <div className="flex items-center h-16">
              {/* mobile nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">{<Icons.logo className="h-11 w-11" />}</Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <Navitems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href="/sign-in"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign in
                    </Link>
                  )}

                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/sign-up"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Create account
                    </Link>
                  )}

                  {user ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  ) : null}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Maxwidthwrapper>
      </header>
    </div>
  );
};

export default Navbar;