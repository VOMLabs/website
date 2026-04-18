import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Privacy Policy - VOMLabs",
  description: "VOMLabs Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
        <Navbar />
        <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Last updated: April 2026
          </p>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <section>
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                Information We Collect
              </h2>
              <p className="mt-2">
                We collect information you provide directly to us, such as when
                you create an account, submit forms, or communicate with us. This
                may include your name, email address, and any other information
                you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                How We Use Information
              </h2>
              <p className="mt-2">
                We use the information we collect to provide, maintain, and
                improve our services, to communicate with you, and to comply with
                legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                Data Security
              </h2>
              <p className="mt-2">
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                Third-Party Services
              </h2>
              <p className="mt-2">
                Our website may contain links to third-party websites or services.
                We are not responsible for the privacy practices of these third
                parties.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                Changes to This Policy
              </h2>
              <p className="mt-2">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                Contact Us
              </h2>
              <p className="mt-2">
                If you have any questions about this privacy policy, please
                contact us at{" "}
                <a
                  href="mailto:privacy@vomlabs.com"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  privacy@vomlabs.com
                </a>
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}