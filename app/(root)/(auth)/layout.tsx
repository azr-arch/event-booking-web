import { Logo } from "@/components/shared/logo";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 max-w-screen-2xl mx-auto w-full">
      <div className="flex flex-col gap-4 p-6">
        <Logo />

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-sm">{children}</div>
        </div>
        <p className="max-w-lg text-center mx-auto text-xs">
          For trial organizer access, you can use the following credentials{" "}
          <br />
          Email: dummyaccc023@gmail.com Password: 12345678
        </p>
      </div>

      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/assets/event-bg.png"
          alt="Event image"
          fill
          className="absolute object-cover inset-0 h-full w-full brightness-75  dark:brightness-[0.2] dark:grayscale"
        />

        {/* Image attribute */}
        <span className="absolute bottom-5 right-5 z-10 text-white text-xs">
          Photo by{" "}
          <a
            target="_blank"
            className="hover:text-blue-500"
            href="https://unsplash.com/@reganography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Samuel Regan-Asante
          </a>{" "}
          on{" "}
          <a
            target="_blank"
            className="hover:text-blue-500"
            href="https://unsplash.com/photos/group-of-people-standing-on-the-field-with-bubbles-3BcNKoySAq0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Unsplash
          </a>
        </span>
      </div>
    </div>
  );
};

export default AuthLayout;
