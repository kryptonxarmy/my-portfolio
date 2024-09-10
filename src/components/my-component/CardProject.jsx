import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { projectImageMockup } from "@/lib/Links";
import { Github } from "lucide-react";

export function CardProject({ title, description }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <img src={projectImageMockup} alt="project" />
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <CardDescription>{description}</CardDescription>
        <div className="flex w-full justify-between">
          <a href="#" className="p-3 group rounded-full bg-black shadow-lg hover:bg-white duration-300 transition"><Github className="w-5 text-white group-hover:text-black duration-75" /></a>
        </div>
      </CardFooter>
    </Card>
  );
}
