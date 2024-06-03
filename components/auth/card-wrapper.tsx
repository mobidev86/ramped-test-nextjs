"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  title: string
}

const CardWrapper = ({
  backButtonHref,
  backButtonLabel,
  children,
  headerLabel,
  title
}: CardWrapperProps) => {
  return (
    <Card className="w-96 shadow-md">
      <CardHeader>
        <Header label={headerLabel} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
