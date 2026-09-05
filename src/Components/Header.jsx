function Header({ onScrollClick, cartCount, cartTotal }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white">
      <div className="bg-black h-8 flex justify-center items-center">
        <p className="text-white">Order 10$+ free delivery </p>
      </div>
      <div className="mb-2 w-full shadow-sm">
        <div className="navbar flex-wrap gap-2 px-3 sm:px-4 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <div className="navbar-start min-w-0 flex-1 lg:col-start-1 lg:row-start-1 lg:justify-self-start">
            <button
              onClick={() => onScrollClick("food-hub")}
              className="btn btn-ghost max-w-full px-2 text-lg font-bold sm:text-2xl"
            >
              FOOD HUB
            </button>
          </div>

          <div className="navbar-center order-3 flex w-full justify-center overflow-x-auto lg:col-start-2 lg:row-start-1 lg:w-auto">
            <ul className="menu menu-horizontal min-w-full w-max justify-center flex-nowrap px-0 font-bold text-base sm:text-lg lg:min-w-0 lg:text-xl">
              <li>
                <button onClick={() => onScrollClick("khmer-cuisine")}>
                  Khmer Cuisine
                </button>
              </li>
              <li>
                <button onClick={() => onScrollClick("western-food")}>
                  Western Food
                </button>
              </li>

              <li>
                <button onClick={() => onScrollClick("dessert")}>
                  Dessert
                </button>
              </li>

              <li>
                <button onClick={() => onScrollClick("drinks")}>Drinks</button>
              </li>
            </ul>
          </div>

          <div className="navbar-end flex shrink-0 items-center gap-0 sm:gap-1 lg:col-start-3 lg:row-start-1 lg:justify-self-end">
            <div className="dropdown dropdown-end sm:mr-2">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cartCount}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-sm dropdown-content bg-base-100 z-1 mt-3 w-52 shadow "
              >
                <div className="card-body">
                  <span className="text-lg font-bold">{cartCount} Items</span>
                  <span className="text-info">
                    Subtotal: ${cartTotal.toFixed(2)}
                  </span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end mr-0 sm:mr-2">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src="https://static.time.com/v3/assets/bltea6093859af6183b/blt12a8126a586ed591/6988b87d656a3f1051bcea0b/john-wick-2-keanu-reeves1.jpg?branch=production" />
                </div>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="input hidden w-40 sm:block lg:w-56"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
