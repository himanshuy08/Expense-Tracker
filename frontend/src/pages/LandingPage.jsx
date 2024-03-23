import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="text-2xl text-bold">Expense Tracker</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <button className="text-sm bg-transparent text-black px-4 py-2 rounded-md">
            Sign In
          </button>
          <button className="text-sm bg-black text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Track your expenses. Save more money.
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The simple way to track your spending and take control of your
                money. Accessible from anywhere. Easy to use. Beautifully
                designed.
              </p>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-[16/9] overflow-hidden rounded-xl object-cover object-center"
              height="400"
              src="https://via.placeholder.com/730x400" 
              width="730"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-100">
                Expense Tracking
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Track every dollar
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Log your expenses on the go. Categorize your spending. See where
                your money is going.
              </p>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-4 lg:max-w-2xl lg:grid-cols-2">
              <img
                alt="Image"
                className="mx-auto overflow-hidden rounded-lg object-cover object-center"
                height="335"
                src="https://via.placeholder.com/600x335"
                style={{
                  aspectRatio: "600/335",
                  objectFit: "cover",
                }}
                width="600"
              />
              <img
                alt="Image"
                className="mx-auto overflow-hidden rounded-lg object-cover object-center"
                height="335"
                src="https://via.placeholder.com/600x335" 
                style={{
                  aspectRatio: "600/335",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-100">
                Categorization
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Organize your spending
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Automatically categorize your transactions. Customize your
                categories. See your spending at a glance.
              </p>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-4 lg:max-w-2xl lg:grid-cols-2">
              <img
                alt="Image"
                className="mx-auto overflow-hidden rounded-lg object-cover object-center"
                height="335"
                src="https://via.placeholder.com/600x335" 
                style={{
                  aspectRatio: "600/335",
                  objectFit: "cover",
                }}
                width="600"
              />
              <img
                alt="Image"
                className="mx-auto overflow-hidden rounded-lg object-cover object-center"
                height="335"
                src="https://via.placeholder.com/600x335" 
                style={{
                  aspectRatio: "600/335",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Expense Tracker. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
