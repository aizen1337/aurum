import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import RedirectToDashboardButton from '~/components/RedirectToDashboardButton';
import { ThemeSwitcher } from '~/components/ThemeSwitcher';
import { Button } from '~/components/ui/button';
export default async function HomePage() {
    const navigation = [
      { name: 'Product', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Marketplace', href: '#' },
      { name: 'Company', href: '#' },
    ]
      return (
        <div className="bg-zinc-900 h-screen">
          <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Aurum Bank</span>
                </a>
              </div>
              <div className="flex lg:hidden">
                <Button variant={'primary'}>
                  <span className="sr-only">Open main menu</span>
                </Button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-zinc-100">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex flex-1 justify-center gap-2">
                <ThemeSwitcher/>
                  <SignedOut>
                  <SignInButton mode='modal' forceRedirectUrl={'/dashboard'}>
                  <Button variant={'primary'}>Sign In </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                <RedirectToDashboardButton/>
                </SignedIn>
              </div>
            </nav>

          </header>
    
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#886442] to-[#cf0202] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-100 ring-1 ring-zinc-100/10 hover:ring-zinc-100/20">
                  Announcing our next round of funding.{' '}
                  <a href="#" className="font-semibold text-amber-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl">
                  Modern banking for you.
                </h1>
                <p className="mt-6 text-lg leading-8 text-zinc-100">
                Feel free to explore our finance solutions, tailor made just for you.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button variant={'primary'}>
                    Get started
                  </Button>
                  <Link href="#" className="text-sm font-semibold leading-6 text-zinc-100">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
