import { Button } from "@/components/ui/button";
import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export const CTAButton = () => {
  return (
    <Button
      asChild
      className="w-full flex md:hidden py-6 font-semibold rounded-none fixed bottom-0 left-0 right-0"
    >
      <Link
        target="_blank"
        href="https://calendly.com/mavyakunal/business-call"
      >
        <span>Increase Your Conversions Today</span>
        <MoveUpRightIcon className="size-5" />
      </Link>
    </Button>
  );
};
